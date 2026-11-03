// Checks a file against an `accept`-style list, e.g. ".jpg, .png, application/pdf, image/*".
// Matches the way the browser's file picker reads the same list: extensions ignore case and must
// match exactly, "type/*" matches any subtype.
export const isFileTypeAccepted = (file: File, acceptedFileTypes: string) => {
  const name = file.name.toLowerCase();
  const extension = name.includes(".") ? `.${name.split(".").pop()}` : "";
  const mimeType = file.type.toLowerCase();

  return acceptedFileTypes
    .split(",")
    .map((token) => token.trim().toLowerCase())
    .filter(Boolean)
    .some((token) => {
      if (token.startsWith(".")) return token === extension;
      if (token.endsWith("/*")) return !!mimeType && mimeType.startsWith(token.slice(0, -1));
      return token === mimeType;
    });
};
