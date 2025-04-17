import { BiRename, BiSelectMultiple } from "react-icons/bi";
import { BsCopy, BsFolderPlus, BsGrid, BsScissors } from "react-icons/bs";
import { FaListUl, FaRegFile, FaRegPaste } from "react-icons/fa6";
import { FiRefreshCw } from "react-icons/fi";
import { MdOutlineDelete, MdOutlineFileDownload, MdOutlineFileUpload } from "react-icons/md";
import { PiFolderOpen } from "react-icons/pi";
import { useClipBoard } from "../../contexts/ClipboardContext";
import { useEffect, useState } from "react";
import { useSelection } from "../../contexts/SelectionContext";
import { useLayout } from "../../contexts/LayoutContext";
import { useFileNavigation } from "../../contexts/FileNavigationContext";
import { duplicateNameHandler } from "../../utils/duplicateNameHandler";
import { validateApiCallback } from "../../utils/validateApiCallback";

const useFileList = (onRefresh, enableFilePreview, triggerAction, actions) => {
  const [selectedFileIndexes, setSelectedFileIndexes] = useState([]);
  const [visible, setVisible] = useState(false);
  const [isSelectionCtx, setIsSelectionCtx] = useState(false);
  const [clickPosition, setClickPosition] = useState({ clickX: 0, clickY: 0 });
  const [lastSelectedFile, setLastSelectedFile] = useState(null);

  const { clipBoard, setClipBoard, handleCutCopy, handlePasting } = useClipBoard();
  const { selectedFiles, setSelectedFiles, handleDownload } = useSelection();
  const { currentPath, setCurrentPath, currentPathFiles, setCurrentPathFiles } =
    useFileNavigation();
  const { activeLayout, setActiveLayout } = useLayout();

  const handleFileOpen = () => {
  // Context Menu
    if (lastSelectedFile.isDirectory) {
      setCurrentPath(lastSelectedFile.path);
      setSelectedFileIndexes([]);
      setSelectedFiles([]);
    } else {
      enableFilePreview && triggerAction.show("previewFile");
    }
    setVisible(false);
  };

  const handleMoveOrCopyItems = (isMoving) => {
    handleCutCopy(isMoving);
    setVisible(false);
  };

  const handleFilePasting = () => {
    handlePasting(lastSelectedFile);
    setVisible(false);
  };

  const handleRenaming = () => {
    setVisible(false);
    triggerAction.show("rename");
  };

  const handleDownloadItems = () => {
    handleDownload();
    setVisible(false);
  };

  const handleDelete = () => {
    setVisible(false);
    triggerAction.show("delete");
  };

  const handleRefresh = () => {
    setVisible(false);
    validateApiCallback(onRefresh, "onRefresh");
    setClipBoard(null);
  };

  const handleCreateNewFolder = () => {
    triggerAction.show("createFolder");
    setVisible(false);
  };

  const handleUpload = () => {
    setVisible(false);
    triggerAction.show("uploadFile");
  };

  const handleselectAllFiles = () => {
    setSelectedFiles(currentPathFiles);
    setVisible(false);
  };

  const emptySelecCtxItems = [
    {
      title: "View",
      icon: activeLayout === "grid" ? <BsGrid size={18} /> : <FaListUl size={18} />,
      onClick: () => {},
      children: [
        {
          title: "Grid",
          icon: <BsGrid size={18} />,
          selected: activeLayout === "grid",
          onClick: () => {
            setActiveLayout("grid");
            setVisible(false);
          },
        },
        {
          title: "List",
          icon: <FaListUl size={18} />,
          selected: activeLayout === "list",
          onClick: () => {
            setActiveLayout("list");
            setVisible(false);
          },
        },
      ],
    },
    {
      title: "Refresh",
      icon: <FiRefreshCw size={18} />,
      onClick: handleRefresh,
      divider: true,
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
      divider: true,
    },
    {
      title: "Select all",
      icon: <BiSelectMultiple size={18} />,
      onClick: handleselectAllFiles,
    },
  ];

  const selecCtxItems = () => {
    return actions
      .filter((item) => item.showMenu)
      .map((item) => {
        switch (item.key) {
          case "open": {
            return {
              ...item,
              onClick: (args) => {
                handleFileOpen(args);
                item.onClick(args);
              },
              icon: item.icon || lastSelectedFile?.isDirectory ? <PiFolderOpen size={20} /> : <FaRegFile size={16} />,
              divider: true,
            }
          }
          case "cut": {
            return {
              ...item,
              onClick: () => {
                item.onClick();
                handleMoveOrCopyItems(true);
              },
              icon: item.icon || <BsScissors size={19} />,
              hidden: selectedFiles.length > 1,
            }
          }
          case "copy": {
            return {
              ...item, 
              onClick: (args) => {
                item.onClick(args);
                handleMoveOrCopyItems(false);
              },
              icon: item.icon || <BsCopy strokeWidth={0.1} size={17} />,
              divider: !lastSelectedFile?.isDirectory,
            }
          }
          case "paste": {
            return {
              ...item, 
              onClick: (args) => {
                item.onClick(args);
                handleFilePasting(args);
              },
              icon: item.icon || <FaRegPaste size={18} />,
              className: `${clipBoard ? "" : "disable-paste"}`,
              hidden: !lastSelectedFile?.isDirectory,
              divider: !lastSelectedFile?.isDirectory,
            }
          }
          case "rename": {
            return {
              ...item,
              icon: item.icon || <BiRename size={19} />,
              onClick: (args) => {
                item.onClick(args);
                handleRenaming(args);
              },
              hidden: selectedFiles.length > 1,
            }
          }
          case "download": {
            return {
              ...item, 
              icon: item.icon || <MdOutlineFileDownload size={18} />,
              onClick: (args) => {
                item.onClick(args);
                handleDownloadItems(args);
              },
              hidden: lastSelectedFile?.isDirectory,
            }
          }
          case "delete": {
            return {
              ...item,
              icon: item.icon || <MdOutlineDelete size={19} />,
              onClick: () => {
                item.onClick();
                handleDelete();
              },
              hidden: lastSelectedFile?.isDirectory,
            }
          }
          default: {
            return {
              ...item,
              onClick: () => {
                item.onClick(item.multiple ? selectedFiles : selectedFiles?.[0]);
                setVisible(false);
              },
              hidden: item.hidden || (!item.multiple && selectedFiles.length > 1),
            }
          } 
        }
      });
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

  const handleContextMenu = (e, isSelection = false) => {
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

  return {
    emptySelecCtxItems,
    selecCtxItems,
    handleContextMenu,
    unselectFiles,
    visible,
    setVisible,
    setLastSelectedFile,
    selectedFileIndexes,
    clickPosition,
    isSelectionCtx,
  };
};

export default useFileList;
