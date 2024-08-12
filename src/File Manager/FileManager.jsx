import { useEffect, useRef, useState } from "react";
import "./FileManager.scss";
import Toolbar from "./Toolbar/Toolbar";
import NavigationPane from "./Navigation Pane/NavigationPane";
import BreadCrumb from "./Bread Crumb/BreadCrumb";
import Files from "./Files/Files";
import { useTriggerAction } from "../hooks/useTriggerAction";
import Actions from "./Actions/Actions";

const allowedFileExtensions = [".txt", ".png", ".jpg", ".jpeg", ".pdf", ".doc", ".docx"];

const FileManager = () => {
  const triggerAction = useTriggerAction();

  // States
  const [isItemSelection, setIsItemSelection] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null); // This will be selectedFiles as an array for multiple selection in future
  const [currentPath, setCurrentPath] = useState("");
  const [currentPathFiles, setCurrentPathFiles] = useState([]);
  const [currentFolder, setCurrentFolder] = useState(null);
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

  // Settings Current Path Files
  useEffect(() => {
    setCurrentPathFiles(() => {
      return files?.filter((file) => file.path === currentPath);
    });

    setCurrentFolder(() => {
      if (currentPath === "") {
        return null;
      } else {
        return files?.find((file) => file.path === currentPath);
      }
    });
  }, [files, currentPath]);
  //

  // Create Folder
  const handleCreateFolder = async (folderName) => {
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
  };
  //

  // Handle Paste
  const getCopiedFiles = (file, pastePath) => {
    const children = file.children ?? [];
    delete file.children;
    return [
      { ...file, path: pastePath },
      ...children.flatMap((child) => getCopiedFiles(child, pastePath + "/" + file.name)),
    ];
  };

  const handleDuplicateFile = (file, pastePath, pastePathFiles) => {
    if (file.path === pastePath || pastePathFiles.find((f) => f.name === file.name)) {
      const fileExtension = file.isDirectory ? "" : "." + file.name.split(".").pop();
      const fileName = file.isDirectory ? file.name : file.name.split(".").slice(0, -1).join(".");

      // Generating new file name for duplicate file
      let maxFileNum = 0;
      // If there exists a file with name fileName (1), fileName (2), etc.
      // Check if the number is greater than the maxFileNum, then set it to that greater number
      const fileNameRegex = new RegExp(`${fileName} \\(\\d+\\)`);
      pastePathFiles.forEach((f) => {
        const fName = f.isDirectory ? f.name : f.name.split(".").slice(0, -1).join(".");
        if (fileNameRegex.test(fName)) {
          const fileNumStr = fName.split(`${fileName} (`).pop().slice(0, -1);
          const fileNum = parseInt(fileNumStr);
          if (!isNaN(fileNum) && fileNum > maxFileNum) {
            maxFileNum = fileNum;
          }
        }
      });
      const appendNum = ` (${++maxFileNum})`;
      const newFileName = fileName + appendNum + fileExtension;
      //

      return { ...file, name: newFileName };
    } else {
      return file;
    }
  };

  const handlePaste = (e, pastePath, filesCopied) => {
    setFiles((prevFiles) => {
      if (clipBoard.isMoving) {
        prevFiles = prevFiles.filter((f) => {
          return !filesCopied.find((cf) => cf.name === f.name && cf.path === f.path);
        });
      }

      return [
        ...prevFiles,
        ...clipBoard.files.flatMap((file) => {
          const pastePathFiles = prevFiles.filter((f) => f.path === pastePath);
          const nonDuplicateFile = handleDuplicateFile(file, pastePath, pastePathFiles);
          return getCopiedFiles(nonDuplicateFile, pastePath);
        }),
      ];
    });

    clipBoard.isMoving && setClipBoard(null);
    setIsItemSelection(false);
    setSelectedFile(null);
  };
  //

  const handleDelete = (file) => {
    if (file.isDirectory) {
      setFiles((prev) => {
        return prev.filter((f) => {
          const folderToDelete = f.path === file.path && f.name === file.name;
          const folderChildren = f.path.startsWith(file.path + "/" + file.name);
          return !folderToDelete && !folderChildren;
        });
      });
    } else {
      setFiles((prev) => {
        return prev.filter((f) => !(f.name === file.name && f.path === file.path));
      });
    }
    setIsItemSelection(false);
    setSelectedFile(null);
  };
  //

  // Rename Folder/File
  const handleFileRename = async (selectedFile, newName) => {
    setFiles((prev) => {
      return prev.map((file) => {
        if (file.name === selectedFile?.name && file.path === selectedFile?.path) {
          return {
            // Rename the file itself
            ...file,
            name: newName,
          };
        } else if (file.path.startsWith(selectedFile.path + "/" + selectedFile.name)) {
          // Path update for all files in the folder
          const basePath = selectedFile.path + "/" + selectedFile.name;
          const newBasePath = basePath.split("/").slice(0, -1).join("/") + "/" + newName;
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
    setSelectedFile((prev) => ({ ...prev, name: newName }));
  };

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
    <main className="file-explorer">
      <Toolbar
        allowCreateFolder
        allowUploadFile
        // handleFileUpload={handleFileUpload}
        // handleRefreshFiles={handleRefreshFiles}
        currentPathFiles={currentPathFiles}
        isItemSelection={isItemSelection}
        currentPath={currentPath}
        currentFolder={currentFolder}
        setIsItemSelection={setIsItemSelection}
        selectedFile={selectedFile}
        files={files}
        setFiles={setFiles}
        clipBoard={clipBoard}
        setClipBoard={setClipBoard}
        handlePaste={handlePaste}
        triggerAction={triggerAction}
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

        <div className="folers-preview" style={{ width: colSizes.col2 + "%" }}>
          <BreadCrumb currentPath={currentPath} setCurrentPath={setCurrentPath} />
          <Files
            currentPathFiles={currentPathFiles}
            setCurrentPath={setCurrentPath}
            isItemSelection={isItemSelection}
            setIsItemSelection={setIsItemSelection}
            setSelectedFile={setSelectedFile}
            currentPath={currentPath}
            clipBoard={clipBoard}
            setClipBoard={setClipBoard}
            handlePaste={handlePaste}
            files={files}
            triggerAction={triggerAction}
          />
        </div>
      </section>

      <Actions
        currentPath={currentPath}
        currentPathFiles={currentPathFiles}
        selectedFile={selectedFile}
        triggerAction={triggerAction}
        handleCreateFolder={handleCreateFolder}
        handleFileRename={handleFileRename}
        handleDelete={handleDelete}
      />
    </main>
  );
};
export default FileManager;
