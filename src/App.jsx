import { useState } from "react";
import FileManager from "./File Manager/FileManager";

function App() {
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
  const [isLoading, setIsLoading] = useState(false);

  // Create Folder
  const handleCreateFolder = (folderName, currentPath) => {
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

  // Rename File/Folder
  const handleRename = (selectedFile, newName) => {
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
  };
  //

  // Delete File/Folder
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
  };
  //

  // Paste File/Folder
  const getCopiedFiles = (file, pastePath) => {
    const children = file.children ?? [];
    return [
      { name: file.name, isDirectory: file.isDirectory, path: pastePath },
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

  const handlePaste = (pastePath, clipBoard, filesCopied) => {
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
  };
  //

  // Refresh Files
  const handleRefresh = () => {
    // Refresh Files API call here...
  };
  //

  return (
    <FileManager
      files={files}
      onCreateFolder={handleCreateFolder}
      onRename={handleRename}
      onDelete={handleDelete}
      onPaste={handlePaste}
      onRefresh={handleRefresh}
      isLoading={isLoading}
      allowedFileExtensions=".txt, .png, .jpg, .jpeg, .pdf, .doc, .docx"
    />
  );
}

export default App;
