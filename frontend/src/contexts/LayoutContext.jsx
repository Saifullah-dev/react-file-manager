import { createContext, useContext, useState } from "react";

const LayoutContext = createContext();

export const LayoutProvider = ({ children, layout }) => {
  const [activeLayout, setActiveLayout] = useState(() => validateLayout(layout));

  function validateLayout(layout) {
    const acceptedValue = ["list", "grid"];
    return acceptedValue.includes(layout) ? layout : "grid";
  }

  return (
    <LayoutContext.Provider value={{ activeLayout, setActiveLayout }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => useContext(LayoutContext);
