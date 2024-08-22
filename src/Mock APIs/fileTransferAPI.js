const getCopiedFiles = (file, pastePath) => {
  const children = file.children ?? [];
  return [
    { name: file.name, isDirectory: file.isDirectory, path: pastePath },
    ...children.flatMap((child) => getCopiedFiles(child, pastePath + "/" + file.name)),
  ];
};

const handleDuplicateFile = (file, pastePath, pastePathFiles) => {
  if (file.path === pastePath || pastePathFiles.find((f) => f.name === file.name)) {
    const fileExtension = file.isDirectory ? "" : "." + file.name.split(".").pop();
    const fileName = file.isDirectory ? file.name : file.name.split(".").slice(0, -1).join(".");

    // Generating new file name for duplicate file
    let maxFileNum = 0;
    // If there exists a file with name fileName (1), fileName (2), etc.
    // Check if the number is greater than the maxFileNum, then set it to that greater number
    const fileNameRegex = new RegExp(`${fileName} \\(\\d+\\)`);
    pastePathFiles.forEach((f) => {
      const fName = f.isDirectory ? f.name : f.name.split(".").slice(0, -1).join(".");
      if (fileNameRegex.test(fName)) {
        const fileNumStr = fName.split(`${fileName} (`).pop().slice(0, -1);
        const fileNum = parseInt(fileNumStr);
        if (!isNaN(fileNum) && fileNum > maxFileNum) {
          maxFileNum = fileNum;
        }
      }
    });
    const appendNum = ` (${++maxFileNum})`;
    const newFileName = fileName + appendNum + fileExtension;
    //

    return { ...file, name: newFileName };
  } else {
    return file;
  }
};

export const fileTransferAPI = (files, pastePath, clipBoard, filesCopied) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (clipBoard.isMoving) {
        files = files.filter((f) => {
          return !filesCopied.find((cf) => cf.name === f.name && cf.path === f.path);
        });
      }

      const response = [
        ...files,
        ...clipBoard.files.flatMap((file) => {
          const pastePathFiles = files.filter((f) => f.path === pastePath);
          const nonDuplicateFile = handleDuplicateFile(file, pastePath, pastePathFiles);
          return getCopiedFiles(nonDuplicateFile, pastePath);
        }),
      ];

      resolve(response);
    }, 700);
  });
};
