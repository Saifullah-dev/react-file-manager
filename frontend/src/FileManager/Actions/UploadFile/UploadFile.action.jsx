import { useRef, useState } from "react";
import Button from "../../../components/Button/Button";
import { AiOutlineCloudUpload } from "react-icons/ai";
import UploadItem from "./UploadItem";
import Loader from "../../../components/Loader/Loader";
import { useFileNavigation } from "../../../contexts/FileNavigationContext";
import { getFileExtension } from "../../../utils/getFileExtension";
import { getDataSize } from "../../../utils/getDataSize";
import { useFiles } from "../../../contexts/FilesContext";
import "./UploadFile.action.scss";
import {injectIntl} from "react-intl";

const UploadFileAction = ({
  fileUploadConfig,
  maxFileSize,
  acceptedFileTypes,
  onFileUploading,
  onFileUploaded,
  intl
}) => {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState({});
  const { currentFolder, currentPathFiles } = useFileNavigation();
  const { onError } = useFiles();
  const fileInputRef = useRef(null);

  // To open choose file if the "Choose File" button is focused and Enter key is pressed
  const handleChooseFileKeyDown = (e) => {
    if (e.key === "Enter") {
      fileInputRef.current.click();
    }
  };

  const checkFileError = (file) => {
    if (acceptedFileTypes) {
      const extError = !acceptedFileTypes.includes(getFileExtension(file.name));
      if (extError) return intl.formatMessage({id: `fileTypeNotAllowed`});
    }

    const fileExists = currentPathFiles.some(
      (item) => item.name.toLowerCase() === file.name.toLowerCase() && !item.isDirectory
    );
    if (fileExists) return intl.formatMessage({id: `fileAlreadyExist`});

    const sizeError = maxFileSize && file.size > maxFileSize;
    if (sizeError) return intl.formatMessage({id: `maxUploadSize`})+" "+getDataSize(maxFileSize, 0);
  };

  const setSelectedFiles = (selectedFiles) => {
    selectedFiles = selectedFiles.filter(
      (item) =>
        !files.some((fileData) => fileData.file.name.toLowerCase() === item.name.toLowerCase())
    );

    if (selectedFiles.length > 0) {
      const newFiles = selectedFiles.map((file) => {
        const appendData = onFileUploading(file, currentFolder);
        const error = checkFileError(file);
        error && onError({ type: "upload", message: error }, file);
        return {
          file: file,
          appendData: appendData,
          ...(error && { error: error }),
        };
      });
      setFiles((prev) => [...prev, ...newFiles]);
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
            <span>{intl.formatMessage({id: `dragFileToUpload`})}</span>
          </div>
        </div>
        <div className="btn-choose-file">
          <Button padding="0" onKeyDown={handleChooseFileKeyDown}>
            <label htmlFor="chooseFile">{intl.formatMessage({id: `chooseFile`})}</label>
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
                <h2>Uploading</h2>
                <Loader loading={true} className="upload-loading" />
              </>
            ) : (
              <h2>{intl.formatMessage({id: `completed`})}</h2>
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

export default injectIntl(UploadFileAction);
