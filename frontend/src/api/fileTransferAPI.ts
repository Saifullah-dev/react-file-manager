import { AxiosResponse } from "axios";
import { api } from "./api";

export const copyItemAPI = async (sourceIds: string[], destinationId: string) => {
  const response = await api.post<AxiosResponse>("/copy", { sourceIds, destinationId });
  return response;
};

export const moveItemAPI = async (sourceIds: string[], destinationId: string) => {
  const response = await api.put("/move", { sourceIds, destinationId });
  return response;
};
