import { useRef, useState } from "react";
import PropTypes from "prop-types";
import Button from "../../../components/Button/Button";
import { AiOutlineCloudUpload } from "react-icons/ai";
import UploadItem from "./UploadItem";
import Loader from "../../../components/Loader/Loader";
import OverwriteConfirmDialog from "../../../components/OverwriteConfirmDialog/OverwriteConfirmDialog";
import { useFileNavigation } from "../../../contexts/FileNavigationContext";
import { getFileExtension } from "../../../utils/getFileExtension";
import { getDataSize } from "../../../utils/getDataSize";
import { useFiles } from "../../../contexts/FilesContext";
import { useTranslation } from "../../../contexts/TranslationProvider";
import "./UploadFile.action.scss";

const UploadFileAction = ({
  fileUploadConfig,
  maxFileSize,
  acceptedFileTypes,
  onFileUploading,
  onFileUploaded,
}) => {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState({});
  const [showOverwriteDialog, setShowOverwriteDialog] = useState(false);
  const [pendingFile, setPendingFile] = useState(null);
  const [pendingFilesCallback, setPendingFilesCallback] = useState(null);
  const { currentFolder, currentPathFiles } = useFileNavigation();
  const { onError } = useFiles();
  const fileInputRef = useRef(null);
  const t = useTranslation();

  // To open choose file if the "Choose File" button is focused and Enter key is pressed
  const handleChooseFileKeyDown = (e) => {
    if (e.key === "Enter") {
      fileInputRef.current.click();
    }
  };

  const checkFileError = (file) => {
    if (acceptedFileTypes) {
      const extError = !acceptedFileTypes.includes(getFileExtension(file.name));
      if (extError) return t("fileTypeNotAllowed");
    }

    const fileExists = currentPathFiles.some(
      (item) => item.name.toLowerCase() === file.name.toLowerCase() && !item.isDirectory
    );
    if (fileExists) {
      const allowOverwrite = fileUploadConfig?.allowOverwrite || false;
      if (!allowOverwrite) return t("fileAlreadyExist");
      // If allowOverwrite is true, return special marker to trigger dialog
      return "CONFIRM_OVERWRITE";
    }

    const sizeError = maxFileSize && file.size > maxFileSize;
    if (sizeError) return `${t("maxUploadSize")} ${getDataSize(maxFileSize, 0)}.`;
  };

  const handleOverwriteConfirm = (selectedFiles) => {
    const newFiles = selectedFiles.map((file) => {
      const appendData = onFileUploading(file, currentFolder);
      return {
        file: file,
        appendData: appendData,
      };
    });
    setFiles((prev) => [...prev, ...newFiles]);
    setShowOverwriteDialog(false);
    setPendingFile(null);
  };

  const handleOverwriteCancel = () => {
    const selectedFiles = pendingFilesCallback;
    if (selectedFiles) {
      const newFiles = selectedFiles.map((file) => {
        const appendData = onFileUploading(file, currentFolder);
        onError({ type: "upload", message: t("uploadCanceled") }, file);
        return {
          file: file,
          appendData: appendData,
          error: t("uploadCanceled"),
        };
      });
      setFiles((prev) => [...prev, ...newFiles]);
    }
    setShowOverwriteDialog(false);
    setPendingFile(null);
    setPendingFilesCallback(null);
  };

  const setSelectedFiles = (selectedFiles) => {
    selectedFiles = selectedFiles.filter(
      (item) =>
        !files.some((fileData) => fileData.file.name.toLowerCase() === item.name.toLowerCase())
    );

    if (selectedFiles.length > 0) {
      const filesNeedingConfirmation = [];
      const filesWithoutErrors = [];

      selectedFiles.forEach((file) => {
        const error = checkFileError(file);
        if (error === "CONFIRM_OVERWRITE") {
          filesNeedingConfirmation.push(file);
        } else if (!error) {
          filesWithoutErrors.push(file);
        } else {
          // File has other errors, add with error state
          const appendData = onFileUploading(file, currentFolder);
          onError({ type: "upload", message: error }, file);
          filesWithoutErrors.push({ file, appendData, error });
        }
      });

      // Add files without errors immediately
      if (filesWithoutErrors.length > 0) {
        const newFiles = filesWithoutErrors.map((fileData) => {
          const appendData = onFileUploading(fileData.file || fileData, currentFolder);
          return {
            file: fileData.file || fileData,
            appendData: appendData,
            ...(fileData.error && { error: fileData.error }),
          };
        });
        setFiles((prev) => [...prev, ...newFiles]);
      }

      // Show confirmation dialog if there are files needing confirmation
      if (filesNeedingConfirmation.length > 0) {
        setPendingFile(filesNeedingConfirmation[0]);
        setPendingFilesCallback(filesNeedingConfirmation);
        setShowOverwriteDialog(true);
      }
    }
  };

  // Todo: Also validate allowed file extensions on drop
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    setSelectedFiles(droppedFiles);
  };

  const handleChooseFile = (e) => {
    const choosenFiles = Array.from(e.target.files);
    setSelectedFiles(choosenFiles);
  };

  const handleFileRemove = (index) => {
    setFiles((prev) => {
      const newFiles = prev.map((file, i) => {
        if (index === i) {
          return {
            ...file,
            removed: true,
          };
        }
        return file;
      });

      // If every file is removed, empty files array
      if (newFiles.every((file) => !!file.removed)) return [];

      return newFiles;
    });
  };

  return (
    <div className={`fm-upload-file ${files.length > 0 ? "file-selcted" : ""}`}>
      <OverwriteConfirmDialog
        show={showOverwriteDialog}
        fileName={pendingFile?.name}
        onConfirm={() =>
          handleOverwriteConfirm(pendingFilesCallback)
        }
        onCancel={handleOverwriteCancel}
      />
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
            <span>{t("dragFileToUpload")}</span>
          </div>
        </div>
        <div className="btn-choose-file">
          <Button padding="0" onKeyDown={handleChooseFileKeyDown}>
            <label htmlFor="chooseFile">{t("chooseFile")}</label>
            <input
              ref={fileInputRef}
              type="file"
              id="chooseFile"
              className="choose-file-input"
              onChange={handleChooseFile}
              multiple
              accept={acceptedFileTypes}
            />
          </Button>
        </div>
      </div>
      {files.length > 0 && (
        <div className="files-progress">
          <div className="heading">
            {Object.values(isUploading).some((fileUploading) => fileUploading) ? (
              <>
                <h2>{t("uploading")}</h2>
                <Loader loading={true} className="upload-loading" />
              </>
            ) : (
              <h2>{t("completed")}</h2>
            )}
          </div>
          <ul>
            {files.map((fileData, index) => (
              <UploadItem
                index={index}
                key={index}
                fileData={fileData}
                setFiles={setFiles}
                fileUploadConfig={fileUploadConfig}
                setIsUploading={setIsUploading}
                onFileUploaded={onFileUploaded}
                handleFileRemove={handleFileRemove}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

UploadFileAction.propTypes = {
  fileUploadConfig: PropTypes.object,
  maxFileSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  acceptedFileTypes: PropTypes.string,
  onFileUploading: PropTypes.func,
  onFileUploaded: PropTypes.func,
};

export default UploadFileAction;
