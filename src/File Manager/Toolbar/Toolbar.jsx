import { useEffect, useRef, useState } from "react";
import { BsCopy, BsFolderPlus, BsGridFill, BsScissors } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";
import { MdClear, MdOutlineDelete, MdOutlineFileUpload } from "react-icons/md";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import { BiRename } from "react-icons/bi";
import { FaRegPaste } from "react-icons/fa6";
import { createFolderTree } from "../../utils/createFolderTree";

const Toolbar = ({
  allowCreateFolder = true,
  allowUploadFile = true,
  handleCreateFolder = () => {},
  currentPathFiles,
  handleFileUpload = () => {},
  handleRefreshFiles,
  isItemSelection,
  setIsItemSelection,
  currentPath,
  currentFolder,
  setShowDelete,
  setShowRename,
  setRenameFile,
  selectedFile,
  files,
  setFiles,
  clipBoard,
  setClipBoard,
  handleDelete,
  handlePaste,
}) => {
  // Create Folder States
  const [showCreateFolder, setShowCreateFolder] = useState(false);
  const [folderName, setFolderName] = useState("New Folder");
  const [folderNameError, setFolderNameError] = useState(false);
  const [folderErrorMessage, setFolderErrorMessage] = useState("");
  //

  // File Upload States
  const [showUploadFile, setShowUploadFile] = useState(false);
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    if (!showUploadFile) {
      setFileList([]);
    }
  }, [showUploadFile]);
  //

  // Folder name change handler function
  const handleFolderNameChange = (e) => {
    setFolderName(e.target.value);
    setFolderNameError(false);
  };
  //

  // Validate folder name and call "handleCreateFolder" function
  const handleValidateFolderName = (e) => {
    const invalidCharsRegex = /[\\/:*?"<>|]/;
    if (invalidCharsRegex.test(e.key)) {
      e.preventDefault();
      setFolderErrorMessage(
        "A file name can't contain any of the following characters: \\ / : * ? \" < > |"
      );
      setFolderNameError(true);
    } else {
      setFolderNameError(false);
    }
  };

  const handleFolderCreating = () => {
    const newFolderName = folderName.trim();
    // Validation non-empty folder name
    if (newFolderName === "") {
      setFolderErrorMessage("Folder name cannot be empty.");
      setFolderNameError(true);
    } else {
      const alreadyExists = currentPathFiles.find((file) => {
        return file.name.toLowerCase() === newFolderName.toLowerCase();
      });

      if (!alreadyExists) {
        // Current path doesn't have the same folder name
        handleCreateFolder(newFolderName, setShowCreateFolder);
      } else {
        setFolderErrorMessage(
          `A folder with the name "${newFolderName}" already exits.`
        );
        setFolderNameError(true);
      }
    }
  };
  //

  // Folder name text selection upon visible
  const folderNameRef = useRef(null);
  useEffect(() => {
    if (showCreateFolder) {
      folderNameRef.current.focus();
      folderNameRef.current.select();
    } else {
      setFolderName("New Folder");
      //   setErrorAlert(false);
      setFolderErrorMessage("");
    }
  }, [showCreateFolder]);
  //

  // Toolbar Items
  const [toolbarLeftItems, setToolbarLeftItems] = useState([
    {
      icon: <BsFolderPlus size={17} strokeWidth={0.3} />,
      text: "New Folder",
      permission: allowCreateFolder,
      onClick: () => setShowCreateFolder(true),
    },
    {
      icon: <MdOutlineFileUpload size={18} />,
      text: "Upload File",
      permission: allowUploadFile,
      onClick: () => setShowUploadFile(true),
    },
  ]);

  useEffect(() => {
    if (clipBoard) {
      const selectedCopiedFile = clipBoard.files[0];
      const copiedFiles = files.filter((f) => {
        const folderToCopy =
          f.path === selectedCopiedFile.path &&
          f.name === selectedCopiedFile.name;
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
      const fileToDelete = currentPathFiles.find(
        (item) => item.fileKey === file.fileKey
      );
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
        f.path === selectedCopiedFile?.path &&
        f.name === selectedCopiedFile?.name;
      const folderChildren = f.path.startsWith(
        selectedCopiedFile?.path + "/" + selectedCopiedFile?.name
      );
      return folderToCopy || folderChildren;
    });
    return (
      <div className="file-action-container">
        <div>
          <button
            className="item-action file-action"
            onClick={(e) => handleCutCopy(e, true)}
          >
            <BsScissors size={18} />
            <span>Cut</span>
          </button>
          <button
            className="item-action file-action"
            onClick={(e) => handleCutCopy(e, false)}
          >
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
            onClick={() => {
              setRenameFile(selectedFile.name);
              setShowRename(true);
            }}
          >
            <BiRename size={19} />
            <span>Rename</span>
          </button>
          <button
            className="item-action file-action"
            onClick={() => setShowDelete(true)}
          >
            <MdOutlineDelete size={19} />
            <span>Delete</span>
          </button>
        </div>
        <button
          className="item-action file-action"
          onClick={() => setIsItemSelection(false)}
        >
          <MdClear size={18} />
          <span>Clear Selection</span>
        </button>
      </div>
    );
  }
  //

  return (
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
            {index + 1 !== toolbarRightItems.length && (
              <div className="item-separator"></div>
            )}
          </div>
        ))}
      </div>

      {/* Create Folder */}
      <Modal
        heading={"Folder"}
        show={showCreateFolder}
        setShow={setShowCreateFolder}
        dialogClassName={"w-25"}
      >
        <div className="fm-create-folder-container">
          <div className="fm-create-folder-input">
            <input
              ref={folderNameRef}
              type="text"
              value={folderName}
              onChange={handleFolderNameChange}
              onKeyDown={handleValidateFolderName}
              className="action-input"
            />
            {folderNameError && (
              <div className="folder-error">{folderErrorMessage}</div>
            )}
          </div>
          <div className="fm-create-folder-action">
            <Button onClick={handleFolderCreating} type="primary">
              Create
            </Button>
          </div>
        </div>
      </Modal>
      {/* Create Folder */}
    </div>
  );
};

export default Toolbar;
