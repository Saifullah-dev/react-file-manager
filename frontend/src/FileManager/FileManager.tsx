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
import { UploadProvider } from "../contexts/UploadContext";
import { useTriggerAction } from "../hooks/useTriggerAction";
import { useColumnResize } from "../hooks/useColumnResize";
import { TranslationProvider } from "../contexts/TranslationProvider";
import { useMemo, useState } from "react";
import { defaultPermissions } from "../constants";
import { formatDate as defaultFormatDate } from "../utils/formatDate";
import "./FileManager.scss";
import { ExtendedFileItem, FileItem } from "../types/File";
import { FileUploadConfiguration } from "../types/FileUploadConfiguration";
import { Layout } from "../types/Layout";
import { Language } from "../types/Language";
import { Permissions } from "../types/Permissions";
import { 
    OnCreateFolder,
    OnFileUploading,
    OnFileUploaded,
    OnCut,
    OnCopy,
    OnPaste,
    OnRename,
    OnDownload,
    OnDelete,
    OnFolderChange,
    OnError, 
    OnFileOpen,
    OnLayoutChange,
    OnSelect,
    OnSelectionChange,
    OnSortChange,
    FilePreviewComponent,
    OnRefresh
  } from "../types/FileManagerFunctions";

export interface FileManagerProps {
  files?: FileItem[];
  fileUploadConfig?: FileUploadConfiguration;
  isLoading?: boolean;
  onCreateFolder?: OnCreateFolder;
  onFileUploading?: OnFileUploading;
  onFileUploaded?: OnFileUploaded;
  onCut?: OnCut;
  onCopy?: OnCopy;
  onPaste?: OnPaste;
  onRename?: OnRename;
  onDownload?: OnDownload;
  onDelete?: OnDelete
  onLayoutChange?: OnLayoutChange
  onRefresh?: OnRefresh;
  onFileOpen?: OnFileOpen;
  onFolderChange?: OnFolderChange;
  /** @deprecated Use `onSelectionChange` instead. */
  onSelect?: OnSelect;
  onSelectionChange?: OnSelectionChange;
  onError?: OnError;
  onSortChange?: OnSortChange;
  layout?: Layout;
  enableFilePreview?: boolean;
  maxFileSize?: number;
  uploadConcurrency?: number;
  filePreviewPath?: string;
  acceptedFileTypes?: string;
  height?: string | number;
  width?: string | number;
  initialPath?: string;
  filePreviewComponent?: FilePreviewComponent;
  primaryColor?: string;
  fontFamily?: string;
  language?: Language;
  permissions?: Permissions;
  collapsibleNav?: boolean;
  defaultNavExpanded?: boolean;
  className?: string;
  style?: React.CSSProperties;
  formatDate?: (date: string) => string;
}

const FileManager = ({
  files = [],
  fileUploadConfig,
  isLoading,
  onCreateFolder,
  onFileUploading,
  onFileUploaded,
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
  onError = () => {},
  onSortChange,
  layout = "grid",
  enableFilePreview = true,
  maxFileSize,
  uploadConcurrency = 4,
  filePreviewPath,
  acceptedFileTypes,
  height = "600px",
  width = "100%",
  initialPath = "",
  filePreviewComponent,
  primaryColor = "#6155b4",
  fontFamily = "Nunito Sans, sans-serif",
  language = "en-US",
  permissions: userPermissions,
  collapsibleNav = false,
  defaultNavExpanded = true,
  className = "",
  style = {},
  formatDate = defaultFormatDate,
}: FileManagerProps) => {
  const [isNavigationPaneOpen, setNavigationPaneOpen] = useState(defaultNavExpanded);
  const triggerAction = useTriggerAction();
  const { containerRef, colSizes, isDragging, handleMouseMove, handleMouseUp, handleMouseDown } =
    useColumnResize(20, 80);
  const customStyles = {
    "--file-manager-font-family": fontFamily,
    "--file-manager-primary-color": primaryColor,
    height,
    width,
  };

  const permissions = useMemo(
    () => ({ ...defaultPermissions, ...userPermissions }),
    [userPermissions]
  );

  return (
    <main
      className={`file-explorer ${className}`}
      onContextMenu={(e) => e.preventDefault()}
      style={{ ...customStyles, ...style }}
    >
      <Loader loading={isLoading} />
      <TranslationProvider language={language}>
        <FilesProvider filesData={files as ExtendedFileItem[]} onError={onError}>
          <FileNavigationProvider
            initialPath={initialPath}
            onFolderChange={onFolderChange}
            onSortChange={onSortChange}
          >
            <SelectionProvider    
              onDownload={onDownload}
              onSelect={onSelect}
              onSelectionChange={onSelectionChange}
            >
              <ClipBoardProvider onPaste={onPaste} onCut={onCut} onCopy={onCopy}>
                <LayoutProvider layout={layout}>
                  <UploadProvider
                    fileUploadConfig={fileUploadConfig}
                    onFileUploading={onFileUploading}
                    onFileUploaded={onFileUploaded}
                    onCreateFolder={onCreateFolder}
                    maxFileSize={maxFileSize}
                    acceptedFileTypes={acceptedFileTypes}
                    uploadConcurrency={uploadConcurrency}
                    permissions={permissions}
                    triggerAction={triggerAction}
                  >
                    <Toolbar
                      onLayoutChange={onLayoutChange}
                      onRefresh={onRefresh}
                      triggerAction={triggerAction}
                      permissions={permissions}
                    />
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
                        style={{ width: (isNavigationPaneOpen ? colSizes.col2 : 100) + "%" }}
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
                    </section>

                    <Actions
                      onDelete={onDelete}
                      onRefresh={onRefresh}
                      filePreviewPath={filePreviewPath}
                      filePreviewComponent={filePreviewComponent}
                      triggerAction={triggerAction}
                      permissions={permissions}
                    />
                  </UploadProvider>
                </LayoutProvider>
              </ClipBoardProvider>
            </SelectionProvider>
          </FileNavigationProvider>
        </FilesProvider>
      </TranslationProvider>
    </main>
  );
};

FileManager.displayName = "FileManager";

export default FileManager;
