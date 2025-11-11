import { File } from "../types/File";

type FileTree = File & {
  children: FileTree[];
};

export const createFolderTree = (copiedFile : File, files : File[]) : FileTree => {
  const childFiles = files.filter(
    (f) => f.path === copiedFile.path + "/" + copiedFile.name
  );
  return {
    ...copiedFile,
    children: childFiles.map((f) => createFolderTree(f, files)),
  };
};
