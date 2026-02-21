import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { getFileExtension } from "../../../utils/getFileExtension";
import Loader from "../../../components/Loader/Loader";
import { useSelection } from "../../../contexts/SelectionContext";
import { useFileNavigation } from "../../../contexts/FileNavigationContext";
import Button from "../../../components/Button/Button";
import { getDataSize } from "../../../utils/getDataSize";
import { MdOutlineFileDownload } from "react-icons/md";
import { useFileIcons } from "../../../hooks/useFileIcons";
import { FaRegFileAlt } from "react-icons/fa";
import { useTranslation } from "../../../contexts/TranslationProvider";
import PreviewControls, { MIN_ZOOM, MAX_ZOOM, ZOOM_STEP } from "./PreviewControls";
import { CodeViewer, MarkdownViewer, CSVViewer } from "./FileViewers";
import "./PreviewFile.action.scss";

const imageExtensions = ["jpg", "jpeg", "png"];
const videoExtensions = ["mp4", "mov", "avi"];
const audioExtensions = ["mp3", "wav", "m4a"];
const iFrameExtensions = ["txt", "pdf"];
const codeExtensions = ["js", "jsx", "ts", "tsx", "json", "html", "css", "scss", "xml", "yaml", "yml", "sh", "bash", "py", "rb", "java", "c", "cpp", "h", "go", "rs", "php", "sql"];
const markdownExtensions = ["md", "markdown"];
const csvExtensions = ["csv", "tsv"];

const PreviewFileAction = ({ filePreviewPath, filePreviewComponent }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const { selectedFiles, setSelectedFiles, handleDownload: triggerDownload } = useSelection();
  const { currentPathFiles } = useFileNavigation();
  const fileIcons = useFileIcons(73);
  const t = useTranslation();
  const previewRef = useRef(null);

  // Get only non-directory files from current path for navigation
  const navigableFiles = useMemo(
    () => currentPathFiles.filter((f) => !f.isDirectory),
    [currentPathFiles]
  );

  const currentFile = selectedFiles[0];
  const currentFileIndex = useMemo(
    () => navigableFiles.findIndex((f) => f.path === currentFile?.path),
    [navigableFiles, currentFile]
  );

  const extension = getFileExtension(currentFile?.name)?.toLowerCase();
  const filePath = `${filePreviewPath}${currentFile?.path}`;

  const isImage = imageExtensions.includes(extension);
  const showZoomControls = isImage;

  // Custom file preview component
  const customPreview = useMemo(
    () => filePreviewComponent?.(currentFile),
    [filePreviewComponent, currentFile]
  );

  const handleImageLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const handleDownload = () => {
    triggerDownload();
  };

  // Navigation handlers
  const navigateTo = useCallback(
    (index) => {
      if (index >= 0 && index < navigableFiles.length) {
        setSelectedFiles([navigableFiles[index]]);
        setIsLoading(true);
        setHasError(false);
        setZoomLevel(100);
      }
    },
    [navigableFiles, setSelectedFiles]
  );

  const handlePrevious = useCallback(() => {
    navigateTo(currentFileIndex - 1);
  }, [currentFileIndex, navigateTo]);

  const handleNext = useCallback(() => {
    navigateTo(currentFileIndex + 1);
  }, [currentFileIndex, navigateTo]);

  // Zoom handlers
  const handleZoomIn = useCallback(() => {
    setZoomLevel((prev) => Math.min(prev + ZOOM_STEP, MAX_ZOOM));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoomLevel((prev) => Math.max(prev - ZOOM_STEP, MIN_ZOOM));
  }, []);

  const handleFitToScreen = useCallback(() => {
    setZoomLevel(100);
  }, []);

  // Fullscreen handlers
  const handleToggleFullscreen = useCallback(() => {
    if (!previewRef.current) return;

    if (!document.fullscreenElement) {
      previewRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(() => {
        // Fullscreen request failed silently
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(() => {
        // Exit fullscreen failed silently
      });
    }
  }, []);

  // Listen for fullscreen changes (e.g., user pressing Esc)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  // Keyboard navigation (Left/Right arrows)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handlePrevious, handleNext]);

  // Mouse wheel zoom (Ctrl + scroll)
  useEffect(() => {
    const element = previewRef.current;
    if (!element || !showZoomControls) return;

    const handleWheel = (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
        if (e.deltaY < 0) {
          setZoomLevel((prev) => Math.min(prev + ZOOM_STEP, MAX_ZOOM));
        } else {
          setZoomLevel((prev) => Math.max(prev - ZOOM_STEP, MIN_ZOOM));
        }
      }
    };
    element.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      element.removeEventListener("wheel", handleWheel);
    };
  }, [showZoomControls]);

  if (React.isValidElement(customPreview)) {
    return customPreview;
  }

  const isSupported = [
    ...imageExtensions,
    ...videoExtensions,
    ...audioExtensions,
    ...iFrameExtensions,
    ...codeExtensions,
    ...markdownExtensions,
    ...csvExtensions,
  ].includes(extension);

  return (
    <div ref={previewRef} className={`preview-wrapper ${isFullscreen ? "preview-fullscreen" : ""}`}>
      <section className={`file-previewer ${extension === "pdf" ? "pdf-previewer" : ""}`}>
        {(hasError || !isSupported) && (
          <div className="preview-error">
            <span className="error-icon">{fileIcons[extension] ?? <FaRegFileAlt size={73} />}</span>
            <span className="error-msg">{t("previewUnavailable")}</span>
            <div className="file-info">
              <span className="file-name">{currentFile.name}</span>
              {currentFile.size && <span>-</span>}
              <span className="file-size">{getDataSize(currentFile.size)}</span>
            </div>
            <Button onClick={handleDownload} padding="0.45rem .9rem">
              <div className="download-btn">
                <MdOutlineFileDownload size={18} />
                <span>{t("download")}</span>
              </div>
            </Button>
          </div>
        )}
        {isImage && !hasError && (
          <>
            <Loader isLoading={isLoading} />
            <div className="image-zoom-container">
              <img
                src={filePath}
                alt="Preview Unavailable"
                className={`photo-popup-image ${isLoading ? "img-loading" : ""}`}
                style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: "center center" }}
                onLoad={handleImageLoad}
                onError={handleImageError}
                loading="lazy"
              />
            </div>
          </>
        )}
        {videoExtensions.includes(extension) && (
          <video src={filePath} className="video-preview" controls autoPlay />
        )}
        {audioExtensions.includes(extension) && (
          <audio src={filePath} controls autoPlay className="audio-preview" />
        )}
        {iFrameExtensions.includes(extension) && (
          <>
            <iframe
              src={filePath}
              onLoad={handleImageLoad}
              onError={handleImageError}
              frameBorder="0"
              className={`photo-popup-iframe ${isLoading ? "img-loading" : ""}`}
            ></iframe>
          </>
        )}
        {codeExtensions.includes(extension) && (
          <CodeViewer filePreviewPath={filePreviewPath} filePath={currentFile.path} />
        )}
        {markdownExtensions.includes(extension) && (
          <MarkdownViewer filePreviewPath={filePreviewPath} filePath={currentFile.path} />
        )}
        {csvExtensions.includes(extension) && (
          <CSVViewer filePreviewPath={filePreviewPath} filePath={currentFile.path} />
        )}
      </section>
      <PreviewControls
        zoomLevel={zoomLevel}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onFitToScreen={handleFitToScreen}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
        currentIndex={currentFileIndex}
        totalFiles={navigableFiles.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
        showZoomControls={showZoomControls}
      />
    </div>
  );
};

export default PreviewFileAction;
