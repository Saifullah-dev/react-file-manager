const sortAscending = (files) => files.sort((a, b) => a.name.localeCompare(b.name));

const sortFiles = (items) => {
  const folders = items.filter((file) => file.isDirectory);
  const files = items.filter((file) => !file.isDirectory);
  const sortedFolders = sortAscending(folders);
  const sortedFiles = sortAscending(files);

  return [...sortedFolders, ...sortedFiles];
};

export default sortFiles;
