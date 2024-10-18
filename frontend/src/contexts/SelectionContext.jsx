import { createContext, useContext, useState } from "react";

const SelectionContext = createContext();

export const SelectionProvider = ({ children, onDownload }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleDownload = () => {
    onDownload(selectedFiles);
  };

  return (
    <SelectionContext.Provider value={{ selectedFiles, setSelectedFiles, handleDownload }}>
      {children}
    </SelectionContext.Provider>
  );
};

export const useSelection = () => useContext(SelectionContext);
