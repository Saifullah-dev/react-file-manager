import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { FileItem, ExtendedFileItem } from "../types/File";
import { OnError } from "../types/FileManagerFunctions";

interface FilesContextType {
  files: ExtendedFileItem[],
  setFiles: (files : ExtendedFileItem[]) => void;
  getChildren: (file: ExtendedFileItem) => ExtendedFileItem[];
  onError: OnError;
}

interface FilesProviderProps {
  children: ReactNode;
  filesData: ExtendedFileItem[];
  onError: OnError;
}

const FilesContext = createContext<FilesContextType | undefined>(undefined);

export const FilesProvider = ({ children, filesData, onError } : FilesProviderProps) => {
  const [files, setFiles] = useState<ExtendedFileItem[]>([]);

  useEffect(() => {
    setFiles(filesData);
  }, [filesData]);

  const getChildren = (file : FileItem) => {
    if (!file.isDirectory) return [];

    return files.filter((child) => child.path === `${file.path}/${child.name}`);
  };

  return (
    <FilesContext.Provider value={{ files, setFiles, getChildren, onError }}>
      {children}
    </FilesContext.Provider>
  );
};

export const useFiles = () => {
  const context = useContext(FilesContext);
  
  if (context === undefined) {
    throw new Error("useFiles must be used within a FilesContext");
  }

  return context;
}
