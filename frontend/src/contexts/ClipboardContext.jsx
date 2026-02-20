import { createContext, useContext, useState } from "react";
import { useSelection } from "./SelectionContext";
import { useUndoRedo } from "./UndoRedoContext";
import { validateApiCallback } from "../utils/validateApiCallback";

const ClipBoardContext = createContext();

export const ClipBoardProvider = ({ children, onPaste, onCut, onCopy }) => {
  const [clipBoard, setClipBoard] = useState(null);
  const { selectedFiles, setSelectedFiles } = useSelection();
  const { pushAction } = useUndoRedo();

  const handleCutCopy = (isMoving) => {
    setClipBoard({
      files: selectedFiles,
      isMoving: isMoving,
    });

    if (isMoving) {
      !!onCut && onCut(selectedFiles);
    } else {
      !!onCopy && onCopy(selectedFiles);
    }
  };

  // Todo: Show error if destination folder already has file(s) with the same name
  const handlePasting = (destinationFolder) => {
    if (destinationFolder && !destinationFolder.isDirectory) return;

    const copiedFiles = clipBoard.files;
    const operationType = clipBoard.isMoving ? "move" : "copy";

    validateApiCallback(onPaste, "onPaste", copiedFiles, destinationFolder, operationType);

    pushAction({
      type: clipBoard.isMoving ? "move" : "copy",
      data: { files: copiedFiles, destination: destinationFolder },
    });

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
