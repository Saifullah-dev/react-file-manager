export const getDataSize = (size, decimalPlaces = 2) => {
  if (isNaN(size)) return "";

  const KiloBytes = size / 1024;
  const MegaBytes = KiloBytes / 1024;
  const GigaBytes = MegaBytes / 1024;

  if (KiloBytes < 1024) {
    return `${KiloBytes.toFixed(decimalPlaces)} KB`;
  } else if (MegaBytes < 1024) {
    return `${MegaBytes.toFixed(decimalPlaces)} MB`;
  } else if (MegaBytes >= 1024) {
    return `${GigaBytes.toFixed(decimalPlaces)} GB`;
  }
};
