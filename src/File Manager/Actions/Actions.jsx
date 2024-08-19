import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import CreateFolderAction from "./CreateFolder.action";
import RenameAction from "./Rename.action";
import DeleteAction from "./Delete.action";
import UploadFileAction from "./UploadFile.action";

const Actions = ({
  triggerAction,
  currentPath,
  currentPathFiles,
  selectedFile,
  setSelectedFile,
  handleCreateFolder,
  handleRename,
  setIsItemSelection,
  handleDelete,
  allowedFileExtensions,
}) => {
  const [activeAction, setActiveAction] = useState(null);

  const actionTypes = {
    createFolder: {
      title: "Create Folder",
      component: (
        <CreateFolderAction
          currentPath={currentPath}
          currentPathFiles={currentPathFiles}
          triggerAction={triggerAction}
          handleCreateFolder={handleCreateFolder}
        />
      ),
      width: "25%",
    },
    uploadFile: {
      title: "Upload File",
      component: <UploadFileAction allowedFileExtensions={allowedFileExtensions} />,
      width: "35%",
    },
    rename: {
      title: "Rename",
      component: (
        <RenameAction
          selectedFile={selectedFile}
          currentPathFiles={currentPathFiles}
          triggerAction={triggerAction}
          handleRename={handleRename}
          setSelectedFile={setSelectedFile}
        />
      ),
      width: "25%",
    },
    delete: {
      title: "Delete",
      component: (
        <DeleteAction
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
  return (
    <Modal
      heading={activeAction?.title}
      show={triggerAction.isActive}
      setShow={triggerAction.close}
      dialogWidth={activeAction?.width}
    >
      {activeAction?.component}
    </Modal>
  );
};

export default Actions;
