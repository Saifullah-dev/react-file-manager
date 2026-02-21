import { MdContentCopy, MdContentCut, MdClose } from "react-icons/md";
import { useClipBoard } from "../../contexts/ClipboardContext";
import { useTranslation } from "../../contexts/TranslationProvider";
import "./ClipboardIndicator.scss";

const ClipboardIndicator = () => {
  const { clipBoard, setClipBoard } = useClipBoard();
  const t = useTranslation();

  if (!clipBoard || !clipBoard.files || clipBoard.files.length === 0) return null;

  const fileCount = clipBoard.files.length;
  const operationType = clipBoard.isMoving ? "move" : "copy";

  return (
    <div className="fm-clipboard-indicator" role="status" aria-live="polite">
      <span className="fm-clipboard-icon">
        {clipBoard.isMoving ? <MdContentCut size={14} /> : <MdContentCopy size={14} />}
      </span>
      <span className="fm-clipboard-text">
        {fileCount} {fileCount === 1 ? t("item") || "item" : t("items") || "items"}{" "}
        ({t(operationType) || operationType})
      </span>
      <button
        className="fm-clipboard-clear"
        onClick={() => setClipBoard(null)}
        aria-label={t("clearClipboard") || "Clear clipboard"}
        title={t("clearClipboard") || "Clear clipboard"}
      >
        <MdClose size={14} />
      </button>
    </div>
  );
};

ClipboardIndicator.displayName = "ClipboardIndicator";

export default ClipboardIndicator;
