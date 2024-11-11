import { useEffect, useRef, useState } from "react";
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
import { PiFilesFill } from "react-icons/pi";

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
  targetDropZoneFolder,
  setTargetDropZoneFolder,
}) => {
  const [fileSelected, setFileSelected] = useState(false);
  const [lastClickTime, setLastClickTime] = useState(0);
  const [checkboxClassName, setCheckboxClassName] = useState("hidden");
  const [dropZoneClass, setDropZoneClass] = useState("");

  const { activeLayout } = useLayout();
  const iconSize = activeLayout === "grid" ? 48 : 20;
  const fileIcons = useFileIcons(iconSize);
  const { setCurrentPath, currentPathFiles } = useFileNavigation();
  const { setSelectedFiles } = useSelection();
  const { clipBoard } = useClipBoard();
  const dragIconRef = useRef(null);

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

  const handleDragStart = (e) => {
    // Set drag image here...
    e.dataTransfer.setDragImage(dragIconRef.current, 10, 10);
  };

  const handleDragEnd = () => {};

  const handleDragEnter = (e) => {
    e.preventDefault();
    if (fileSelected || !file.isDirectory) {
    } else {
      setTargetDropZoneFolder(file);
      setDropZoneClass("file-drop-zone");
    }
  };

  const handleDragLeave = (e) => {
    // To stay in dragging state for the child elements of the file container
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setTargetDropZoneFolder((prev) => (prev ? null : prev));
      setDropZoneClass((prev) => (prev ? "" : prev));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setFileSelected(selectedFileIndexes.includes(index));
    setCheckboxClassName(selectedFileIndexes.includes(index) ? "visible" : "hidden");
  }, [selectedFileIndexes]);

  return (
    <>
      <div
        className={`file-item-container ${dropZoneClass} ${
          fileSelected || !!file.isEditing ? "file-selected" : ""
        } ${isFileMoving ? "file-moving" : ""}`}
        title={file.name}
        onClick={handleFileSelection}
        onKeyDown={handleOnKeyDown}
        onContextMenu={handleItemContextMenu}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        tabIndex={0}
        draggable={fileSelected}
        onDragStart={handleDragStart}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
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
              {fileIcons[file.name?.split(".").pop()?.toLowerCase()] ?? (
                <FaRegFile size={iconSize} />
              )}
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

      <div ref={dragIconRef} style={{ display: "none" }}>
        <PiFilesFill />
      </div>
    </>
  );
};

export default FileItem;

// Drag & Drop Files to move
// There can be 2 types of d&d situations
// 1. Single file/folder move
// 2. Multiple files/folders move
// We're gonna need to show 2 types of images based on the situation
// For Single, we'll show exactly that file/folder image without the name.
// For Multiple, we'll show a stacked image for multiple files and add a counter on top of it.
// And when dragged over a folder, we'll show toolip "Move to FolderName".
// For dragging over a file case, we'll not show hover (Dragenter) for it.
// That is it for the UI.

// On drag start from any of the selected files
// We'll set Drag Image based on the no. of selected files
// For the target i.e. Folders only, when drag enter event fires
// We'll set it's hover class to be true and add it to the target drop state
// On dragend we'll see if the source was dropped over a target by checking target state
// If yes, then we'll trigger onPaste callback with selectedFiles and destination folder
// If no, then we'll simply do nothing
