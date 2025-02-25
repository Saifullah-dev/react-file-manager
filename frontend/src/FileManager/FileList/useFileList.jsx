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
import {injectIntl} from "react-intl";

const useFileList = (onRefresh, enableFilePreview, triggerAction, intl) => {
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

  // Context Menu
  const handleFileOpen = () => {
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
      title: intl.formatMessage({id: `view`}),
      icon: activeLayout === "grid" ? <BsGrid size={18} /> : <FaListUl size={18} />,
      onClick: () => {},
      children: [
        {
          title: intl.formatMessage({id: `grid`}),
          icon: <BsGrid size={18} />,
          selected: activeLayout === "grid",
          onClick: () => {
            setActiveLayout("grid");
            setVisible(false);
          },
        },
        {
          title: intl.formatMessage({id: `list`}),
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
      title: intl.formatMessage({id: `refresh`}),
      icon: <FiRefreshCw size={18} />,
      onClick: handleRefresh,
      divider: true,
    },
    {
      title: intl.formatMessage({id: `newFolder`}),
      icon: <BsFolderPlus size={18} />,
      onClick: handleCreateNewFolder,
    },
    {
      title: intl.formatMessage({id: `upload`}),
      icon: <MdOutlineFileUpload size={18} />,
      onClick: handleUpload,
      divider: true,
    },
    {
      title: intl.formatMessage({id: `selectAll`}),
      icon: <BiSelectMultiple size={18} />,
      onClick: handleselectAllFiles,
    },
  ];

  const selecCtxItems = [
    {
      title: intl.formatMessage({id: `open`}),
      icon: lastSelectedFile?.isDirectory ? <PiFolderOpen size={20} /> : <FaRegFile size={16} />,
      onClick: handleFileOpen,
      divider: true,
    },
    {
      title: intl.formatMessage({id: `cut`}),
      icon: <BsScissors size={19} />,
      onClick: () => handleMoveOrCopyItems(true),
    },
    {
      title: intl.formatMessage({id: `copy`}),
      icon: <BsCopy strokeWidth={0.1} size={17} />,
      onClick: () => handleMoveOrCopyItems(false),
      divider: !lastSelectedFile?.isDirectory,
    },
    {
      title: intl.formatMessage({id: `paste`}),
      icon: <FaRegPaste size={18} />,
      onClick: handleFilePasting,
      className: `${clipBoard ? "" : "disable-paste"}`,
      hidden: !lastSelectedFile?.isDirectory,
      divider: true,
    },
    {
      title: intl.formatMessage({id: `rename`}),
      icon: <BiRename size={19} />,
      onClick: handleRenaming,
      hidden: selectedFiles.length > 1,
    },
    {
      title: intl.formatMessage({id: `download`}),
      icon: <MdOutlineFileDownload size={18} />,
      onClick: handleDownloadItems,
      hidden: lastSelectedFile?.isDirectory,
    },
    {
      title: intl.formatMessage({id: `delete`}),
      icon: <MdOutlineDelete size={19} />,
      onClick: handleDelete,
    },
  ];
  //

  const handleFolderCreating = () => {
    setCurrentPathFiles((prev) => {
      return [
        ...prev,
        {
          name: duplicateNameHandler(intl.formatMessage({id: `newFolder`}), true, prev),
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

export default injectIntl(useFileList);
