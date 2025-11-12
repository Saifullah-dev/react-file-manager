export interface File {
  name: string;
  isDirectory: boolean;
  path: string;
  updatedAt?: string;
  size?: number;
  [key: string]: any; // For JS-Compatability
}

export interface FileExtended extends File {
  isEditing?: boolean;
  key?: string | number;
  subDirectories?: FileExtended[];
}