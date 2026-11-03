import { createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState } from "react";
import { useFiles } from "./FilesContext";
import { useFileNavigation } from "./FileNavigationContext";
import { useTranslation } from "./TranslationProvider";
import { useUploadInputs } from "../hooks/useUploadInputs";
import { CollectedUpload, UploadEntry } from "../utils/collectUploadEntries";
import { createLimiter } from "../utils/createLimiter";
import { isFileTypeAccepted } from "../utils/isFileTypeAccepted";
import { getDataSize } from "../utils/getDataSize";
import { FileItem } from "../types/File";
import { FileUploadConfiguration } from "../types/FileUploadConfiguration";
import { OnCreateFolder, OnFileUploaded, OnFileUploading } from "../types/FileManagerFunctions";
import { Permissions } from "../types/Permissions";
import { TriggerAction } from "../types/TriggerAction";

export type UploadStatus =
  | "pending" // Waiting for its folder to be created
  | "queued"
  | "uploading"
  | "completed"
  | "failed"
  | "canceled"
  | "rejected"; // Failed validation, never sent

export interface UploadItemData {
  id: number;
  file: File;
  relativePath: string;
  // Folder path relative to the upload destination, "" for top-level files
  folderPath: string;
  // Folder the upload started from, and its path
  baseFolder?: FileItem;
  basePath: string;
  // Folder the file is uploaded into. Set once that folder exists.
  parentFolder?: FileItem;
  status: UploadStatus;
  progress: number;
  error?: string;
  appendData?: ReturnType<OnFileUploading>;
}

interface UploadContextType {
  items: UploadItemData[];
  isUploading: boolean;
  canUploadFolder: boolean;
  acceptedFileTypes?: string;
  addUploads: (upload: CollectedUpload) => void;
  cancelUploads: (ids: number[]) => void;
  retryUploads: (ids: number[]) => void;
  removeUploads: (ids: number[]) => void;
  openFilePicker: () => void;
  openFolderPicker: () => void;
}

export interface UploadProviderProps {
  children: ReactNode;
  fileUploadConfig?: FileUploadConfiguration;
  onFileUploading?: OnFileUploading;
  onFileUploaded?: OnFileUploaded;
  onCreateFolder?: OnCreateFolder;
  maxFileSize?: number;
  acceptedFileTypes?: string;
  uploadConcurrency: number;
  permissions: Permissions;
  triggerAction: TriggerAction;
}

const activeStatuses: UploadStatus[] = ["pending", "queued", "uploading"];

// How long to wait for a folder created through `onCreateFolder` to show up in `files`
const folderWaitTimeout = 30000;

const getParentPath = (relativePath: string) => relativePath.split("/").slice(0, -1).join("/");
const getName = (relativePath: string) => relativePath.split("/").pop() ?? relativePath;

const isFolderItem = (value: unknown): value is FileItem =>
  !!value && typeof value === "object" && (value as FileItem).isDirectory === true;

const UploadContext = createContext<UploadContextType | undefined>(undefined);

