import { api } from "@/src/services/api";
import { ProductResponse } from "../types/product";

export const getListBestRated = async () => {
  const response = await api.get<ProductResponse>("/products?limit=100");

  return response.data.products
    .sort(
      (currentProduct, nextProduct) =>
        nextProduct.rating - currentProduct.rating,
    )
    .slice(0, 10);
};
