import { useState } from "react";
import Button from "../../components/Button/Button";
import { AiOutlineClose, AiOutlineCloudUpload } from "react-icons/ai";
import { getFileExtension } from "../../utils/getFileExtension";
import { useFileIcons } from "../../hooks/useFileIcons";

const UploadFileAction = ({ onFilesSelected }) => {
  const fileIcons = useFileIcons(33);
  const [files, setFiles] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 0) {
      setFiles((prev) => [...prev, ...droppedFiles]);
    }
  };

  return (
    <div className={`fm-upload-file ${files.length > 0 ? "file-selcted" : ""}`}>
      <div className="select-files" onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
        <div className="draggable-file-input">
          <div className="input-text">
            <AiOutlineCloudUpload size={30} />
            <span>Drag files to upload</span>
          </div>
        </div>
        <div className="btn-choose-file">
          <Button>Choose File</Button>
        </div>
      </div>
      {files.length > 0 && (
        <div className="files-progress">
          <h2>Uploading</h2>
          <ul>
            {files.map((file, index) => (
              <li key={index}>
                <div className="file-icon">{fileIcons[getFileExtension(file.name)]}</div>
                <div className="file">
                  <div className="file-details">
                    <div className="file-info">
                      <span className="file-name text-truncate">{file.name}</span>
                      <span className="file-size"> {file.size / 1000} KB</span>
                    </div>
                    <div className="rm-file" title="remove">
                      <AiOutlineClose />
                    </div>
                  </div>
                  <div className="upload-progress-bar"></div>
                  <div className="upload-progress">58% done</div>
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
