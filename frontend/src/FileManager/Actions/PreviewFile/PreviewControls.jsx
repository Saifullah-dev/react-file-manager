import { FiZoomIn, FiZoomOut, FiMaximize } from "react-icons/fi";
import { MdNavigateBefore, MdNavigateNext, MdFullscreen, MdFullscreenExit } from "react-icons/md";
import { useTranslation } from "../../../contexts/TranslationProvider";
import "./PreviewControls.scss";

const MIN_ZOOM = 25;
const MAX_ZOOM = 400;
const ZOOM_STEP = 25;

const PreviewControls = ({
  zoomLevel,
  onZoomIn,
  onZoomOut,
  onFitToScreen,
  isFullscreen,
  onToggleFullscreen,
  currentIndex,
  totalFiles,
  onPrevious,
  onNext,
  showZoomControls,
}) => {
  const t = useTranslation();

  return (
    <div className="preview-controls">
      <button
        className="preview-control-btn"
        onClick={onPrevious}
        disabled={currentIndex <= 0}
        title={t("previousFile")}
        aria-label={t("previousFile")}
      >
        <MdNavigateBefore size={20} />
      </button>

      {showZoomControls && (
        <div className="zoom-controls">
          <button
            className="preview-control-btn"
            onClick={onZoomOut}
            disabled={zoomLevel <= MIN_ZOOM}
            title={t("zoomOut")}
            aria-label={t("zoomOut")}
          >
            <FiZoomOut size={16} />
          </button>
          <span className="zoom-level">{zoomLevel}%</span>
          <button
            className="preview-control-btn"
            onClick={onZoomIn}
            disabled={zoomLevel >= MAX_ZOOM}
            title={t("zoomIn")}
            aria-label={t("zoomIn")}
          >
            <FiZoomIn size={16} />
          </button>
          <button
            className="preview-control-btn"
            onClick={onFitToScreen}
            title={t("fitToScreen")}
            aria-label={t("fitToScreen")}
          >
            <FiMaximize size={16} />
          </button>
        </div>
      )}

      <button
        className="preview-control-btn"
        onClick={onToggleFullscreen}
        title={isFullscreen ? t("exitFullscreen") : t("fullscreen")}
        aria-label={isFullscreen ? t("exitFullscreen") : t("fullscreen")}
      >
        {isFullscreen ? <MdFullscreenExit size={20} /> : <MdFullscreen size={20} />}
      </button>

      <span className="file-counter">
        {currentIndex + 1} {t("ofFiles")} {totalFiles}
      </span>

      <button
        className="preview-control-btn"
        onClick={onNext}
        disabled={currentIndex >= totalFiles - 1}
        title={t("nextFile")}
        aria-label={t("nextFile")}
      >
        <MdNavigateNext size={20} />
      </button>
    </div>
  );
};

export { MIN_ZOOM, MAX_ZOOM, ZOOM_STEP };
export default PreviewControls;
