import { useState } from "react";
import FileManager from "./File Manager/FileManager";
import { createFolderAPI } from "./Mock APIs/createFolderAPI";
import { renameAPI } from "./Mock APIs/renameAPI";
import { deleteAPI } from "./Mock APIs/deleteAPI";
import { fileTransferAPI } from "./Mock APIs/fileTransferAPI";
import { refreshAPI } from "./Mock APIs/refreshAPI";

function App() {
  const fileUploadConfig = {
    url: "https://file.io",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_FILE_IO_API_KEY}`,
    },
  };
  const [isLoading, setIsLoading] = useState(false);
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

  // Create Folder
  const handleCreateFolder = async (files, folderName, folderPath) => {
    setIsLoading(true);
    const responseFiles = await createFolderAPI(files, folderName, folderPath);
    setFiles(responseFiles);
    setIsLoading(false);
  };
  //

  // Rename File/Folder
  const handleRename = async (files, selectedFile, newName) => {
    setIsLoading(true);
    const response = await renameAPI(files, selectedFile, newName);
    setFiles(response);
    setIsLoading(false);
  };
  //

  // Delete File/Folder
  const handleDelete = async (files, file) => {
    setIsLoading(true);
    const response = await deleteAPI(files, file);
    setFiles(response);
    setIsLoading(false);
  };
  //

  // Paste File/Folder
  const handlePaste = async (files, pastePath, clipBoard, filesCopied) => {
    setIsLoading(true);
    const response = await fileTransferAPI(files, pastePath, clipBoard, filesCopied);
    setFiles(response);
    setIsLoading(false);
  };
  //

  // Refresh Files
  const handleRefresh = async () => {
    setIsLoading(true);
    await refreshAPI();
    setIsLoading(false);
  };
  //

  return (
    <FileManager
      files={files}
      fileUploadConfig={fileUploadConfig}
      isLoading={isLoading}
      onCreateFolder={handleCreateFolder}
      onRename={handleRename}
      onDelete={handleDelete}
      onPaste={handlePaste}
      onRefresh={handleRefresh}
      allowedFileExtensions=".txt, .png, .jpg, .jpeg, .pdf, .doc, .docx"
    />
  );
}

export default App;