export const UploadProvider = ({
  children,
  fileUploadConfig,
  onFileUploading,
  onFileUploaded,
  onCreateFolder,
  maxFileSize,
  acceptedFileTypes,
  uploadConcurrency,
  permissions,
  triggerAction,
}: UploadProviderProps) => {
  const [items, setItems] = useState<UploadItemData[]>([]);
  const { files, onError } = useFiles();
  const { currentFolder, currentPath } = useFileNavigation();
  const t = useTranslation();

  const itemsRef = useRef(items);
  itemsRef.current = items;
  const filesRef = useRef(files);
  filesRef.current = files;
  // Upload callbacks can change between renders; always use the latest ones
  const callbacksRef = useRef({ fileUploadConfig, onFileUploading, onFileUploaded, onCreateFolder });
  callbacksRef.current = { fileUploadConfig, onFileUploading, onFileUploaded, onCreateFolder };

  const nextIdRef = useRef(1);
  const xhrsRef = useRef(new Map<number, XMLHttpRequest>());
  const folderWaitersRef = useRef(new Map<string, ((folder: FileItem) => void)[]>());
  const limit = Math.max(1, Math.floor(uploadConcurrency) || 1);
  const folderLimiter = useMemo(() => createLimiter(limit), [limit]);

  const canUploadFolder = !!permissions.upload && !!permissions.create && !!onCreateFolder;

  const updateItems = (
    predicate: (item: UploadItemData) => boolean,
    changes: Partial<UploadItemData>
  ) => {
    setItems((prev) => {
      let changed = false;
      const next = prev.map((item) => {
        if (!predicate(item)) return item;
        const isSame = (Object.keys(changes) as (keyof UploadItemData)[]).every(
          (key) => item[key] === changes[key]
        );
        if (isSame) return item;
        changed = true;
        return { ...item, ...changes };
      });
      return changed ? next : prev;
    });
  };

  const updateItem = (id: number, changes: Partial<UploadItemData>) =>
    updateItems((item) => item.id === id, changes);

  // Resolves once a folder at `path` appears in `files`
  const waitForFolder = (path: string) =>
    new Promise<FileItem>((resolve, reject) => {
      const existing = filesRef.current.find((f) => f.isDirectory && f.path === path);
      if (existing) {
        resolve(existing);
        return;
      }

      const waiters = folderWaitersRef.current;
      const onFound = (folder: FileItem) => {
        clearTimeout(timer);
        resolve(folder);
      };
      const timer = setTimeout(() => {
        const remaining = (waiters.get(path) ?? []).filter((waiter) => waiter !== onFound);
        if (remaining.length) waiters.set(path, remaining);
        else waiters.delete(path);
        reject(new Error(`Folder "${path}" was not added to files in time.`));
      }, folderWaitTimeout);

      waiters.set(path, [...(waiters.get(path) ?? []), onFound]);
    });

  useEffect(() => {
    folderWaitersRef.current.forEach((waiters, path) => {
      const folder = files.find((f) => f.isDirectory && f.path === path);
      if (folder) {
        folderWaitersRef.current.delete(path);
        waiters.forEach((resolve) => resolve(folder));
      }
    });
  }, [files]);

  // Returns the folder at `path` if it's already in `files`
  const findExisting = (name: string, path: string) => {
    const existing = filesRef.current.find((f) => f.path === path);
    if (existing && !existing.isDirectory) throw new Error(`A file named "${name}" already exists.`);
    return existing;
  };

  // Returns the folder at `path`, creating it through `onCreateFolder` if it doesn't exist yet
  const ensureFolder = async (name: string, parent: FileItem | undefined, path: string) => {
    const existing = findExisting(name, path);
    if (existing) return existing;

    return folderLimiter(async () => {
      // It may have been added while this was waiting in the queue
      const existing = findExisting(name, path);
      if (existing) return existing;

      const { onCreateFolder } = callbacksRef.current;
      if (!onCreateFolder) throw new Error("onCreateFolder is not provided.");

      const created = await onCreateFolder(name, parent as FileItem);
      if (isFolderItem(created)) return created;
      return waitForFolder(path);
    });
  };

  // Folders resolved or being created, by full path. Shared by every upload so two uploads into
  // the same new folder only create it once. Failed folders are removed so a retry creates them again.
  const folderCacheRef = useRef(new Map<string, Promise<FileItem | undefined>>());

  // Creates folders parent-first. Each folder only waits for its own parent,
  // so sibling folders are created in parallel.
  const createFolderResolver = (baseFolder: FileItem | undefined, basePath: string) => {
    const cache = folderCacheRef.current;

    const resolve = (folderPath: string): Promise<FileItem | undefined> => {
      if (!folderPath) return Promise.resolve(baseFolder);

      const path = `${basePath}/${folderPath}`;
      let folder = cache.get(path);
      if (!folder) {
        folder = resolve(getParentPath(folderPath)).then((parent) =>
          ensureFolder(getName(folderPath), parent, path)
        );
        const entry = folder;
        cache.set(path, entry);
        entry.catch(() => {
          if (cache.get(path) === entry) cache.delete(path);
        });
      }
      return folder;
    };

    return resolve;
  };

  // Queues the files waiting on a folder once it exists, or fails them if it can't be created
  const releaseFolder = (
    resolveFolder: ReturnType<typeof createFolderResolver>,
    basePath: string,
    folderPath: string,
    waitingItems: UploadItemData[]
  ) => {
    const isWaiting = (item: UploadItemData) =>
      item.status === "pending" && item.basePath === basePath && item.folderPath === folderPath;

    resolveFolder(folderPath)
      .then((folder) => updateItems(isWaiting, { status: "queued", parentFolder: folder }))
      .catch((cause) => {
        const error = { type: "upload", message: t("folderCreateFailed"), cause };
        // Items may not be committed to state yet, so report from the list passed in
        const waitingIds = new Set(waitingItems.map((item) => item.id));
        const isCanceled = (id: number) =>
          itemsRef.current.some((item) => item.id === id && item.status === "canceled");
        waitingItems
          .filter((item) => !isCanceled(item.id))
          .forEach((item) => onError(error, item.file));
        updateItems((item) => isWaiting(item) && waitingIds.has(item.id), {
          status: "failed",
          error: error.message,
        });
      });
  };

  const getValidationError = (
    entry: UploadEntry,
    destinationPath: string,
    existingFilePaths: Set<string>
  ) => {
    if (acceptedFileTypes) {
      if (!isFileTypeAccepted(entry.file, acceptedFileTypes)) return t("fileTypeNotAllowed");
    }

    if (existingFilePaths.has(destinationPath.toLowerCase())) return t("fileAlreadyExist");

    const sizeError = maxFileSize && entry.file.size > maxFileSize;
    if (sizeError) return `${t("maxUploadSize")} ${getDataSize(maxFileSize, 0)}.`;

    return undefined;
  };

  const addUploads = ({ files: entries, folders }: CollectedUpload) => {
    const baseFolder = currentFolder;
    const basePath = currentPath ?? "";
    const hasFolders = entries.some((entry) => entry.relativePath.includes("/")) || folders.length > 0;
    if (hasFolders && !canUploadFolder) return;

    // Start a fresh list unless an earlier upload is still running
    const isIdle = !itemsRef.current.some((item) => activeStatuses.includes(item.status));
    // Folders may have been renamed or deleted since the last upload, so look them up again
    if (isIdle) folderCacheRef.current.clear();
    const queuedPaths = new Set(
      (isIdle ? [] : itemsRef.current).map((item) =>
        `${item.basePath}/${item.relativePath}`.toLowerCase()
      )
    );
    const existingFilePaths = new Set(
      filesRef.current.filter((f) => !f.isDirectory).map((f) => f.path.toLowerCase())
    );

    const newItems: UploadItemData[] = [];
    entries.forEach((entry) => {
      const destinationPath = `${basePath}/${entry.relativePath}`;
      if (queuedPaths.has(destinationPath.toLowerCase())) return;
      queuedPaths.add(destinationPath.toLowerCase());

      const folderPath = getParentPath(entry.relativePath);
      const error = getValidationError(entry, destinationPath, existingFilePaths);
      if (error) onError({ type: "upload", message: error }, entry.file);

      newItems.push({
        id: nextIdRef.current++,
        file: entry.file,
        relativePath: entry.relativePath,
        folderPath,
        baseFolder,
        basePath,
        parentFolder: folderPath ? undefined : baseFolder,
        status: error ? "rejected" : folderPath ? "pending" : "queued",
        progress: 0,
        error,
      });
    });

    setItems((prev) => (isIdle ? newItems : [...prev, ...newItems]));

    // Folders that need to exist: those holding files to upload, plus folders that are empty at the source
    const resolveFolder = createFolderResolver(baseFolder, basePath);
    const pendingItems = newItems.filter((item) => item.status === "pending");
    const pendingFolders = new Set(pendingItems.map((item) => item.folderPath));
    const emptyFolders = folders.filter(
      (folder) => !entries.some((entry) => entry.relativePath.startsWith(`${folder}/`))
    );

    pendingFolders.forEach((folderPath) => {
      const waitingItems = pendingItems.filter((item) => item.folderPath === folderPath);
      releaseFolder(resolveFolder, basePath, folderPath, waitingItems);
    });
    emptyFolders.forEach((folderPath) => {
      resolveFolder(folderPath).catch((cause) => {
        const error = { type: "upload", message: t("folderCreateFailed"), cause };
        const folder = { name: getName(folderPath), isDirectory: true, path: `${basePath}/${folderPath}` };
        onError(error, folder);
      });
    });
  };

  const handleUploadError = (item: UploadItemData, xhr: XMLHttpRequest) => {
    const error = {
      type: "upload",
      message: t("uploadFail"),
      response: {
        status: xhr.status,
        statusText: xhr.statusText,
        data: xhr.response,
      },
    };
    updateItem(item.id, { status: "failed", progress: 0, error: error.message });
    onError(error, item.file);
  };

  const startUpload = (item: UploadItemData) => {
    if (xhrsRef.current.has(item.id)) return;

    const { fileUploadConfig, onFileUploading, onFileUploaded } = callbacksRef.current;
    // Called once per file, right before it uploads, so `parentFolder` is the folder it lands in
    const appendData = item.appendData ?? onFileUploading?.(item.file, item.parentFolder as FileItem);

    const xhr = new XMLHttpRequest();
    xhrsRef.current.set(item.id, xhr);
    updateItem(item.id, { status: "uploading", progress: 0, error: undefined, appendData });

    // Ignore events from a request that was canceled or replaced by a retry
    const isCurrent = () => xhrsRef.current.get(item.id) === xhr;

    xhr.upload.onprogress = (event) => {
      if (isCurrent() && event.lengthComputable) {
        updateItem(item.id, { progress: Math.round((event.loaded / event.total) * 100) });
      }
    };

    xhr.onload = () => {
      if (!isCurrent()) return;
      xhrsRef.current.delete(item.id);
      if (xhr.status === 200 || xhr.status === 201) {
        updateItem(item.id, { status: "completed", progress: 100 });
        onFileUploaded?.(xhr.response);
      } else {
        handleUploadError(item, xhr);
      }
    };

    xhr.onerror = () => {
      if (!isCurrent()) return;
      xhrsRef.current.delete(item.id);
      handleUploadError(item, xhr);
    };

    const method = fileUploadConfig?.method || "POST";
    xhr.open(method, fileUploadConfig?.url ?? "", true);
    xhr.withCredentials = fileUploadConfig?.withCredentials || false;
    const headers = fileUploadConfig?.headers;
    for (const key in headers) {
      xhr.setRequestHeader(key, headers[key]);
    }

    const formData = new FormData();
    for (const key in appendData) {
      if (appendData[key]) formData.append(key, appendData[key]);
    }
    formData.append("file", item.file);

    xhr.send(formData);
  };

  // Upload queue: keep up to `limit` uploads running
  useEffect(() => {
    const running = items.filter((item) => item.status === "uploading").length;
    const slots = limit - running;
    if (slots <= 0) return;

    items
      .filter((item) => item.status === "queued" && !xhrsRef.current.has(item.id))
      .slice(0, slots)
      .forEach(startUpload);
  }, [items, limit]);

  // Abort in-flight uploads if the file manager unmounts
  useEffect(() => {
    const xhrs = xhrsRef.current;
    return () => xhrs.forEach((xhr) => xhr.abort());
  }, []);

  const cancelUploads = (ids: number[]) => {
    const idSet = new Set(ids);
    idSet.forEach((id) => {
      const xhr = xhrsRef.current.get(id);
      xhrsRef.current.delete(id);
      xhr?.abort();
    });
    updateItems(
      (item) => idSet.has(item.id) && activeStatuses.includes(item.status),
      { status: "canceled", progress: 0 }
    );
  };

  const retryUploads = (ids: number[]) => {
    const idSet = new Set(ids);
    const retryable = itemsRef.current.filter(
      (item) => idSet.has(item.id) && (item.status === "failed" || item.status === "canceled")
    );
    if (retryable.length === 0) return;

    // Files whose folder was never created need it created again first
    const needsFolder = (item: UploadItemData) => !!item.folderPath && !item.parentFolder;
    const waitingIds = new Set(retryable.filter(needsFolder).map((item) => item.id));
    const readyIds = new Set(retryable.filter((item) => !needsFolder(item)).map((item) => item.id));
    updateItems((item) => readyIds.has(item.id), { status: "queued", error: undefined });
    updateItems((item) => waitingIds.has(item.id), { status: "pending", error: undefined });

    // One resolver per destination, so each missing folder is only created once
    const byBasePath = new Map<string, UploadItemData[]>();
    retryable.filter(needsFolder).forEach((item) => {
      byBasePath.set(item.basePath, [...(byBasePath.get(item.basePath) ?? []), item]);
    });
    byBasePath.forEach((waitingItems, basePath) => {
      const resolveFolder = createFolderResolver(waitingItems[0].baseFolder, basePath);
      new Set(waitingItems.map((item) => item.folderPath)).forEach((folderPath) => {
        const inFolder = waitingItems.filter((item) => item.folderPath === folderPath);
        releaseFolder(resolveFolder, basePath, folderPath, inFolder);
      });
    });
  };

  const removeUploads = (ids: number[]) => {
    const idSet = new Set(ids);
    setItems((prev) => prev.filter((item) => !idSet.has(item.id)));
  };

  // Finished uploads are cleared when the upload dialog closes. Running ones keep going in the background.
  const isUploadDialogOpen = triggerAction.isActive && triggerAction.actionType === "uploadFile";
  useEffect(() => {
    if (!isUploadDialogOpen && !itemsRef.current.some((item) => activeStatuses.includes(item.status))) {
      setItems((prev) => (prev.length ? [] : prev));
    }
  }, [isUploadDialogOpen]);

  const handlePicked = (upload: CollectedUpload) => {
    addUploads(upload);
    triggerAction.show("uploadFile");
  };

  const { openFilePicker, openFolderPicker, inputs } = useUploadInputs(
    handlePicked,
    acceptedFileTypes
  );

  const isUploading = items.some((item) => activeStatuses.includes(item.status));

  return (
    <UploadContext.Provider
      value={{
        items,
        isUploading,
        canUploadFolder,
        acceptedFileTypes,
        addUploads,
        cancelUploads,
        retryUploads,
        removeUploads,
        openFilePicker,
        openFolderPicker,
      }}
    >
      {children}
      {inputs}
    </UploadContext.Provider>
  );
};

export const useUpload = () => {
  const context = useContext(UploadContext);

  if (context === undefined) {
    throw new Error("useUpload must be used within an UploadProvider");
  }

  return context;
};
