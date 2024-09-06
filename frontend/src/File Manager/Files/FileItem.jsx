import { useEffect, useState } from "react";
import { FaRegFile, FaRegFolderOpen, FaRegPaste } from "react-icons/fa6";
import { PiFolderOpen } from "react-icons/pi";
import { MdOutlineDelete } from "react-icons/md";
import ContextMenu from "../../components/Context Menu/ContextMenu";
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";
import { BiRename } from "react-icons/bi";
import { BsCopy, BsScissors } from "react-icons/bs";
import { createFolderTree } from "../../utils/createFolderTree";
import { useFileIcons } from "../../hooks/useFileIcons";
import CreateFolderAction from "../Actions/CreateFolder.action";
import RenameAction from "../Actions/Rename.action";
import { getDataSize } from "../../utils/getDataSize";
import { formatDate } from "../../utils/formatDate";

const FileItem = ({
  activeLayout,
  filesViewRef,
  file,
  index,
  selectedFileIndex,
  setSelectedFileIndex,
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
  currentPathFiles,
  setCurrentPathFiles,
  handleRename,
}) => {
  const iconSize = activeLayout === "grid" ? 48 : 20;
  const fileIcons = useFileIcons(iconSize);

  const [visible, setVisible] = useState(false);
  const [fileSelected, setFileSelected] = useState(false);
  const [lastClickTime, setLastClickTime] = useState(0);
  const [showFilePreview, setShowFilePreview] = useState(false);
  const isFileMoving =
    clipBoard?.isMoving &&
    clipBoard.files.find((f) => f.name === file.name && f.path === file.path);

  const contextMenuRef = useDetectOutsideClick(() => {
    setVisible(false);
  });

  const handleCutCopy = (e, isMoving) => {
    e.stopPropagation();
    setClipBoard({
      files: [{ ...createFolderTree(file, files) }],
      isMoving: isMoving,
    });
    setVisible(false);
  };

  const handleFilePasting = (e) => {
    e.stopPropagation();
    if (clipBoard) {
      const pastePath = file.path;
      const selectedCopiedFile = clipBoard.files[0];
      const copiedFiles = files.filter((f) => {
        const folderToCopy =
          f.path === selectedCopiedFile.path && f.name === selectedCopiedFile.name;
        const folderChildren = f.path.startsWith(
          selectedCopiedFile.path + "/" + selectedCopiedFile.name
        );
        return folderToCopy || folderChildren;
      });

      const destinationFolder = files.find((f) => f.path === pastePath);
      const operationType = clipBoard.isMoving ? "move" : "copy";

      handlePaste(selectedCopiedFile, destinationFolder, operationType);
      clipBoard.isMoving && setClipBoard(null);
      setIsItemSelection(false);
      setSelectedFile(null);
      setVisible(false);
    }
  };

  const handleRenaming = (e) => {
    e.stopPropagation();
    setVisible(false);
    triggerAction.show("rename");
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    setVisible(false);
    triggerAction.show("delete");
  };

  const handleFileAccess = () => {
    setVisible(false);
    if (file.isDirectory) {
      setCurrentPath((prev) => prev + "/" + file.name);
      setSelectedFileIndex(null);
    } else {
      // Display File Image/PDF/Txt etc
      setShowFilePreview(true);
    }
  };

  const handleFileSelection = (e) => {
    e.stopPropagation();
    if (file.isEditing) return;

    setIsItemSelection(true);
    setSelectedFile(file);
    setSelectedFileIndex(index);
    const currentTime = new Date().getTime();
    if (currentTime - lastClickTime < 300) {
      setIsItemSelection(false);
      handleFileAccess();
    }
    setLastClickTime(currentTime);
  };

  const handleOnKeyDown = (e) => {
    e.stopPropagation();
    if (e.key === "Enter") {
      handleFileAccess();
    }
  };

  useEffect(() => {
    setFileSelected(selectedFileIndex === index);
  }, [selectedFileIndex]);

  useEffect(() => {
    selectedFileIndex === index && setFileSelected(isItemSelection);
  }, [isItemSelection]);

  const menuItems = (
    <div className="file-context-menu-list">
      <ul>
        <li onClick={handleFileAccess}>
          {file.isDirectory ? <PiFolderOpen size={20} /> : <FaRegFile size={16} />}
          <span>Open</span>
        </li>
        <li onClick={(e) => handleCutCopy(e, true)}>
          <BsScissors size={19} />
          <span>Cut</span>
        </li>
        <li onClick={(e) => handleCutCopy(e, false)}>
          <BsCopy strokeWidth={0.1} size={17} />
          <span>Copy</span>
        </li>
        {file.isDirectory ? (
          <li onClick={handleFilePasting} className={`${clipBoard ? "" : "disable-paste"}`}>
            <FaRegPaste size={18} />
            <span>Paste</span>
          </li>
        ) : (
          <></>
        )}
        <li onClick={handleRenaming}>
          <BiRename size={19} />
          <span>Rename</span>
        </li>
        <li onClick={handleDelete}>
          <MdOutlineDelete size={19} />
          <span>Delete</span>
        </li>
      </ul>
    </div>
  );

  return (
    <>
      <ContextMenu
        filesViewRef={filesViewRef}
        contextMenuRef={contextMenuRef.ref}
        visible={visible}
        setVisible={setVisible}
        content={menuItems}
      >
        <div
          className={`file-item-container ${
            fileSelected || !!file.isEditing ? "file-selected" : ""
          } ${isFileMoving ? "file-moving" : ""}`}
          title={file.name}
          onClick={handleFileSelection}
          onKeyDown={handleOnKeyDown}
          onContextMenu={(e) => {
            if (currentPathFiles.some((f) => f.isEditing)) {
              e.preventDefault();
              e.stopPropagation();
              return;
            }
            setIsItemSelection(true);
            setSelectedFile(file);
            setSelectedFileIndex(index);
          }}
          tabIndex={0}
        >
          <div className="file-item">
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
              <>
                {triggerAction.actionType === "createFolder" ? (
                  <CreateFolderAction
                    activeLayout={activeLayout}
                    filesViewRef={filesViewRef}
                    file={file}
                    currentFolder={currentFolder}
                    currentPathFiles={currentPathFiles}
                    setCurrentPathFiles={setCurrentPathFiles}
                    handleCreateFolder={handleCreateFolder}
                    triggerAction={triggerAction}
                  />
                ) : (
                  <RenameAction
                    activeLayout={activeLayout}
                    filesViewRef={filesViewRef}
                    file={file}
                    currentPathFiles={currentPathFiles}
                    setCurrentPathFiles={setCurrentPathFiles}
                    handleRename={handleRename}
                    triggerAction={triggerAction}
                  />
                )}
              </>
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
      </ContextMenu>

      {/* <FilePreviewer
        file={file}
        showFilePreview={showFilePreview}
        setShowFilePreview={setShowFilePreview}
        currentPath={currentPath}
        /> */}
    </>
  );
};

export default FileItem;
