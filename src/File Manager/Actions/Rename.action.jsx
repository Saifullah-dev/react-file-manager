import React, { useEffect, useRef, useState } from "react";
import Button from "../../components/Button/Button";
import { IoWarningOutline } from "react-icons/io5";

const RenameAction = ({
  selectedFile,
  currentPathFiles,
  handleRename,
  triggerAction,
  setSelectedFile,
}) => {
  const [renameFile, setRenameFile] = useState(selectedFile?.name);
  const renameFileRef = useRef(null);
  const [renameFileWarning, setRenameFileWarning] = useState(false);
  const [fileRenameError, setFileRenameError] = useState(false);
  const [renameErrorMessage, setRenameErrorMessage] = useState("");

  useEffect(() => {
    if (selectedFile) {
      renameFileRef?.current?.focus();

      if (selectedFile.isDirectory) {
        renameFileRef?.current?.select();
      } else {
        const fileExtension = selectedFile.name.split(".").pop();
        const fileNameLength = selectedFile.name.length - fileExtension.length - 1;
        renameFileRef?.current?.setSelectionRange(0, fileNameLength);
      }
    } else {
      setRenameFileWarning(false);
    }
  }, []);

  const handleValidateFolderRename = (e) => {
    const invalidCharsRegex = /[\\/:*?"<>|]/;
    if (invalidCharsRegex.test(e.key)) {
      e.preventDefault();
      setRenameErrorMessage(
        "A file name can't contain any of the following characters: \\ / : * ? \" < > |"
      );
      setFileRenameError(true);
    } else {
      setFileRenameError(false);
    }
  };

  const handleFileRenaming = (e, isConfirmed) => {
    if (renameFile === "") {
      setFileRenameError(true);
      setRenameErrorMessage(`${selectedFile.isDirectory ? "Folder" : "File"} name is required!`);
      return;
    } else if (renameFile === selectedFile.name) {
      triggerAction.close();
      return;
    } else if (currentPathFiles.some((file) => file.name === renameFile)) {
      setFileRenameError(true);
      setRenameErrorMessage("A file or folder with the same name already exists!");
      return;
    } else if (!selectedFile.isDirectory && !isConfirmed) {
      const fileExtension = selectedFile.name.split(".").pop();
      const renameFileExtension = renameFile.split(".").pop();
      if (fileExtension !== renameFileExtension) {
        setRenameFileWarning(true);
        return;
      }
    }
    handleRename(selectedFile, renameFile);
    setSelectedFile((prev) => ({ ...prev, name: renameFile }));
    triggerAction.close();
  };

  return (
    <>
      {renameFileWarning ? (
        <div className="fm-rename-folder-container">
          <div className="fm-rename-folder-input">
            <div className="fm-rename-warning">
              <IoWarningOutline size={70} color="orange" />
              <div>
                If you change a file name extension, the file might become unusable. Are you sure
                you want to change it?
              </div>
            </div>
          </div>
          <div className="fm-rename-folder-action">
            <Button type="secondary" onClick={() => setRenameFileWarning(false)}>
              No
            </Button>
            <Button type="danger" onClick={(e) => handleFileRenaming(e, true)}>
              Yes
            </Button>
          </div>
        </div>
      ) : (
        <div className="fm-rename-folder-container">
          <div className="fm-rename-folder-input">
            <input
              ref={renameFileRef}
              type="text"
              value={renameFile}
              onChange={(e) => {
                setRenameFile(e.target.value);
                setFileRenameError(false);
              }}
              onKeyDown={handleValidateFolderRename}
              className="action-input"
            />
            {fileRenameError && <div className="folder-error">{renameErrorMessage}</div>}
          </div>
          <div className="fm-rename-folder-action">
            <Button onClick={handleFileRenaming} type="primary">
              Save
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default RenameAction;
