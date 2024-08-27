export const renameAPI = (files, selectedFile, newName) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const response = files.map((file) => {
        if (file.name === selectedFile.name && file.path === selectedFile.path) {
          return {
            // Rename the file itself
            ...file,
            name: newName,
          };
        } else if (file.path.startsWith(selectedFile.path + "/" + selectedFile.name)) {
          // Path update for all files in the folder
          const basePath = selectedFile.path + "/" + selectedFile.name;
          const newBasePath = basePath.split("/").slice(0, -1).join("/") + "/" + newName;
          const newPath = newBasePath + file.path.slice(basePath.length);
          return {
            ...file,
            path: newPath,
          };
        } else {
          return file;
        }
      });

      resolve(response);
    }, 700);
  });
};
