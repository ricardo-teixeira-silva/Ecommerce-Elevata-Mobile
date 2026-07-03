import { api } from "@/src/services/api";
import { Product, ProductResponse } from "../types/product";

export const getFlashproducts = async (): Promise<Array<Product>> => {
  const response = await api.get<ProductResponse>("/products?limit=100");
  const flashProducts = response.data.products;
  const filterFlashProducts = flashProducts
    .filter((product) => product.stock <= 10)
    .slice(0, 10);
  return filterFlashProducts;
};
