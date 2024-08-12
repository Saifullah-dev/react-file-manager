import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import CreateFolderAction from "./CreateFolder.action";
import RenameAction from "./Rename.action";
import DeleteAction from "./Delete.action";

const Actions = ({
  triggerAction,
  currentPath,
  currentPathFiles,
  selectedFile,
  handleCreateFolder,
  handleFileRename,
  handleDelete,
}) => {
  const [actionHeading, setActionHeading] = useState("");
  const [actionComponent, setActionComponent] = useState(null);
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
    },
    uploadFile: {
      title: "Upload File",
    },
    rename: {
      title: "Rename",
      component: (
        <RenameAction
          selectedFile={selectedFile}
          currentPathFiles={currentPathFiles}
          triggerAction={triggerAction}
          handleFileRename={handleFileRename}
        />
      ),
    },
    delete: {
      title: "Delete",
      component: (
        <DeleteAction
          selectedFile={selectedFile}
          triggerAction={triggerAction}
          handleDelete={handleDelete}
        />
      ),
    },
    preview: {
      title: "Preview",
    },
  };

  useEffect(() => {
    if (triggerAction.isActive) {
      const actionType = triggerAction.actionType;
      setActionHeading(actionTypes[actionType].title);
      setActionComponent(actionTypes[actionType].component);
    } else {
      setActionHeading("");
      setActionComponent(null);
    }
  }, [triggerAction.isActive]);
  return (
    <Modal
      heading={actionHeading}
      show={triggerAction.isActive}
      setShow={triggerAction.close}
      dialogClassName={"w-25"}
    >
      {actionComponent}
    </Modal>
  );
};

export default Actions;
