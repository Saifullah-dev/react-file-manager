import React, { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import { FaRegFolder, FaRegFolderOpen } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const SideBarSubDirectories = ({ folder, setCurrentPath, currentPath }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const folderPath =
    folder.path === "" ? folder.name : `${folder.path}/${folder.name}`;

  const handleFolderSwitch = () => {
    setIsActive(true);
    setCurrentPath(() => {
      return folderPath;
    });
  };

  const handleCollapseChange = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsActive(currentPath === folderPath); //Setting isActive to a folder if its path matches currentPath

    // Auto expand parent folder if its child is accessed via file navigation
    // Explanation: Checks if the current folder's parent path matches with any folder path i.e. Folder's parent
    // then expand that parent.
    const currentPathArray = currentPath.split("/");
    currentPathArray.pop(); //splits with '/' and pops to remove last element to get current folder's parent path
    const currentFolderParentPath = currentPathArray.join("/");
    if (currentFolderParentPath === folderPath) {
      setIsOpen(true);
    }
    //
  }, [currentPath]);

  if (folder.subDirectories) {
    return (
      <>
        <div
          className={`sb-folders-list-item ${
            isActive ? "active-list-item" : ""
          }`}
          onClick={handleFolderSwitch}
        >
          <span onClick={handleCollapseChange}>
            <MdKeyboardArrowRight
              size={20}
              className={`${
                isOpen ? "folder-rotate-down" : "folder-rotate-right"
              }`}
            />
          </span>
          <div className="sb-folder-details">
            {isOpen || isActive ? (
              <FaRegFolderOpen
                size={20}
                style={{
                  margin: "0 7px",
                }}
              />
            ) : (
              <FaRegFolder
                size={17}
                style={{
                  margin: "1px 9px 0px 8px",
                }}
              />
            )}
            <span className="sb-folder-name" title={folder.name}>
              {folder.name}
            </span>
          </div>
        </div>
        <Collapsible open={isOpen}>
          <div
            style={{
              marginLeft: "10px",
            }}
          >
            {folder.subDirectories.map((item, index) => (
              <SideBarSubDirectories
                key={index}
                folder={item}
                setCurrentPath={setCurrentPath}
                currentPath={currentPath}
              />
            ))}
          </div>
        </Collapsible>
      </>
    );
  } else {
    return (
      <div
        className={`sb-folders-list-item ${isActive ? "active-list-item" : ""}`}
        onClick={handleFolderSwitch}
      >
        <span className="non-expanable"></span>
        <div className="sb-folder-details">
          {isActive ? (
            <FaRegFolderOpen
              size={20}
              style={{
                margin: "0 7px",
              }}
            />
          ) : (
            <FaRegFolder
              size={17}
              style={{
                margin: "1px 9px 0px 8px",
              }}
            />
          )}
          <span className="sb-folder-name" title={folder.name}>
            {folder.name}
          </span>
        </div>
      </div>
    );
  }
};

export default SideBarSubDirectories;
