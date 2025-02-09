import { createContext, useContext, useEffect, useState } from "react";
import { validateApiCallback } from "../utils/validateApiCallback";

const SelectionContext = createContext();

export const SelectionProvider = ({ children, onDownload, onSelect }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  useEffect(() => {
    if (selectedFiles.length && onSelect) {
      onSelect(selectedFiles);
    }
  }, [selectedFiles]);

  const handleDownload = () => {
    validateApiCallback(onDownload, "onDownload", selectedFiles);
  };

  return (
    <SelectionContext.Provider value={{ selectedFiles, setSelectedFiles, handleDownload }}>
      {children}
    </SelectionContext.Provider>
  );
};

export const useSelection = () => useContext(SelectionContext);
