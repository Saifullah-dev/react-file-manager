import { api } from "./api";

export const deleteAPI = async (id) => {
  const response = await api.delete(`/${id}`);
  return response;
};
