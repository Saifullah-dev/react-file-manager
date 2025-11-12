import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { File } from "../types/File";
import { OnDownload, OnSelect, OnSelectionChange } from "../types/FileManagerFunctions";

interface SelectionContextType {
  selectedFiles: File[];
  setSelectedFiles: Dispatch<SetStateAction<File[]>>;
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

export const useSelection = () => {
  const context = useContext(SelectionContext);

  if (context === undefined) {
    throw new Error("useSelection must be used within a SelectionContext");
  }

  return context;
} 
