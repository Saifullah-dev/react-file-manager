import { useState } from "react";
import { BsCopy, BsFolderPlus, BsGridFill, BsScissors } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
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
import { useTranslation } from "../../contexts/TranslationProvider";
import "./Toolbar.scss";

const Toolbar = ({ onLayoutChange, onRefresh, onClose, onPick, triggerAction, permissions }) => {
  const [showToggleViewMenu, setShowToggleViewMenu] = useState(false);
  const { currentFolder } = useFileNavigation();
  const { selectedFiles, setSelectedFiles, handleDownload } = useSelection();
  const { clipBoard, setClipBoard, handleCutCopy, handlePasting } = useClipBoard();
  const { activeLayout } = useLayout();
  const t = useTranslation();

  // Toolbar Items
  const toolbarLeftItems = [
    {
      icon: <BsFolderPlus size={17} strokeWidth={0.3} />,
      text: t("newFolder"),
      permission: permissions.create,
      onClick: () => triggerAction.show("createFolder"),
    },
    {
      icon: <MdOutlineFileUpload size={18} />,
      text: t("upload"),
      permission: permissions.upload,
      onClick: () => triggerAction.show("uploadFile"),
    },
    {
      icon: <FaRegPaste size={18} />,
      text: t("paste"),
      permission: !!clipBoard,
      onClick: handleFilePasting,
    },
  ];

  const toolbarRightItems = [
    {
      icon: activeLayout === "grid" ? <BsGridFill size={16} /> : <FaListUl size={16} />,
      title: t("changeView"),
      onClick: () => setShowToggleViewMenu((prev) => !prev),
    },
    {
      icon: <FiRefreshCw size={16} />,
      title: t("refresh"),
      onClick: () => {
        validateApiCallback(onRefresh, "onRefresh", currentFolder);
        setClipBoard(null);
      },
    },
  ];
  if (onClose) toolbarRightItems.push({
    icon: <AiOutlineClose size={16} />,
      title: t("close"),
      onClick: () => {
        validateApiCallback(onClose, "onClose");
        setClipBoard(null);
      },
  })

  function handleFilePasting() {
    handlePasting(currentFolder);
  }

  const handleDownloadItems = () => {
    handleDownload();
    setSelectedFiles([]);
  };

  const handlePickItems = () => {
    validateApiCallback(onPick, "onPick", selectedFiles);
    setSelectedFiles([]);
  };

  // Selected File/Folder Actions
  if (selectedFiles.length > 0) {
    return (
      <div className="toolbar file-selected">
        <div className="file-action-container">
          <div>
            {onPick && (
              <button className="item-action file-action pick-action" onClick={handlePickItems}>
                <FaCheck size={18} />
                <span>{t("pick")}</span>
              </button>
            )}
            {permissions.move && (
              <button className="item-action file-action move-action" onClick={() => handleCutCopy(true)}>
                <BsScissors size={18} />
                <span>{t("cut")}</span>
              </button>
            )}
            {permissions.copy && (
              <button className="item-action file-action copy-action" onClick={() => handleCutCopy(false)}>
                <BsCopy strokeWidth={0.1} size={17} />
                <span>{t("copy")}</span>
              </button>
            )}
            {clipBoard?.files?.length > 0 && (
              <button
                className="item-action file-action paste-action"
                onClick={handleFilePasting}
                // disabled={!clipBoard}
              >
                <FaRegPaste size={18} />
                <span>{t("paste")}</span>
              </button>
            )}
            {selectedFiles.length === 1 && permissions.rename && (
              <button
                className="item-action file-action rename-action"
                onClick={() => triggerAction.show("rename")}
              >
                <BiRename size={19} />
                <span>{t("rename")}</span>
              </button>
            )}
            {permissions.download && (
              <button className="item-action file-action download-action" onClick={handleDownloadItems}>
                <MdOutlineFileDownload size={19} />
                <span>{t("download")}</span>
              </button>
            )}
            {permissions.delete && (
              <button
                className="item-action file-action delete-action"
                onClick={() => triggerAction.show("delete")}
              >
                <MdOutlineDelete size={19} />
                <span>{t("delete")}</span>
              </button>
            )}
          </div>
          <button
            className="item-action file-action clear-action"
            title={t("clearSelection")}
            onClick={() => setSelectedFiles([])}
          >
            <span>
              {selectedFiles.length}{" "}
              {t(selectedFiles.length > 1 ? "itemsSelected" : "itemSelected")}
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

Toolbar.displayName = "Toolbar";

export default Toolbar;
