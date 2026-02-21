import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useSelection } from "../../contexts/SelectionContext";
import { useFileNavigation } from "../../contexts/FileNavigationContext";
import { useFiles } from "../../contexts/FilesContext";
import { useDetailsPanel } from "../../contexts/DetailsPanelContext";
import { useTranslation } from "../../contexts/TranslationProvider";
import { useFileIcons } from "../../hooks/useFileIcons";
import { getDataSize } from "../../utils/getDataSize";
import { FaRegFile, FaRegFolderOpen } from "react-icons/fa6";
import { MdClose, MdFileCopy } from "react-icons/md";
import "./DetailsPanel.scss";

// ---- File type label helper ----

const FILE_TYPE_MAP = {
  // Images
  jpg: "JPEG Image",
  jpeg: "JPEG Image",
  png: "PNG Image",
  gif: "GIF Image",
  bmp: "BMP Image",
  webp: "WebP Image",
  svg: "SVG Image",
  ico: "Icon Image",
  // Documents
  pdf: "PDF Document",
  doc: "Word Document",
  docx: "Word Document",
  txt: "Text Document",
  rtf: "Rich Text Document",
  // Spreadsheets
  xls: "Excel Spreadsheet",
  xlsx: "Excel Spreadsheet",
  csv: "CSV File",
  // Presentations
  ppt: "PowerPoint Presentation",
  pptx: "PowerPoint Presentation",
  // Video
  mp4: "MP4 Video",
  webm: "WebM Video",
  avi: "AVI Video",
  mov: "QuickTime Video",
  mkv: "MKV Video",
  // Audio
  mp3: "MP3 Audio",
  m4a: "M4A Audio",
  wav: "WAV Audio",
  ogg: "OGG Audio",
  flac: "FLAC Audio",
  // Code
  html: "HTML File",
  css: "CSS File",
  js: "JavaScript File",
  jsx: "JSX File",
  ts: "TypeScript File",
  tsx: "TSX File",
  json: "JSON File",
  xml: "XML File",
  sql: "SQL File",
  py: "Python File",
  java: "Java File",
  cpp: "C++ File",
  c: "C File",
  php: "PHP File",
  md: "Markdown File",
  // Archives
  zip: "ZIP Archive",
  rar: "RAR Archive",
  "7z": "7-Zip Archive",
  tar: "TAR Archive",
  gz: "GZ Archive",
  // Executables
  exe: "Executable File",
};

const getFileExtension = (fileName) => {
  if (!fileName || typeof fileName !== "string") return "";
  const parts = fileName.split(".");
  return parts.length > 1 ? parts.pop().toLowerCase() : "";
};

const getFileTypeLabel = (fileName, t) => {
  const ext = getFileExtension(fileName);
  if (!ext) return t("unknownType");
  if (FILE_TYPE_MAP[ext]) return FILE_TYPE_MAP[ext];
  return ext.toUpperCase() + " File";
};

// ---- DetailsPanel Component ----

