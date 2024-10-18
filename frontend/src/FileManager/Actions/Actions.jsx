import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import DeleteAction from "./Delete/Delete.action";
import UploadFileAction from "./UploadFile/UploadFile.action";
import PreviewFileAction from "./PreviewFile/PreviewFile.action";
import { useSelection } from "../../contexts/SelectionContext";
import { useShortcutHandler } from "../../hooks/useShortcutHandler";

const Actions = ({
  fileUploadConfig,
  onFileUploading,
  onFileUploaded,
  onDelete,
  onRefresh,
  maxFileSize,
  filePreviewPath,
  acceptedFileTypes,
  triggerAction,
}) => {
  const [activeAction, setActiveAction] = useState(null);
  const { selectedFiles } = useSelection();

  // Triggers all the keyboard shortcuts based actions
  useShortcutHandler(triggerAction, onRefresh);

  const actionTypes = {
    uploadFile: {
      title: "Upload",
      component: (
        <UploadFileAction
          fileUploadConfig={fileUploadConfig}
          maxFileSize={maxFileSize}
          acceptedFileTypes={acceptedFileTypes}
          onFileUploading={onFileUploading}
          onFileUploaded={onFileUploaded}
        />
      ),
      width: "35%",
    },
    delete: {
      title: "Delete",
      component: <DeleteAction triggerAction={triggerAction} onDelete={onDelete} />,
      width: "25%",
    },
    previewFile: {
      title: "Preview",
      component: <PreviewFileAction filePreviewPath={filePreviewPath} />,
      width: "50%",
    },
  };

  useEffect(() => {
    if (triggerAction.isActive) {
      const actionType = triggerAction.actionType;
      if (actionType === "previewFile") {
        actionTypes[actionType].title = selectedFiles?.name ?? "Preview";
      }
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
