import Loader from "../components/Loader/Loader";
import Toolbar from "./Toolbar/Toolbar";
import NavigationPane from "./NavigationPane/NavigationPane";
import BreadCrumb from "./BreadCrumb/BreadCrumb";
import FileList from "./FileList/FileList";
import Actions from "./Actions/Actions";
import { ToastProvider } from "../components/Toast/Toast";
import StatusBar from "./StatusBar/StatusBar";
import { FilesProvider } from "../contexts/FilesContext";
import { FileNavigationProvider } from "../contexts/FileNavigationContext";
import { SelectionProvider } from "../contexts/SelectionContext";
import { ClipBoardProvider } from "../contexts/ClipboardContext";
import { LayoutProvider } from "../contexts/LayoutContext";
import { DetailsPanelProvider } from "../contexts/DetailsPanelContext";
import DetailsPanel from "./DetailsPanel/DetailsPanel";
import { FavoritesProvider } from "../contexts/FavoritesContext";
import { UndoRedoProvider } from "../contexts/UndoRedoContext";
import { SearchProvider } from "../contexts/SearchContext";
import SearchBar from "./SearchBar/SearchBar";
import { TabsProvider } from "../contexts/TabsContext";
import TabBar from "./TabBar/TabBar";
import { TagsProvider } from "../contexts/TagsContext";
import { BatchOperationsProvider } from "../contexts/BatchOperationsContext";
import BatchProgress from "./BatchProgress/BatchProgress";
import ClipboardIndicator from "./ClipboardIndicator/ClipboardIndicator";
import { useTriggerAction } from "../hooks/useTriggerAction";
import { useColumnResize } from "../hooks/useColumnResize";
import PropTypes from "prop-types";
import { dateStringValidator, urlValidator } from "../validators/propValidators";
import { TranslationProvider } from "../contexts/TranslationProvider";
import { AnnouncerProvider } from "../components/ScreenReaderAnnouncer/ScreenReaderAnnouncer";
import { useMemo, useState, useCallback } from "react";
import { defaultPermissions } from "../constants";
import { formatDate as defaultFormatDate } from "../utils/formatDate";
import "./FileManager.scss";

const MaybeToastProvider = ({ enabled, children }) =>
  enabled ? <ToastProvider>{children}</ToastProvider> : <>{children}</>;

