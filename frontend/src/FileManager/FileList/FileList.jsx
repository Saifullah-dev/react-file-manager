import { useEffect, useRef, useState } from "react";
import FileItem from "./FileItem";
import { duplicateNameHandler } from "../../utils/duplicateNameHandler";
import { useFileNavigation } from "../../contexts/FileNavigationContext";
import { useSelection } from "../../contexts/SelectionContext";
import { useLayout } from "../../contexts/LayoutContext";
import ContextMenu from "../../components/ContextMenu/ContextMenu";
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";
import { BsCopy, BsFolderPlus, BsGrid, BsScissors } from "react-icons/bs";
import { MdOutlineDelete, MdOutlineFileDownload, MdOutlineFileUpload } from "react-icons/md";
import { FiRefreshCw } from "react-icons/fi";
import "./FileList.scss";
import { PiFolderOpen } from "react-icons/pi";
import { FaRegFile, FaRegPaste } from "react-icons/fa6";
import { BiRename, BiSelectMultiple } from "react-icons/bi";
import { useClipBoard } from "../../contexts/ClipboardContext";
import { validateApiCallback } from "../../utils/validateApiCallback";
import Checkbox from "../../components/Checkbox/Checkbox";

const FileList = ({
  onCreateFolder,
  onRename,
  onFileOpen,
  onRefresh,
  enableFilePreview,
  triggerAction,
}) => {
  const [selectedFileIndexes, setSelectedFileIndexes] = useState([]);
  const [visible, setVisible] = useState(false);
  const [isSelectionCtx, setIsSelectionCtx] = useState(false);
  const [clickPosition, setClickPosition] = useState({ clickX: 0, clickY: 0 });
  const [lastSelectedFile, setLastSelectedFile] = useState(null);
  const [showSelectAll, setShowSelectAll] = useState(false);
  const [allFilesSelected, setAllFilesSelected] = useState(false);

  const { currentPath, setCurrentPath, currentPathFiles, setCurrentPathFiles } =
    useFileNavigation();
  const filesViewRef = useRef(null);
  const { selectedFiles, setSelectedFiles, handleDownload } = useSelection();
  const { clipBoard, setClipBoard, handleCutCopy, handlePasting } = useClipBoard();
  const { activeLayout } = useLayout();
  const contextMenuRef = useDetectOutsideClick(() => setVisible(false));

  const emptySelecCtxItems = [
    {
      title: "View",
      icon: <BsGrid size={18} />,
      onClick: () => {},
    },
    {
      title: "Refresh",
      icon: <FiRefreshCw size={18} />,
      onClick: handleRefresh,
    },
    {
      title: "New folder",
      icon: <BsFolderPlus size={18} />,
      onClick: handleCreateNewFolder,
    },
    {
      title: "Upload",
      icon: <MdOutlineFileUpload size={18} />,
      onClick: handleUpload,
    },
    {
      title: "Select all",
      icon: <BiSelectMultiple size={18} />,
      onClick: handleselectAllFiles,
    },
  ];

  const selecCtxItems = [
    {
      title: "Open",
      icon: lastSelectedFile?.isDirectory ? <PiFolderOpen size={20} /> : <FaRegFile size={16} />,
      onClick: handleFileOpen,
    },
    {
      title: "Cut",
      icon: <BsScissors size={19} />,
      onClick: () => handleMoveOrCopyItems(true),
    },
    {
      title: "Copy",
      icon: <BsCopy strokeWidth={0.1} size={17} />,
      onClick: () => handleMoveOrCopyItems(false),
    },
    {
      title: "Paste",
      icon: <FaRegPaste size={18} />,
      onClick: handleFilePasting,
      className: `${clipBoard ? "" : "disable-paste"}`,
      hidden: !lastSelectedFile?.isDirectory,
    },
    {
      title: "Rename",
      icon: <BiRename size={19} />,
      onClick: handleRenaming,
      hidden: selectedFiles.length > 1,
    },
    {
      title: "Download",
      icon: <MdOutlineFileDownload size={18} />,
      onClick: handleDownloadItems,
      hidden: lastSelectedFile?.isDirectory,
    },
    {
      title: "Delete",
      icon: <MdOutlineDelete size={19} />,
      onClick: handleDelete,
    },
  ];

  function handleFileOpen() {
    if (lastSelectedFile.isDirectory) {
      setCurrentPath(lastSelectedFile.path);
      setSelectedFileIndexes([]);
      setSelectedFiles([]);
    } else {
      enableFilePreview && triggerAction.show("previewFile");
    }
    setVisible(false);
  }

  function handleMoveOrCopyItems(isMoving) {
    handleCutCopy(isMoving);
    setVisible(false);
  }

  function handleFilePasting() {
    handlePasting(lastSelectedFile);
    setVisible(false);
  }

  function handleRenaming() {
    setVisible(false);
    triggerAction.show("rename");
  }

  function handleDownloadItems() {
    handleDownload();
    setVisible(false);
  }

  function handleDelete() {
    setVisible(false);
    triggerAction.show("delete");
  }

  function handleRefresh() {
    setVisible(false);
    validateApiCallback(onRefresh, "onRefresh");
    setClipBoard(null);
  }

  function handleCreateNewFolder() {
    triggerAction.show("createFolder");
    setVisible(false);
  }

  function handleUpload() {
    setVisible(false);
    triggerAction.show("uploadFile");
  }

  function handleselectAllFiles() {
    setSelectedFiles(currentPathFiles);
    setVisible(false);
  }

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
      if (prev[selectedFileIndexes.at(-1)]) {
        prev[selectedFileIndexes.at(-1)].isEditing = true;
      }
      return prev;
    });

    setSelectedFileIndexes([]);
    setSelectedFiles([]);
  };

  const unselectFiles = () => {
    setSelectedFileIndexes([]);
    setSelectedFiles((prev) => (prev.length > 0 ? [] : prev));
  };

  const handleContextMenu = (e, isSelection) => {
    e.preventDefault();
    setClickPosition({ clickX: e.clientX, clickY: e.clientY });
    setIsSelectionCtx(isSelection);
    !isSelection && unselectFiles();
    setVisible(true);
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

  useEffect(() => {
    setSelectedFileIndexes([]);
    setSelectedFiles([]);
  }, [currentPath]);

  useEffect(() => {
    if (selectedFiles.length > 0) {
      setSelectedFileIndexes(() => {
        return selectedFiles.map((selectedFile) => {
          return currentPathFiles.findIndex((f) => f.path === selectedFile.path);
        });
      });
    } else {
      setSelectedFileIndexes([]);
    }
  }, [selectedFiles, currentPathFiles]);

  useEffect(() => {
    if (allFilesSelected) {
      setSelectedFiles(currentPathFiles);
    } else {
      unselectFiles();
    }
  }, [allFilesSelected]);

  return (
    <div
      ref={filesViewRef}
      className={`files ${activeLayout}`}
      onContextMenu={(e) => handleContextMenu(e, false)}
      onClick={unselectFiles}
    >
      {activeLayout === "list" && (
        <div
          className="files-header"
          {...(!allFilesSelected && {
            onMouseOver: () => setShowSelectAll(true),
            onMouseLeave: () => setShowSelectAll(false),
          })}
        >
          <div className="file-select-all">
            {(showSelectAll || allFilesSelected) && (
              <Checkbox
                checked={allFilesSelected}
                onChange={(e) => setAllFilesSelected(e.target.checked)}
              />
            )}
          </div>
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
              onRename={onRename}
              onFileOpen={onFileOpen}
              enableFilePreview={enableFilePreview}
              filesViewRef={filesViewRef}
              selectedFileIndexes={selectedFileIndexes}
              triggerAction={triggerAction}
              handleContextMenu={handleContextMenu}
              setVisible={setVisible}
              setLastSelectedFile={setLastSelectedFile}
            />
          ))}
        </>
      ) : (
        <div className="empty-folder">This folder is empty.</div>
      )}

      <ContextMenu
        filesViewRef={filesViewRef}
        contextMenuRef={contextMenuRef.ref}
        menuItems={isSelectionCtx ? selecCtxItems : emptySelecCtxItems}
        visible={visible}
        setVisible={setVisible}
        clickPosition={clickPosition}
      />
    </div>
  );
};

export default FileList;
