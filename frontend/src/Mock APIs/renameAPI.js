import { api } from "./api";

export const renameAPI = async (id, newName) => {
  const response = api.patch("/rename", {
    id,
    newName,
  });
  return response;
};
