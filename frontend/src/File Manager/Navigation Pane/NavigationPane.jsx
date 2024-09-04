import React, { useEffect, useState } from "react";
import SideBarSubDirectories from "./SideBarSubDirectories";
import { getParentPath } from "../../utils/getParentPath";

const NavigationPane = ({ files, currentPath, setCurrentPath }) => {
  const [foldersTree, setFoldersTree] = useState([]);

  const createChildRecursive = (path, foldersStruct) => {
    if (!foldersStruct[path]) return []; // No children for this path (folder)

    return foldersStruct[path]?.map((folder) => {
      return {
        ...folder,
        subDirectories: createChildRecursive(folder.path, foldersStruct),
      };
    });
  };

  useEffect(() => {
    if (Array.isArray(files)) {
      const folders = files.filter((file) => file.isDirectory);
      // Grouping folders by parent path
      const foldersStruct = Object.groupBy(folders, ({ path }) => getParentPath(path));
      setFoldersTree(() => {
        const rootPath = "";
        return createChildRecursive(rootPath, foldersStruct);
      });
    }
  }, [files]);

  return (
    <div className="sb-folders-list">
      {foldersTree?.length > 0 ? (
        <>
          {foldersTree?.map((folder, index) => {
            return (
              <SideBarSubDirectories
                key={index}
                folder={folder}
                setCurrentPath={setCurrentPath}
                currentPath={currentPath}
              />
            );
          })}
        </>
      ) : (
        <div className="empty-nav-pane">Nothing here yet</div>
      )}
    </div>
  );
};

export default NavigationPane;
