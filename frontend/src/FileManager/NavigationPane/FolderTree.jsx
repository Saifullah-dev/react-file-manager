import React, { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import { FaRegFolder, FaRegFolderOpen } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useFileNavigation } from "../../contexts/FileNavigationContext";

const FolderTree = ({ folder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { currentPath, setCurrentPath } = useFileNavigation();

  const handleFolderSwitch = () => {
    setIsActive(true);
    setCurrentPath(folder.path);
  };

  const handleCollapseChange = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsActive(currentPath === folder.path); //Setting isActive to a folder if its path matches currentPath

    // Auto expand parent folder if its child is accessed via file navigation
    // Explanation: Checks if the current folder's parent path matches with any folder path i.e. Folder's parent
    // then expand that parent.
    const currentPathArray = currentPath.split("/");
    currentPathArray.pop(); //splits with '/' and pops to remove last element to get current folder's parent path
    const currentFolderParentPath = currentPathArray.join("/");
    if (currentFolderParentPath === folder.path) {
      setIsOpen(true);
    }
    //
  }, [currentPath]);

  if (folder.subDirectories.length > 0) {
    return (
      <>
        <div
          className={`sb-folders-list-item ${isActive ? "active-list-item" : ""}`}
          onClick={handleFolderSwitch}
        >
          <span onClick={handleCollapseChange}>
            <MdKeyboardArrowRight
              size={20}
              className={`${isOpen ? "folder-rotate-down" : "folder-rotate-right"}`}
            />
          </span>
          <div className="sb-folder-details">
            {isOpen || isActive ? (
              <FaRegFolderOpen size={20} className="folder-open-icon" />
            ) : (
              <FaRegFolder size={17} className="folder-close-icon" />
            )}
            <span className="sb-folder-name" title={folder.name}>
              {folder.name}
            </span>
          </div>
        </div>
        <Collapsible open={isOpen}>
          <div className="folder-collapsible">
            {folder.subDirectories.map((item, index) => (
              <FolderTree key={index} folder={item} />
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
            <FaRegFolderOpen size={20} className="folder-open-icon" />
          ) : (
            <FaRegFolder size={17} className="folder-close-icon" />
          )}
          <span className="sb-folder-name" title={folder.name}>
            {folder.name}
          </span>
        </div>
      </div>
    );
  }
};

export default FolderTree;
