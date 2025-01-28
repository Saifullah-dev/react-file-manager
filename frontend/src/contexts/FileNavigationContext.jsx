import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useFiles } from "./FilesContext";
import sortFiles from "../utils/sortFiles";

const FileNavigationContext = createContext();

export const FileNavigationProvider = ({ children, initialPath }) => {
  const { files } = useFiles();
  const isMountRef = useRef(false);
  const [currentPath, setCurrentPath] = useState("");
  const [currentFolder, setCurrentFolder] = useState(null);
  const [currentPathFiles, setCurrentPathFiles] = useState([]);

  useEffect(() => {
    if (Array.isArray(files) && files.length > 0) {
      setCurrentPathFiles(() => {
        const currPathFiles = files.filter((file) => file.path === `${currentPath}/${file.name}`);
        return sortFiles(currPathFiles);
      });

      setCurrentFolder(() => {
        return files.find((file) => file.path === currentPath) ?? null;
      });
    }
  }, [files, currentPath]);

  useEffect(() => {
    if (!isMountRef.current && Array.isArray(files) && files.length > 0) {
      setCurrentPath(files.some((file) => file.path === initialPath) ? initialPath : "");
      isMountRef.current = true;
    }
  }, [initialPath, files]);

  return (
    <FileNavigationContext.Provider
      value={{
        currentPath,
        setCurrentPath,
        currentFolder,
        setCurrentFolder,
        currentPathFiles,
        setCurrentPathFiles,
      }}
    >
      {children}
    </FileNavigationContext.Provider>
  );
};

export const useFileNavigation = () => useContext(FileNavigationContext);
