export const createFolderAPI = (files, folderName, folderPath) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        ...files,
        {
          name: folderName,
          isDirectory: true,
          path: folderPath,
        },
      ]);
    }, 700);
  });
};
