import { useEffect, useRef, useState } from "react";
import "./FileManager.scss";
import Toolbar from "./Toolbar/Toolbar";
import NavigationPane from "./Navigation Pane/NavigationPane";
import BreadCrumb from "./Bread Crumb/BreadCrumb";
import Files from "./Files/Files";
import Modal from "../components/Modal/Modal";
import Button from "../components/Button/Button";
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
  const [files, setFiles] = useState([
    {
      name: "Folder 1",
      isDirectory: true,
      path: "",
    },
    {
      name: "Folder New",
      isDirectory: true,
      path: "Folder 1",
    },
    {
      name: "File 2.jpg",
      isDirectory: false,
      path: "Folder 1",
    },
    {
      name: "Folder New 2",
      isDirectory: true,
      path: "Folder 1/Folder New",
    },
    {
      name: "Folder New 3",
      isDirectory: true,
      path: "Folder 1/Folder New/Folder New 2",
    },
    {
      name: "Folder New 4",
      isDirectory: true,
      path: "Folder 1/Folder New/Folder New 2/Folder New 3",
    },
    {
      name: "Folder New 5",
      isDirectory: true,
      path: "Folder 1/Folder New/Folder New 2/Folder New 3/Folder New 4",
    },
    {
      name: "Folder New 6",
      isDirectory: true,
      path: "Folder 1/Folder New/Folder New 2/Folder New 3/Folder New 4/Folder New 5",
    },
    {
      name: "Folder 2",
      isDirectory: true,
      path: "",
    },
    {
      name: "Folder 3",
      isDirectory: true,
      path: "",
    },
    {
      name: "Folder 4",
      isDirectory: true,
      path: "",
    },
    {
      name: "Folder 5",
      isDirectory: true,
      path: "",
    },
    {
      name: "Folder 6",
      isDirectory: true,
      path: "",
    },
    {
      name: "Profile Pic.jpg",
      isDirectory: false,
      path: "",
    },
    {
      name: "File 1asdfsdfsdfsdfsdf.txt",
      isDirectory: false,
      path: "",
    },
    {
      name: "File 2.jpg",
      isDirectory: false,
      path: "",
    },
  ]);
  //

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
          if (f.name === file.name && f.path === file.path) {
            // Delete the folder itself
            return false;
          } else if (
            file.path === "" &&
            (f.path === file.name || f.path.startsWith(file.name + "/"))
          ) {
            // Root folder delete case (delete all files in this folder)
            return false;
          } else if (f.path.startsWith(file.path + "/")) {
            // Delete all files in this folder
            return false;
          } else {
            return true;
          }
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
      renameFileRef.current.focus();

      if (selectedFile.isDirectory) {
        renameFileRef.current.select();
      } else {
        const fileExtension = selectedFile.name.split(".").pop();
        const fileNameLength =
          selectedFile.name.length - fileExtension.length - 1;
        renameFileRef.current.setSelectionRange(0, fileNameLength);
      }
    }
  }, [showRename]);

  const handleFileRename = () => {
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
          selectedFile.path === "" &&
          file.path === selectedFile.name
        ) {
          // Direct child of root folder
          return {
            ...file,
            path: renameFile,
          };
        } else if (file.path.startsWith(selectedFile.name + "/")) {
          // All files in the folder
          return {
            ...file,
            path: renameFile + file.path.slice(selectedFile.name.length),
          };
        } else {
          return file;
        }
      });
    });
    setSelectedFile((prev) => ({ ...prev, name: renameFile }));
    setShowRename(false);
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
          setFiles={setFiles}
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
        <div className="fm-rename-folder-container">
          <div className="fm-rename-folder-input">
            <input
              ref={renameFileRef}
              type="text"
              value={renameFile}
              onChange={(e) => setRenameFile(e.target.value)}
              // onKeyDown={handleValidateFolderName}
              className="action-input"
            />
            {/* {folderNameError && (
              <div className="folder-error">{folderErrorMessage}</div>
            )} */}
          </div>
          <div className="fm-rename-folder-action">
            <Button onClick={handleFileRename} type="primary">
              Save
            </Button>
          </div>
        </div>
      </Modal>
      {/* Rename Folder/File */}
    </main>
  );
};
export default FileManager;
