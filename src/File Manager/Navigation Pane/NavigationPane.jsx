import React, { useEffect, useState } from "react";
import SideBarSubDirectories from "./SideBarSubDirectories";

const NavigationPane = ({ files, currentPath, setCurrentPath }) => {
  const [foldersTree, setFoldersTree] = useState([]);

  const createSubDirectories = (folder, foldersStruct) => {
    var pathName = folder.path + "/" + folder.name;
    if (foldersStruct[pathName]) {
      return foldersStruct[pathName]?.map((item) => {
        return {
          ...item,
          subDirectories: createSubDirectories(item, foldersStruct),
        };
      });
    } else {
      return null;
    }
  };

  useEffect(() => {
    const folders = files.filter((file) => file.isDirectory);
    const foldersStruct = Object.groupBy(folders, ({ path }) => path);
    setFoldersTree(() => {
      if (folders.length > 0) {
        return foldersStruct[""]?.map((folder) => {
          //Root Directory Folders
          return {
            ...folder,
            subDirectories: createSubDirectories(folder, foldersStruct),
          };
        });
      } else {
        return [];
      }
    });
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
