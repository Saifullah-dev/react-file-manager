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
import { useLayout } from "../../contexts/LayoutContext";
import { validateApiCallback } from "../../utils/validateApiCallback";
import "./Toolbar.scss";

const Toolbar = ({
  allowCreateFolder = true,
  allowUploadFile = true,
  onLayoutChange,
  actions,
  onRefresh,
  triggerAction,
}) => {
  const [showToggleViewMenu, setShowToggleViewMenu] = useState(false);
  const { currentFolder } = useFileNavigation();
  const { selectedFiles, setSelectedFiles, handleDownload } = useSelection();
  const { clipBoard, setClipBoard, handleCutCopy, handlePasting } = useClipBoard();
  const { activeLayout } = useLayout();

  // Toolbar Items
  const toolbarLeftItems = [
    {
      icon: <BsFolderPlus size={17} strokeWidth={0.3} />,
      title: "New folder",
      permission: allowCreateFolder,
      onClick: () => triggerAction.show("createFolder"),
    },
    {
      icon: <MdOutlineFileUpload size={18} />,
      title: "Upload",
      permission: allowUploadFile,
      onClick: () => triggerAction.show("uploadFile"),
    },
    {
      icon: <FaRegPaste size={18} />,
      title: "Paste",
      permission: !!clipBoard,
      onClick: handleFilePasting,
    },
  ];
  const selectedToolbarActions = () => {
    return actions
    .filter((item) => item.showToolbar)
    .map((item) => {
      switch (item.key) {
        case "cut": {
          return {
            ...item,
            onClick: () => {
              item.onClick();
              handleCutCopy(true);
            },
            icon: item.icon || <BsScissors size={18} />,
            hidden: selectedFiles.length > 1,
          }
        }
        case "copy": {
          return {
            ...item, 
            onClick: (args) => {
              item.onClick(args);
              handleCutCopy(false);
            },
            icon: item.icon || <BsCopy strokeWidth={0.1} size={17} />,
          }
        }
        case "paste": {
          return {
            ...item, 
            onClick: (args) => {
              item.onClick(args);
              handleFilePasting(args);
            },
            icon: item.icon || <FaRegPaste size={18} />,
            className: `${clipBoard ? "" : "disable-paste"}`,
            hidden: clipBoard?.files?.length === 0,
          }
        }
        case "rename": {
          return {
            ...item,
            icon: item.icon || <BiRename size={19} />,
            onClick: (args) => {
              console.log(args);
              item.onClick(args);
              triggerAction.show("rename")
            },
            hidden: selectedFiles.length > 1,
          }
        }
        case "download": {
          return {
            ...item, 
            icon: item.icon || <MdOutlineFileDownload size={18} />,
            onClick: (args) => {
              item.onClick(args);
              handleDownloadItems(args);
            },
            hidden: selectedFiles.isDirectory,
          }
        }
        case "delete": {
          return {
            ...item,
            icon: item.icon || <MdOutlineDelete size={19} />,
            onClick: () => {
              item.onClick();
              triggerAction.show("delete")
            },
            hidden: selectedFiles.isDirectory,
          }
        }
        default: {
          return {
            ...item,
            onClick: () => {
              item.onClick(item.multiple ? selectedFiles : selectedFiles?.[0]);
            },
            hidden: item.hidden || (!item.multiple && selectedFiles.length > 1),
          }
        } 
      }
    });
  }

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
        validateApiCallback(onRefresh, "onRefresh");
        setClipBoard(null);
      },
    },
  ];

  function handleFilePasting() {
    handlePasting(currentFolder);
  }

  const handleDownloadItems = () => {
    handleDownload();
    setSelectedFiles([]);
  };

  // Selected File/Folder Actions
  if (selectedFiles.length > 0) {
    return (
      <div className="toolbar file-selected">
        <div className="file-action-container">
          <div>
            {selectedToolbarActions().map((item) => (
              <button className="item-action file-action"
                onClick={item.onClick}>
                  {item.icon}
                  <span>{item.title}</span>
              </button>
            ))}
          {/* 
            <button className="item-action file-action" onClick={() => handleCutCopy(false)}>
              <BsCopy strokeWidth={0.1} size={17} />
              <span>Copy</span>
            </button>
            {clipBoard?.files?.length > 0 && (
              <button
                className="item-action file-action"
                onClick={handleFilePasting}
                // disabled={!clipBoard}
              >
                <FaRegPaste size={18} />
                <span>Paste</span>
              </button>
            )}
            {selectedFiles.length === 1 && (
              <button
                className="item-action file-action"
                onClick={() => triggerAction.show("rename")}
              >
                <BiRename size={19} />
                <span>Rename</span>
              </button>
            )}
            {!selectedFiles.isDirectory && (
              <button className="item-action file-action" onClick={handleDownloadItems}>
                <MdOutlineFileDownload size={19} />
                <span>Download</span>
              </button>
            )} */}
            {/* <button
              className="item-action file-action"
              onClick={() => triggerAction.show("delete")}
            >
              <MdOutlineDelete size={19} />
              <span>Delete</span>
            </button> */}
          </div>
          <button
            className="item-action file-action"
            title="Clear selection"
            onClick={() => setSelectedFiles([])}
          >
            <span>
              {selectedFiles.length} item{selectedFiles.length > 1 && "s"} selected
            </span>
            <MdClear size={18} />
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
                <span>{item.title}</span>
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

Toolbar.displayName = "Toolbar";

export default Toolbar;
