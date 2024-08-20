import { useEffect, useRef, useState } from "react";
import Button from "../../components/Button/Button";

const CreateFolderAction = ({
  currentPath,
  currentPathFiles,
  handleCreateFolder,
  triggerAction,
}) => {
  const [folderName, setFolderName] = useState("New Folder");
  const [folderNameError, setFolderNameError] = useState(false);
  const [folderErrorMessage, setFolderErrorMessage] = useState("");

  // Folder name change handler function
  const handleFolderNameChange = (e) => {
    setFolderName(e.target.value);
    setFolderNameError(false);
  };
  //

  // Validate folder name and call "handleCreateFolder" function
  const handleValidateFolderName = (e) => {
    const invalidCharsRegex = /[\\/:*?"<>|]/;
    if (invalidCharsRegex.test(e.key)) {
      e.preventDefault();
      setFolderErrorMessage(
        "A file name can't contain any of the following characters: \\ / : * ? \" < > |"
      );
      setFolderNameError(true);
    } else {
      setFolderNameError(false);
    }
  };

  const handleFolderCreating = () => {
    const newFolderName = folderName.trim();
    // Validation non-empty folder name
    if (newFolderName === "") {
      setFolderErrorMessage("Folder name cannot be empty.");
      setFolderNameError(true);
    } else {
      const alreadyExists = currentPathFiles.find((file) => {
        return file.name.toLowerCase() === newFolderName.toLowerCase();
      });

      if (!alreadyExists) {
        // Current path doesn't have the same folder name
        handleCreateFolder(newFolderName, currentPath);
        triggerAction.close();
      } else {
        setFolderErrorMessage(`A folder with the name "${newFolderName}" already exits.`);
        setFolderNameError(true);
      }
    }
  };
  //

  // Folder name text selection upon visible
  const folderNameRef = useRef(null);
  useEffect(() => {
    folderNameRef.current.focus();
    folderNameRef.current.select();
  }, []);
  //

  return (
    <div className="fm-create-folder-container">
      <div className="fm-create-folder-input">
        <input
          ref={folderNameRef}
          type="text"
          value={folderName}
          onChange={handleFolderNameChange}
          onKeyDown={handleValidateFolderName}
          className="action-input"
        />
        {folderNameError && <div className="folder-error">{folderErrorMessage}</div>}
      </div>
      <div className="fm-create-folder-action">
        <Button onClick={handleFolderCreating} type="primary">
          Create
        </Button>
      </div>
    </div>
  );
};

export default CreateFolderAction;
