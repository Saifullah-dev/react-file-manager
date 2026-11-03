import { ChangeEvent, KeyboardEvent, RefObject, useEffect, useState } from "react";
import { useDetectOutsideClick } from "../../../hooks/useDetectOutsideClick";
import { duplicateNameHandler } from "../../../utils/duplicateNameHandler";
import NameInput from "../../../components/NameInput/NameInput";
import ErrorTooltip, { ErrorTooltipXPlacement, ErrorTooltipYPlacement } from "../../../components/ErrorTooltip/ErrorTooltip";
import { useFileNavigation } from "../../../contexts/FileNavigationContext";
import { useFiles } from "../../../contexts/FilesContext";
import { useLayout } from "../../../contexts/LayoutContext";
import { useTranslation } from "../../../contexts/TranslationProvider";
import { ExtendedFileItem } from "../../../types/File";
import { OnCreateFolder } from "../../../types/FileManagerFunctions";
import { TriggerAction } from "../../../types/TriggerAction";

export interface CreateFolderActionProps {
  filesViewRef: RefObject<HTMLDivElement | null>;
  file: ExtendedFileItem;
  onCreateFolder?: OnCreateFolder;
  triggerAction: TriggerAction;
}

const maxNameLength = 220;

const CreateFolderAction = ({ filesViewRef, file, onCreateFolder, triggerAction } : CreateFolderActionProps) => {
  const [folderName, setFolderName] = useState(file.name);
  const [folderNameError, setFolderNameError] = useState(false);
  const [folderErrorMessage, setFolderErrorMessage] = useState("");
  const [errorXPlacement, setErrorXPlacement] = useState<ErrorTooltipXPlacement>("right");
  const [errorYPlacement, setErrorYPlacement] = useState<ErrorTooltipYPlacement>("bottom");
  const outsideClick = useDetectOutsideClick<HTMLTextAreaElement>((e) => {
    e.preventDefault();
    e.stopPropagation();
  });
  const { currentPath, currentFolder, currentPathFiles, setCurrentPathFiles } = useFileNavigation();
  const { onError } = useFiles();
  const { activeLayout } = useLayout();
  const t = useTranslation();

  // Folder name change handler function
  const handleFolderNameChange = (e : ChangeEvent<HTMLTextAreaElement>) => {
    setFolderName(e.target.value);
    setFolderNameError(false);
  };
  //

  // Validate folder name and call "onCreateFolder" function
  const handleValidateFolderName = (e : KeyboardEvent<HTMLTextAreaElement>) => {
    e.stopPropagation();
    if (e.key === "Enter") {
      e.preventDefault();
      handleFolderCreating();
      return;
    }

    if (e.key === "Escape") {
      e.preventDefault();
      triggerAction.close();
      setCurrentPathFiles((prev) => prev.filter((f) => f.key !== file.key));
      return;
    }

    const invalidCharsRegex = /[\\/:*?"<>|]/;
    if (invalidCharsRegex.test(e.key)) {
      e.preventDefault();
      setFolderErrorMessage(t("invalidFileName"));
      setFolderNameError(true);
    } else {
      setFolderNameError(false);
      setFolderErrorMessage("");
    }
  };

  // Auto hide error message after 7 seconds
  useEffect(() => {
    if (folderNameError) {
      const autoHideError = setTimeout(() => {
        setFolderNameError(false);
        setFolderErrorMessage("");
      }, 7000);

      return () => clearTimeout(autoHideError);
    }
    return;
  }, [folderNameError]);
  //

  function handleFolderCreating() {
    let newFolderName = folderName.trim();
    const syncedCurrPathFiles = currentPathFiles.filter((f) => !(!!f.key && f.key === file.key));

    const alreadyExists = syncedCurrPathFiles.find((f) => {
      return f.name.toLowerCase() === newFolderName.toLowerCase();
    });

    if (alreadyExists) {
      setFolderErrorMessage(t("folderExists", { renameFile: newFolderName }));
      setFolderNameError(true);
      outsideClick.ref.current?.focus();
      outsideClick.ref.current?.select();
      outsideClick.setIsClicked(false);
      return;
    }

    if (newFolderName === "") {
      newFolderName = duplicateNameHandler("New Folder", true, syncedCurrPathFiles);
    }

    // onCreateFolder may throw or return a rejected promise when the folder can't be created.
    // Report both through onError, and always remove the placeholder below.
    const handleError = (cause: unknown) => {
      const error = { type: "createFolder", message: t("folderNotCreated"), cause };
      onError(error, { name: newFolderName, isDirectory: true, path: `${currentPath ?? ""}/${newFolderName}` });
    };
    try {
      Promise.resolve(onCreateFolder?.(newFolderName, currentFolder!)).catch(handleError);
    } catch (cause) {
      handleError(cause);
    }
    setCurrentPathFiles((prev) => prev.filter((f) => f.key !== file.key));
    triggerAction.close();
  }
  //

  // Folder name text selection upon visible
  useEffect(() => {
    outsideClick.ref.current?.focus();
    outsideClick.ref.current?.select();

    // Dynamic Error Message Placement based on available space
    if (outsideClick.ref?.current) {
      const errorMessageWidth = 292 + 8 + 8 + 5; // 8px padding on left and right + additional 5px for gap
      const errorMessageHeight = 56 + 20 + 10 + 2; // 20px :before height
      const filesContainer = filesViewRef.current;
      const filesContainerRect = filesContainer!.getBoundingClientRect();
      const nameInputContainer = outsideClick.ref.current;
      const nameInputContainerRect = nameInputContainer.getBoundingClientRect();

      const rightAvailableSpace = filesContainerRect.right - nameInputContainerRect.left;
      rightAvailableSpace > errorMessageWidth
        ? setErrorXPlacement("right")
        : setErrorXPlacement("left");

      const bottomAvailableSpace =
        filesContainerRect.bottom - (nameInputContainerRect.top + nameInputContainer.clientHeight);
      bottomAvailableSpace > errorMessageHeight
        ? setErrorYPlacement("bottom")
        : setErrorYPlacement("top");
    }
  }, []);
  //

  useEffect(() => {
    if (outsideClick.isClicked) {
      handleFolderCreating();
    }
  }, [outsideClick.isClicked]);

  return (
    <>
      <NameInput
        id="newFolder"
        nameInputRef={outsideClick.ref}
        maxLength={maxNameLength}
        value={folderName}
        onChange={handleFolderNameChange}
        onKeyDown={handleValidateFolderName}
        onClick={(e) => e.stopPropagation()}
        {...(activeLayout === "list" && { rows: 1 })}
      />
      {folderNameError && (
        <ErrorTooltip
          message={folderErrorMessage}
          xPlacement={errorXPlacement}
          yPlacement={errorYPlacement}
        />
      )}
    </>
  );
};

export default CreateFolderAction;
