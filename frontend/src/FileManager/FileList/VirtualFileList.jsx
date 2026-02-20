import { useRef, useCallback, memo } from "react";
import { FixedSizeList as List } from "react-window";
import FileItem from "./FileItem";
import { useLayout } from "../../contexts/LayoutContext";

const ITEM_HEIGHT_LIST = 36;
const ITEM_HEIGHT_GRID = 110;
const GRID_ITEMS_PER_ROW = 6;
const VIRTUAL_THRESHOLD = 200; // Only virtualize when > 200 items

const VirtualRow = memo(({ index, style, data }) => {
  const { files, ...rest } = data;
  const file = files[index];
  if (!file) return null;

  return (
    <div style={style}>
      <FileItem
        index={index}
        file={file}
        {...rest}
      />
    </div>
  );
});

VirtualRow.displayName = "VirtualRow";

const VirtualFileList = ({
  files,
  containerHeight,
  onCreateFolder,
  onRename,
  onFileOpen,
  enableFilePreview,
  triggerAction,
  filesViewRef,
  selectedFileIndexes,
  handleContextMenu,
  setLastSelectedFile,
  draggable,
  formatDate,
}) => {
  const { activeLayout } = useLayout();
  const listRef = useRef(null);

  const itemHeight = activeLayout === "list" ? ITEM_HEIGHT_LIST : ITEM_HEIGHT_GRID;

  const itemData = {
    files,
    onCreateFolder,
    onRename,
    onFileOpen,
    enableFilePreview,
    triggerAction,
    filesViewRef,
    selectedFileIndexes,
    handleContextMenu,
    setLastSelectedFile,
    draggable,
    formatDate,
  };

  // Only use virtual scrolling for large lists
  if (files.length <= VIRTUAL_THRESHOLD) {
    return null; // Fall back to non-virtual rendering
  }

  return (
    <List
      ref={listRef}
      height={containerHeight || 500}
      itemCount={files.length}
      itemSize={itemHeight}
      itemData={itemData}
      width="100%"
      overscanCount={10}
    >
      {VirtualRow}
    </List>
  );
};

export default VirtualFileList;
