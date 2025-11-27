import FileManager from "./FileManager";

// src/index.ts
export { default as FileManager } from "./FileManager/FileManager";

export default FileManager;

export type {
    OnCopy,
    OnCreateFolder,
    OnCut,
    OnDelete,
    OnDownload,
    OnError,
    OnFileOpen,
    OnFileUploaded,
    OnFileUploading,
    OnFolderChange,
    OnPaste,
    OnRename,
    OnLayoutChange,
    OnSelect,
    OnSelectionChange,
    OnSortChange,
    FilePreviewComponent,
    OnRefresh 
} from "./types/FileManagerFunctions"

export type { FileItem }from "./types/File";
export type { Layout }from "./types/Layout";
export type { Permissions }from "./types/Permissions";
export type { Language }from "./types/Language";
export type { FileUploadConfiguration }from "./types/FileUploadConfiguration";
export type { SortConfiguration }from "./types/SortConfiguration";