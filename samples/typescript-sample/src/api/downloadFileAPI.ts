import type { FileItem } from "@cubone/react-file-manager";
import type { AxiosResponse } from "axios";

export const downloadFile = async (files : FileItem[]) : Promise<AxiosResponse | void> => {
  if (files.length === 0) return;

  try {
    const fileQuery = files.map((file) => `files=${encodeURIComponent(file._id)}`).join("&");
    const url = `${import.meta.env.VITE_API_BASE_URL}/download?${fileQuery}`;

    const link = document.createElement("a");
    link.href = url;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);    
  } catch (error) {
    return error as AxiosResponse;
  }
};
