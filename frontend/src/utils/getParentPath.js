export const getParentPath = (path) => {
  return path?.split("/").slice(0, -1).join("/");
};
