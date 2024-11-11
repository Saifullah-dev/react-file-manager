import { useEffect, useRef, useState } from "react";
import FileItem from "./FileItem";
import { duplicateNameHandler } from "../../utils/duplicateNameHandler";
import { useFileNavigation } from "../../contexts/FileNavigationContext";
import { useSelection } from "../../contexts/SelectionContext";
import { useLayout } from "../../contexts/LayoutContext";
import ContextMenu from "../../components/ContextMenu/ContextMenu";
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";
import { BsCopy, BsFolderPlus, BsScissors } from "react-icons/bs";
import { MdOutlineDelete, MdOutlineFileDownload, MdOutlineFileUpload } from "react-icons/md";
import { FiRefreshCw } from "react-icons/fi";
import "./FileList.scss";
import { PiFolderOpen } from "react-icons/pi";
import { FaRegFile, FaRegPaste } from "react-icons/fa6";
import { BiRename } from "react-icons/bi";
import { useClipBoard } from "../../contexts/ClipboardContext";

const FileList = ({ onCreateFolder, onRename, onFileOpen, enableFilePreview, triggerAction }) => {
  const [selectedFileIndexes, setSelectedFileIndexes] = useState([]);
  const [visible, setVisible] = useState(false);
  const [isSelectionCtx, setIsSelectionCtx] = useState(false);
  const [clickPosition, setClickPosition] = useState({ clickX: 0, clickY: 0 });
  const [lastSelectedFile, setLastSelectedFile] = useState(null);
  const [targetDropZoneFolder, setTargetDropZoneFolder] = useState(null);

  const { currentPath, setCurrentPath, currentPathFiles, setCurrentPathFiles } =
    useFileNavigation();
  const filesViewRef = useRef(null);
  const { selectedFiles, setSelectedFiles, handleDownload } = useSelection();
  const { clipBoard, handleCutCopy, handlePasting } = useClipBoard();
  const { activeLayout } = useLayout();
  const contextMenuRef = useDetectOutsideClick(() => setVisible(false));

  const emptySelecCtxItems = [
    {
      title: "Refresh",
      icon: <FiRefreshCw size={18} />,
      onClick: () => {},
    },
    {
      title: "New Folder",
      icon: <BsFolderPlus size={18} />,
      onClick: () => {},
    },
    {
      title: "Upload",
      icon: <MdOutlineFileUpload size={18} />,
      onClick: () => {},
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

  const handleContextMenu = (e, isSelection) => {
    e.preventDefault();
    setClickPosition({ clickX: e.clientX, clickY: e.clientY });
    setIsSelectionCtx(isSelection);
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

  return (
    <div
      ref={filesViewRef}
      className={`files ${activeLayout}`}
      onContextMenu={(e) => handleContextMenu(e, false)}
      onClick={() => {
        setSelectedFileIndexes([]);
        setSelectedFiles((prev) => (prev.length > 0 ? [] : prev));
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
              onRename={onRename}
              onFileOpen={onFileOpen}
              enableFilePreview={enableFilePreview}
              filesViewRef={filesViewRef}
              selectedFileIndexes={selectedFileIndexes}
              triggerAction={triggerAction}
              handleContextMenu={handleContextMenu}
              setVisible={setVisible}
              setLastSelectedFile={setLastSelectedFile}
              targetDropZoneFolder={targetDropZoneFolder}
              setTargetDropZoneFolder={setTargetDropZoneFolder}
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
