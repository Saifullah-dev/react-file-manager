import { useMemo } from "react";
import { useFileNavigation } from "../../contexts/FileNavigationContext";
import { useSelection } from "../../contexts/SelectionContext";
import { useLayout } from "../../contexts/LayoutContext";
import { getDataSize } from "../../utils/getDataSize";
import { useTranslation } from "../../contexts/TranslationProvider";
import "./StatusBar.scss";

const StatusBar = () => {
  const { currentPathFiles, sortConfig } = useFileNavigation();
  const { selectedFiles } = useSelection();
  const { activeLayout } = useLayout();
  const t = useTranslation();

  const stats = useMemo(() => {
    const folders = currentPathFiles.filter((f) => f.isDirectory).length;
    const files = currentPathFiles.length - folders;
    const totalSize = currentPathFiles.reduce((acc, f) => acc + (f.size || 0), 0);
    return { folders, files, totalSize };
  }, [currentPathFiles]);

  const selectionInfo = useMemo(() => {
    if (selectedFiles.length === 0) return null;
    const totalSize = selectedFiles.reduce((acc, f) => acc + (f.size || 0), 0);
    return {
      count: selectedFiles.length,
      totalSize,
    };
  }, [selectedFiles]);

  return (
    <div className="fm-status-bar" role="status" aria-live="polite">
      <div className="fm-status-left">
        {selectionInfo ? (
          <span>
            {selectionInfo.count} {t(selectionInfo.count === 1 ? "itemSelected" : "itemsSelected")}
            {selectionInfo.totalSize > 0 && ` (${getDataSize(selectionInfo.totalSize)})`}
          </span>
        ) : (
          <span>
            {stats.folders > 0 && `${stats.folders} ${t(stats.folders === 1 ? "folder" : "folders")}`}
            {stats.folders > 0 && stats.files > 0 && ", "}
            {stats.files > 0 && `${stats.files} ${t(stats.files === 1 ? "file" : "files")}`}
            {currentPathFiles.length === 0 && t("folderEmpty")}
          </span>
        )}
      </div>
      <div className="fm-status-right">
        <span className="fm-status-sort">
          {t("sortedBy")}: {t(sortConfig.key)} ({sortConfig.direction === "asc" ? "\u2191" : "\u2193"})
        </span>
        <span className="fm-status-divider">|</span>
        <span className="fm-status-layout">{t(activeLayout)}</span>
      </div>
    </div>
  );
};

StatusBar.displayName = "StatusBar";

export default StatusBar;
