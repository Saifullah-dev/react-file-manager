import { createContext, useContext, useState } from "react";

const SelectionContext = createContext();

export const SelectionProvider = ({ children }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  return (
    <SelectionContext.Provider value={{ selectedFiles, setSelectedFiles }}>
      {children}
    </SelectionContext.Provider>
  );
};

export const useSelection = () => useContext(SelectionContext);