const DetailsPanel = ({ formatDate, onFileDetails }) => {
  const { selectedFiles } = useSelection();
  const { currentPathFiles, currentFolder, currentPath } = useFileNavigation();
  const { files, getChildren } = useFiles();
  const { isDetailsPanelOpen, setDetailsPanelOpen } = useDetailsPanel();
  const t = useTranslation();
  const fileIcons = useFileIcons(48);
  const prevSelectionRef = useRef(selectedFiles);

  // ---- Resize state ----
  const [panelWidth, setPanelWidth] = useState(25); // percentage of files-container
  const isDraggingRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);
  const panelRef = useRef(null);

  const handleResizeMouseDown = useCallback((e) => {
    e.preventDefault();
    isDraggingRef.current = true;
    setIsDragging(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDraggingRef.current) return;
      e.preventDefault();

      const container = panelRef.current?.parentElement;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const mouseX = e.clientX - containerRect.left;
      const containerWidth = containerRect.width;
      const newWidthPercent = ((containerWidth - mouseX) / containerWidth) * 100;

      // Min 200px equivalent, max 50%
      const minPercent = (200 / containerWidth) * 100;
      if (newWidthPercent >= minPercent && newWidthPercent <= 50) {
        setPanelWidth(newWidthPercent);
      }
    };

    const handleMouseUp = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        setIsDragging(false);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // Call onFileDetails when selection changes while panel is open
  useEffect(() => {
    if (!isDetailsPanelOpen) return;
    if (prevSelectionRef.current !== selectedFiles) {
      prevSelectionRef.current = selectedFiles;
      onFileDetails?.(selectedFiles);
    }
  }, [isDetailsPanelOpen, selectedFiles, onFileDetails]);

  // Also notify when panel first opens
  useEffect(() => {
    if (isDetailsPanelOpen) {
      onFileDetails?.(selectedFiles);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDetailsPanelOpen]);

  // Stats for the current directory (no selection view)
  const directoryStats = useMemo(() => {
    const folders = currentPathFiles.filter((f) => f.isDirectory).length;
    const fileCount = currentPathFiles.length - folders;
    const totalSize = currentPathFiles.reduce((acc, f) => acc + (f.size || 0), 0);
    return { folders, files: fileCount, totalSize, totalItems: currentPathFiles.length };
  }, [currentPathFiles]);

  // Stats for multiple selection
  const multiSelectionStats = useMemo(() => {
    if (selectedFiles.length <= 1) return null;

    const folders = selectedFiles.filter((f) => f.isDirectory).length;
    const fileCount = selectedFiles.length - folders;
    const totalSize = selectedFiles.reduce((acc, f) => acc + (f.size || 0), 0);

    return { folders, files: fileCount, totalSize };
  }, [selectedFiles]);

  // Folder children count for single folder selection
  const folderChildCount = useMemo(() => {
    if (selectedFiles.length !== 1 || !selectedFiles[0].isDirectory) return null;
    const children = getChildren(selectedFiles[0]);
    const folders = children.filter((c) => c.isDirectory).length;
    const fileCount = children.length - folders;
    return { total: children.length, folders, files: fileCount };
  }, [selectedFiles, files, getChildren]);

  if (!isDetailsPanelOpen) return null;

  const selectionCount = selectedFiles.length;

  // Determine the display name for the current directory
  const currentDirName = currentFolder ? currentFolder.name : t("home");

  const handleClose = () => {
    setDetailsPanelOpen(false);
  };

  const renderFormatDate = (dateStr) => {
    if (!dateStr) return "";
    if (formatDate) return formatDate(dateStr);
    return new Date(dateStr).toLocaleString();
  };

  const renderNoSelection = () => (
    <div className="details-panel-content" role="region" aria-label={t("details")}>
      <div className="details-icon-area">
        <FaRegFolderOpen size={48} color="var(--file-manager-primary-color)" />
      </div>
      <div className="details-file-name">{currentDirName}</div>

      <div className="details-section">
        <div className="details-section-title">{t("items")}</div>
        <div className="details-row">
          <span className="details-label">{t("files")}</span>
          <span className="details-value">{directoryStats.files}</span>
        </div>
        <div className="details-row">
          <span className="details-label">{t("folders")}</span>
          <span className="details-value">{directoryStats.folders}</span>
        </div>
      </div>

      <div className="details-section">
        <div className="details-row">
          <span className="details-label">{t("path")}</span>
          <span className="details-value" title={currentPath || "/"}>
            {currentPath || "/"}
          </span>
        </div>
        {currentFolder?.updatedAt && (
          <div className="details-row">
            <span className="details-label">{t("modified")}</span>
            <span className="details-value">{renderFormatDate(currentFolder.updatedAt)}</span>
          </div>
        )}
      </div>
    </div>
  );

  const renderSingleFile = () => {
    const file = selectedFiles[0];
    const ext = getFileExtension(file.name);
    const fileType = file.isDirectory ? t("folder") : getFileTypeLabel(file.name, t);
    const icon = file.isDirectory
      ? <FaRegFolderOpen size={48} color="var(--file-manager-primary-color)" />
      : fileIcons[ext] ?? <FaRegFile size={48} />;

    return (
      <div className="details-panel-content" role="region" aria-label={t("details")}>
        <div className="details-icon-area">{icon}</div>
        <div className="details-file-name" title={file.name}>{file.name}</div>

        <div className="details-section">
          <div className="details-section-title">{t("details")}</div>
          <div className="details-row">
            <span className="details-label">{t("type")}</span>
            <span className="details-value">{fileType}</span>
          </div>

          {!file.isDirectory && file.size != null && (
            <div className="details-row">
              <span className="details-label">{t("size")}</span>
              <span className="details-value">{getDataSize(file.size)}</span>
            </div>
          )}

          <div className="details-row">
            <span className="details-label">{t("path")}</span>
            <span className="details-value" title={file.path}>{file.path}</span>
          </div>

          {file.isDirectory && folderChildCount && (
            <div className="details-row">
              <span className="details-label">{t("contains")}</span>
              <span className="details-value">
                {folderChildCount.files} {t(folderChildCount.files === 1 ? "file" : "files")},{" "}
                {folderChildCount.folders} {t(folderChildCount.folders === 1 ? "folder" : "folders")}
              </span>
            </div>
          )}

          {file.updatedAt && (
            <div className="details-row">
              <span className="details-label">{t("modified")}</span>
              <span className="details-value">{renderFormatDate(file.updatedAt)}</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderMultiSelection = () => (
    <div className="details-panel-content" role="region" aria-label={t("details")}>
      <div className="details-icon-area">
        <MdFileCopy size={48} color="var(--file-manager-primary-color)" />
      </div>
      <div className="details-file-name">
        {selectionCount} {t("itemsSelected")}
      </div>

      <div className="details-section">
        <div className="details-section-title">{t("details")}</div>

        {multiSelectionStats.totalSize > 0 && (
          <div className="details-row">
            <span className="details-label">{t("totalSize")}</span>
            <span className="details-value">{getDataSize(multiSelectionStats.totalSize)}</span>
          </div>
        )}

        <div className="details-row">
          <span className="details-label">{t("files")}</span>
          <span className="details-value">{multiSelectionStats.files}</span>
        </div>
        <div className="details-row">
          <span className="details-label">{t("folders")}</span>
          <span className="details-value">{multiSelectionStats.folders}</span>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    if (selectionCount === 0) return renderNoSelection();
    if (selectionCount === 1) return renderSingleFile();
    return renderMultiSelection();
  };

  return (
    <div
      ref={panelRef}
      className="details-panel-wrapper"
      style={{ width: panelWidth + "%" }}
    >
      <div
        className={`panel-resize ${isDragging ? "panel-dragging" : ""}`}
        onMouseDown={handleResizeMouseDown}
      />
      <aside
        className="details-panel"
        role="complementary"
        aria-label={t("detailsPanel")}
      >
        <div className="details-panel-header">
          <h3>{t("details")}</h3>
          <button
            className="details-close-btn"
            onClick={handleClose}
            aria-label={t("close")}
            title={t("close")}
          >
            <MdClose size={18} />
          </button>
        </div>
        {renderContent()}
      </aside>
    </div>
  );
};

DetailsPanel.displayName = "DetailsPanel";

DetailsPanel.propTypes = {
  formatDate: PropTypes.func,
  onFileDetails: PropTypes.func,
};

export default DetailsPanel;
