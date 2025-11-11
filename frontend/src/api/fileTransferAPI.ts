import { api } from "./api";

export const copyItemAPI = async (sourceIds, destinationId) => {
  const response = await api.post("/copy", { sourceIds, destinationId });
  return response;
};

export const moveItemAPI = async (sourceIds, destinationId) => {
  const response = await api.put("/move", { sourceIds, destinationId });
  return response;
};
