import { useEffect, useRef, useState } from "react";
import {
  FaRegFile,
  FaRegFileImage,
  FaRegFileLines,
  FaRegFilePdf,
  FaRegFileWord,
  FaRegFolderOpen,
} from "react-icons/fa6";
import { PiFolderOpen } from "react-icons/pi";
// import FilePreviewer from "./FilePreviewer";
// import Popover from '../../../Popover/Popover';
import { MdOutlineDelete } from "react-icons/md";

const fileIcons = {
  pdf: <FaRegFilePdf size={48} />,
  jpg: <FaRegFileImage size={48} />,
  jpeg: <FaRegFileImage size={48} />,
  png: <FaRegFileImage size={48} />,
  txt: <FaRegFileLines size={48} />,
  doc: <FaRegFileWord size={48} />,
  docx: <FaRegFileWord size={48} />,
};

const FileItem = ({
  file,
  index,
  selectedFileIndex,
  setSelectedFileIndex,
  setCurrentPath,
  isItemSelection,
  setIsItemSelection,
  setSelectedFile,
  setShowDelete,
  currentPath,
}) => {
  const [fileSelected, setFileSelected] = useState(false);
  const [lastClickTime, setLastClickTime] = useState(0);
  const [showFilePreview, setShowFilePreview] = useState(false);
  const contextMenuRef = useRef(null);

  const handleDelete = () => {
    contextMenuRef.current?.close();
    setShowDelete(true);
  };

  const handleFileAccess = () => {
    contextMenuRef.current?.close();
    if (file.isDirectory) {
      setCurrentPath((prev) => {
        if (prev === "") {
          return file.name;
        } else {
          return prev + "/" + file.name;
        }
      });
      setSelectedFileIndex(null);
    } else {
      // Display File Image/PDF/Txt etc
      setShowFilePreview(true);
    }
  };

  const handleFileSelection = () => {
    setIsItemSelection(true);
    setSelectedFile(file);
    setSelectedFileIndex(index);
    const currentTime = new Date().getTime();
    if (currentTime - lastClickTime < 300) {
      setIsItemSelection(false);
      handleFileAccess();
    }
    setLastClickTime(currentTime);
  };

  const handleOnKeyUp = (e) => {
    if (e.key === "Enter") {
      handleFileAccess();
    }
  };

  useEffect(() => {
    setFileSelected(selectedFileIndex === index);
    selectedFileIndex !== index && contextMenuRef.current?.close();
  }, [selectedFileIndex]);

  useEffect(() => {
    selectedFileIndex === index && setFileSelected(isItemSelection);
  }, [isItemSelection]);

  const contextMenu = (
    <div className="py-1 file-context-menu-list">
      <ul>
        <li onClick={handleFileAccess}>
          {file.isDirectory ? (
            <PiFolderOpen size={19} />
          ) : (
            <FaRegFile size={16} />
          )}
          <span>Open</span>
        </li>
        <li onClick={handleDelete}>
          <MdOutlineDelete size={19} />
          <span>Delete</span>
        </li>
      </ul>
    </div>
  );

  return (
    <>
      {/* <Popover
                placement={'autoHorizontalStart'}
                triggerType={'contextMenu'}
                content={contextMenu}
                triggerRef={contextMenuRef}
            > */}
      <div
        className={`file-item ${
          fileSelected ? "background-secondary text-white" : ""
        }`}
        title={file.name}
        onClick={handleFileSelection}
        onKeyUp={handleOnKeyUp}
        onContextMenu={() => {
          setIsItemSelection(true);
          setSelectedFile(file);
          setSelectedFileIndex(index);
        }}
        tabIndex={0}
      >
        {file.isDirectory ? (
          <FaRegFolderOpen size={48} />
        ) : (
          <>{fileIcons[file.name?.split(".").pop()?.toLowerCase()]}</>
        )}
        <span className="text-truncate file-name">{file.name}</span>
      </div>
      {/* </Popover> */}

      {/* <FilePreviewer
        file={file}
        showFilePreview={showFilePreview}
        setShowFilePreview={setShowFilePreview}
        currentPath={currentPath}
      /> */}
    </>
  );
};

export default FileItem;
