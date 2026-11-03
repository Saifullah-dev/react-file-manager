// Checks a file against an `accept`-style list, e.g. ".jpg, .png, application/pdf, image/*".
// Extensions ignore case and must match exactly; the leading dot is optional ("jpg" works too).
// Values with a "/" are MIME types, where "type/*" matches any subtype.
export const isFileTypeAccepted = (file: File, acceptedFileTypes: string) => {
  const name = file.name.toLowerCase();
  const extension = name.includes(".") ? `.${name.split(".").pop()}` : "";
  const mimeType = file.type.toLowerCase();

  return acceptedFileTypes
    .split(",")
    .map((token) => token.trim().toLowerCase())
    .filter(Boolean)
    .some((token) => {
      if (!token.includes("/")) return `.${token.replace(/^\./, "")}` === extension;
      if (token.endsWith("/*")) return !!mimeType && mimeType.startsWith(token.slice(0, -1));
      return token === mimeType;
    });
};
