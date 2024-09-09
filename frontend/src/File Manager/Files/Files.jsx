import { useEffect, useRef, useState } from "react";
import FileItem from "./FileItem";
import { duplicateNameHandler } from "../../utils/duplicateNameHandler";
import "./Files.scss";
import { useFileNavigation } from "../../contexts/FileNavigationContext";
import { useSelection } from "../../contexts/SelectionContext";
import { useLayout } from "../../contexts/LayoutContext";

const Files = ({ onCreateFolder, onPaste, onRename, triggerAction }) => {
  const [selectedFileIndex, setSelectedFileIndex] = useState(null);
  const { currentPath, currentPathFiles, setCurrentPathFiles } = useFileNavigation();
  const filesViewRef = useRef(null);
  const { setSelectedFile } = useSelection();
  const { activeLayout } = useLayout();

  useEffect(() => {
    setSelectedFileIndex(null);
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
              key={index}
              index={index}
              file={file}
              onCreateFolder={onCreateFolder}
              onPaste={onPaste}
              onRename={onRename}
              filesViewRef={filesViewRef}
              selectedFileIndex={selectedFileIndex}
              setSelectedFileIndex={setSelectedFileIndex}
              triggerAction={triggerAction}
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
