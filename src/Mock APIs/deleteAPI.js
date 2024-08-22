export const deleteAPI = (files, file) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let response;
      if (file.isDirectory) {
        response = files.filter((f) => {
          const folderToDelete = f.path === file.path && f.name === file.name;
          const folderChildren = f.path.startsWith(file.path + "/" + file.name);
          return !folderToDelete && !folderChildren;
        });
      } else {
        response = files.filter((f) => !(f.name === file.name && f.path === file.path));
      }

      resolve(response);
    }, 700);
  });
};
