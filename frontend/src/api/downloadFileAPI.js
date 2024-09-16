import { api } from "./api";

export const downloadFile = async (id) => {
  try {
    const response = await api.get(`/download/${id}`, {
      responseType: "blob",
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;

    const contentDisposition = response.headers["content-disposition"];
    let fileName = "downloaded_file";
    if (contentDisposition) {
      const fileNameRegex = /filename="?(.+)?"/;
      const fileNameMatch = contentDisposition.match(fileNameRegex);
      if (fileNameMatch && fileNameMatch.length > 1) {
        fileName = fileNameMatch[1];
      }
    }

    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    return response;
  } catch (error) {
    return error;
  }
};
