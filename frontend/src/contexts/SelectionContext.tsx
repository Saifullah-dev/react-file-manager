import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { File } from "../types/File";
import { OnDownload, OnSelect, OnSelectionChange } from "../types/FileManagerFunctions";

interface SelectionContextType {
  selectedFiles: File[];
  setSelectedFiles: (files: File[]) => void;
  handleDownload: () => void;
}

interface SelectionProviderProps {
  children: ReactNode;
  onDownload?: OnDownload;
  onSelect?: OnSelect;
  onSelectionChange?: OnSelectionChange;
}

const SelectionContext = createContext<SelectionContextType | undefined>(undefined);

export const SelectionProvider = ({ children, onDownload, onSelect, onSelectionChange } : SelectionProviderProps) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  useEffect(() => {
    onSelect?.(selectedFiles);
    onSelectionChange?.(selectedFiles);
  }, [selectedFiles]);

  const handleDownload = () => {
    onDownload?.(selectedFiles);
  };

  return (
    <SelectionContext.Provider value={{ selectedFiles, setSelectedFiles, handleDownload }}>
      {children}
    </SelectionContext.Provider>
  );
};

export const useSelection = () => useContext(SelectionContext);
