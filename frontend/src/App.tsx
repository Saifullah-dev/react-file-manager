import { useEffect, useRef, useState } from "react";
import { createFolderAPI } from "./api/createFolderAPI";
import { deleteAPI } from "./api/deleteAPI";
import { downloadFile } from "./api/downloadFileAPI";
import { copyItemAPI, moveItemAPI } from "./api/fileTransferAPI";
import { getAllFilesAPI } from "./api/getAllFilesAPI";
import { renameAPI } from "./api/renameAPI";
import "./App.scss";
import FileManager from "./FileManager/FileManager";
import { Layout } from "./types/Layout";
import { 
  OnCopy,
  OnCreateFolder,
  OnCut,
  OnDelete,
  OnDownload,
  OnError,
  OnFileOpen,
  OnFileUploaded,
  OnFileUploading,
  OnLayoutChange,
  OnPaste,
  OnRefresh,
  OnRename,
  OnSelectionChange 
} from "./types/FileManagerFunctions";
import { FileItem } from "./types/File";

function App() {
  const fileUploadConfig = {
    url: import.meta.env.VITE_API_BASE_URL + "/upload",
  };
  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState<FileItem[]>([]);
  const [currentPath, setCurrentPath] = useState("");
  const isMountRef = useRef(false);

  // Get Files
  const getFiles = async () => {
    setIsLoading(true);
    const response = await getAllFilesAPI();
    
    if (response.status === 200 && response.data) {
      setFiles(response.data);
    } else {
      console.error(response);
      setFiles([]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (isMountRef.current) return;
    isMountRef.current = true;
    getFiles();
  }, []);
  //

  // Create Folder
  const handleCreateFolder : OnCreateFolder = async (name, parentFolder) => {
    setIsLoading(true);
    const response = await createFolderAPI(name, parentFolder?._id as string);
    if (response.status === 200 || response.status === 201) {
      setFiles((prev) => [...prev, response.data]);
    } else {
      console.error(response);
    }
    setIsLoading(false);
  };
  //

  // File Upload Handlers
  const handleFileUploading : OnFileUploading = (file, parentFolder) => {
    console.log(`Uploading file with name ${file.name}`)
    return { parentId: parentFolder?._id };
  };

  const handleFileUploaded : OnFileUploaded = (response) => {
    const uploadedFile = response as FileItem;
    setFiles((prev) => [...prev, uploadedFile]);
  };
  //

  // Rename File/Folder
  const handleRename : OnRename = async (file, newName) => {
    setIsLoading(true);
    const response = await renameAPI(file._id as string, newName);
    if (response.status === 200) {
      getFiles();
    } else {
      console.error(response);
    }
    setIsLoading(false);
  };
  //

  // Delete File/Folder
  const handleDelete : OnDelete = async (files) => {
    setIsLoading(true);
    const idsToDelete = files.map((file) => file._id as string);
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
  const handlePaste : OnPaste = async (copiedItems, destinationFolder, operationType) => {
    setIsLoading(true);
    const copiedItemIds = copiedItems.map((item) => item._id as string);
    if (operationType === "copy") {
      await copyItemAPI(copiedItemIds, destinationFolder?._id as string);
    } else {
      await moveItemAPI(copiedItemIds, destinationFolder?._id as string);
    }
    await getFiles();
  };
  //

  const handleLayoutChange : OnLayoutChange = (layout : Layout) => {
    console.log(layout);
  };

  // Refresh Files
  const handleRefresh : OnRefresh = () => {
    getFiles();
  };
  //

  const handleFileOpen : OnFileOpen = (file) => {
    console.log(`Opening file: ${file.name} ${file.id}`);
  };

  const handleError : OnError = (error, file) => {
    console.error(`An error occured for file ${file.name}`, error);
  };

  const handleDownload : OnDownload = async (files) => {
    await downloadFile(files);
  };

  const handleCut : OnCut = (files) => {
    console.log("Moving Files", files);
  };

  const handleCopy : OnCopy = (files) => {
    console.log("Copied Files", files);
  };

  const handleSelectionChange : OnSelectionChange = (files) => {
    console.log("Selected Files", files);
  };

  return (
    <div className="app">
      <div className="file-manager-container">
        <FileManager
          files={files}
          fileUploadConfig={fileUploadConfig}
          isLoading={isLoading}
          onCreateFolder={handleCreateFolder}
          onFileUploading={handleFileUploading}
          onFileUploaded={handleFileUploaded}
          onCut={handleCut}
          onCopy={handleCopy}
          onPaste={handlePaste}
          onRename={handleRename}
          onDownload={handleDownload}
          onDelete={handleDelete}
          onLayoutChange={handleLayoutChange}
          onRefresh={handleRefresh}
          onFileOpen={handleFileOpen}
          onSelectionChange={handleSelectionChange}
          onError={handleError}
          layout="grid"
          enableFilePreview
          maxFileSize={10485760}
          filePreviewPath={import.meta.env.VITE_API_FILES_BASE_URL}
          acceptedFileTypes=".txt, .png, .jpg, .jpeg, .pdf, .doc, .docx, .exe"
          height="100%"
          width="100%"
          initialPath={currentPath}
          onFolderChange={setCurrentPath}
        />
      </div>
    </div>
  );
}

export default App;
