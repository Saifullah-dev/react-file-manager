import { AxiosResponse } from "axios";
import { api } from "./api";

export const renameAPI = async (id : string, newName : string) => {
  try {
    const response = await api.patch("/rename", {
      id,
      newName,
    });
    return response;
    
  } catch (error) {
    return error as AxiosResponse;
  }
};
