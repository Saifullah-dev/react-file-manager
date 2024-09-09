import { createContext, useContext, useEffect, useState } from "react";

const SelectionContext = createContext();

export const SelectionProvider = ({ children }) => {
  const [isItemSelection, setIsItemSelection] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null); // This will be selectedFiles as an array for multiple selection in future

  useEffect(() => {
    setIsItemSelection(!!selectedFile);
  }, [selectedFile]);

  return (
    <SelectionContext.Provider
      value={{ isItemSelection, setIsItemSelection, selectedFile, setSelectedFile }}
    >
      {children}
    </SelectionContext.Provider>
  );
};

export const useSelection = () => useContext(SelectionContext);
