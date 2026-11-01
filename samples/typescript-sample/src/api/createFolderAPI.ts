import type { AxiosResponse } from "axios";
import { api } from "./api";
import type { FileItem } from "@cubone/react-file-manager";

export const createFolderAPI = async (name : string, parentId : string) => {
  try {
    const response = await api.post<FileItem>("/folder", { name, parentId });
    return response;
  } catch (error) {
    return error as AxiosResponse<FileItem>;
  }
};
