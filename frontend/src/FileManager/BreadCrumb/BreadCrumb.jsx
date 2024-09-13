import { useEffect, useRef, useState } from "react";
import { MdHome, MdMoreHoriz, MdOutlineNavigateNext } from "react-icons/md";
import { useFileNavigation } from "../../contexts/FileNavigationContext";
import "./BreadCrumb.scss";

const BreadCrumb = () => {
  const [folders, setFolders] = useState([]);
  const [hiddenFoldersIndexes, setHiddenFoldersIndexes] = useState([]);
  const { currentPath, setCurrentPath } = useFileNavigation();
  const breadCrumbRef = useRef(null);
  const foldersRef = useRef([]);

  const [hiddenFolders, setHiddenFolders] = useState([]);
  const [hiddenFoldersWidth, setHiddenFoldersWidth] = useState([]);

  const getBreadCrumbWidth = () => {
    const containerWidth = breadCrumbRef.current.clientWidth;
    const containerStyles = getComputedStyle(breadCrumbRef.current);
    const paddingLeft = parseFloat(containerStyles.paddingLeft);
    const flexGap = parseFloat(containerStyles.gap) * (folders.length - 1);
    return containerWidth - (paddingLeft + flexGap);
  };

  const isBreadCrumbOverflowing = () => {
    return breadCrumbRef.current.scrollWidth > breadCrumbRef.current.clientWidth;
  };

  // Change Hidden Folders on resize
  // useEffect(() => {
  //   if (folders.length > 0) {
  //     const homeFolderWidth = foldersRef.current[0].clientWidth;
  //     const availableSpace = getBreadCrumbWidth() - homeFolderWidth;

  //     setHiddenFoldersIndexes(() => {
  //       return folders.map((_, index) => {
  //         if (index === 0) return false;

  //         const remainingFolders = foldersRef.current.slice(index);
  //         const remainingFoldersWidth = remainingFolders.reduce((prev, curr) => {
  //           if (!curr) return prev;
  //           return prev + curr.clientWidth;
  //         }, 0);

  //         if (remainingFoldersWidth > availableSpace) return true;
  //         else return false;
  //       });
  //     });
  //   }
  // }, [folders]);
  //

  useEffect(() => {
    setFolders(currentPath?.split("/"));
    setHiddenFolders([]);
    setHiddenFoldersWidth([]);
  }, [currentPath]);

  const switchPath = (index) => {
    if (index < folders.length - 1) {
      setCurrentPath(() => {
        const toSlice = folders.length + hiddenFolders.length - (index + 1 + hiddenFolders.length);
        const copyFolders = folders.slice(1);
        const switchFolders = ["", ...hiddenFolders, ...copyFolders].slice(0, -toSlice);
        foldersRef.current = foldersRef.current.slice(0, -toSlice);
        return switchFolders.join("/");
      });
    }
  };

  const checkAvailableSpace = () => {
    const availableSpace = getBreadCrumbWidth();
    const remainingFoldersWidth = foldersRef.current.reduce((prev, curr) => {
      if (!curr) return prev;
      return prev + curr.clientWidth;
    }, 0);

    return availableSpace - remainingFoldersWidth;
  };

  useEffect(() => {
    if (isBreadCrumbOverflowing()) {
      const hiddenFolder = folders[1];
      setHiddenFoldersWidth((prev) => [...prev, foldersRef.current[1].clientWidth]);
      setHiddenFolders((prev) => [...prev, hiddenFolder]);
      setFolders((prev) => prev.filter((_, index) => index !== 1));
      foldersRef.current = foldersRef.current.filter((_, index) => index !== 1);
    }
  }, [isBreadCrumbOverflowing]);

  // useEffect(() => {
  //   if (checkAvailableSpace() >= hiddenFoldersWidth.at(-1) && hiddenFolders.length > 0) {
  //     setFolders((prev) => {
  //       const prevFolders = prev.slice(hiddenFolders.length);
  //       const newFolders = ["", hiddenFolders.at(-1), ...prevFolders];
  //       return newFolders;
  //     });
  //     setHiddenFolders((prev) => prev.slice(0, -1));
  //     setHiddenFoldersWidth((prev) => prev.slice(0, -1));
  //   }
  // }, [breadCrumbRef.current?.clientWidth, currentPath]);

  console.table(folders, "Folders");
  console.table(hiddenFolders, "Hidden Folders");
  console.table(hiddenFoldersWidth, "Hidden Folders Width");

  return (
    <div className="breadcrumb" ref={breadCrumbRef}>
      {folders.map((folder, index) => (
        <span
          key={index}
          className="folder-name"
          onClick={() => switchPath(index)}
          ref={(el) => (foldersRef.current[index] = el)}
        >
          {index === 0 ? (
            <>
              <MdHome /> Home
            </>
          ) : (
            <>
              <MdOutlineNavigateNext /> {folder}
            </>
          )}
        </span>
      ))}
    </div>
  );
};

export default BreadCrumb;
