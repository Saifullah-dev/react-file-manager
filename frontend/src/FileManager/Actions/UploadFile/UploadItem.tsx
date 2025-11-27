import { AiOutlineClose } from "react-icons/ai";
import Progress from "../../../components/Progress/Progress";
import { getFileExtension } from "../../../utils/getFileExtension";
import { useFileIcons } from "../../../hooks/useFileIcons";
import { FaRegFile } from "react-icons/fa6";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { getDataSize } from "../../../utils/getDataSize";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { useFiles } from "../../../contexts/FilesContext";
import { useTranslation } from "../../../contexts/TranslationProvider";
import { FileUploadConfiguration } from "../../../types/FileUploadConfiguration";
import { OnFileUploaded, OnFileUploading } from "../../../types/FileManagerFunctions";

export interface UploadFileData {
  file: File;
  appendData?: { [key: string]: any }; 
  error?: string;
  removed?: boolean;
}

export interface UploadItemProps {
  index: number;
  fileData: UploadFileData;
  setFiles: Dispatch<SetStateAction<UploadFileData[]>>;
  fileUploadConfig?: FileUploadConfiguration;
  setIsUploading: Dispatch<SetStateAction<Record<number, boolean>>>;
  onFileUploading?: OnFileUploading;
  onFileUploaded?: OnFileUploaded;
  handleFileRemove: (index : number) => void;
}

const UploadItem = ({
  index,
  fileData,
  setFiles,
  setIsUploading,
  fileUploadConfig,
  onFileUploaded,
  handleFileRemove,
} : UploadItemProps) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploaded, setIsUploaded] = useState(false);
  const [isCanceled, setIsCanceled] = useState(false);
  const [uploadFailed, setUploadFailed] = useState(false);
  const fileIcons = useFileIcons(33);
  const xhrRef = useRef<XMLHttpRequest | null>(null);
  const { onError } = useFiles();
  const t = useTranslation();

  const handleUploadError = (xhr : XMLHttpRequest) => {
    setUploadProgress(0);
    setIsUploading((prev) => ({
      ...prev,
      [index]: false,
    }));
    const error = {
      type: "upload",
      message: t("uploadFail"),
      response: {
        status: xhr.status,
        statusText: xhr.statusText,
        data: xhr.response,
      },
    };

    setFiles((prev) =>
      prev.map((file, i) => {
        if (index === i) {
          return {
            ...file,
            error: error.message,
          };
        }
        return file;
      })
    );

    setUploadFailed(true);

    onError(error, fileData.file);
  };

  const fileUpload = (fileData : UploadFileData) => {
    if (!!fileData.error) return;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhrRef.current = xhr;
      setIsUploading((prev) => ({
        ...prev,
        [index]: true,
      }));

      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const progress = Math.round((event.loaded / event.total) * 100);
          setUploadProgress(progress);
        }
      };

      xhr.onload = () => {
        setIsUploading((prev) => ({
          ...prev,
          [index]: false,
        }));
        if (xhr.status === 200 || xhr.status === 201) {
          setIsUploaded(true);
          onFileUploaded?.(xhr.response);
          resolve(xhr.response);
        } else {
          reject(xhr.statusText);
          handleUploadError(xhr);
        }
      };

      xhr.onerror = () => {
        reject(xhr.statusText);
        handleUploadError(xhr);
      };

      const method = fileUploadConfig?.method || "POST";
      xhr.open(method, fileUploadConfig?.url ?? "", true);
      const headers = fileUploadConfig?.headers;
      for (let key in headers) {
        xhr.setRequestHeader(key, headers[key]);
      }

      const formData = new FormData();
      const appendData = fileData?.appendData;
      for (let key in appendData) {
        appendData[key] && formData.append(key, appendData[key]);
      }
      formData.append("file", fileData.file);

      xhr.send(formData);
    });
  };

  useEffect(() => {
    // Prevent double uploads with strict mode
    if (!xhrRef.current) {
      fileUpload(fileData);
    }
  }, []);

  const handleAbortUpload = () => {
    if (xhrRef.current) {
      xhrRef.current.abort();
      setIsUploading((prev) => ({
        ...prev,
        [index]: false,
      }));
      setIsCanceled(true);
      setUploadProgress(0);
    }
  };

  const handleRetry = () => {
    if (fileData?.file) {
      setFiles((prev) =>
        prev.map((file, i) => {
          if (index === i) {
            return {
              ...file,
              error: undefined,
            };
          }
          return file;
        })
      );
      fileUpload({ ...fileData, error: undefined });
      setIsCanceled(false);
      setUploadFailed(false);
    }
  };

  // File was removed by the user beacuse it was unsupported or exceeds file size limit.
  if (!!fileData.removed) {
    return null;
  }
  //

  return (
    <li>
      <div className="file-icon">
        {fileIcons[getFileExtension(fileData.file?.name) as keyof typeof fileIcons] ?? <FaRegFile size={33} />}
      </div>
      <div className="file">
        <div className="file-details">
          <div className="file-info">
            <span className="file-name text-truncate" title={fileData.file?.name}>
              {fileData.file?.name}
            </span>
            <span className="file-size">{getDataSize(fileData.file?.size)}</span>
          </div>
          {isUploaded ? (
            <FaRegCheckCircle title={t("uploaded")} className="upload-success" />
          ) : isCanceled || uploadFailed ? (
            <IoMdRefresh className="retry-upload" title="Retry" onClick={handleRetry} />
          ) : (
            <div
              className="rm-file"
              title={`${!!fileData.error ? t("Remove") : t("abortUpload")}`}
              onClick={!!fileData.error ? () => handleFileRemove(index) : handleAbortUpload}
            >
              <AiOutlineClose />
            </div>
          )}
        </div>
        <Progress
          percent={uploadProgress}
          isCanceled={isCanceled}
          isCompleted={isUploaded}
          error={fileData.error}
        />
      </div>
    </li>
  );
};

export default UploadItem;
