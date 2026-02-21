import { MdClose, MdCheck, MdError, MdSkipNext } from "react-icons/md";
import { useBatchOperations } from "../../contexts/BatchOperationsContext";
import { useTranslation } from "../../contexts/TranslationProvider";
import "./BatchProgress.scss";

const BatchProgress = () => {
  const {
    isActive,
    operationType,
    items,
    overallProgress,
    completed,
    failed,
    skipped,
    cancelled,
    cancelBatch,
    closeBatch,
  } = useBatchOperations();
  const t = useTranslation();

  if (!isActive) return null;

  const isDone = overallProgress === 100 || cancelled;
  const totalItems = items.length;

  return (
    <div className="fm-batch-overlay">
      <div className="fm-batch-modal" role="dialog" aria-label="Batch operation progress">
        <div className="fm-batch-header">
          <h3>
            {isDone
              ? t("operationComplete") || "Operation Complete"
              : `${t(operationType) || operationType}... (${completed + failed + skipped}/${totalItems})`}
          </h3>
          {isDone && (
            <button className="fm-batch-close" onClick={closeBatch} aria-label="Close">
              <MdClose size={18} />
            </button>
          )}
        </div>

        <div className="fm-batch-progress-bar">
          <div
            className={`fm-batch-progress-fill ${isDone ? (failed > 0 ? "has-errors" : "success") : ""}`}
            style={{ width: `${overallProgress}%` }}
          />
        </div>
        <div className="fm-batch-progress-text">{overallProgress}%</div>

        <div className="fm-batch-items">
          {items.map((item) => (
            <div key={item.id} className={`fm-batch-item fm-batch-item-${item.status}`}>
              <span className="fm-batch-item-icon">
                {item.status === "completed" && <MdCheck size={16} />}
                {item.status === "failed" && <MdError size={16} />}
                {item.status === "skipped" && <MdSkipNext size={16} />}
                {(item.status === "pending" || item.status === "in_progress") && (
                  <span className="fm-batch-spinner" />
                )}
              </span>
              <span className="fm-batch-item-name">{item.name}</span>
              <span className="fm-batch-item-status">
                {item.status === "in_progress" && `${item.progress || 0}%`}
                {item.status === "failed" && (item.error || "Failed")}
              </span>
            </div>
          ))}
        </div>

        {isDone ? (
          <div className="fm-batch-summary">
            <span className="fm-batch-summary-success">{completed} {t("succeeded") || "succeeded"}</span>
            {failed > 0 && (
              <span className="fm-batch-summary-failed">{failed} {t("failed") || "failed"}</span>
            )}
            {skipped > 0 && (
              <span className="fm-batch-summary-skipped">{skipped} {t("skipped") || "skipped"}</span>
            )}
          </div>
        ) : (
          <div className="fm-batch-actions">
            <button className="fm-batch-cancel" onClick={cancelBatch}>
              {t("cancel") || "Cancel"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

BatchProgress.displayName = "BatchProgress";

export default BatchProgress;
