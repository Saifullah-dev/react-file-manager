import { createContext, useContext, useState } from "react";

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [activeLayout, setActiveLayout] = useState("grid");

  return (
    <LayoutContext.Provider value={{ activeLayout, setActiveLayout }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => useContext(LayoutContext);
