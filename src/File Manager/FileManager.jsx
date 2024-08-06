import { useEffect, useRef, useState } from "react";
import "./FileManager.scss";
import Toolbar from "./Toolbar/Toolbar";
import NavigationPane from "./Navigation Pane/NavigationPane";
import BreadCrumb from "./Bread Crumb/BreadCrumb";
import Files from "./Files/Files";
import Modal from "../components/Modal/Modal";
import Button from "../components/Button/Button";
import { IoWarningOutline } from "react-icons/io5";
// import { useAddData, useDeleteData, useGetByMultiParams } from "../../../../api/apiCalls";
// import { useDispatch, useSelector } from "react-redux";
// import { endPoints } from "../../../../api/api";
// import { setAlertTitle, setSuccessAlert } from "../../../../redux/reducers/patientSlice";
// import { useCreateFile } from "../../../../api/documentManagerServices";
// import ReactLoading from "react-loading";

const allowedFileExtensions = [
  ".txt",
  ".png",
  ".jpg",
  ".jpeg",
  ".pdf",
  ".doc",
  ".docx",
];

const FileManager = () => {
  //   const dispatch = useDispatch();

  // States
  const [isItemSelection, setIsItemSelection] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [currentPath, setCurrentPath] = useState("");
  const [currentPathFiles, setCurrentPathFiles] = useState([]);
  const [currentFolder, setCurrentFolder] = useState(null);
  const [showDelete, setShowDelete] = useState(false);
  const [showRename, setShowRename] = useState(false);
  const [renameFile, setRenameFile] = useState("");
  const renameFileRef = useRef(null);
  const [renameFileWarning, setRenameFileWarning] = useState(false);
  const [fileRenameError, setFileRenameError] = useState(false);
  const [renameErrorMessage, setRenameErrorMessage] = useState("");
  const [clipBoard, setClipBoard] = useState(null);
  const [files, setFiles] = useState([
    {
      name: "DCIM",
      isDirectory: true,
      path: "",
    },
    {
      name: "Camera",
      isDirectory: true,
      path: "/DCIM",
    },
    {
      name: "Portraits",
      isDirectory: true,
      path: "/DCIM/Camera",
    },
    {
      name: "Pic.png",
      isDirectory: false,
      path: "",
    },
  ]);
  //

  console.log(files);

  // Getting Files API Call
  //   const getPatientFolders = useGetByMultiParams(
  //     [{ paramName: "id", paramValue: patientID }],
  //     "getPatientFolders",
  //     endPoints.getPatientFolders,
  //     patientID ? true : false
  //   );
  //

  // Setting All Files & Folders of Patient
  //   useEffect(() => {
  //     if (
  //       getPatientFolders?.data &&
  //       !getPatientFolders?.isFetching &&
  //       !getPatientFolders?.isRefetching
  //     ) {
  //       // Folders
  //       var folders = [];
  //       if (getPatientFolders?.data?.Folder?.length > 0) {
  //         folders = getPatientFolders.data.Folder.map((folder) => {
  //           var folderPath = "";
  //           if (folder.FolderLocation !== folder.Name) {
  //             const pathArray = folder.FolderLocation?.split("/");
  //             pathArray.pop();
  //             folderPath = pathArray?.join("/");
  //           }

  //           return {
  //             ...folder,
  //             name: folder.Name,
  //             path: folderPath,
  //             isDirectory: true,
  //           };
  //         });
  //       }
  //       //

  //       // Files
  //       var files = [];
  //       if (getPatientFolders?.data?.Files?.length > 0) {
  //         files = getPatientFolders.data.Files.map((file) => {
  //           console.log(file, "lakdjlaksjdlasdjlka");
  //           return {
  //             ...file,
  //             name: file.Name,
  //             path: file.Location ? file.Location : "",
  //             isDirectory: false,
  //           };
  //         });
  //       }
  //       //

  //       setFiles([...folders, ...files]);
  //     }
  //   }, [
  //     getPatientFolders?.data,
  //     getPatientFolders?.isFetching,
  //     getPatientFolders?.isRefetching,
  //   ]);
  //

  // Settings Current Path Files
  useEffect(() => {
    setCurrentPathFiles(() => {
      return files?.filter((file) => file.path === currentPath);
    });

    setCurrentFolder(() => {
      if (currentPath === "") {
        return null;
      } else {
        return files?.find((file) => file.FolderLocation === currentPath);
      }
    });
  }, [files, currentPath]);
  //

  // Create Folder
  // const createFolder = useAddData("createFolder");
  const handleCreateFolder = async (folderName, setShowCreateFolder) => {
    // const folderPath =
    //   currentPath === "" ? folderName : currentPath + "/" + folderName;
    // var folderData = {
    //   Name: folderName,
    //   FolderLocation: folderPath,
    //   PatientID: patientID,
    //   PracticeID: practiceID,
    // };

    // Adding Parent ID if folder is located in a Directory
    // if (currentPath !== "") {
    //   folderData = {
    //     ...folderData,
    //     ParentID: currentFolder?.ID,
    //   };
    // }
    //

    setFiles((prev) => {
      return [
        ...prev,
        {
          name: folderName,
          path: currentPath,
          isDirectory: true,
        },
      ];
    });
    setShowCreateFolder(false);

    // const response = await createFolder.mutateAsync({
    //   sendData: folderData,
    //   endPoint: endPoints.createEditFolder,
    // });

    // if (response?.status === 200) {
    //   setFiles((prev) => {
    //     const newFolder = response.data;
    //     return [
    //       ...prev,
    //       {
    //         ...newFolder,
    //         name: newFolder.Name,
    //         path: currentPath,
    //         isDirectory: true,
    //       },
    //     ];
    //   });
    //   dispatch(setSuccessAlert(true));
    //   dispatch(setAlertTitle("Folder Created Successfully!"));
    // }
  };
  //

  // Upload File
  //   const uploadFile = useCreateFile("uploadFile");
  //   const handleFileUpload = async (file) => {
  //     const formData = new FormData();
  //     formData.append("file", file.blobFile);
  //     formData.append("PracticeID", practiceID);
  //     formData.append("PatientID", patientID);
  //     formData.append("Name", file.name);
  //     formData.append("Location", currentPath);
  //     currentFolder && formData.append("FolderID", currentFolder.ID);

  //     const response = await uploadFile.mutateAsync(formData);

  //     if (response.status === 200) {
  //       dispatch(setSuccessAlert(true));
  //       dispatch(setAlertTitle("File Uploaded SuccessFully!"));
  //       // getPatientFolders.refetch();
  //     }
  //   };
  //

  // Handle Paste
  const getCopiedFiles = (file, pastePath) => {
    const children = file.children;
    delete file.children;
    return [
      { ...file, path: pastePath },
      ...children?.flatMap((child) =>
        getCopiedFiles(child, pastePath + "/" + file.name)
      ),
    ];
  };

  const handlePaste = (e, pastePath, filesCopied) => {
    if (clipBoard.isMoving) {
      setFiles((prev) => {
        const filteredFiles = prev.filter((f) => {
          return !filesCopied.find(
            (cf) => cf.name === f.name && cf.path === f.path
          );
        });

        return [
          ...filteredFiles,
          ...clipBoard.files.flatMap((file) => getCopiedFiles(file, pastePath)),
        ];
      });
      setClipBoard(null);
    } else {
      setFiles((prev) => {
        return [
          ...prev,
          ...clipBoard.files.map((file) => {
            return {
              ...file,
              path: pastePath,
            };
          }),
        ];
      });
    }
    setIsItemSelection(false);
    setSelectedFile(null);
  };
  //

  // Refresh Files
  //   const handleRefreshFiles = () => {
  //     getPatientFolders.refetch();
  //   };
  //

  // Delete Folder
  // const [isFolderDelete, setIsFolderDelete] = useState(false);
  // const [deleteFolderID, setDeleteFolderID] = useState(null);

  //   const deleteFolder = useDeleteData(
  //     [{ paramName: "ID", paramValue: deleteFolderID }],
  //     "deleteFolder",
  //     endPoints.deleteFolder,
  //     isFolderDelete && !!deleteFolderID
  //   );

  //   useEffect(() => {
  //     setIsFolderDelete(false);
  //     if (deleteFolder?.data?.status === 200 && !deleteFolder?.isFetching) {
  //       getPatientFolders.refetch();
  //       setDeleteFolderID(null);
  //       setIsItemSelection(false);
  //       dispatch(setSuccessAlert(true));
  //       dispatch(setAlertTitle("Folder Deleted Successfully!"));
  //     }
  //   }, [deleteFolder?.data?.data, deleteFolder?.isFetching]);

  // Delete File
  //   const [isFileDelete, setIsFileDelete] = useState(false);
  //   const [deleteFileID, setDeleteFileID] = useState(null);

  //   const deleteFile = useDeleteData(
  //     [{ paramName: "ID", paramValue: deleteFileID }],
  //     "deleteFile",
  //     endPoints.deleteFile,
  //     isFileDelete && !!deleteFileID
  //   );

  //   useEffect(() => {
  //     setIsFileDelete(false);
  //     if (deleteFile?.data?.status === 200 && !deleteFile?.isFetching) {
  //       getPatientFolders.refetch();
  //       setDeleteFolderID(null);
  //       setIsItemSelection(false);
  //       dispatch(setSuccessAlert(true));
  //       dispatch(setAlertTitle("File Deleted Successfully!"));
  //     }
  //   }, [deleteFile?.data?.data, deleteFile?.isFetching]);

  const handleDelete = (file) => {
    if (file.isDirectory) {
      setFiles((prev) => {
        return prev.filter((f) => {
          const folderToDelete = f.path === file.path && f.name === file.name;
          const folderChildren = f.path.startsWith(file.path + "/" + file.name);
          return !folderToDelete && !folderChildren;
        });
      });
      // setDeleteFolderID(file?.ID);
      // setIsFolderDelete(true);
    } else {
      setFiles((prev) => {
        return prev.filter(
          (f) => !(f.name === file.name && f.path === file.path)
        );
      });
      // setDeleteFileID(file?.ID);
      // setIsFileDelete(true);
    }
    setShowDelete(false);
    setIsItemSelection(false);
    setSelectedFile(null);
  };
  //

  // Rename Folder/File
  useEffect(() => {
    if (showRename && selectedFile) {
      renameFileRef?.current?.focus();

      if (selectedFile.isDirectory) {
        renameFileRef?.current?.select();
      } else {
        const fileExtension = selectedFile.name.split(".").pop();
        const fileNameLength =
          selectedFile.name.length - fileExtension.length - 1;
        renameFileRef?.current?.setSelectionRange(0, fileNameLength);
      }
    } else {
      setRenameFileWarning(false);
    }
  }, [showRename]);

  const handleFileRename = (e, isConfirmed = false) => {
    if (renameFile === "") {
      setFileRenameError(true);
      setRenameErrorMessage(
        `${selectedFile.isDirectory ? "Folder" : "File"} name is required!`
      );
      return;
    } else if (renameFile === selectedFile.name) {
      setShowRename(false);
      return;
    } else if (currentPathFiles.some((file) => file.name === renameFile)) {
      setFileRenameError(true);
      setRenameErrorMessage(
        "A file or folder with the same name already exists!"
      );
      return;
    } else if (!selectedFile.isDirectory && !isConfirmed) {
      const fileExtension = selectedFile.name.split(".").pop();
      const renameFileExtension = renameFile.split(".").pop();
      if (fileExtension !== renameFileExtension) {
        setRenameFileWarning(true);
        return;
      }
    }

    setFiles((prev) => {
      return prev.map((file) => {
        if (
          file.name === selectedFile?.name &&
          file.path === selectedFile?.path
        ) {
          return {
            // Rename the file itself
            ...file,
            name: renameFile,
          };
        } else if (
          file.path.startsWith(selectedFile.path + "/" + selectedFile.name)
        ) {
          // All files in the folder
          const basePath = selectedFile.path + "/" + selectedFile.name;
          const newBasePath =
            basePath.split("/").slice(0, -1).join("/") + "/" + renameFile;
          const newPath = newBasePath + file.path.slice(basePath.length);
          return {
            ...file,
            path: newPath,
          };
        } else {
          return file;
        }
      });
    });
    setSelectedFile((prev) => ({ ...prev, name: renameFile }));
    setShowRename(false);
  };

  const handleValidateFolderRename = (e) => {
    const invalidCharsRegex = /[\\/:*?"<>|]/;
    if (invalidCharsRegex.test(e.key)) {
      e.preventDefault();
      setRenameErrorMessage(
        "A file name can't contain any of the following characters: \\ / : * ? \" < > |"
      );
      setFileRenameError(true);
    } else {
      setFileRenameError(false);
    }
  };
  //

  //   useEffect(() => {
  //     return () => {
  //       deleteFolder.remove();
  //       deleteFile.remove();
  //     };
  //   }, []);

  // Dragging Resizer
  const [colSizes, setColSizes] = useState({ col1: "20", col2: "80" });
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    // Prevent text selection during drag
    e.preventDefault();

    // Calculate new sizes based on mouse movement
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const newCol1Size =
      ((e.clientX - containerRect.left) / containerRect.width) * 100;

    if (newCol1Size >= 15 && newCol1Size <= 60) {
      setColSizes({ col1: newCol1Size, col2: 100 - newCol1Size });
    }
  };
  //

  return (
    <main className="file-explorer">
      {/* { isLoading && (
          <div className="file-explorer-loading">
            <ReactLoading
              type={"spokes"}
              color={"#000"}
              height={"45px"}
              width={"45px"}
            />
          </div>
        )} */}
      <section className={`toolbar ${isItemSelection ? "file-selected" : ""}`}>
        <Toolbar
          allowCreateFolder
          allowUploadFile
          handleCreateFolder={handleCreateFolder}
          // handleFileUpload={handleFileUpload}
          // handleRefreshFiles={handleRefreshFiles}
          currentPathFiles={currentPathFiles}
          isItemSelection={isItemSelection}
          currentPath={currentPath}
          currentFolder={currentFolder}
          setIsItemSelection={setIsItemSelection}
          setShowDelete={setShowDelete}
          setShowRename={setShowRename}
          setRenameFile={setRenameFile}
          selectedFile={selectedFile}
          files={files}
          setFiles={setFiles}
          clipBoard={clipBoard}
          setClipBoard={setClipBoard}
          handlePaste={handlePaste}
          // handleDelete={handleDelete}
        />
      </section>
      <section
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        className="files-container"
      >
        <div className="navigation-pane" style={{ width: colSizes.col1 + "%" }}>
          <NavigationPane
            files={files}
            currentPath={currentPath}
            setCurrentPath={setCurrentPath}
          />
          <div
            className={`sidebar-resize ${isDragging ? "sidebar-dragging" : ""}`}
            onMouseDown={handleMouseDown}
          />
        </div>

        <div className="folers-preview" style={{ width: colSizes.col2 + "%" }}>
          <BreadCrumb
            currentPath={currentPath}
            setCurrentPath={setCurrentPath}
          />
          <Files
            currentPathFiles={currentPathFiles}
            setCurrentPath={setCurrentPath}
            isItemSelection={isItemSelection}
            setIsItemSelection={setIsItemSelection}
            setSelectedFile={setSelectedFile}
            setShowDelete={setShowDelete}
            setShowRename={setShowRename}
            setRenameFile={setRenameFile}
            currentPath={currentPath}
            clipBoard={clipBoard}
            setClipBoard={setClipBoard}
            handlePaste={handlePaste}
            files={files}
          />
        </div>
      </section>

      {/* Delete Folder/File */}
      <Modal
        heading={"Delete"}
        show={showDelete}
        setShow={setShowDelete}
        dialogClassName={"w-25"}
      >
        <div className="file-delete-confirm">
          <p className="file-delete-confirm-text">
            Are you sure you want to delete {selectedFile?.name}?
          </p>
          <div className="file-delete-confirm-actions">
            <Button type="secondary" onClick={() => setShowDelete(false)}>
              Cancel
            </Button>
            <Button type="danger" onClick={() => handleDelete(selectedFile)}>
              Delete
            </Button>
          </div>
        </div>
      </Modal>
      {/* Delete Folder/File */}

      {/* Rename Folder/File */}
      <Modal
        heading={"Rename"}
        show={showRename}
        setShow={setShowRename}
        dialogClassName={"w-25"}
      >
        {renameFileWarning ? (
          <div className="fm-rename-folder-container">
            <div className="fm-rename-folder-input">
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <IoWarningOutline size={70} color="orange" />
                <div>
                  If you change a file name extension, the file might become
                  unusable. Are you sure you want to change it?
                </div>
              </div>
            </div>
            <div className="fm-rename-folder-action">
              <Button
                type="secondary"
                onClick={() => setRenameFileWarning(false)}
              >
                No
              </Button>
              <Button type="danger" onClick={(e) => handleFileRename(e, true)}>
                Yes
              </Button>
            </div>
          </div>
        ) : (
          <div className="fm-rename-folder-container">
            <div className="fm-rename-folder-input">
              <input
                ref={renameFileRef}
                type="text"
                value={renameFile}
                onChange={(e) => {
                  setRenameFile(e.target.value);
                  setFileRenameError(false);
                }}
                onKeyDown={handleValidateFolderRename}
                className="action-input"
              />
              {fileRenameError && (
                <div className="folder-error">{renameErrorMessage}</div>
              )}
            </div>
            <div className="fm-rename-folder-action">
              <Button onClick={handleFileRename} type="primary">
                Save
              </Button>
            </div>
          </div>
        )}
      </Modal>
      {/* Rename Folder/File */}
    </main>
  );
};
export default FileManager;
