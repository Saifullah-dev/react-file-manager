import { createContext, useCallback, useContext, useState } from "react";

const DetailsPanelContext = createContext();

export const DetailsPanelProvider = ({ children, defaultOpen = false }) => {
  const [isDetailsPanelOpen, setDetailsPanelOpen] = useState(defaultOpen);

  const toggleDetailsPanel = useCallback(() => {
    setDetailsPanelOpen((prev) => !prev);
  }, []);

  return (
    <DetailsPanelContext.Provider
      value={{ isDetailsPanelOpen, setDetailsPanelOpen, toggleDetailsPanel }}
    >
      {children}
    </DetailsPanelContext.Provider>
  );
};

export const useDetailsPanel = () => useContext(DetailsPanelContext);
