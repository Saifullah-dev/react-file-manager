import PropTypes from "prop-types";
import { useTranslation } from "../../contexts/TranslationProvider";
import Button from "../Button/Button";
import "./OverwriteConfirmDialog.scss";

const OverwriteConfirmDialog = ({ show, fileName, onConfirm, onCancel }) => {
  const t = useTranslation();

  if (!show) return null;

  return (
    <div className="overwrite-confirm-overlay">
      <div className="overwrite-confirm-dialog">
        <div className="dialog-header">
          <h2>{t("replaceExistingFile")}</h2>
        </div>
        <div className="dialog-content">
          <p>{t("confirmOverwrite")}</p>
          {fileName && <p className="filename">{fileName}</p>}
        </div>
        <div className="dialog-actions">
          <Button type="secondary" onClick={onCancel}>
            {t("cancel")}
          </Button>
          <Button type="primary" onClick={onConfirm}>
            {t("yes")}
          </Button>
        </div>
      </div>
    </div>
  );
};

OverwriteConfirmDialog.propTypes = {
  show: PropTypes.bool.isRequired,
  fileName: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default OverwriteConfirmDialog;
