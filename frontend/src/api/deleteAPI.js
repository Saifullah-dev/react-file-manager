import { api } from "./api";

export const deleteAPI = async (ids) => {
  const response = await api.delete("", { data: { ids: ids } });
  return response;
};
