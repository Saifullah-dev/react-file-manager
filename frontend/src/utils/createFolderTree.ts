import { FileItem } from "../types/File";

export type FileTree = FileItem & {
  children: FileTree[];
};

export const createFolderTree = (copiedFile : FileItem, files : FileItem[]) : FileTree => {
  const childFiles = files.filter(
    (f) => f.path === copiedFile.path + "/" + copiedFile.name
  );
  return {
    ...copiedFile,
    children: childFiles.map((f) => createFolderTree(f, files)),
  };
};
