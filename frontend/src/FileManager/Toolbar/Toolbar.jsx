import { useState } from "react";
import { BsCopy, BsFolderPlus, BsGridFill, BsScissors } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";
import {
  MdClear,
  MdOutlineDelete,
  MdOutlineFileDownload,
  MdOutlineFileUpload,
} from "react-icons/md";
import { BiRename } from "react-icons/bi";
import { FaListUl, FaRegPaste } from "react-icons/fa6";
import LayoutToggler from "./LayoutToggler";
import { useFileNavigation } from "../../contexts/FileNavigationContext";
import { useSelection } from "../../contexts/SelectionContext";
import { useClipBoard } from "../../contexts/ClipboardContext";
import "./Toolbar.scss";
import { useLayout } from "../../contexts/LayoutContext";

const Toolbar = ({
  allowCreateFolder = true,
  allowUploadFile = true,
  onPaste,
  onDownload,
  onLayoutChange,
  onRefresh,
  triggerAction,
}) => {
  const [showToggleViewMenu, setShowToggleViewMenu] = useState(false);
  const { currentFolder } = useFileNavigation();
  const { isItemSelection, selectedFile, setSelectedFile } = useSelection();
  const { clipBoard, setClipBoard } = useClipBoard();
  const { activeLayout } = useLayout();

  // Toolbar Items
  const toolbarLeftItems = [
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
      permission: !!clipBoard,
      onClick: handlePasting,
    },
  ];

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
        onRefresh();
        setClipBoard(null);
      },
    },
  ];

  // Handle Cut / Copy
  const handleCutCopy = (isMoving) => {
    setClipBoard({
      files: [selectedFile],
      isMoving: isMoving,
    });
  };
  //

  // Handle Pasting
  // Todo: Show error if destination folder already has file(s) with the same name
  function handlePasting() {
    const selectedCopiedFile = clipBoard.files[0];
    const destinationFolder = isItemSelection ? selectedFile : currentFolder;
    const operationType = clipBoard.isMoving ? "move" : "copy";

    onPaste(selectedCopiedFile, destinationFolder, operationType);

    clipBoard.isMoving && setClipBoard(null);
    setSelectedFile(null);
  }

  const handleDownload = () => {
    onDownload(selectedFile);
    setSelectedFile(null);
  };

  // Selected File/Folder Actions
  if (selectedFile) {
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
            {selectedFile.isDirectory && (
              <button
                className="item-action file-action"
                onClick={handlePasting}
                disabled={!clipBoard}
              >
                <FaRegPaste size={18} />
                <span>Paste</span>
              </button>
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
            {!selectedFile.isDirectory && (
              <button className="item-action file-action" onClick={handleDownload}>
                <MdOutlineFileDownload size={19} />
                <span>Download</span>
              </button>
            )}
          </div>
          <button className="item-action file-action" onClick={() => setSelectedFile(null)}>
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
            <LayoutToggler
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
