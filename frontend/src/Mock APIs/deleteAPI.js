import { api } from "./api";

export const deleteAPI = async (id) => {
  const response = await api.delete(`${import.meta.env.VITE_API_BASE_URL}/${id}`);
  return response;
};
