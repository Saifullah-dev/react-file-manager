import { api } from "./api";

export const deleteAPI = async (ids : string[]) => {
  const response = await api.delete("", { data: { ids: ids } });
  return response;
};
