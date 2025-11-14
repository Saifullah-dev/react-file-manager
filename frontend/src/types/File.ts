export interface FileItem {
  name: string;
  isDirectory: boolean;
  path: string;
  updatedAt?: string;
  size?: number;
  [key: string]: any; // For JS-Compatability
}

export interface ExtendedFileItem extends FileItem {
  isEditing?: boolean;
  key?: string | number;
  subDirectories?: ExtendedFileItem[];
}