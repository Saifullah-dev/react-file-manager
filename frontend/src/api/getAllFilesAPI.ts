import { AxiosResponse } from "axios";
import { api } from "./api";
import { FileItem } from "../types/File";

export const getAllFilesAPI = async () : Promise<AxiosResponse<FileItem[]>> => {
  try {
    const response = await api.get<FileItem[]>("");
    return response;
  } catch (error) {
    return error as AxiosResponse<FileItem[]>;
  }
};
