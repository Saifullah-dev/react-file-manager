import { useEffect, useState } from "react";
import { BsCopy, BsFolderPlus, BsGridFill, BsScissors } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";
import { MdClear, MdOutlineDelete, MdOutlineFileUpload } from "react-icons/md";
import { BiRename } from "react-icons/bi";
import { FaRegPaste } from "react-icons/fa6";
import { createFolderTree } from "../../utils/createFolderTree";

const Toolbar = ({
  allowCreateFolder = true,
  allowUploadFile = true,
  currentPathFiles,
  handleFileUpload = () => {},
  handleRefreshFiles,
  isItemSelection,
  setIsItemSelection,
  currentPath,
  currentFolder,
  selectedFile,
  files,
  setFiles,
  clipBoard,
  setClipBoard,
  handleDelete,
  handlePaste,
  triggerAction,
}) => {
  // File Upload States
  const [showUploadFile, setShowUploadFile] = useState(false);
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    if (!showUploadFile) {
      setFileList([]);
    }
  }, [showUploadFile]);
  //

  // Toolbar Items
  const [toolbarLeftItems, setToolbarLeftItems] = useState([
    {
      icon: <BsFolderPlus size={17} strokeWidth={0.3} />,
      text: "New Folder",
      permission: allowCreateFolder,
      onClick: () => triggerAction.show("createFolder"),
    },
    {
      icon: <MdOutlineFileUpload size={18} />,
      text: "Upload File",
      permission: allowUploadFile,
      onClick: () => triggerAction.show("uploadFile"),
    },
  ]);

  useEffect(() => {
    if (clipBoard) {
      const selectedCopiedFile = clipBoard.files[0];
      const copiedFiles = files.filter((f) => {
        const folderToCopy =
          f.path === selectedCopiedFile.path && f.name === selectedCopiedFile.name;
        const folderChildren = f.path.startsWith(
          selectedCopiedFile.path + "/" + selectedCopiedFile.name
        );
        return folderToCopy || folderChildren;
      });
      if (toolbarLeftItems.find((item) => item.text === "Paste")) {
        setToolbarLeftItems((prev) => {
          return prev.map((item) => {
            if (item.text === "Paste") {
              return {
                ...item,
                onClick: (e) => handlePaste(e, currentPath, copiedFiles),
              };
            }
            return item;
          });
        });
      } else {
        setToolbarLeftItems((prev) => {
          return [
            ...prev,
            {
              icon: <FaRegPaste size={18} />,
              text: "Paste",
              permission: true,
              onClick: (e) => handlePaste(e, currentPath, copiedFiles),
            },
          ];
        });
      }
    } else {
      setToolbarLeftItems((prev) => {
        return prev.filter((item) => item.text !== "Paste");
      });
    }
  }, [clipBoard, currentPath, files]);

  const toolbarRightItems = [
    // {
    //     icon: <BsGridFill size={16} />,
    //     title: "View",
    //     onClick: handleRefreshFiles,
    // },
    {
      icon: <FiRefreshCw size={16} />,
      title: "Refresh",
      onClick: handleRefreshFiles,
    },
  ];
  //

  // Handle Cut / Copy
  const handleCutCopy = (e, isMoving) => {
    setClipBoard({
      files: [{ ...createFolderTree(selectedFile, files) }],
      isMoving: isMoving,
    });
  };
  //

  // Handle Remove File
  const [isFileUploading, setIsFileUploading] = useState(false);
  const handleRemoveFile = (file) => {
    if (file.status !== "error") {
      const fileToDelete = currentPathFiles.find((item) => item.fileKey === file.fileKey);
      handleDelete(fileToDelete);
    }
  };
  //

  // Selected File/Folder Actions
  if (isItemSelection) {
    const pastePath = selectedFile.path + "/" + selectedFile.name;
    const selectedCopiedFile = clipBoard?.files[0];
    const copiedFiles = files.filter((f) => {
      const folderToCopy =
        f.path === selectedCopiedFile?.path && f.name === selectedCopiedFile?.name;
      const folderChildren = f.path.startsWith(
        selectedCopiedFile?.path + "/" + selectedCopiedFile?.name
      );
      return folderToCopy || folderChildren;
    });

    return (
      <div className="toolbar file-selected">
        <div className="file-action-container">
          <div>
            <button className="item-action file-action" onClick={(e) => handleCutCopy(e, true)}>
              <BsScissors size={18} />
              <span>Cut</span>
            </button>
            <button className="item-action file-action" onClick={(e) => handleCutCopy(e, false)}>
              <BsCopy strokeWidth={0.1} size={17} />
              <span>Copy</span>
            </button>
            {selectedFile.isDirectory ? (
              <button
                className="item-action file-action"
                onClick={(e) => handlePaste(e, pastePath, copiedFiles)}
                disabled={!clipBoard}
              >
                <FaRegPaste size={18} />
                <span>Paste</span>
              </button>
            ) : (
              <></>
            )}
            <button
              className="item-action file-action"
              onClick={() => triggerAction.show("rename")}
            >
              <BiRename size={19} />
              <span>Rename</span>
            </button>
            <button
              className="item-action file-action"
              onClick={() => triggerAction.show("delete")}
            >
              <MdOutlineDelete size={19} />
              <span>Delete</span>
            </button>
          </div>
          <button className="item-action file-action" onClick={() => setIsItemSelection(false)}>
            <MdClear size={18} />
            <span>Clear Selection</span>
          </button>
        </div>
      </div>
    );
  }
  //

  return (
    <div className="toolbar">
      <div className="fm-toolbar">
        <div>
          {toolbarLeftItems
            .filter((item) => item.permission)
            .map((item, index) => (
              <button className="item-action" key={index} onClick={item.onClick}>
                {item.icon}
                <span>{item.text}</span>
              </button>
            ))}
        </div>
        <div>
          {toolbarRightItems.map((item, index) => (
            <div key={index}>
              <div
                className="item-action icon-only"
                title={item.title}
                role="button"
                onClick={item.onClick}
              >
                {item.icon}
              </div>
              {index + 1 !== toolbarRightItems.length && <div className="item-separator"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
