import { useEffect, useState } from "react";
import { BsCopy, BsFolderPlus, BsGridFill, BsScissors } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";
import { MdClear, MdOutlineDelete, MdOutlineFileUpload } from "react-icons/md";
import { BiRename } from "react-icons/bi";
import { FaListUl, FaRegPaste } from "react-icons/fa6";
import { createFolderTree } from "../../utils/createFolderTree";
import ToggleView from "./ToggleView";

const Toolbar = ({
  allowCreateFolder = true,
  allowUploadFile = true,
  handleRefresh,
  isItemSelection,
  setIsItemSelection,
  currentPath,
  selectedFile,
  setSelectedFile,
  files,
  clipBoard,
  setClipBoard,
  handlePaste,
  triggerAction,
  onLayoutChange,
  activeLayout,
  setActiveLayout,
}) => {
  const [showToggleViewMenu, setShowToggleViewMenu] = useState(false);
  // Toolbar Items
  const [toolbarLeftItems, setToolbarLeftItems] = useState([
    {
      icon: <BsFolderPlus size={17} strokeWidth={0.3} />,
      text: "New Folder",
      permission: allowCreateFolder,
      onClick: () => triggerAction.show("createFolder"),
    },
    {
      icon: <MdOutlineFileUpload size={18} />,
      text: "Upload Files",
      permission: allowUploadFile,
      onClick: () => triggerAction.show("uploadFile"),
    },
    {
      icon: <FaRegPaste size={18} />,
      text: "Paste",
      permission: false,
      onClick: () => {},
    },
  ]);

  const toolbarRightItems = [
    {
      icon: activeLayout === "grid" ? <BsGridFill size={16} /> : <FaListUl size={16} />,
      title: "Change View",
      onClick: () => setShowToggleViewMenu((prev) => !prev),
    },
    {
      icon: <FiRefreshCw size={16} />,
      title: "Refresh",
      onClick: () => {
        handleRefresh();
        setClipBoard(null);
      },
    },
  ];

  // Handle Pasting
  const handlePasting = (files, pastePath, clipBoard) => {
    const selectedCopiedFile = clipBoard.files[0];
    const copiedFiles = files.filter((f) => {
      const folderToCopy = f.path === selectedCopiedFile.path && f.name === selectedCopiedFile.name;
      const folderChildren = f.path.startsWith(
        selectedCopiedFile.path + "/" + selectedCopiedFile.name
      );
      return folderToCopy || folderChildren;
    });

    const destinationFolder = files.find((file) => file.path === pastePath);
    const operationType = clipBoard.isMoving ? "move" : "copy";

    handlePaste(selectedCopiedFile, destinationFolder, operationType);
    clipBoard.isMoving && setClipBoard(null);
    setIsItemSelection(false);
    setSelectedFile(null);
  };

  useEffect(() => {
    setToolbarLeftItems((prev) => {
      return prev.map((item) => {
        if (item.text === "Paste") {
          return {
            ...item,
            permission: !!clipBoard,
            onClick: () => handlePasting(files, currentPath, clipBoard),
          };
        } else {
          return item;
        }
      });
    });
  }, [clipBoard, currentPath, files]);

  // Handle Cut / Copy
  const handleCutCopy = (isMoving) => {
    setClipBoard({
      files: [{ ...createFolderTree(selectedFile, files) }],
      isMoving: isMoving,
    });
  };
  //

  // Selected File/Folder Actions
  if (isItemSelection) {
    const pastePath = selectedFile.path;

    return (
      <div className="toolbar file-selected">
        <div className="file-action-container">
          <div>
            <button className="item-action file-action" onClick={() => handleCutCopy(true)}>
              <BsScissors size={18} />
              <span>Cut</span>
            </button>
            <button className="item-action file-action" onClick={() => handleCutCopy(false)}>
              <BsCopy strokeWidth={0.1} size={17} />
              <span>Copy</span>
            </button>
            {selectedFile.isDirectory ? (
              <button
                className="item-action file-action"
                onClick={() => handlePasting(files, pastePath, clipBoard)}
                disabled={!clipBoard}
              >
                <FaRegPaste size={18} />
                <span>Paste</span>
              </button>
            ) : (
              <></>
            )}
            <button
              className="item-action file-action"
              onClick={() => triggerAction.show("rename")}
            >
              <BiRename size={19} />
              <span>Rename</span>
            </button>
            <button
              className="item-action file-action"
              onClick={() => triggerAction.show("delete")}
            >
              <MdOutlineDelete size={19} />
              <span>Delete</span>
            </button>
          </div>
          <button className="item-action file-action" onClick={() => setIsItemSelection(false)}>
            <MdClear size={18} />
            <span>Clear Selection</span>
          </button>
        </div>
      </div>
    );
  }
  //

  return (
    <div className="toolbar">
      <div className="fm-toolbar">
        <div>
          {toolbarLeftItems
            .filter((item) => item.permission)
            .map((item, index) => (
              <button className="item-action" key={index} onClick={item.onClick}>
                {item.icon}
                <span>{item.text}</span>
              </button>
            ))}
        </div>
        <div>
          {toolbarRightItems.map((item, index) => (
            <div key={index} className="toolbar-left-items">
              <button className="item-action icon-only" title={item.title} onClick={item.onClick}>
                {item.icon}
              </button>
              {index !== toolbarRightItems.length - 1 && <div className="item-separator"></div>}
            </div>
          ))}

          {showToggleViewMenu && (
            <ToggleView
              activeLayout={activeLayout}
              setActiveLayout={setActiveLayout}
              setShowToggleViewMenu={setShowToggleViewMenu}
              onLayoutChange={onLayoutChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
