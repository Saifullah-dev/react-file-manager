export interface UploadEntry {
  file: File;
  // Path relative to the upload destination, including the file name. e.g. "Photos/2024/b.jpg"
  relativePath: string;
}

export interface CollectedUpload {
  files: UploadEntry[];
  // Relative paths of every folder found, including empty ones. e.g. ["Photos", "Photos/2024"]
  folders: string[];
}

// OS metadata files that should never be uploaded as part of a folder
const ignoredFileNames = new Set([".DS_Store", "Thumbs.db", "desktop.ini"]);

const isIgnored = (name: string) => ignoredFileNames.has(name);

// Files from <input type="file">. Folder picks carry their path in `webkitRelativePath`.
export const collectFromFileList = (fileList: FileList | File[]): CollectedUpload => {
  const files: UploadEntry[] = [];
  const folders = new Set<string>();

  Array.from(fileList).forEach((file) => {
    if (isIgnored(file.name)) return;

    const relativePath = file.webkitRelativePath || file.name;
    files.push({ file, relativePath });

    const segments = relativePath.split("/").slice(0, -1);
    segments.forEach((_, i) => folders.add(segments.slice(0, i + 1).join("/")));
  });

  return { files, folders: Array.from(folders) };
};

const readFile = (entry: FileSystemFileEntry) =>
  new Promise<File>((resolve, reject) => entry.file(resolve, reject));

// readEntries() returns results in batches (100 in Chrome), so keep reading until it returns none
const readAllEntries = async (directory: FileSystemDirectoryEntry) => {
  const reader = directory.createReader();
  const entries: FileSystemEntry[] = [];
  let batch: FileSystemEntry[];

  do {
    batch = await new Promise<FileSystemEntry[]>((resolve, reject) =>
      reader.readEntries(resolve, reject)
    );
    entries.push(...batch);
  } while (batch.length > 0);

  return entries;
};

const walkEntry = async (entry: FileSystemEntry, parentPath: string, result: CollectedUpload) => {
  const relativePath = parentPath ? `${parentPath}/${entry.name}` : entry.name;

  if (entry.isFile) {
    if (isIgnored(entry.name)) return;
    const file = await readFile(entry as FileSystemFileEntry);
    result.files.push({ file, relativePath });
    return;
  }

  if (entry.isDirectory) {
    result.folders.push(relativePath);
    const children = await readAllEntries(entry as FileSystemDirectoryEntry);
    for (const child of children) {
      await walkEntry(child, relativePath, result);
    }
  }
};

export interface DataTransferUpload extends CollectedUpload {
  // Names of dropped folders that were left out because `includeFolders` was false
  skippedFolders: string[];
}

// Files and folders dropped onto the page. Folders are walked recursively.
export const collectFromDataTransfer = async (
  dataTransfer: DataTransfer,
  { includeFolders = true }: { includeFolders?: boolean } = {}
): Promise<DataTransferUpload> => {
  // Entries must be read synchronously; the DataTransfer is emptied once the drop event returns
  const items = Array.from(dataTransfer.items ?? []).filter((item) => item.kind === "file");
  const entries = items.map((item) => item.webkitGetAsEntry?.() ?? null);

  if (entries.length === 0 || entries.some((entry) => entry === null)) {
    return { ...collectFromFileList(dataTransfer.files), skippedFolders: [] };
  }

  const result: DataTransferUpload = { files: [], folders: [], skippedFolders: [] };
  for (const entry of entries) {
    if (entry!.isDirectory && !includeFolders) {
      result.skippedFolders.push(entry!.name);
      continue;
    }
    await walkEntry(entry!, "", result);
  }
  return result;
};
