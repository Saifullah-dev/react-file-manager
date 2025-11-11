import { createContext, ReactNode, useContext, useState } from "react";
import { Layout } from "../types/Layout";

interface LayoutContextType {
  activeLayout: Layout;
  setActiveLayout: (layout : Layout) => void;
}

interface LayoutProviderProps {
  children: ReactNode;
  layout: Layout;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider = ({ children, layout } : LayoutProviderProps) => {
  const [activeLayout, setActiveLayout] = useState<Layout>(layout);

  return (
    <LayoutContext.Provider value={{ activeLayout, setActiveLayout }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => useContext(LayoutContext);
