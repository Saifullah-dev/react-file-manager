import { useEffect, useState } from "react";
import { MdHome, MdOutlineNavigateNext } from "react-icons/md";

const BreadCrumb = ({ currentPath, setCurrentPath }) => {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    setFolders(() => {
      return currentPath?.split("/")?.filter((path) => path !== "");
    });
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
      <div className="folder-name" onClick={() => setCurrentPath("")}>
        <MdHome /> Home
      </div>
      {folders.map((folder, index) => (
        <span
          key={index}
          className="folder-name"
          onClick={() => switchPath(index)}
        >
          <MdOutlineNavigateNext /> {folder}
        </span>
      ))}
    </div>
  );
};

export default BreadCrumb;
