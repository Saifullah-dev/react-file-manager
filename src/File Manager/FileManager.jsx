import { useEffect, useRef, useState } from "react";
import FileExplorerToolbar from "./FileExplorerToolbar";
import "./FileManager.scss";
// import { Col, Container, Row } from "react-bootstrap";
import FoldersPath from "./FoldersPath";
import Files from "./Files";
// import { useAddData, useDeleteData, useGetByMultiParams } from "../../../../api/apiCalls";
// import { useDispatch, useSelector } from "react-redux";
// import { endPoints } from "../../../../api/api";
// import { setAlertTitle, setSuccessAlert } from "../../../../redux/reducers/patientSlice";
// import { useCreateFile } from "../../../../api/documentManagerServices";
// import FileExplorerAction from "./FileExplorerAction";
// import { Button as BsButton } from 'react-bootstrap';
// import ReactLoading from "react-loading";
import SideBarDirectories from "./SideBarDirectories";

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
  //   const patientID = useSelector((e) => e.show.selectedPatientId);
  //   const practiceID = useSelector((e) => e.show.practiceID);

  // States
  const [isItemSelection, setIsItemSelection] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [currentPath, setCurrentPath] = useState("");
  const [currentPathFiles, setCurrentPathFiles] = useState([]);
  const [currentFolder, setCurrentFolder] = useState(null);
  const [showDelete, setShowDelete] = useState(false);
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

  // Getting Patient's Folder by ID
  //   const getPatientFolders = useGetByMultiParams(
  //     [{ paramName: "id", paramValue: patientID }],
  //     "getPatientFolders",
  //     endPoints.getPatientFolders,
  //     patientID ? true : false
  //   );
  //

  // Refetching getPatientFolders when patientID is changed
  //   useEffect(() => {
  //     if (patientID) {
  //       setSelectedFile(null);
  //       setIsItemSelection(false);
  //       setCurrentFolder(null);
  //       setCurrentPath("");
  //       setFiles([]);
  //       setCurrentPathFiles([]);
  //       getPatientFolders.refetch();
  //     }
  //   }, [patientID]);
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
  //   const createFolder = useAddData("createFolder");
  //   const handleCreateFolder = async (folderName, setShowCreateFolder) => {
  //     const folderPath =
  //       currentPath === "" ? folderName : currentPath + "/" + folderName;
  //     var folderData = {
  //       Name: folderName,
  //       FolderLocation: folderPath,
  //       PatientID: patientID,
  //       PracticeID: practiceID,
  //     };

  //     // Adding Parent ID if folder is located in a Directory
  //     if (currentPath !== "") {
  //       folderData = {
  //         ...folderData,
  //         ParentID: currentFolder?.ID,
  //       };
  //     }
  //     //

  //     setShowCreateFolder(false);

  //     const response = await createFolder.mutateAsync({
  //       sendData: folderData,
  //       endPoint: endPoints.createEditFolder,
  //     });

  //     if (response?.status === 200) {
  //       setFiles((prev) => {
  //         const newFolder = response.data;
  //         return [
  //           ...prev,
  //           {
  //             ...newFolder,
  //             name: newFolder.Name,
  //             path: currentPath,
  //             isDirectory: true,
  //           },
  //         ];
  //       });
  //       //   dispatch(setSuccessAlert(true));
  //       //   dispatch(setAlertTitle("Folder Created Successfully!"));
  //     }
  //   };
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
  const [isFolderDelete, setIsFolderDelete] = useState(false);
  const [deleteFolderID, setDeleteFolderID] = useState(null);

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

  //   const handleDelete = (file) => {
  //     if (file.isDirectory) {
  //       setDeleteFolderID(file?.ID);
  //       setIsFolderDelete(true);
  //     } else {
  //       setDeleteFileID(file?.ID);
  //       setIsFileDelete(true);
  //     }
  //     setShowDelete(false);
  //   };
  //

  //   useEffect(() => {
  //     return () => {
  //       deleteFolder.remove();
  //       deleteFile.remove();
  //     };
  //   }, []);

  const [colSizes, setColSizes] = useState({ col1: "20", col2: "80" });
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const containerRef = useRef(null);

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

  // No Patient Selected
  //   if (!patientID) {
  //     return (
  //       <div className="file-explorer border-0">
  //         <h6 className="centered-div h-100 text-primary-color">
  //           Please Select a Pateint!
  //         </h6>
  //       </div>
  //     );
  //   }
  //

  return (
    <>
      <main className="file-explorer">
        {/* {(getPatientFolders?.isLoading ||
          getPatientFolders?.isFetching ||
          getPatientFolders?.isRefetching ||
          createFolder?.isLoading ||
          deleteFolder?.isLoading ||
          deleteFolder?.isFetching ||
          deleteFile?.isLoading ||
          deleteFile?.isFetching) && (
          <div className="file-explorer-loading">
            <ReactLoading
              type={"spokes"}
              color={"#000"}
              height={"45px"}
              width={"45px"}
            />
          </div>
        )} */}
        <section
          className={`toolbar ${isItemSelection ? "file-selected" : ""}`}
        >
          <FileExplorerToolbar
            allowCreateFolder
            allowUploadFile
            // handleCreateFolder={handleCreateFolder}
            // handleFileUpload={handleFileUpload}
            // handleRefreshFiles={handleRefreshFiles}
            currentPathFiles={currentPathFiles}
            isItemSelection={isItemSelection}
            currentPath={currentPath}
            currentFolder={currentFolder}
            setIsItemSelection={setIsItemSelection}
            setShowDelete={setShowDelete}
            setFiles={setFiles}
            // handleDelete={handleDelete}
          />
        </section>
        <div
          ref={containerRef}
          className="px-0"
          //   fluid
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <div className="files-container">
            <div
              className="folders-sidebar"
              style={{ width: colSizes.col1 + "%" }}
            >
              <SideBarDirectories
                files={files}
                currentPath={currentPath}
                setCurrentPath={setCurrentPath}
              />
              <div
                className={`sidebar-resize ${
                  isDragging ? "sidebar-dragging" : ""
                }`}
                onMouseDown={handleMouseDown}
              />
            </div>
            <div
              className="px-0 folers-preview"
              style={{ width: colSizes.col2 + "%" }}
            >
              <section
                style={{
                  borderBottom: "1px solid #dddddd",
                  padding: "10px 15px",
                }}
              >
                <FoldersPath
                  currentPath={currentPath}
                  setCurrentPath={setCurrentPath}
                />
              </section>
              <section
                style={{
                  padding: "8px",
                  paddingRight: "4px",
                }}
              >
                <Files
                  currentPathFiles={currentPathFiles}
                  setCurrentPath={setCurrentPath}
                  isItemSelection={isItemSelection}
                  setIsItemSelection={setIsItemSelection}
                  setSelectedFile={setSelectedFile}
                  setShowDelete={setShowDelete}
                  currentPath={currentPath}
                />
              </section>
            </div>
          </div>
        </div>

        {/* Delete Folder/File */}
        {/* <FileExplorerAction
          heading={"Delete"}
          show={showDelete}
          setShow={setShowDelete}
          dialogClassName={"w-25"}
        >
          <p className="p-3 mb-2 border-bottom">
            Are you sure you want to delete {selectedFile?.name}?
          </p>
          <div className="d-flex gap-2 justify-content-end mb-2 me-2">
            <BsButton variant="secondary" onClick={() => setShowDelete(false)}>
              Cancel
            </BsButton>
            <BsButton
              variant="danger"
              autoFocus
              onClick={() => handleDelete(selectedFile)}
            >
              Delete
            </BsButton>
          </div>
        </FileExplorerAction> */}
        {/* Delete Folder/File */}
      </main>
    </>
  );
};
export default FileManager;
