import { FileItem as IFile } from "./File";
import { Layout } from "./Layout";
import { SortConfiguration } from "./SortConfiguration";

export type OnCopy = (files: IFile[]) => void;

export type OnCreateFolder = (name: string, parentFolder: IFile) => void;

export type OnCut = (files: IFile[]) => void;

export type OnDelete = (files: IFile[]) => void;

export type OnDownload = (files: IFile[]) => void;

export type OnError = (error: { type: string; message: string }, file: IFile | File) => void;

export type OnFileOpen = (file: IFile) => void;

export type OnFileUploaded = (response: { [key: string]: any }) => void;

export type OnFileUploading = (file: File, parentFolder: IFile) => { [key: string]: any };

export type OnFolderChange = (path: string) => void;

export type OnPaste = (files: IFile[], destinationFolder: IFile, operationType: "copy" | "move") => void;

export type OnRename = (file: IFile, newName: string) => void;

export type OnLayoutChange = (layout: Layout) => void;

export type OnSelect = (files: IFile[]) => void;

export type OnSelectionChange = (files: IFile[]) => void;

export type OnSortChange = (sortConfig: SortConfiguration) => void;

export type FilePreviewComponent = (file: IFile) => React.ReactNode;

export type OnRefresh = () => void;