import Toolbar from "./Toolbar/Toolbar";
import NavigationPane from "./Navigation Pane/NavigationPane";
import BreadCrumb from "./Bread Crumb/BreadCrumb";
import Files from "./Files/Files";
import { useTriggerAction } from "../hooks/useTriggerAction";
import Actions from "./Actions/Actions";
import Loader from "../components/Loader/Loader";
import PropTypes from "prop-types";
import { FilesProvider } from "../contexts/FilesContext";
import { FileNavigationProvider } from "../contexts/FileNavigationContext";
import { useColumnResize } from "../hooks/useColumnResize";
import { SelectionProvider } from "../contexts/SelectionContext";
import { ClipBoardProvider } from "../contexts/ClipboardContext";
import { LayoutProvider } from "../contexts/LayoutContext";
import "./FileManager.scss";

const FileManager = ({
  files,
  fileUploadConfig,
  isLoading,
  onCreateFolder,
  onFileUploading,
  onFileUploaded,
  onRename,
  onDelete,
  onPaste,
  onLayoutChange,
  onRefresh,
  filePreviewPath,
  allowedFileExtensions,
}) => {
  const triggerAction = useTriggerAction();
  const { containerRef, colSizes, isDragging, handleMouseMove, handleMouseUp, handleMouseDown } =
    useColumnResize(20, 80);

  return (
    <main className="file-explorer" onContextMenu={(e) => e.preventDefault()}>
      <Loader isLoading={isLoading} />
      <FilesProvider filesData={files}>
        <FileNavigationProvider>
          <SelectionProvider>
            <ClipBoardProvider>
              <LayoutProvider>
                <Toolbar
                  allowCreateFolder
                  allowUploadFile
                  onPaste={onPaste}
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
                    <Files
                      onCreateFolder={onCreateFolder}
                      onPaste={onPaste}
                      onRename={onRename}
                      triggerAction={triggerAction}
                    />
                  </div>
                </section>

                <Actions
                  fileUploadConfig={fileUploadConfig}
                  onFileUploading={onFileUploading}
                  onFileUploaded={onFileUploaded}
                  onDelete={onDelete}
                  filePreviewPath={filePreviewPath}
                  allowedFileExtensions={allowedFileExtensions}
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

FileManager.propTypes = {
  files: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FileManager;
