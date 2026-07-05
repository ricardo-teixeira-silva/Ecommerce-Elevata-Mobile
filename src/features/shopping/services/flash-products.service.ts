import { api } from "@/src/services/api";
import { Product, ProductResponse } from "../types/product";

export const getFlashProducts = async (): Promise<Product[]> => {
  const categories = ["tablets", "laptops", "smartphones"];
  const responses = await Promise.all(
    categories.map((cat) =>
      api.get<ProductResponse>(`/products/category/${cat}`),
    ),
  );
  const products = responses.flatMap((r) => r.data.products);
  return products.filter((p) => p.stock <= 30).slice(0, 10);
};
