import React, { useEffect, useState } from "react";
import Button from "../../../components/Button/Button";
import { useSelection } from "../../../contexts/SelectionContext";
import { useTranslation } from "../../../contexts/TranslationProvider";
import "./Delete.action.scss";

const DeleteAction = ({ triggerAction, onDelete }) => {
  const [deleteMsg, setDeleteMsg] = useState("");
  const { selectedFiles, setSelectedFiles } = useSelection();
  const t = useTranslation();

  useEffect(() => {
    setDeleteMsg(() => {
      if (selectedFiles.length === 1) {
        return t("deleteItemConfirm", { fileName: selectedFiles[0].name });
      } else if (selectedFiles.length > 1) {
        return t("deleteItemsConfirm", { count: selectedFiles.length });
      }
    });
  }, [t]);

  const handleDeleting = () => {
    onDelete(selectedFiles);
    setSelectedFiles([]);
    triggerAction.close();
  };

  return (
    <div className="file-delete-confirm">
      <p className="file-delete-confirm-text">{deleteMsg}</p>
      <div className="file-delete-confirm-actions">
        <Button type="secondary" onClick={() => triggerAction.close()}>
          {t("cancel")}
        </Button>
        <Button type="danger" onClick={handleDeleting}>
          {t("delete")}
        </Button>
      </div>
    </div>
  );
};

export default DeleteAction;
