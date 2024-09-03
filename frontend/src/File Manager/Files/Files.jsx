import { useEffect, useState } from "react";
import FileItem from "./FileItem";
import { duplicateNameHandler } from "../../utils/duplicateNameHandler";

const Files = ({
  currentPathFiles,
  setCurrentPathFiles,
  setCurrentPath,
  isItemSelection,
  setIsItemSelection,
  setSelectedFile,
  currentPath,
  clipBoard,
  setClipBoard,
  handlePaste,
  files,
  triggerAction,
  currentFolder,
  handleCreateFolder,
}) => {
  const [selectedFileIndex, setSelectedFileIndex] = useState(null);

  useEffect(() => {
    setSelectedFileIndex(null);
    setIsItemSelection(false);
    setSelectedFile(null);
  }, [currentPath]);

  const handleFolderCreating = () => {
    setCurrentPathFiles((prev) => {
      return [
        ...prev,
        {
          name: duplicateNameHandler("New Folder", true, prev),
          isDirectory: true,
          path: currentPath,
          isEditing: true,
          key: new Date().valueOf(),
        },
      ];
    });
  };

  useEffect(() => {
    if (triggerAction.isActive) {
      switch (triggerAction.actionType) {
        case "createFolder":
          handleFolderCreating();
          break;
      }
    }
  }, [triggerAction.isActive]);

  return (
    <div
      className="files"
      onClick={(e) => {
        setSelectedFileIndex(null);
        setIsItemSelection(false);
        setSelectedFile(null);
      }}
    >
      {currentPathFiles?.length > 0 ? (
        <>
          {currentPathFiles.map((file, index) => (
            <FileItem
              key={index}
              file={file}
              index={index}
              selectedFileIndex={selectedFileIndex}
              setSelectedFileIndex={setSelectedFileIndex}
              setCurrentPath={setCurrentPath}
              isItemSelection={isItemSelection}
              setIsItemSelection={setIsItemSelection}
              setSelectedFile={setSelectedFile}
              currentPath={currentPath}
              clipBoard={clipBoard}
              setClipBoard={setClipBoard}
              handlePaste={handlePaste}
              files={files}
              triggerAction={triggerAction}
              currentPathFiles={currentPathFiles}
              setCurrentPathFiles={setCurrentPathFiles}
              currentFolder={currentFolder}
              handleCreateFolder={handleCreateFolder}
            />
          ))}
        </>
      ) : (
        <div className="empty-folder">This folder is empty.</div>
      )}
    </div>
  );
};

export default Files;
