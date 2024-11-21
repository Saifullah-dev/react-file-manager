import { useMemo, useState } from "react";
import Checkbox from "../../components/Checkbox/Checkbox";
import { useSelection } from "../../contexts/SelectionContext";
import { useFileNavigation } from "../../contexts/FileNavigationContext";

const FilesHeader = ({ unselectFiles }) => {
  const [showSelectAll, setShowSelectAll] = useState(false);

  const { selectedFiles, setSelectedFiles } = useSelection();
  const { currentPathFiles } = useFileNavigation();

  const allFilesSelected = useMemo(() => {
    return selectedFiles.length === currentPathFiles.length;
  }, [selectedFiles, currentPathFiles]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedFiles(currentPathFiles);
      setShowSelectAll(true);
    } else {
      unselectFiles();
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
          <Checkbox checked={allFilesSelected} onChange={handleSelectAll} title="Select all" />
        )}
      </div>
      <div className="file-name">Name</div>
      <div className="file-date">Modified</div>
      <div className="file-size">Size</div>
    </div>
  );
};

export default FilesHeader;
