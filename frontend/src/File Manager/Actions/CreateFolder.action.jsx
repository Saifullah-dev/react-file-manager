import { useEffect, useState } from "react";
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";
import { duplicateNameHandler } from "../../utils/duplicateNameHandler";

const maxNameLength = 220;

const CreateFolderAction = ({
  file,
  currentPathFiles,
  handleCreateFolder,
  currentFolder,
  triggerAction,
}) => {
  const [folderName, setFolderName] = useState(file.name);
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
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      handleFolderCreating();
      return;
    }

    const invalidCharsRegex = /[\\/:*?"<>|]/;
    if (invalidCharsRegex.test(e.key)) {
      e.preventDefault();
      // Todo: Show this error in tooltip instead
      setFolderErrorMessage(
        "A file name can't contain any of the following characters: \\ / : * ? \" < > |"
      );
      setFolderNameError(true);
    } else {
      setFolderNameError(false);
    }
  };

  function handleFolderCreating() {
    let newFolderName = folderName.trim();
    const syncedCurrPathFiles = currentPathFiles.filter((f) => !(!!f.key && f.key === file.key));

    const alreadyExists = syncedCurrPathFiles.find((f) => {
      return f.name.toLowerCase() === newFolderName.toLowerCase();
    });

    if (alreadyExists) {
      // Todo: Open modal here to show error and suggest to name "alreadyExistName (n)" instead.
      setFolderErrorMessage(`A folder with the name "${newFolderName}" already exits.`);
      setFolderNameError(true);
      return;
    }

    if (newFolderName === "") {
      newFolderName = duplicateNameHandler("New Folder", true, syncedCurrPathFiles);
    }

    handleCreateFolder(newFolderName, currentFolder);
    triggerAction.close();
  }
  //

  const outsideClick = useDetectOutsideClick();

  // Folder name text selection upon visible
  useEffect(() => {
    outsideClick.ref.current?.focus();
    outsideClick.ref.current?.select();
  }, []);
  //

  useEffect(() => {
    if (outsideClick.isClicked) {
      handleFolderCreating();
    }
  }, [outsideClick.isClicked]);

  return (
    <textarea
      ref={outsideClick.ref}
      className="rename-file"
      maxLength={maxNameLength}
      value={folderName}
      onChange={handleFolderNameChange}
      onKeyDown={handleValidateFolderName}
      onClick={(e) => e.stopPropagation()}
    />
  );
};

export default CreateFolderAction;
