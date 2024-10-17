import Loader from "../components/Loader/Loader";
import Toolbar from "./Toolbar/Toolbar";
import NavigationPane from "./NavigationPane/NavigationPane";
import BreadCrumb from "./BreadCrumb/BreadCrumb";
import FileList from "./FileList/FileList";
import Actions from "./Actions/Actions";
import { FilesProvider } from "../contexts/FilesContext";
import { FileNavigationProvider } from "../contexts/FileNavigationContext";
import { SelectionProvider } from "../contexts/SelectionContext";
import { ClipBoardProvider } from "../contexts/ClipboardContext";
import { LayoutProvider } from "../contexts/LayoutContext";
import { useTriggerAction } from "../hooks/useTriggerAction";
import { useColumnResize } from "../hooks/useColumnResize";
import PropTypes from "prop-types";
import { dateStringValidator, urlValidator } from "../validators/propValidators";
import "./FileManager.scss";
import { useKeyPress } from "../hooks/useKeyPress";
import { shortcuts } from "../utils/shortcuts";

const FileManager = ({
  files,
  fileUploadConfig,
  isLoading,
  onCreateFolder,
  onFileUploading,
  onFileUploaded,
  onPaste,
  onRename,
  onDownload,
  onDelete = () => null,
  onLayoutChange,
  onRefresh,
  onFileOpen,
  onError,
  layout = "grid",
  enableFilePreview = true,
  maxFileSize,
  filePreviewPath,
  acceptedFileTypes,
  height = "600px",
  width = "100%",
}) => {
  const triggerAction = useTriggerAction();
  const { containerRef, colSizes, isDragging, handleMouseMove, handleMouseUp, handleMouseDown } =
    useColumnResize(20, 80);

  useKeyPress(shortcuts.uploadFiles, (e) => {
    console.log("File Upload!");
  });

  return (
    <main
      className="file-explorer"
      onContextMenu={(e) => e.preventDefault()}
      style={{ height, width }}
    >
      <Loader isLoading={isLoading} />
      <FilesProvider filesData={files} onError={onError}>
        <FileNavigationProvider>
          <SelectionProvider>
            <ClipBoardProvider>
              <LayoutProvider layout={layout}>
                <Toolbar
                  allowCreateFolder
                  allowUploadFile
                  onPaste={onPaste}
                  onDownload={onDownload}
                  onLayoutChange={onLayoutChange}
                  onRefresh={onRefresh}
                  triggerAction={triggerAction}
                />
                <section
                  ref={containerRef}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  className="files-container"
                >
                  <div className="navigation-pane" style={{ width: colSizes.col1 + "%" }}>
                    <NavigationPane />
                    <div
                      className={`sidebar-resize ${isDragging ? "sidebar-dragging" : ""}`}
                      onMouseDown={handleMouseDown}
                    />
                  </div>

                  <div className="folders-preview" style={{ width: colSizes.col2 + "%" }}>
                    <BreadCrumb />
                    <FileList
                      onCreateFolder={onCreateFolder}
                      onPaste={onPaste}
                      onRename={onRename}
                      onDownload={onDownload}
                      onFileOpen={onFileOpen}
                      enableFilePreview={enableFilePreview}
                      triggerAction={triggerAction}
                    />
                  </div>
                </section>

                <Actions
                  fileUploadConfig={fileUploadConfig}
                  onFileUploading={onFileUploading}
                  onFileUploaded={onFileUploaded}
                  onDelete={onDelete}
                  maxFileSize={maxFileSize}
                  filePreviewPath={filePreviewPath}
                  acceptedFileTypes={acceptedFileTypes}
                  triggerAction={triggerAction}
                />
              </LayoutProvider>
            </ClipBoardProvider>
          </SelectionProvider>
        </FileNavigationProvider>
      </FilesProvider>
    </main>
  );
};

FileManager.displayName = "FileManager";

FileManager.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      isDirectory: PropTypes.bool.isRequired,
      path: PropTypes.string.isRequired,
      updatedAt: dateStringValidator,
      size: PropTypes.number,
    })
  ).isRequired,
  fileUploadConfig: PropTypes.shape({
    url: urlValidator,
    headers: PropTypes.objectOf(PropTypes.string),
  }),
  isLoading: PropTypes.bool,
  onCreateFolder: PropTypes.func,
  onFileUploading: PropTypes.func,
  onFileUploaded: PropTypes.func,
  onRename: PropTypes.func,
  onDelete: PropTypes.func,
  onPaste: PropTypes.func,
  onDownload: PropTypes.func,
  onLayoutChange: PropTypes.func,
  onRefresh: PropTypes.func,
  onFileOpen: PropTypes.func,
  onError: PropTypes.func,
  layout: PropTypes.oneOf(["grid", "list"]),
  maxFileSize: PropTypes.number,
  enableFilePreview: PropTypes.bool,
  filePreviewPath: urlValidator,
  acceptedFileTypes: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default FileManager;

// Only add event linstener to the FileManager and not the whole document.
// Create a file in utils that contains all the shortcuts arrays of File Operations.
// Create a Hook that accepts an array of keys: string as an argument and returns a callback function that triggers on there combination press.
// The keys should be in English like ['Control', 'Shift, 'A'] for Ctrl + Shift + A etc.
// How the provided callback will be used ?
// For all the file managers actions like: create folder, upload file, cut, copy, paste, delete, rename, downlaod
// there should be a generic way of triggering those actions just like the old days.
