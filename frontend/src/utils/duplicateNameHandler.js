export const duplicateNameHandler = (originalFileName, isDirectory, files) => {
  if (files.find((f) => f.name === originalFileName)) {
    const fileExtension = isDirectory ? "" : "." + originalFileName.split(".").pop();
    const fileName = isDirectory
      ? originalFileName
      : originalFileName.split(".").slice(0, -1).join(".");

    // Generating new file name for duplicate file
    let maxFileNum = 0;
    // If there exists a file with name fileName (1), fileName (2), etc.
    // Check if the number is greater than the maxFileNum, then set it to that greater number
    const fileNameRegex = new RegExp(`${fileName} \\(\\d+\\)`);
    files.forEach((f) => {
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

    return newFileName;
  } else {
    return originalFileName;
  }
};
