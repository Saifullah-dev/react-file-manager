import { useEffect, useRef, useState } from "react";
import FileManager from "./FileManager/FileManager";
import { createFolderAPI } from "./api/createFolderAPI";
import { renameAPI } from "./api/renameAPI";
import { deleteAPI } from "./api/deleteAPI";
import { copyItemAPI, moveItemAPI } from "./api/fileTransferAPI";
import { getAllFilesAPI } from "./api/getAllFilesAPI";
import { downloadFile } from "./api/downloadFileAPI";
import "./App.scss";
import { FaRegPaste, FaRegUser } from "react-icons/fa6";

function App() {
  const fileUploadConfig = {
    url: import.meta.env.VITE_API_BASE_URL + "/upload",
  };
  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const isMountRef = useRef(false);

  // Get Files
  const getFiles = async () => {
    setIsLoading(true);
    const response = await getAllFilesAPI();
    setFiles(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (isMountRef.current) return;
    isMountRef.current = true;
    getFiles();
  }, []);
  //

  // Create Folder
  const handleCreateFolder = async (name, parentFolder) => {
    setIsLoading(true);
    const response = await createFolderAPI(name, parentFolder?._id);
    if (response.status === 200 || response.status === 201) {
      setFiles((prev) => [...prev, response.data]);
    } else {
      console.error(response);
    }
    setIsLoading(false);
  };
  //

  // File Upload Handlers
  const handleFileUploading = (file, parentFolder) => {
    return { parentId: parentFolder?._id };
  };

  const handleFileUploaded = (response) => {
    const uploadedFile = JSON.parse(response);
    setFiles((prev) => [...prev, uploadedFile]);
  };
  //

  // Rename File/Folder
  const handleRename = async (file, newName) => {
    setIsLoading(true);
    const response = await renameAPI(file._id, newName);
    if (response.status === 200) {
      getFiles();
    } else {
      console.error(response);
    }
    setIsLoading(false);
  };
  //

  // Delete File/Folder
  const handleDelete = async (files) => {
    setIsLoading(true);
    const idsToDelete = files.map((file) => file._id);
    const response = await deleteAPI(idsToDelete);
    if (response.status === 200) {
      getFiles();
    } else {
      console.error(response);
      setIsLoading(false);
    }
  };
  //

  // Paste File/Folder
  const handlePaste = async (copiedItems, destinationFolder, operationType) => {
    setIsLoading(true);
    const copiedItemIds = copiedItems.map((item) => item._id);
    if (operationType === "copy") {
      const response = await copyItemAPI(copiedItemIds, destinationFolder?._id);
    } else {
      const response = await moveItemAPI(copiedItemIds, destinationFolder?._id);
    }
    await getFiles();
  };
  //

  const handleLayoutChange = (layout) => {
    console.log(layout);
  };

  // Refresh Files
  const handleRefresh = () => {
    getFiles();
  };
  //

  const handleFileOpen = (file) => {
    console.log(`Opening file: ${file.name}`);
  };

  const handleCustomAction = (file) => {
    console.log(`Custom Action:`, file);
  };

  const handleError = (error, file) => {
    console.error(error);
  };

  const handleDownload = async (files) => {
    await downloadFile(files);
  };

  const handleCut = (files) => {
    console.log("Moving Files", files);
  };

  const handleCopy = (files) => {
    console.log("Copied Files", files);
  };

  const handleSelect = (files) => {
    console.log("Selected Files", files);
  };

  return (
    <div className="app">
      <div className="file-manager-container">
        <FileManager
          config={{
            actions: [
              {
                key: "open",
                onClick: handleFileOpen,
              },
              {
                key: "copy",
                onClick: handleCopy,
              },
              {
                title: "Move",
                key: "cut",
                onClick: handleCut,
              },
              {
                title: "Paste",
                key: "paste",
                onClick: handlePaste,
              },
              {
                title: "Rename",
                key: "rename",
                onClick: handleRename,
              },
              {
                title: "Delete",
                key: "delete",
                onClick: handleDelete,
              },
              {
                title: "Download",
                key: "download",
                onClick: handleDownload,
              },
              {
                title: "Custom Menu Action",
                key: "custom-action",
                onClick: handleCustomAction,
                showToolbar: false,
                showMenu: true,
                multiple: false,
                applyTo: [''], // TODO: types of file on which action will be visible (undefined | folder | pdf | mp4 | ect...)
                icon: <FaRegPaste size={18} />,
                hidden: false
              },
              {
                title: "Toolbar Action",
                key: "custom-tb-action",
                onClick: handleCustomAction,
                showToolbar: true,
                showMenu: false,
                multiple: false,
                applyTo: [''],
                icon: <FaRegUser size={18} />,
                hidden: false
              },
            ],
          }}
          files={files}
          fileUploadConfig={fileUploadConfig}
          isLoading={isLoading}
          onCreateFolder={handleCreateFolder}
          onFileUploading={handleFileUploading}
          onFileUploaded={handleFileUploaded}
          onDownload={handleDownload}
          onLayoutChange={handleLayoutChange}
          onRefresh={handleRefresh}
          onFileOpen={handleFileOpen}
          onSelect={handleSelect}
          onError={handleError}
          layout="grid"
          enableFilePreview
          maxFileSize={10485760}
          filePreviewPath={import.meta.env.VITE_API_FILES_BASE_URL}
          acceptedFileTypes=".txt, .png, .jpg, .jpeg, .pdf, .doc, .docx, .exe"
          height="100%"
          width="100%"
          initialPath=""
        />
      </div>
    </div>
  );
}

export default App;
