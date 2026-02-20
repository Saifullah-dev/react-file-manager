import { useState, useCallback, createContext, useContext } from "react";

const AnnouncerContext = createContext(() => {});

export const AnnouncerProvider = ({ children }) => {
  const [message, setMessage] = useState("");

  const announce = useCallback((text) => {
    setMessage("");
    // Force re-render by clearing then setting
    requestAnimationFrame(() => setMessage(text));
  }, []);

  return (
    <AnnouncerContext.Provider value={announce}>
      {children}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
      >
        {message}
      </div>
    </AnnouncerContext.Provider>
  );
};

export const useAnnounce = () => useContext(AnnouncerContext);
