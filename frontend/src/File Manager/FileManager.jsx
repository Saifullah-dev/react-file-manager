import { useEffect, useRef, useState } from "react";
import "./FileManager.scss";
import Toolbar from "./Toolbar/Toolbar";
import NavigationPane from "./Navigation Pane/NavigationPane";
import BreadCrumb from "./Bread Crumb/BreadCrumb";
import Files from "./Files/Files";
import { useTriggerAction } from "../hooks/useTriggerAction";
import Actions from "./Actions/Actions";
import Loader from "../components/Loader/Loader";
import PropTypes from "prop-types";

const FileManager = ({
  files,
  fileUploadConfig,
  isLoading,
  onCreateFolder,
  onFileUploading,
  onFileUploaded,
  onRename,
  onDelete,
  onPaste,
  onLayoutChange,
  onRefresh,
  allowedFileExtensions,
}) => {
  const triggerAction = useTriggerAction();

  // States
  const [isItemSelection, setIsItemSelection] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null); // This will be selectedFiles as an array for multiple selection in future
  const [currentPath, setCurrentPath] = useState("");
  const [currentFolder, setCurrentFolder] = useState(null);
  const [currentPathFiles, setCurrentPathFiles] = useState([]);
  const [clipBoard, setClipBoard] = useState(null);
  const [activeLayout, setActiveLayout] = useState("grid");
  //

  // Settings Current Path Files
  useEffect(() => {
    if (Array.isArray(files)) {
      setCurrentPathFiles(() => {
        return files.filter((file) => file.path === `${currentPath}/${file.name}`);
      });

      setCurrentFolder(() => {
        return files?.find((file) => file.path === currentPath);
      });
    }
  }, [files, currentPath]);
  //

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
    const newCol1Size = ((e.clientX - containerRect.left) / containerRect.width) * 100;

    // Limiting the resizing to 15% to 60% for better UX
    if (newCol1Size >= 15 && newCol1Size <= 60) {
      setColSizes({ col1: newCol1Size, col2: 100 - newCol1Size });
    }
  };
  //

  return (
    <main className="file-explorer" onContextMenu={(e) => e.preventDefault()}>
      <Loader isLoading={isLoading} />
      <Toolbar
        allowCreateFolder
        allowUploadFile
        handleRefresh={onRefresh}
        isItemSelection={isItemSelection}
        setIsItemSelection={setIsItemSelection}
        currentPath={currentPath}
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
        files={files}
        clipBoard={clipBoard}
        setClipBoard={setClipBoard}
        handlePaste={onPaste}
        triggerAction={triggerAction}
        activeLayout={activeLayout}
        setActiveLayout={setActiveLayout}
        onLayoutChange={onLayoutChange}
      />
      <section
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        className="files-container"
      >
        <div className="navigation-pane" style={{ width: colSizes.col1 + "%" }}>
          <NavigationPane files={files} currentPath={currentPath} setCurrentPath={setCurrentPath} />
          <div
            className={`sidebar-resize ${isDragging ? "sidebar-dragging" : ""}`}
            onMouseDown={handleMouseDown}
          />
        </div>

        <div className="folders-preview" style={{ width: colSizes.col2 + "%" }}>
          <BreadCrumb currentPath={currentPath} setCurrentPath={setCurrentPath} />
          <Files
            currentPathFiles={currentPathFiles}
            setCurrentPathFiles={setCurrentPathFiles}
            setCurrentPath={setCurrentPath}
            isItemSelection={isItemSelection}
            setIsItemSelection={setIsItemSelection}
            setSelectedFile={setSelectedFile}
            currentPath={currentPath}
            clipBoard={clipBoard}
            setClipBoard={setClipBoard}
            handlePaste={onPaste}
            files={files}
            triggerAction={triggerAction}
            currentFolder={currentFolder}
            handleCreateFolder={onCreateFolder}
            handleRename={onRename}
            activeLayout={activeLayout}
          />
        </div>
      </section>

      <Actions
        files={files}
        fileUploadConfig={fileUploadConfig}
        currentPath={currentPath}
        currentPathFiles={currentPathFiles}
        selectedFile={selectedFile}
        triggerAction={triggerAction}
        handleCreateFolder={onCreateFolder}
        handleFileUploading={onFileUploading}
        handleFileUploaded={onFileUploaded}
        currentFolder={currentFolder}
        handleRename={onRename}
        handleDelete={onDelete}
        setIsItemSelection={setIsItemSelection}
        setSelectedFile={setSelectedFile}
        allowedFileExtensions={allowedFileExtensions}
      />
    </main>
  );
};

FileManager.propTypes = {
  files: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FileManager;
