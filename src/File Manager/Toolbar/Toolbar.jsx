import { useEffect, useRef, useState } from "react";
import { BsCopy, BsFolderPlus, BsGridFill, BsScissors } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";
import { MdClear, MdOutlineDelete, MdOutlineFileUpload } from "react-icons/md";
import { AiOutlineCloudUpload } from "react-icons/ai";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import { BiRename } from "react-icons/bi";
import { FaRegPaste } from "react-icons/fa6";
// import { setErrorAlert } from "../../../../redux/reducers/patientSlice";
// import { Message, Uploader, useToaster } from "rsuite";
// import { useSelector } from "react-redux";
// import { endPoints } from "../../../../api/api";

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
  //   const practiceID = useSelector((e) => e.show.practiceID);
  //   const patientID = useSelector((e) => e.show.selectedPatientId);
  //   const toaster = useToaster();

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

  // Handle Copy
  const handleCut = () => {
    setClipBoard({
      files: [selectedFile],
      isMoving: true,
    });
  };
  //

  // Handle Copy
  const handleCopy = () => {
    setClipBoard({
      files: [selectedFile],
      isMoving: false,
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
          <button className="item-action file-action" onClick={handleCut}>
            <BsScissors size={18} />
            <span>Cut</span>
          </button>
          <button className="item-action file-action" onClick={handleCopy}>
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

      {/* Upload File */}
      {/* <Modal
        heading={"File Upload"}
        show={showUploadFile}
        setShow={setShowUploadFile}
        dialogClassName={"w-50"}
      >
        <div className="py-3">
          <Uploader
            onProgress={(progress) => {
              setIsFileUploading(progress !== 100);
            }}
            fileList={fileList}
            onChange={setFileList}
            action={`${process.env.REACT_APP_APPLICATION_URL}/${endPoints.uploadEditFiles}`}
            headers={{
              Authorization: `Bearer ` + localStorage.getItem("token"),
            }}
            data={{
              PracticeID: practiceID,
              PatientID: patientID,
              Location: currentPath,
              ...(currentFolder?.ID && { FolderID: currentFolder.ID }),
            }}
            shouldUpload={(file) => {
              console.log(file, "651681686546851651");
              const isValid = file.blobFile.size < 5132499 ? true : false;
              const fileName = file.name.toLowerCase();
              const fileExistsInQueue = fileList.find(
                (item) => item.name === file.name
              );
              const fileExitsInFolder = currentPathFiles?.find(
                (item) => item.name?.toLowerCase() === fileName
              );
              const isUploading =
                file.status !== "finished" && file.status !== "error";
              console.log(isValid, "351653513516513535adss");
              if ((fileExistsInQueue || fileExitsInFolder) && isUploading) {
                toaster.push(
                  <Message type="error">
                    File name "{file.name}" already in use
                  </Message>
                );
                setFileList((prev) => {
                  return prev.filter((item) => item !== file);
                });
                return false;
              } else {
                if (!isValid) {
                  toaster.push(
                    <Message type="error">
                      File can not be greater than 5MB.
                    </Message>
                  );
                  setFileList((prev) => {
                    return prev.filter((item) => item !== file);
                  });
                } else {
                  return true;
                }
              }
            }}
            maxPreviewFileSize={0}
            onSuccess={(response, uploadedFile) => {
              setFiles((prev) => {
                return [
                  ...prev,
                  {
                    ...response,
                    name: response.Name,
                    path: currentPath,
                    isDirectory: false,
                    fileKey: uploadedFile.fileKey,
                  },
                ];
              });
            }}
            draggable
            multiple
            accept=".txt, .png, .jpg, .jpeg, .pdf, .doc, .docx"
            className={`file-upload-container px-3 ${
              fileList.length > 0 ? "show-uploaded-files" : ""
            }`}
            onRemove={handleRemoveFile}
          >
            <div
              style={{
                height: 200,
                width: "100%",
                display: "flex",
                gap: "3px",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                userSelect: "none",
              }}
            >
              <AiOutlineCloudUpload
                size={32}
                className="text-secondary-color"
              />
              <span className="text-primary-color">
                Click or Drag files to upload
              </span>
            </div>
          </Uploader>
          {fileList.length > 0 && (
            <div className="d-flex justify-content-center mt-3 border-top pt-3">
              <Button
                text={`${isFileUploading ? "Uploading..." : "Done"}`}
                disabled={isFileUploading}
                width="8rem"
                size={15}
                onClick={() => setShowUploadFile(false)}
              />
            </div>
          )}
        </div>
      </Modal> */}
      {/* Upload File */}
    </div>
  );
};

export default Toolbar;
