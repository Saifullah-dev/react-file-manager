import { useEffect, useState } from "react";
import { FaRegFile, FaRegFolderOpen } from "react-icons/fa6";
import { useFileIcons } from "../../hooks/useFileIcons";
import CreateFolderAction from "../Actions/CreateFolder/CreateFolder.action";
import RenameAction from "../Actions/Rename/Rename.action";
import { getDataSize } from "../../utils/getDataSize";
import { formatDate } from "../../utils/formatDate";
import { useFileNavigation } from "../../contexts/FileNavigationContext";
import { useSelection } from "../../contexts/SelectionContext";
import { useClipBoard } from "../../contexts/ClipboardContext";
import { useLayout } from "../../contexts/LayoutContext";
import Checkbox from "../../components/Checkbox/Checkbox";

const FileItem = ({
  index,
  file,
  onCreateFolder,
  onRename,
  enableFilePreview,
  onFileOpen,
  filesViewRef,
  selectedFileIndexes,
  triggerAction,
  handleContextMenu,
  setLastSelectedFile,
}) => {
  const [fileSelected, setFileSelected] = useState(false);
  const [lastClickTime, setLastClickTime] = useState(0);
  const [checkboxClassName, setCheckboxClassName] = useState("hidden");

  const { activeLayout } = useLayout();
  const iconSize = activeLayout === "grid" ? 48 : 20;
  const fileIcons = useFileIcons(iconSize);
  const { setCurrentPath, currentPathFiles } = useFileNavigation();
  const { setSelectedFiles } = useSelection();
  const { clipBoard } = useClipBoard();

  const isFileMoving =
    clipBoard?.isMoving &&
    clipBoard.files.find((f) => f.name === file.name && f.path === file.path);

  const handleFileAccess = () => {
    onFileOpen(file);
    if (file.isDirectory) {
      setCurrentPath(file.path);
      setSelectedFiles([]);
    } else {
      enableFilePreview && triggerAction.show("previewFile");
    }
  };

  const handleFileRangeSelection = (shiftKey, ctrlKey) => {
    if (selectedFileIndexes.length > 0 && shiftKey) {
      let reverseSelection = false;
      let startRange = selectedFileIndexes[0];
      let endRange = index;

      // Reverse Selection
      if (startRange >= endRange) {
        const temp = startRange;
        startRange = endRange;
        endRange = temp;
        reverseSelection = true;
      }

      const filesRange = currentPathFiles.slice(startRange, endRange + 1);
      setSelectedFiles(reverseSelection ? filesRange.reverse() : filesRange);
    } else if (selectedFileIndexes.length > 0 && ctrlKey) {
      // Remove file from selected files if it already exists on CTRL + Click, other push it in selectedFiles
      setSelectedFiles((prev) => {
        const filteredFiles = prev.filter((f) => f.path !== file.path);
        if (prev.length === filteredFiles.length) {
          return [...prev, file];
        }
        return filteredFiles;
      });
    } else {
      setSelectedFiles([file]);
    }
  };

  const handleFileSelection = (e) => {
    e.stopPropagation();
    if (file.isEditing) return;

    handleFileRangeSelection(e.shiftKey, e.ctrlKey);

    const currentTime = new Date().getTime();
    if (currentTime - lastClickTime < 300) {
      handleFileAccess();
      return;
    }
    setLastClickTime(currentTime);
  };

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      e.stopPropagation();
      setSelectedFiles([file]);
      handleFileAccess();
    }
  };

  const handleItemContextMenu = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (file.isEditing) return;

    if (!fileSelected) {
      setSelectedFiles([file]);
    }

    setLastSelectedFile(file);
    handleContextMenu(e, true);
  };

  // Selection Checkbox Functions
  const handleMouseOver = () => {
    setCheckboxClassName("visible");
  };

  const handleMouseLeave = () => {
    !fileSelected && setCheckboxClassName("hidden");
  };

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setSelectedFiles((prev) => [...prev, file]);
    } else {
      setSelectedFiles((prev) => prev.filter((f) => f.name !== file.name && f.path !== file.path));
    }

    setFileSelected(e.target.checked);
  };
  //

  useEffect(() => {
    setFileSelected(selectedFileIndexes.includes(index));
    setCheckboxClassName(selectedFileIndexes.includes(index) ? "visible" : "hidden");
  }, [selectedFileIndexes]);

  return (
    <div
      className={`file-item-container ${fileSelected || !!file.isEditing ? "file-selected" : ""} ${
        isFileMoving ? "file-moving" : ""
      }`}
      title={file.name}
      onClick={handleFileSelection}
      onKeyDown={handleOnKeyDown}
      onContextMenu={handleItemContextMenu}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
    >
      <div className="file-item">
        {!file.isEditing && (
          <Checkbox
            name={file.name}
            id={file.name}
            checked={fileSelected}
            className={`selection-checkbox ${checkboxClassName}`}
            onChange={handleCheckboxChange}
            onClick={(e) => e.stopPropagation()}
          />
        )}
        {file.isDirectory ? (
          <FaRegFolderOpen size={iconSize} />
        ) : (
          <>
            {fileIcons[file.name?.split(".").pop()?.toLowerCase()] ?? <FaRegFile size={iconSize} />}
          </>
        )}

        {file.isEditing ? (
          <div className={`rename-file-container ${activeLayout}`}>
            {triggerAction.actionType === "createFolder" ? (
              <CreateFolderAction
                filesViewRef={filesViewRef}
                file={file}
                onCreateFolder={onCreateFolder}
                triggerAction={triggerAction}
              />
            ) : (
              <RenameAction
                filesViewRef={filesViewRef}
                file={file}
                onRename={onRename}
                triggerAction={triggerAction}
              />
            )}
          </div>
        ) : (
          <span className="text-truncate file-name">{file.name}</span>
        )}
      </div>

      {activeLayout === "list" && (
        <>
          <div className="modified-date">{formatDate(file.updatedAt)}</div>
          <div className="size">{file?.size > 0 ? getDataSize(file?.size) : ""}</div>
        </>
      )}
    </div>
  );
};

export default FileItem;

// CTRL Shortcut
// On clicking a file, we'll check if CTRL key was pressed at the time of clicking.
// Once confirmed, we'll check if the clicked file is already present in the selection context -> We'll remove it from there.
// If it's not present in the selection context, we'll push it into the selection context.
//

// Shift Shortcut Algo
// On clicking a file, if shift key is pressed -> we'll select in range of (lastSelectedFile -- currentClickedFile)
//

// Note: If shift key or ctrl key is pressed, clicking outside should not deselect files
