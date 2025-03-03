import { createContext, useContext, useState } from "react";
import { useSelection } from "./SelectionContext";
import { validateApiCallback } from "../utils/validateApiCallback";
import { getActionByKey } from "../utils/getActionByKey";

const ClipBoardContext = createContext();

export const ClipBoardProvider = ({ children, actions }) => {
  const [clipBoard, setClipBoard] = useState(null);
  const { selectedFiles, setSelectedFiles } = useSelection();

  const handleCutCopy = (isMoving) => {
    setClipBoard({
      files: selectedFiles,
      isMoving: isMoving,
    });

    if (isMoving) {
      const onCut = getActionByKey(actions, "cut").onClick;
      !!onCut && onCut(selectedFiles);
    } else {
      const onCopy = getActionByKey(actions, "copy").onClick;
      !!onCopy && onCopy(selectedFiles);
    }
  };

  // Todo: Show error if destination folder already has file(s) with the same name
  const handlePasting = (destinationFolder) => {
    if (destinationFolder && !destinationFolder.isDirectory) return;

    const copiedFiles = clipBoard.files;
    const operationType = clipBoard.isMoving ? "move" : "copy";
    const onPaste = getActionByKey(actions, "paste").onClick;

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
