export const getFileExtension = (fileName : string) => {
  return fileName.split(".").pop();
};
