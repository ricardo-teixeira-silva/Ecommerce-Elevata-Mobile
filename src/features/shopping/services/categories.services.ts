import { api } from "@/src/services/api";
import { ListCategoriesResponse } from "../../../shared/types/categories";

export const getListCategories = async (): Promise<
  Array<ListCategoriesResponse>
> => {
  const response = await api.get("/products/categories");
  return response.data;
};
