import { DragEvent, KeyboardEvent, useRef, useState } from "react";
import Button from "../../../components/Button/Button";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa6";
import UploadItem from "./UploadItem";
import UploadFolderItem from "./UploadFolderItem";
import UploadMenu from "./UploadMenu";
import Loader from "../../../components/Loader/Loader";
import { useFiles } from "../../../contexts/FilesContext";
import { UploadItemData, useUpload } from "../../../contexts/UploadContext";
import { useTranslation } from "../../../contexts/TranslationProvider";
import { useUploadInputs } from "../../../hooks/useUploadInputs";
import { collectFromDataTransfer } from "../../../utils/collectUploadEntries";
import "./UploadFile.action.scss";

type UploadEntryGroup =
  | { type: "file"; key: string; item: UploadItemData }
  | { type: "folder"; key: string; name: string; items: UploadItemData[] };

// Files from the same uploaded folder are shown together as one folder row
const groupUploads = (items: UploadItemData[]) => {
  const groups: UploadEntryGroup[] = [];
  const folders = new Map<string, UploadItemData[]>();

  items.forEach((item) => {
    if (!item.folderPath) {
      groups.push({ type: "file", key: `file-${item.id}`, item });
      return;
    }

    const name = item.folderPath.split("/")[0];
    const key = `${item.basePath}/${name}`;
    if (!folders.has(key)) {
      folders.set(key, []);
      groups.push({ type: "folder", key, name, items: folders.get(key)! });
    }
    folders.get(key)!.push(item);
  });

  return groups;
};

const UploadFileAction = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [showUploadMenu, setShowUploadMenu] = useState(false);
  const chooseButtonRef = useRef<HTMLDivElement>(null);
  const {
    items,
    isUploading,
    canUploadFolder,
    acceptedFileTypes,
    addUploads,
    cancelUploads,
    retryUploads,
    removeUploads,
  } = useUpload();
  const { onError } = useFiles();
  const { openFilePicker, openFolderPicker, inputs } = useUploadInputs(addUploads, acceptedFileTypes);
  const t = useTranslation();

  // With folder upload available, "Choose File" opens a menu to pick files or a folder
  const handleChooseClick = () => {
    if (canUploadFolder) setShowUploadMenu((prev) => !prev);
    else openFilePicker();
  };

  // To open choose file if the "Choose File" button is focused and Enter key is pressed
  const handleChooseFileKeyDown = (e : KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleChooseClick();
    }
  };

  const handleDrop = async (e : DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    let upload;
    try {
      upload = await collectFromDataTransfer(e.dataTransfer, { includeFolders: canUploadFolder });
    } catch (cause) {
      // A dropped folder couldn't be read, e.g. no permission or a file was removed meanwhile
      const error = { type: "upload", message: t("uploadFail"), cause };
      onError(error, { name: "", isDirectory: true, path: "" });
      return;
    }

    upload.skippedFolders.forEach((name) => {
      onError({ type: "upload", message: t("folderUploadNotAllowed") }, { name, isDirectory: true, path: "" });
    });

    if (upload.files.length > 0 || upload.folders.length > 0) {
      addUploads(upload);
    }
  };

  const completedCount = items.filter((item) => item.status === "completed").length;
  const uploadableCount = items.filter((item) => item.status !== "rejected").length;

  return (
    <div className={`fm-upload-file ${items.length > 0 ? "file-selcted" : ""}`}>
      <div className="select-files">
        <div
          className={`draggable-file-input ${isDragging ? "dragging" : ""}`}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={() => setIsDragging(true)}
          onDragLeave={() => setIsDragging(false)}
        >
          <div className="input-text">
            <AiOutlineCloudUpload size={30} />
            <span>{t(canUploadFolder ? "dragFilesOrFoldersToUpload" : "dragFileToUpload")}</span>
          </div>
        </div>
        <div className="btn-choose-file">
          <div ref={chooseButtonRef} className="choose-file-anchor">
            <Button
              onClick={handleChooseClick}
              onKeyDown={handleChooseFileKeyDown}
            >
              <span className="choose-file-label">
                {t("chooseFile")}
                {canUploadFolder && <FaChevronDown size={11} />}
              </span>
            </Button>
            {showUploadMenu && (
              <UploadMenu
                anchorRef={chooseButtonRef}
                className="open-up"
                onUploadFiles={openFilePicker}
                onUploadFolder={openFolderPicker}
                onClose={() => setShowUploadMenu(false)}
              />
            )}
          </div>
          {inputs}
        </div>
      </div>
      {items.length > 0 && (
        <div className="files-progress">
          <div className="heading">
            {isUploading ? (
              <>
                <h2>{t("uploading")}</h2>
                <Loader loading={true} className="upload-loading" />
              </>
            ) : (
              <h2>{t("completed")}</h2>
            )}
            {uploadableCount > 1 && (
              <span className="upload-count">
                {t("uploadedCount", { done: completedCount, total: uploadableCount })}
              </span>
            )}
          </div>
          <ul>
            {groupUploads(items).map((group) =>
              group.type === "folder" ? (
                <UploadFolderItem
                  key={group.key}
                  name={group.name}
                  items={group.items}
                  onCancel={cancelUploads}
                  onRetry={retryUploads}
                  onRemove={removeUploads}
                />
              ) : (
                <UploadItem
                  key={group.key}
                  item={group.item}
                  onCancel={(id) => cancelUploads([id])}
                  onRetry={(id) => retryUploads([id])}
                  onRemove={(id) => removeUploads([id])}
                />
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UploadFileAction;
