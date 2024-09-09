import React from "react";
import Button from "../../../components/Button/Button";
import "./Delete.action.scss";
import { useSelection } from "../../../contexts/SelectionContext";

const DeleteAction = ({ triggerAction, onDelete }) => {
  const { selectedFile, setSelectedFile } = useSelection();

  const handleDeleting = (file) => {
    onDelete(file);
    setSelectedFile(null);
    triggerAction.close();
  };

  return (
    <div className="file-delete-confirm">
      <p className="file-delete-confirm-text">
        Are you sure you want to delete "{selectedFile?.name}"?
      </p>
      <div className="file-delete-confirm-actions">
        <Button type="secondary" onClick={() => triggerAction.close()}>
          Cancel
        </Button>
        <Button type="danger" onClick={() => handleDeleting(selectedFile)}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default DeleteAction;
