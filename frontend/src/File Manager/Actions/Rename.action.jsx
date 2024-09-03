import React, { useEffect, useRef, useState } from "react";
import Button from "../../components/Button/Button";
import { IoWarningOutline } from "react-icons/io5";
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";
import Modal from "../../components/Modal/Modal";
import { getFileExtension } from "../../utils/getFileExtension";

const maxNameLength = 220;

const RenameAction = ({
  file,
  currentPathFiles,
  setCurrentPathFiles,
  handleRename,
  triggerAction,
}) => {
  const [renameFile, setRenameFile] = useState(file?.name);
  const [renameFileWarning, setRenameFileWarning] = useState(false);
  const [fileRenameError, setFileRenameError] = useState(false);
  const [renameErrorMessage, setRenameErrorMessage] = useState("");
  const warningModalRef = useRef(null);
  const outsideClick = useDetectOutsideClick((e) => {
    if (!warningModalRef.current?.contains(e.target)) {
      e.preventDefault();
      e.stopPropagation();
    }
  });

  const handleValidateFolderRename = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      outsideClick.setIsClicked(true);
      return;
    }

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

  // Auto hide error message after 7 seconds
  useEffect(() => {
    if (fileRenameError) {
      const autoHideError = setTimeout(() => {
        setFileRenameError(false);
        setRenameErrorMessage("");
      }, 7000);

      return () => clearTimeout(autoHideError);
    }
  }, [fileRenameError]);
  //

  function handleFileRenaming(isConfirmed) {
    if (renameFile === "" || renameFile === file.name) {
      setCurrentPathFiles((prev) =>
        prev.map((f) => {
          if (f.key === file.key) {
            f.isEditing = false;
          }
          return f;
        })
      );
      triggerAction.close();
      return;
    } else if (currentPathFiles.some((file) => file.name === renameFile)) {
      setFileRenameError(true);
      setRenameErrorMessage(`This destination already contains a folder named '${renameFile}'.`);
      outsideClick.setIsClicked(false);
      return;
    } else if (!file.isDirectory && !isConfirmed) {
      const fileExtension = getFileExtension(file.name);
      const renameFileExtension = getFileExtension(renameFile);
      if (fileExtension !== renameFileExtension) {
        setRenameFileWarning(true);
        return;
      }
    }
    setFileRenameError(false);
    handleRename(file, renameFile);
    setCurrentPathFiles((prev) => prev.filter((f) => f.key !== file.key)); // Todo: Should only filter on success API call
    triggerAction.close();
  }

  const focusName = () => {
    outsideClick.ref?.current?.focus();

    if (file.isDirectory) {
      outsideClick.ref?.current?.select();
    } else {
      const fileExtension = getFileExtension(file.name);
      const fileNameLength = file.name.length - fileExtension.length - 1;
      outsideClick.ref?.current?.setSelectionRange(0, fileNameLength);
    }
  };

  useEffect(() => {
    focusName();
  }, []);

  useEffect(() => {
    if (outsideClick.isClicked) {
      handleFileRenaming(false);
    }
    focusName();
  }, [outsideClick.isClicked]);

  return (
    <>
      <div className="rename-file-container">
        <textarea
          ref={outsideClick.ref}
          className="rename-file"
          maxLength={maxNameLength}
          value={renameFile}
          onChange={(e) => {
            setRenameFile(e.target.value);
            setFileRenameError(false);
          }}
          onKeyDown={handleValidateFolderRename}
          onClick={(e) => e.stopPropagation()}
        />
        {fileRenameError && <p className="folder-name-error">{renameErrorMessage}</p>}
      </div>

      <Modal
        heading={"Rename"}
        show={renameFileWarning}
        setShow={setRenameFileWarning}
        dialogWidth={"25vw"}
      >
        <div className="fm-rename-folder-container" ref={warningModalRef}>
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
            <Button
              type="secondary"
              onClick={() => {
                setRenameFileWarning(false);
                outsideClick.setIsClicked(false);
              }}
            >
              No
            </Button>
            <Button
              type="danger"
              onClick={() => {
                setRenameFileWarning(false);
                handleFileRenaming(true);
              }}
            >
              Yes
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default RenameAction;
