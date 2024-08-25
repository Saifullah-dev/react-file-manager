export const getDataSize = (size) => {
  const KiloBytes = size / 1024;
  const MegaBytes = KiloBytes / 1024;
  const GigaBytes = MegaBytes / 1024;

  if (KiloBytes < 1024) {
    return `${KiloBytes.toFixed(2)} KB`;
  } else if (MegaBytes < 1024) {
    return `${MegaBytes.toFixed(2)} MB`;
  } else if (MegaBytes >= 1024) {
    return `${GigaBytes.toFixed(2)} GB`;
  }
};
