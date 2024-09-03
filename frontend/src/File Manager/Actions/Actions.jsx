import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import CreateFolderAction from "./CreateFolder.action";
import RenameAction from "./Rename.action";
import DeleteAction from "./Delete.action";
import UploadFileAction from "./Upload File/UploadFile.action";

const Actions = ({
  files,
  fileUploadConfig,
  triggerAction,
  currentPath,
  currentPathFiles,
  selectedFile,
  setSelectedFile,
  handleCreateFolder,
  handleFileUploading,
  handleFileUploaded,
  currentFolder,
  handleRename,
  setIsItemSelection,
  handleDelete,
  allowedFileExtensions,
}) => {
  const [activeAction, setActiveAction] = useState(null);

  const actionTypes = {
    // createFolder: {
    //   title: "Create Folder",
    //   component: (
    //     <CreateFolderAction
    //       files={files}
    //       currentPath={currentPath}
    //       currentPathFiles={currentPathFiles}
    //       triggerAction={triggerAction}
    //       handleCreateFolder={handleCreateFolder}
    //       currentFolder={currentFolder}
    //     />
    //   ),
    //   width: "25%",
    // },
    uploadFile: {
      title: "Upload Files",
      component: (
        <UploadFileAction
          fileUploadConfig={fileUploadConfig}
          allowedFileExtensions={allowedFileExtensions}
          handleFileUploading={handleFileUploading}
          handleFileUploaded={handleFileUploaded}
          currentFolder={currentFolder}
        />
      ),
      width: "35%",
    },
    // rename: {
    //   title: "Rename",
    //   component: (
    //     <RenameAction
    //       files={files}
    //       selectedFile={selectedFile}
    //       currentPathFiles={currentPathFiles}
    //       triggerAction={triggerAction}
    //       handleRename={handleRename}
    //       setSelectedFile={setSelectedFile}
    //     />
    //   ),
    //   width: "25%",
    // },
    delete: {
      title: "Delete",
      component: (
        <DeleteAction
          files={files}
          selectedFile={selectedFile}
          triggerAction={triggerAction}
          handleDelete={handleDelete}
          setIsItemSelection={setIsItemSelection}
          setSelectedFile={setSelectedFile}
        />
      ),
      width: "25%",
    },
    preview: {
      title: "Preview",
    },
  };

  useEffect(() => {
    if (triggerAction.isActive) {
      const actionType = triggerAction.actionType;
      setActiveAction(actionTypes[actionType]);
    } else {
      setActiveAction(null);
    }
  }, [triggerAction.isActive]);

  if (activeAction) {
    return (
      <Modal
        heading={activeAction.title}
        show={triggerAction.isActive}
        setShow={triggerAction.close}
        dialogWidth={activeAction.width}
      >
        {activeAction?.component}
      </Modal>
    );
  }
};

export default Actions;
