import { createContext, useContext, useState } from "react";
import { useSelection } from "./SelectionContext";
import { validateApiCallback } from "../utils/validateApiCallback";

const ClipBoardContext = createContext();

export const ClipBoardProvider = ({ children, onPaste }) => {
  const [clipBoard, setClipBoard] = useState(null);
  const { selectedFiles, setSelectedFiles } = useSelection();

  const handleCutCopy = (isMoving) => {
    setClipBoard({
      files: selectedFiles,
      isMoving: isMoving,
    });
  };

  // Todo: Show error if destination folder already has file(s) with the same name
  const handlePasting = (destinationFolder) => {
    if (destinationFolder && !destinationFolder.isDirectory) return;

    const copiedFiles = clipBoard.files;
    const operationType = clipBoard.isMoving ? "move" : "copy";

    validateApiCallback(onPaste, "onPaste", copiedFiles, destinationFolder, operationType);

    clipBoard.isMoving && setClipBoard(null);
    setSelectedFiles([]);
  };

  return (
    <ClipBoardContext.Provider value={{ clipBoard, setClipBoard, handleCutCopy, handlePasting }}>
      {children}
    </ClipBoardContext.Provider>
  );
};

export const useClipBoard = () => useContext(ClipBoardContext);
