import React from "react";
import Button from "../../components/Button/Button";

const DeleteAction = ({
  files,
  selectedFile,
  triggerAction,
  handleDelete,
  setIsItemSelection,
  setSelectedFile,
}) => {
  const handleDeleting = (file) => {
    handleDelete(file);
    setIsItemSelection(false);
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
