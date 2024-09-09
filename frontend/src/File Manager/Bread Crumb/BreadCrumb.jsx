import { useEffect, useState } from "react";
import { MdHome, MdOutlineNavigateNext } from "react-icons/md";
import "./BreadCrumb.scss";
import { useFileNavigation } from "../../contexts/FileNavigationContext";

const BreadCrumb = () => {
  const [folders, setFolders] = useState([]);
  const { currentPath, setCurrentPath } = useFileNavigation();

  useEffect(() => {
    setFolders(currentPath?.split("/"));
  }, [currentPath]);

  const switchPath = (index) => {
    if (index < folders.length - 1) {
      setCurrentPath(() => {
        const toSlice = folders.length - (index + 1);
        const switchFolders = folders.slice(0, -toSlice);
        return switchFolders.join("/");
      });
    }
  };

  return (
    <div className="breadcrumb">
      {folders.map((folder, index) => (
        <span key={index} className="folder-name" onClick={() => switchPath(index)}>
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
