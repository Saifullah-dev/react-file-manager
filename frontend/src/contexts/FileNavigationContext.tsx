import { createContext, ReactNode, useContext, useEffect, useRef, useState } from "react";
import { useFiles } from "./FilesContext";
import sortFiles from "../utils/sortFiles";
import { File } from "../types/File";
import { SortConfiguration } from "../types/SortConfiguration";
import { OnFolderChange } from "../types/FileManagerFunctions";

export interface FileNavigationContextType {
  currentPath?: string;
  setCurrentPath?: (path: string) => void;
  currentFolder?: File;
  setCurrentFolder: (file : File | undefined) => void;
  currentPathFiles: File[];
  setCurrentPathFiles: (files: File[]) => void;
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
  const fileContext = useFiles();
  const files = fileContext?.files;
  const isMountRef = useRef(false);
  const [currentPath, setCurrentPath] = useState<string>("");
  const [currentFolder, setCurrentFolder] = useState<File | undefined>(undefined);
  const [currentPathFiles, setCurrentPathFiles] = useState<File[]>([]);
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

export const useFileNavigation = () => useContext(FileNavigationContext);
