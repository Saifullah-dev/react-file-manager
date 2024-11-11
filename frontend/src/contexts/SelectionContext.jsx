import { createContext, useContext, useState } from "react";
import { validateApiCallback } from "../utils/validateApiCallback";

const SelectionContext = createContext();

export const SelectionProvider = ({ children, onDownload }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

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
