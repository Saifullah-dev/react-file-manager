import { useEffect, useRef, useState } from "react";
import FileItem from "./FileItem";
import { duplicateNameHandler } from "../../utils/duplicateNameHandler";

const Files = ({
  activeLayout,
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
  handleRename,
}) => {
  const [selectedFileIndex, setSelectedFileIndex] = useState(null);
  const filesViewRef = useRef(null);

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

  const handleItemRenaming = () => {
    setCurrentPathFiles((prev) => {
      if (prev[selectedFileIndex]) {
        prev[selectedFileIndex].isEditing = true;
      }
      return prev;
    });

    setIsItemSelection(false);
    setSelectedFileIndex(null);
    setSelectedFile(null);
  };

  useEffect(() => {
    if (triggerAction.isActive) {
      switch (triggerAction.actionType) {
        case "createFolder":
          handleFolderCreating();
          break;
        case "rename":
          handleItemRenaming();
          break;
      }
    }
  }, [triggerAction.isActive]);

  return (
    <div
      ref={filesViewRef}
      className={`files ${activeLayout}`}
      onClick={(e) => {
        setSelectedFileIndex(null);
        setIsItemSelection(false);
        setSelectedFile(null);
      }}
    >
      {activeLayout === "list" && (
        <div className="files-header">
          <div className="file-name">Name</div>
          <div className="file-date">Modified</div>
          <div className="file-size">Size</div>
        </div>
      )}
      {currentPathFiles?.length > 0 ? (
        <>
          {currentPathFiles.map((file, index) => (
            <FileItem
              activeLayout={activeLayout}
              filesViewRef={filesViewRef}
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
              handleRename={handleRename}
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
