import { File } from "./File";
import { Layout } from "./Layout";
import { SortConfiguration } from "./SortConfiguration";

export type OnCopy = (files: File[]) => void;

export type OnCreateFolder = (name: string, parentFolder: File) => void;

export type OnCut = (files: File[]) => void;

export type OnDelete = (files: File[]) => void;

export type OnDownload = (files: File[]) => void;

export type OnError = (error: { type: string; message: string }, file: File) => void;

export type OnFileOpen = (file: File) => void;

export type OnFileUploaded = (response: { [key: string]: any }) => void;

export type OnFileUploading = (file: File, parentFolder: File) => { [key: string]: any };

export type OnFolderChange = (path: string) => void;

export type OnPaste = (files: File[], destinationFolder: File, operationType: "copy" | "move") => void;

export type OnRename = (file: File, newName: string) => void;

export type OnLayoutChange = (layout: Layout) => void;

export type OnSelect = (files: File[]) => void;

export type OnSelectionChange = (files: File[]) => void;

export type OnSortChange = (sortConfig: SortConfiguration) => void;

export type FilePreviewComponent = (file: File) => React.ReactNode;

export type OnRefresh = () => void;