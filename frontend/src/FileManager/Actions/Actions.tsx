import { ReactNode, useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import DeleteAction from "./Delete/Delete.action";
import UploadFileAction from "./UploadFile/UploadFile.action";
import PreviewFileAction from "./PreviewFile/PreviewFile.action";
import { useSelection } from "../../contexts/SelectionContext";
import { useShortcutHandler } from "../../hooks/useShortcutHandler";
import { useTranslation } from "../../contexts/TranslationProvider";
import { FileUploadConfiguration } from "../../types/FileUploadConfiguration";
import { FilePreviewComponent, OnDelete, OnFileUploaded, OnFileUploading, OnRefresh } from "../../types/FileManagerFunctions";
import { TriggerAction } from "../../types/TriggerAction";
import { Permissions } from "../../types/Permissions";

interface ActionType {
  title: string;
  width: string;
  component: ReactNode;
}

interface ActionList {
  uploadFile: ActionType;
  delete: ActionType;
  previewFile: ActionType;
}

type ActionKey = keyof ActionList;

export interface ActionsProps {
  fileUploadConfig?: FileUploadConfiguration;
  onFileUploading?: OnFileUploading;
  onFileUploaded?: OnFileUploaded;
  onDelete: OnDelete;
  onRefresh?: OnRefresh;
  maxFileSize?: number;
  filePreviewPath?: string;
  filePreviewComponent?: FilePreviewComponent;
  acceptedFileTypes?: string;
  triggerAction: TriggerAction;
  permissions: Permissions;
}

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
}: ActionsProps) => {
  const [activeAction, setActiveAction] = useState<ActionType | null>(null);
  const { selectedFiles } = useSelection();
  const t = useTranslation();

  // Triggers all the keyboard shortcuts based actions
  useShortcutHandler(triggerAction, onRefresh, permissions);

  const actionTypes: ActionList = {
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
      const actionType = triggerAction.actionType as ActionKey;
      
      if (actionType === "previewFile") {
        actionTypes[actionType].title = selectedFiles?.at(0)?.name ?? t("preview");
      }
      
      setActiveAction(actionTypes[actionType]);
    } else {
      setActiveAction(null);
    }
  }, [triggerAction.isActive, selectedFiles, t]);

  if (activeAction) {
    return (
      <Modal
        heading={activeAction.title}
        show={triggerAction.isActive}
        setShow={triggerAction.close}
        dialogWidth={activeAction.width}
      >
        {activeAction.component}
      </Modal>
    );
  }

  return null; 
};

export default Actions;