const FileManager = ({
  files,
  fileUploadConfig,
  isLoading,
  onCreateFolder,
  onFileUploading = () => {},
  onFileUploaded = () => {},
  onCut,
  onCopy,
  onPaste,
  onRename,
  onDownload,
  onDelete = () => null,
  onLayoutChange = () => {},
  onRefresh,
  onFileOpen = () => {},
  onFolderChange = () => {},
  onSelect,
  onSelectionChange,
  onUndo = () => {},
  onRedo = () => {},
  onError = () => {},
  layout = "grid",
  enableFilePreview = true,
  maxFileSize,
  filePreviewPath,
  acceptedFileTypes,
  height = "600px",
  width = "100%",
  initialPath = "",
  filePreviewComponent,
  primaryColor = "#6155b4",
  fontFamily = "Nunito Sans, sans-serif",
  language = "en-US",
  permissions: userPermissions = {},
  collapsibleNav = false,
  defaultNavExpanded = true,
  showStatusBar = true,
  showNotifications = true,
  theme = "light",
  customTokens = {},
  className = "",
  style = {},
  formatDate = defaultFormatDate,
  onSearch,
  onFileDetails,
  defaultDetailsPanelOpen = false,
  onFavoriteToggle,
  onRecentFiles,
  initialFavorites,
  // Iteration 3 props
  enableTabs = false,
  maxTabs = 10,
  onTabChange,
  onExternalDrop,
  onOperationProgress,
  tags: availableTags,
  onTagChange,
  columns: initialColumns,
  onColumnConfigChange,
  onClipboardChange,
}) => {
  const [isNavigationPaneOpen, setNavigationPaneOpen] = useState(defaultNavExpanded);
  const triggerAction = useTriggerAction();
  const { containerRef, colSizes, isDragging, handleMouseMove, handleMouseUp, handleMouseDown } =
    useColumnResize(20, 80);
  // Build token overrides from customTokens prop. Keys can be provided
  // with or without the "--fm-" prefix; bare names are auto-prefixed.
  const tokenOverrides = useMemo(() => {
    const overrides = {};
    if (customTokens && typeof customTokens === "object") {
      Object.entries(customTokens).forEach(([key, value]) => {
        if (value == null) return;
        const cssVar = key.startsWith("--") ? key : `--fm-${key}`;
        overrides[cssVar] = value;
      });
    }
    return overrides;
  }, [customTokens]);

  const customStyles = {
    "--file-manager-font-family": fontFamily,
    "--file-manager-primary-color": primaryColor,
    height,
    width,
    ...tokenOverrides,
  };

  const permissions = useMemo(
    () => ({ ...defaultPermissions, ...userPermissions }),
    [userPermissions]
  );

  const handleExternalDrop = useCallback(
    (e) => {
      if (!onExternalDrop) return;
      e.preventDefault();
      const droppedFiles = Array.from(e.dataTransfer.files);
      if (droppedFiles.length > 0) {
        onExternalDrop(droppedFiles, e);
      }
    },
    [onExternalDrop]
  );

  const handleExternalDragOver = useCallback(
    (e) => {
      if (!onExternalDrop) return;
      e.preventDefault();
      e.dataTransfer.dropEffect = "copy";
    },
    [onExternalDrop]
  );

  return (
    <main
      className={`file-explorer fm-theme-${theme || 'light'} ${className}`}
      onContextMenu={(e) => e.preventDefault()}
      onDrop={handleExternalDrop}
      onDragOver={handleExternalDragOver}
      style={{ ...customStyles, ...style }}
    >
      <Loader loading={isLoading} />
      <TranslationProvider language={language}>
        <AnnouncerProvider>
        <FilesProvider filesData={files} onError={onError}>
          <FileNavigationProvider initialPath={initialPath} onFolderChange={onFolderChange}>
            <SelectionProvider
              onDownload={onDownload}
              onSelect={onSelect}
              onSelectionChange={onSelectionChange}
            >
              <UndoRedoProvider onUndo={onUndo} onRedo={onRedo}>
                <ClipBoardProvider onPaste={onPaste} onCut={onCut} onCopy={onCopy}>
                  <LayoutProvider layout={layout}>
                    <DetailsPanelProvider defaultOpen={defaultDetailsPanelOpen}>
                    <SearchProvider onSearch={onSearch}>
                    <FavoritesProvider
                      onFavoriteToggle={onFavoriteToggle}
                      onRecentFiles={onRecentFiles}
                      initialFavorites={initialFavorites}
                    >
                    <TagsProvider availableTags={availableTags} onTagChange={onTagChange}>
                    <BatchOperationsProvider onOperationProgress={onOperationProgress}>
                    <TabsProvider maxTabs={maxTabs} onTabChange={onTabChange}>
                    <MaybeToastProvider enabled={showNotifications}>
                      {enableTabs && <TabBar />}
                      <Toolbar
                        onLayoutChange={onLayoutChange}
                        onRefresh={onRefresh}
                        triggerAction={triggerAction}
                        permissions={permissions}
                      />
                      <SearchBar onSearch={onSearch} />
                      <section
                        ref={containerRef}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        className="files-container"
                      >
                        <div
                          className={`navigation-pane ${isNavigationPaneOpen ? "open" : "closed"}`}
                          style={{
                            width: colSizes.col1 + "%",
                          }}
                        >
                          <NavigationPane onFileOpen={onFileOpen} />
                          <div
                            className={`sidebar-resize ${isDragging ? "sidebar-dragging" : ""}`}
                            onMouseDown={handleMouseDown}
                          />
                        </div>

                        <div
                          className="folders-preview"
                          style={{ width: (isNavigationPaneOpen ? colSizes.col2 : 100) + "%", flex: 1, minWidth: 0 }}
                        >
                          <BreadCrumb
                            collapsibleNav={collapsibleNav}
                            isNavigationPaneOpen={isNavigationPaneOpen}
                            setNavigationPaneOpen={setNavigationPaneOpen}
                          />
                          <FileList
                            onCreateFolder={onCreateFolder}
                            onRename={onRename}
                            onFileOpen={onFileOpen}
                            onRefresh={onRefresh}
                            enableFilePreview={enableFilePreview}
                            triggerAction={triggerAction}
                            permissions={permissions}
                            formatDate={formatDate}
                          />
                        </div>
                        <DetailsPanel
                          formatDate={formatDate}
                          onFileDetails={onFileDetails}
                        />
                      </section>

                      <Actions
                        fileUploadConfig={fileUploadConfig}
                        onFileUploading={onFileUploading}
                        onFileUploaded={onFileUploaded}
                        onDelete={onDelete}
                        onRefresh={onRefresh}
                        maxFileSize={maxFileSize}
                        filePreviewPath={filePreviewPath}
                        filePreviewComponent={filePreviewComponent}
                        acceptedFileTypes={acceptedFileTypes}
                        triggerAction={triggerAction}
                        permissions={permissions}
                      />
                      <ClipboardIndicator />
                      <BatchProgress />
                      {showStatusBar && <StatusBar />}
                    </MaybeToastProvider>
                    </TabsProvider>
                    </BatchOperationsProvider>
                    </TagsProvider>
                    </FavoritesProvider>
                    </SearchProvider>
                    </DetailsPanelProvider>
                  </LayoutProvider>
                </ClipBoardProvider>
              </UndoRedoProvider>
            </SelectionProvider>
          </FileNavigationProvider>
        </FilesProvider>
        </AnnouncerProvider>
      </TranslationProvider>
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
      thumbnailUrl: PropTypes.string,
    })
  ).isRequired,
  fileUploadConfig: PropTypes.shape({
    url: urlValidator,
    headers: PropTypes.objectOf(PropTypes.string),
    method: PropTypes.oneOf(["POST", "PUT"]),
  }),
  isLoading: PropTypes.bool,
  onCreateFolder: PropTypes.func,
  onFileUploading: PropTypes.func,
  onFileUploaded: PropTypes.func,
  onRename: PropTypes.func,
  onDelete: PropTypes.func,
  onCut: PropTypes.func,
  onCopy: PropTypes.func,
  onPaste: PropTypes.func,
  onDownload: PropTypes.func,
  onLayoutChange: PropTypes.func,
  onRefresh: PropTypes.func,
  onFileOpen: PropTypes.func,
  onFolderChange: PropTypes.func,
  onSelect: PropTypes.func,
  onSelectionChange: PropTypes.func,
  onUndo: PropTypes.func,
  onRedo: PropTypes.func,
  onError: PropTypes.func,
  layout: PropTypes.oneOf(["grid", "list"]),
  maxFileSize: PropTypes.number,
  enableFilePreview: PropTypes.bool,
  filePreviewPath: urlValidator,
  acceptedFileTypes: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  initialPath: PropTypes.string,
  filePreviewComponent: PropTypes.func,
  primaryColor: PropTypes.string,
  fontFamily: PropTypes.string,
  language: PropTypes.string,
  permissions: PropTypes.shape({
    create: PropTypes.bool,
    upload: PropTypes.bool,
    move: PropTypes.bool,
    copy: PropTypes.bool,
    rename: PropTypes.bool,
    download: PropTypes.bool,
    delete: PropTypes.bool,
  }),
  collapsibleNav: PropTypes.bool,
  defaultNavExpanded: PropTypes.bool,
  showStatusBar: PropTypes.bool,
  showNotifications: PropTypes.bool,
  theme: PropTypes.oneOf(["light", "dark", "system"]),
  customTokens: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
  formatDate: PropTypes.func,
  onSearch: PropTypes.func,
  onFavoriteToggle: PropTypes.func,
  onRecentFiles: PropTypes.func,
  initialFavorites: PropTypes.arrayOf(PropTypes.string),
  // Iteration 3 props
  enableTabs: PropTypes.bool,
  maxTabs: PropTypes.number,
  onTabChange: PropTypes.func,
  onExternalDrop: PropTypes.func,
  onOperationProgress: PropTypes.func,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ),
  onTagChange: PropTypes.func,
  columns: PropTypes.arrayOf(PropTypes.string),
  onColumnConfigChange: PropTypes.func,
  onClipboardChange: PropTypes.func,
};

export default FileManager;
