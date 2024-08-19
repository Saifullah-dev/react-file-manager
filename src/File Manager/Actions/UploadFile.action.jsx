import { useState } from "react";
import Button from "../../components/Button/Button";
import { AiOutlineClose, AiOutlineCloudUpload } from "react-icons/ai";
import { getFileExtension } from "../../utils/getFileExtension";
import { useFileIcons } from "../../hooks/useFileIcons";
import { FaRegFile } from "react-icons/fa6";
import Progress from "../../components/Progress/Progress";

const UploadFileAction = ({ onFilesSelected, allowedFileExtensions }) => {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileIcons = useFileIcons(33);

  // Todo: Also validate allowed file extensions on drop
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 0) {
      setFiles((prev) => [...prev, ...droppedFiles]);
    }
  };

  const handleChooseFile = (e) => {
    const selectedFiles = e.target.files;
    if (selectedFiles.length > 0) {
      setFiles((prev) => [...prev, ...selectedFiles]);
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
          <h2>Uploading</h2>
          <ul>
            {files.map((file, index) => (
              <li key={index}>
                <div className="file-icon">
                  {fileIcons[getFileExtension(file.name)] ?? <FaRegFile size={33} />}
                </div>
                <div className="file">
                  <div className="file-details">
                    <div className="file-info">
                      <span className="file-name text-truncate" title={file.name}>
                        {file.name}
                      </span>
                      <span className="file-size"> {file.size / 1000} KB</span>
                    </div>
                    <div className="rm-file" title="remove">
                      <AiOutlineClose />
                    </div>
                  </div>
                  <Progress percent={20} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UploadFileAction;
