import { api } from "./api";

export const copyItemAPI = async (sourceId, destinationId) => {
  const response = await api.post("/copy", { sourceId, destinationId });
  return response;
};

export const moveItemAPI = async (sourceId, destinationId) => {
  const response = await api.put("/move", { sourceId, destinationId });
  return response;
};
