import { createContext, useContext, useState } from "react";

const ClipBoardContext = createContext();

export const ClipBoardProvider = ({ children }) => {
  const [clipBoard, setClipBoard] = useState(null);

  console.log(clipBoard, "clipBoard");

  return (
    <ClipBoardContext.Provider value={{ clipBoard, setClipBoard }}>
      {children}
    </ClipBoardContext.Provider>
  );
};

export const useClipBoard = () => useContext(ClipBoardContext);
