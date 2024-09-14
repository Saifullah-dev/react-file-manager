import { useEffect, useRef, useState } from "react";
import { MdHome, MdMoreHoriz, MdOutlineNavigateNext } from "react-icons/md";
import { useFileNavigation } from "../../contexts/FileNavigationContext";
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";
import "./BreadCrumb.scss";

const BreadCrumb = () => {
  const [folders, setFolders] = useState([]);
  const [hiddenFolders, setHiddenFolders] = useState([]);
  const [hiddenFoldersWidth, setHiddenFoldersWidth] = useState([]);
  const [showHiddenFolders, setShowHiddenFolders] = useState(false);

  const { currentPath, setCurrentPath } = useFileNavigation();
  const breadCrumbRef = useRef(null);
  const foldersRef = useRef([]);
  const moreBtnRef = useRef(null);
  const popoverRef = useDetectOutsideClick(() => {
    setShowHiddenFolders(false);
  });

  useEffect(() => {
    setFolders(() => {
      let path = "";
      return currentPath?.split("/").map((item) => {
        return {
          name: item || "Home",
          path: item === "" ? item : (path += `/${item}`),
        };
      });
    });
    setHiddenFolders([]);
    setHiddenFoldersWidth([]);
  }, [currentPath]);

  const switchPath = (path) => {
    setCurrentPath(path);
  };

  const getBreadCrumbWidth = () => {
    const containerWidth = breadCrumbRef.current.clientWidth;
    const containerStyles = getComputedStyle(breadCrumbRef.current);
    const paddingLeft = parseFloat(containerStyles.paddingLeft);
    const moreBtnGap = hiddenFolders.length > 0 ? 1 : 0;
    const flexGap = parseFloat(containerStyles.gap) * (folders.length + moreBtnGap);
    return containerWidth - (paddingLeft + flexGap);
  };

  const checkAvailableSpace = () => {
    const availableSpace = getBreadCrumbWidth();
    const remainingFoldersWidth = foldersRef.current.reduce((prev, curr) => {
      if (!curr) return prev;
      return prev + curr.clientWidth;
    }, 0);
    const moreBtnWidth = moreBtnRef.current?.clientWidth || 0;
    return availableSpace - (remainingFoldersWidth + moreBtnWidth);
  };

  const isBreadCrumbOverflowing = () => {
    return breadCrumbRef.current.scrollWidth > breadCrumbRef.current.clientWidth;
  };

  useEffect(() => {
    if (isBreadCrumbOverflowing()) {
      const hiddenFolder = folders[1];
      const hiddenFolderWidth = foldersRef.current[1]?.clientWidth;
      setHiddenFoldersWidth((prev) => [...prev, hiddenFolderWidth]);
      setHiddenFolders((prev) => [...prev, hiddenFolder]);
      setFolders((prev) => prev.filter((_, index) => index !== 1));
    } else if (hiddenFolders.length > 0 && checkAvailableSpace() > hiddenFoldersWidth.at(-1)) {
      const newFolders = [folders[0], hiddenFolders.at(-1), ...folders.slice(1)];
      setFolders(newFolders);
      setHiddenFolders((prev) => prev.slice(0, -1));
      setHiddenFoldersWidth((prev) => prev.slice(0, -1));
    }
  }, [isBreadCrumbOverflowing]);

  return (
    <div className="bread-crumb-container">
      <div className="breadcrumb" ref={breadCrumbRef}>
        {folders.map((folder, index) => (
          <div key={index} style={{ display: "contents" }}>
            <span
              className="folder-name"
              onClick={() => switchPath(folder.path)}
              ref={(el) => (foldersRef.current[index] = el)}
            >
              {index === 0 ? <MdHome /> : <MdOutlineNavigateNext />}
              {folder.name}
            </span>
            {hiddenFolders?.length > 0 && index === 0 && (
              <button
                className="folder-name folder-name-btn"
                onClick={() => setShowHiddenFolders(true)}
                ref={moreBtnRef}
                title="Show more folders"
              >
                <MdMoreHoriz size={22} className="hidden-folders" />
              </button>
            )}
          </div>
        ))}
      </div>

      {showHiddenFolders && (
        <ul ref={popoverRef.ref} className="hidden-folders-container">
          {hiddenFolders.map((folder, index) => (
            <li
              key={index}
              onClick={() => {
                switchPath(folder.path);
                setShowHiddenFolders(false);
              }}
            >
              {folder.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BreadCrumb;
