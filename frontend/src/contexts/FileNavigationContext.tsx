import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useRef, useState } from "react";
import { useFiles } from "./FilesContext";
import sortFiles from "../utils/sortFiles";
import { FileExtended } from "../types/File";
import { SortConfiguration } from "../types/SortConfiguration";
import { OnFolderChange } from "../types/FileManagerFunctions";

export interface FileNavigationContextType {
  currentPath?: string;
  setCurrentPath?: (path: string) => void;
  currentFolder?: FileExtended;
  setCurrentFolder: (file : FileExtended | undefined) => void;
  currentPathFiles: FileExtended[];
  setCurrentPathFiles: Dispatch<SetStateAction<FileExtended[]>>;
  sortConfig: SortConfiguration;
  setSortConfig: (config : SortConfiguration) => void;
  onFolderChange: OnFolderChange;
}

export interface FileNavigationProviderProps {
  children: ReactNode;
  initialPath: string;
  onFolderChange: OnFolderChange;
}

const FileNavigationContext = createContext<FileNavigationContextType | undefined>(undefined);

export const FileNavigationProvider = ({ children, initialPath, onFolderChange } : FileNavigationProviderProps) => {
  const { files } = useFiles();
  const isMountRef = useRef(false);
  const [currentPath, setCurrentPath] = useState<string>("");
  const [currentFolder, setCurrentFolder] = useState<FileExtended | undefined>(undefined);
  const [currentPathFiles, setCurrentPathFiles] = useState<FileExtended[]>([]);
  const [sortConfig, setSortConfig] = useState<SortConfiguration>({ key: "name", direction: "asc" });

  useEffect(() => {
    if (Array.isArray(files) && files.length > 0) {
      setCurrentPathFiles(() => {
        const currPathFiles = files.filter((file) => file.path === `${currentPath}/${file.name}`);
        return sortFiles(currPathFiles, sortConfig.key, sortConfig.direction);
      });

      setCurrentFolder(() => {
        return files.find((file) => file.path === currentPath);
      });
    } else {
      setCurrentPathFiles([]);
      setCurrentFolder(undefined);
    }
  }, [files, currentPath, sortConfig]);

  useEffect(() => {
    if (!isMountRef.current && Array.isArray(files) && files.length > 0) {
      const activePath = files.some((file) => file.isDirectory && file.path === initialPath)
        ? initialPath
        : "";
      setCurrentPath(activePath);
      isMountRef.current = true;
    }
  }, [files]);

  return (
    <FileNavigationContext.Provider
      value={{
        currentPath,
        setCurrentPath,
        currentFolder,
        setCurrentFolder,
        currentPathFiles,
        setCurrentPathFiles,
        sortConfig,
        setSortConfig,
        onFolderChange,
      }}
    >
      {children}
    </FileNavigationContext.Provider>
  );
};

export const useFileNavigation = () => {
  const context = useContext(FileNavigationContext);

  if (context === undefined) {
    throw new Error("useFileNavigation must be used within a FileNavigationContext");
  }

  return context;
}