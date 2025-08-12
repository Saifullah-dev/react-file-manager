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
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });

  useEffect(() => {
    if (Array.isArray(files) && files.length > 0) {
      setCurrentPathFiles(() => {
        const currPathFiles = files.filter((file) => file.path === `${currentPath}/${file.name}`);
        return sortFiles(currPathFiles, sortConfig.key, sortConfig.direction);
      });

      setCurrentFolder(() => {
        return files.find((file) => file.path === currentPath) ?? null;
      });
    }
  }, [files, currentPath, sortConfig]);

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
        sortConfig,
        setSortConfig,
      }}
    >
      {children}
    </FileNavigationContext.Provider>
  );
};

export const useFileNavigation = () => useContext(FileNavigationContext);
