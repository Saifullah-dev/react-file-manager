export const getParentPath = (path : string) => {
  return path?.split("/").slice(0, -1).join("/");
};
