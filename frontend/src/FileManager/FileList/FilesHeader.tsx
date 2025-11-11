import { useMemo, useState } from "react";
import Checkbox from "../../components/Checkbox/Checkbox";
import { useFileNavigation } from "../../contexts/FileNavigationContext";
import { useSelection } from "../../contexts/SelectionContext";
import { useTranslation } from "../../contexts/TranslationProvider";

const FilesHeader = ({ unselectFiles, onSort, sortConfig }) => {
  const t = useTranslation();

  const [showSelectAll, setShowSelectAll] = useState(false);

  const { selectedFiles, setSelectedFiles } = useSelection();
  const { currentPathFiles } = useFileNavigation();

  const allFilesSelected = useMemo(() => {
    return currentPathFiles.length > 0 && selectedFiles.length === currentPathFiles.length;
  }, [selectedFiles, currentPathFiles]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedFiles(currentPathFiles);
      setShowSelectAll(true);
    } else {
      unselectFiles();
    }
  };

  const handleSort = (key) => {
    if (onSort) {
      onSort(key);
    }
  };

  return (
    <div
      className="files-header"
      onMouseOver={() => setShowSelectAll(true)}
      onMouseLeave={() => setShowSelectAll(false)}
    >
      <div className="file-select-all">
        {(showSelectAll || allFilesSelected) && (
          <Checkbox
            id="selectAll"
            checked={allFilesSelected}
            onChange={handleSelectAll}
            title="Select all"
            disabled={currentPathFiles.length === 0}
          />
        )}
      </div>
      <div
        className={`file-name ${sortConfig?.key === "name" ? "active" : ""}`}
        onClick={() => handleSort("name")}
      >
        {t("name")}
        {sortConfig?.key === "name" && (
          <span className="sort-indicator">{sortConfig.direction === "asc" ? " ▲" : " ▼"}</span>
        )}
      </div>
      <div
        className={`file-date ${sortConfig?.key === "modified" ? "active" : ""}`}
        onClick={() => handleSort("modified")}
      >
        {t("modified")}
        {sortConfig?.key === "modified" && (
          <span className="sort-indicator">{sortConfig.direction === "asc" ? " ▲" : " ▼"}</span>
        )}
      </div>
      <div
        className={`file-size ${sortConfig?.key === "size" ? "active" : ""}`}
        onClick={() => handleSort("size")}
      >
        {t("size")}
        {sortConfig?.key === "size" && (
          <span className="sort-indicator">{sortConfig.direction === "asc" ? " ▲" : " ▼"}</span>
        )}
      </div>
    </div>
  );
};

export default FilesHeader;