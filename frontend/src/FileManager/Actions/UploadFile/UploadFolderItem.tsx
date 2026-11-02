import { memo, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaChevronDown, FaRegFile, FaRegFolder } from "react-icons/fa6";
import { IoMdRefresh } from "react-icons/io";
import { getDataSize } from "../../../utils/getDataSize";
import { useTranslation } from "../../../contexts/TranslationProvider";
import { UploadItemData, UploadStatus } from "../../../contexts/UploadContext";

export interface UploadFolderItemProps {
  name: string;
  items: UploadItemData[];
  onCancel: (ids: number[]) => void;
  onRetry: (ids: number[]) => void;
  onRemove: (ids: number[]) => void;
}

const activeStatuses: UploadStatus[] = ["pending", "queued", "uploading"];

// Problems first, so they're easy to find when the folder is expanded
const statusOrder: Record<UploadStatus, number> = {
  failed: 0,
  canceled: 1,
  rejected: 2,
  uploading: 3,
  queued: 4,
  pending: 5,
  completed: 6,
};

const getIds = (items: UploadItemData[]) => items.map((item) => item.id);

const UploadFolderItem = ({ name, items, onCancel, onRetry, onRemove }: UploadFolderItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const t = useTranslation();

  const uploadable = items.filter((item) => item.status !== "rejected");
  const rejected = items.filter((item) => item.status === "rejected");
  const completed = uploadable.filter((item) => item.status === "completed");
  const failed = uploadable.filter((item) => item.status === "failed" || item.status === "canceled");
  const active = uploadable.filter((item) => activeStatuses.includes(item.status));
  const failedCount = failed.filter((item) => item.status === "failed").length;
  const canceledCount = failed.length - failedCount;
  const hasStarted = active.some((item) => item.status === "uploading") || completed.length > 0;

  // Progress by bytes, so large files count for more than small ones
  const totalBytes = uploadable.reduce((sum, item) => sum + item.file.size, 0);
  const uploadedBytes = uploadable.reduce((sum, item) => {
    if (item.status === "completed") return sum + item.file.size;
    if (item.status === "uploading") return sum + (item.file.size * item.progress) / 100;
    return sum;
  }, 0);
  const percent = totalBytes ? Math.round((uploadedBytes / totalBytes) * 100) : 0;

  const renderStatus = () => {
    if (active.length > 0) {
      return hasStarted ? t("percentDone", { percent }) : t("waiting");
    }
    if (failed.length > 0) {
      return (
        <>
          {failedCount > 0 && (
            <span className="upload-error">{t("failedCount", { count: failedCount })}</span>
          )}
          {failedCount > 0 && canceledCount > 0 && <span className="status-separator">·</span>}
          {canceledCount > 0 && <span>{t("canceledCount", { count: canceledCount })}</span>}
          <span className="status-separator">·</span>
          <button type="button" className="link-button" onClick={() => onRetry(getIds(failed))}>
            {t("retry")}
          </button>
        </>
      );
    }
    if (completed.length > 0) {
      return rejected.length > 0
        ? `${t("completed")} · ${t("skippedCount", { count: rejected.length })}`
        : t("completed");
    }
    return <span className="upload-error">{t("skippedCount", { count: rejected.length })}</span>;
  };

  const renderAction = () => {
    if (active.length > 0) {
      return (
        <button
          type="button"
          className="icon-button rm-file"
          title={t("cancelFolderUpload")}
          aria-label={t("cancelFolderUpload")}
          onClick={() => onCancel(getIds(active))}
        >
          <AiOutlineClose />
        </button>
      );
    }
    if (failed.length > 0) {
      return (
        <button
          type="button"
          className="icon-button retry-upload"
          title={t("retryFailed")}
          aria-label={t("retryFailed")}
          onClick={() => onRetry(getIds(failed))}
        >
          <IoMdRefresh />
        </button>
      );
    }
    if (completed.length > 0) {
      return <FaRegCheckCircle title={t("uploaded")} className="upload-success" />;
    }
    return (
      <button
        type="button"
        className="icon-button rm-file"
        title={t("remove")}
        aria-label={t("remove")}
        onClick={() => onRemove(getIds(items))}
      >
        <AiOutlineClose />
      </button>
    );
  };

  const renderFileAction = (item: UploadItemData) => {
    switch (item.status) {
      case "completed":
        return <FaRegCheckCircle title={t("uploaded")} className="upload-success" />;
      case "failed":
      case "canceled":
        return (
          <button
            type="button"
            className="icon-button retry-upload"
            title={t("retry")}
            aria-label={t("retry")}
            onClick={() => onRetry([item.id])}
          >
            <IoMdRefresh />
          </button>
        );
      case "rejected":
        return (
          <button
            type="button"
            className="icon-button rm-file"
            title={t("remove")}
            aria-label={t("remove")}
            onClick={() => onRemove([item.id])}
          >
            <AiOutlineClose />
          </button>
        );
      default:
        return (
          <button
            type="button"
            className="icon-button rm-file"
            title={t("abortUpload")}
            aria-label={t("abortUpload")}
            onClick={() => onCancel([item.id])}
          >
            <AiOutlineClose />
          </button>
        );
    }
  };

  const getFileStatus = (item: UploadItemData) => {
    switch (item.status) {
      case "completed":
        return t("completed");
      case "canceled":
        return t("canceled");
      case "pending":
      case "queued":
        return t("waiting");
      case "uploading":
        return `${item.progress}%`;
      default:
        return item.error;
    }
  };

  const sortedItems = [...items].sort(
    (a, b) => statusOrder[a.status] - statusOrder[b.status] || a.id - b.id
  );

  return (
    <li className="upload-folder">
      <div className="file-icon">
        <FaRegFolder size={30} />
      </div>
      <div className="file">
        <div className="file-details">
          <div className="file-info">
            <span className="file-name text-truncate" title={name}>
              {name}
            </span>
            <span className="file-size">
              {t("filesCount", { done: completed.length, total: uploadable.length })}
              {totalBytes > 0 && ` · ${getDataSize(totalBytes)}`}
            </span>
          </div>
          <div className="folder-actions">
            {renderAction()}
            <button
              type="button"
              className="icon-button expand-folder"
              aria-expanded={isExpanded}
              title={t(isExpanded ? "hideFiles" : "showFiles")}
              aria-label={t(isExpanded ? "hideFiles" : "showFiles")}
              onClick={() => setIsExpanded((prev) => !prev)}
            >
              <FaChevronDown size={12} />
            </button>
          </div>
        </div>
        <div role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100} className="fm-progress">
          <div className="fm-progress-bar">
            <div className="fm-progress-bar-fill" style={{ width: `${percent}%` }}></div>
          </div>
          <div className="folder-status">{renderStatus()}</div>
        </div>

        {isExpanded && (
          <ul className="folder-files">
            {sortedItems.map((item) => {
              // Path inside the uploaded folder, without the folder's own name
              const subfolder = item.folderPath.split("/").slice(1).join("/");
              const isError = item.status === "failed" || item.status === "rejected";
              return (
                <li key={item.id} className="folder-file">
                  <div className="folder-file-details">
                    <FaRegFile size={13} className="folder-file-icon" />
                    <span className="folder-file-name text-truncate" title={item.relativePath}>
                      {item.file.name}
                    </span>
                    {subfolder && (
                      <span className="folder-file-path text-truncate" title={subfolder}>
                        {subfolder}
                      </span>
                    )}
                    <span className={`folder-file-status ${isError ? "upload-error" : ""}`}>
                      {getFileStatus(item)}
                    </span>
                    {renderFileAction(item)}
                  </div>
                  {!isError && (
                    <div className="fm-progress-bar">
                      <div
                        className="fm-progress-bar-fill"
                        style={{ width: `${item.status === "completed" ? 100 : item.progress}%` }}
                      ></div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </li>
  );
};

export default memo(UploadFolderItem);
