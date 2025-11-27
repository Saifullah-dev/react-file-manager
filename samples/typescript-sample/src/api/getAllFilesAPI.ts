import type { AxiosResponse } from "axios";
import { api } from "./api";
import type { FileItem } from "@cubone/react-file-manager";

export const getAllFilesAPI = async () : Promise<AxiosResponse<FileItem[]>> => {
  try {
    const response = await api.get<FileItem[]>("");
    return response;
  } catch (error) {
    return error as AxiosResponse<FileItem[]>;
  }
};
