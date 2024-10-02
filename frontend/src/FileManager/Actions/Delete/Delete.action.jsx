import React, { useEffect, useState } from "react";
import Button from "../../../components/Button/Button";
import { useSelection } from "../../../contexts/SelectionContext";
import "./Delete.action.scss";

const DeleteAction = ({ triggerAction, onDelete }) => {
  const [deleteMsg, setDeleteMsg] = useState("");
  const { selectedFiles, setSelectedFiles } = useSelection();

  useEffect(() => {
    setDeleteMsg(() => {
      if (selectedFiles.length === 1) {
        return `Are you sure you want to delete "${selectedFiles[0].name}"?`;
      } else if (selectedFiles.length > 1) {
        return `Are you sure you want to delete these ${selectedFiles.length} items?`;
      }
    });
  }, []);

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
          Cancel
        </Button>
        <Button type="danger" onClick={handleDeleting}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default DeleteAction;
