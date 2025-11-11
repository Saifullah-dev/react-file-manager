export const createFolderTree = (copiedFile, files) => {
  const childFiles = files.filter(
    (f) => f.path === copiedFile.path + "/" + copiedFile.name
  );
  return {
    ...copiedFile,
    children: childFiles.map((f) => createFolderTree(f, files)),
  };
};
