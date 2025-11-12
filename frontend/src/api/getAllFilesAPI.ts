import { AxiosResponse } from "axios";
import { api } from "./api";
import { File } from "../types/File";

export const getAllFilesAPI = async () => {
  try {
    const response = await api.get<File[]>("");
    return response;
  } catch (error) {
    return error as AxiosResponse;
  }
};
