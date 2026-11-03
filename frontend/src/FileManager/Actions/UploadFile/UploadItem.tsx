import { memo } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Progress from "../../../components/Progress/Progress";
import { getFileExtension } from "../../../utils/getFileExtension";
import { useFileIcons } from "../../../hooks/useFileIcons";
import { FaRegFile } from "react-icons/fa6";
import { getDataSize } from "../../../utils/getDataSize";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { useTranslation } from "../../../contexts/TranslationProvider";
import { UploadItemData } from "../../../contexts/UploadContext";

export interface UploadItemProps {
  item: UploadItemData;
  onCancel: (id: number) => void;
  onRetry: (id: number) => void;
  onRemove: (id: number) => void;
}

const UploadItem = ({ item, onCancel, onRetry, onRemove } : UploadItemProps) => {
  const fileIcons = useFileIcons(33);
  const t = useTranslation();
  const { file, status } = item;

  const isCanceled = status === "canceled";
  const isWaiting = status === "pending" || status === "queued";

  return (
    <li>
      <div className="file-icon">
        {fileIcons[getFileExtension(file.name) as keyof typeof fileIcons] ?? <FaRegFile size={33} />}
      </div>
      <div className="file">
        <div className="file-details">
          <div className="file-info">
            <span className="file-name text-truncate" title={file.name}>
              {file.name}
            </span>
            <span className="file-size">{getDataSize(file.size)}</span>
          </div>
          {status === "completed" ? (
            <FaRegCheckCircle title={t("uploaded")} className="upload-success" />
          ) : status === "failed" || isCanceled ? (
            <IoMdRefresh className="retry-upload" title={t("retry")} onClick={() => onRetry(item.id)} />
          ) : status === "rejected" ? (
            <div className="rm-file" title={t("remove")} onClick={() => onRemove(item.id)}>
              <AiOutlineClose />
            </div>
          ) : (
            <div className="rm-file" title={t("abortUpload")} onClick={() => onCancel(item.id)}>
              <AiOutlineClose />
            </div>
          )}
        </div>
        <Progress
          percent={item.progress}
          isCanceled={isCanceled}
          isCompleted={status === "completed"}
          isWaiting={isWaiting}
          error={item.error}
        />
      </div>
    </li>
  );
};

export default memo(UploadItem);
