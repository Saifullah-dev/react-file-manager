import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { File } from "../types/File";
import { OnError } from "../types/functions/OnError";

interface FilesContextType {
  files: File[],
  setFiles: (files : File[]) => void;
  getChildren: (file: File) => File[];
  onError: OnError;
}

interface FilesProviderProps {
  children: ReactNode;
  filesData: File[];
  onError: OnError;
}

const FilesContext = createContext<FilesContextType | undefined>(undefined);

export const FilesProvider = ({ children, filesData, onError } : FilesProviderProps) => {
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    setFiles(filesData);
  }, [filesData]);

  const getChildren = (file : File) => {
    if (!file.isDirectory) return [];

    return files.filter((child) => child.path === `${file.path}/${child.name}`);
  };

  return (
    <FilesContext.Provider value={{ files, setFiles, getChildren, onError }}>
      {children}
    </FilesContext.Provider>
  );
};

export const useFiles = () => useContext(FilesContext);
