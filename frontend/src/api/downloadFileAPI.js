export const downloadFile = async (files) => {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  try {
    for (const file of files) {
      const url = import.meta.env.VITE_API_BASE_URL + "/download?filePath=" + file.path;

      // Create a download link for the current file
      const link = document.createElement("a");
      link.href = url;
      link.download = file.name;

      // Append the link to the DOM, click it, and remove the link
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Delay between downloads to give the browser time to handle each download
      await delay(500); // 500ms delay (adjustable)
    }
  } catch (error) {
    return error;
  }
};
