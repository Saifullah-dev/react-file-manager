import { lazy, Suspense, useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import Loader from "../../components/Loader/Loader";

const DeleteAction = lazy(() => import("./Delete/Delete.action"));
const UploadFileAction = lazy(() => import("./UploadFile/UploadFile.action"));
const PreviewFileAction = lazy(() => import("./PreviewFile/PreviewFile.action"));
import { useSelection } from "../../contexts/SelectionContext";
import { useShortcutHandler } from "../../hooks/useShortcutHandler";
import { useTranslation } from "../../contexts/TranslationProvider";

const Actions = ({
  fileUploadConfig,
  onFileUploading,
  onFileUploaded,
  onDelete,
  onRefresh,
  maxFileSize,
  filePreviewPath,
  filePreviewComponent,
  acceptedFileTypes,
  triggerAction,
  permissions,
}) => {
  const [activeAction, setActiveAction] = useState(null);
  const { selectedFiles } = useSelection();
  const t = useTranslation();

  // Triggers all the keyboard shortcuts based actions
  useShortcutHandler(triggerAction, onRefresh, permissions);

  const actionTypes = {
    uploadFile: {
      title: t("upload"),
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
      title: t("delete"),
      component: <DeleteAction triggerAction={triggerAction} onDelete={onDelete} />,
      width: "25%",
    },
    previewFile: {
      title: t("preview"),
      component: (
        <PreviewFileAction
          filePreviewPath={filePreviewPath}
          filePreviewComponent={filePreviewComponent}
        />
      ),
      width: "50%",
    },
  };

  useEffect(() => {
    if (triggerAction.isActive) {
      const actionType = triggerAction.actionType;
      if (actionType === "previewFile") {
        actionTypes[actionType].title = selectedFiles?.name ?? t("preview");
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
        <Suspense fallback={<Loader loading={true} />}>
          {activeAction?.component}
        </Suspense>
      </Modal>
    );
  }
};

export default Actions;
