import { useEffect, useState } from "react";
import FileItem from "./FileItem";

const Files = ({
  currentPathFiles,
  setCurrentPath,
  isItemSelection,
  setIsItemSelection,
  setSelectedFile,
  setShowDelete,
  currentPath,
}) => {
  const [selectedFileIndex, setSelectedFileIndex] = useState(null);

  useEffect(() => {
    setSelectedFileIndex(null);
    setIsItemSelection(false);
    setSelectedFile(null);
  }, [currentPath]);

  return (
    <div
      className="files"
      onClick={(e) => {
        setSelectedFileIndex(null);
        setIsItemSelection(false);
        setSelectedFile(null);
      }}
    >
      {currentPathFiles?.length > 0 ? (
        <>
          {currentPathFiles.map((file, index) => (
            <FileItem
              key={index}
              file={file}
              index={index}
              selectedFileIndex={selectedFileIndex}
              setSelectedFileIndex={setSelectedFileIndex}
              setCurrentPath={setCurrentPath}
              isItemSelection={isItemSelection}
              setIsItemSelection={setIsItemSelection}
              setSelectedFile={setSelectedFile}
              setShowDelete={setShowDelete}
              currentPath={currentPath}
            />
          ))}
        </>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          This folder is empty.
        </div>
      )}
    </div>
  );
};

export default Files;
