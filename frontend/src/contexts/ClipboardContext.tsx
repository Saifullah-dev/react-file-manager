import { createContext, ReactNode, useContext, useState } from "react";
import { useSelection } from "./SelectionContext";
import { OnPaste, OnCut, OnCopy } from "../types/FileManagerFunctions";
import { File } from "../types/File";

export interface ClipBoardContextType {
  clipBoard: ClipBoard | null;
  setClipBoard: (clipboard : ClipBoard | null) => void;
  handleCutCopy: (isMoving: boolean) => void;
  handlePasting: (destinationFolder: File) => void;
}

export interface ClipBoardProviderProps {
  children: ReactNode;
  onPaste?: OnPaste;
  onCut?: OnCut;
  onCopy?: OnCopy;
}

interface ClipBoard {
  files: File[];
  isMoving: boolean;
}

const ClipBoardContext = createContext<ClipBoardContextType | undefined>(undefined);

export const ClipBoardProvider = ({ children, onPaste, onCut, onCopy } : ClipBoardProviderProps) => {
  const [clipBoard, setClipBoard] = useState<ClipBoard | null>(null);
  const selectionContext = useSelection();
  const selectedFiles = selectionContext?.selectedFiles; 
  const setSelectedFiles = selectionContext?.setSelectedFiles;

  const handleCutCopy = (isMoving: boolean) => {
    setClipBoard({
      files: selectedFiles,
      isMoving: isMoving,
    });

    if (isMoving) {
      onCut?.(selectedFiles ?? []);
    } else {
      onCopy?.(selectedFiles ?? []);
    }
  };

  // Todo: Show error if destination folder already has file(s) with the same name
  const handlePasting = (destinationFolder : File) => {
    if (destinationFolder && !destinationFolder.isDirectory) return;

    const copiedFiles = clipBoard?.files;
    const operationType = clipBoard?.isMoving ? "move" : "copy";

    onPaste?.(copiedFiles ?? [], destinationFolder, operationType);

    clipBoard?.isMoving && setClipBoard(null);
    
    setSelectedFiles?.([]);
  };

  return (
    <ClipBoardContext.Provider value={{ clipBoard, setClipBoard, handleCutCopy, handlePasting }}>
      {children}
    </ClipBoardContext.Provider>
  );
};

export const useClipBoard = () => {
  const context = useContext(ClipBoardContext);
  
  if (context === undefined) {
    throw new Error("useClipBoard must be used within a ClipBoardProvider");
  }
  
  return context;
} 
