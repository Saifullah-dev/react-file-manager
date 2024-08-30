import { useState } from "react";
import Button from "../../../components/Button/Button";
import { AiOutlineCloudUpload } from "react-icons/ai";
import UploadItem from "./UploadItem";
import ReactLoading from "react-loading";

const UploadFileAction = ({
  fileUploadConfig,
  allowedFileExtensions,
  handleFileUploading,
  handleFileUploaded,
  currentFolder,
}) => {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState({});

  // Todo: Also validate allowed file extensions on drop
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    if (droppedFiles.length > 0) {
      const choosenFiles = droppedFiles.map((file) => {
        const appendData = handleFileUploading(file, currentFolder);
        return {
          file: file,
          appendData: appendData,
        };
      });
      setFiles((prev) => [...prev, ...choosenFiles]);
    }
  };

  const handleChooseFile = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 0) {
      const choosenFiles = selectedFiles.map((file) => {
        const appendData = handleFileUploading(file, currentFolder);
        return {
          file: file,
          appendData: appendData,
        };
      });
      setFiles((prev) => [...prev, ...choosenFiles]);
    }
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
            <span>Drag files to upload</span>
          </div>
        </div>
        <div className="btn-choose-file">
          <Button padding="0">
            <label htmlFor="chooseFile">Choose File</label>
            <input
              type="file"
              id="chooseFile"
              className="choose-file-input"
              onChange={handleChooseFile}
              multiple
              accept={allowedFileExtensions}
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
                <ReactLoading type="cylon" color="black" height={18} width={20} />
              </>
            ) : (
              <h2>Completed</h2>
            )}
          </div>
          <ul>
            {files.map((fileData, index) => (
              <UploadItem
                index={index}
                key={index}
                fileData={fileData}
                fileUploadConfig={fileUploadConfig}
                setIsUploading={setIsUploading}
                handleFileUploaded={handleFileUploaded}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UploadFileAction;
