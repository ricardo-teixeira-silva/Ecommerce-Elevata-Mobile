import { useMutation, useQuery } from "@tanstack/react-query";
import { getListBestRated } from "../../services/best-rated.service";
import { getListCategories } from "../../services/categories.service";
import { getFlashproducts } from "../../services/flash-products.service";
import { searchProducts } from "../../services/search.service";

export const useHomeModel = () => {
  const mutationProducts = useMutation({
    mutationFn: searchProducts,
    onSuccess: async (data) => {
      console.log({ total_de_produtos: data.total, produtos: data.products });
    },
    onError: (error) => {
      console.log({ error: true, message: error.message });
    },
  });

  const categoriesQuery = useQuery({
    queryKey: ["categories"],
    queryFn: getListCategories,
  });

  const bestRatedQuery = useQuery({
    queryKey: ["best-rated"],
    queryFn: getListBestRated,
  });

  const flashProductsQuery = useQuery({
    queryKey: ["flash-products"],
    queryFn: getFlashproducts,
  });

  const handleSearchProducts = (search: string) => {
    mutationProducts.mutate(search);
  };

  return {
    searchProducts: handleSearchProducts,
    isLoadingProducts: mutationProducts.isPending,
    categories: categoriesQuery.data ?? [],
    isLoadingCategories: categoriesQuery.isPending,
    bestRatedProducts: bestRatedQuery.data ?? [],
    isLoadingBestRatedProducts: bestRatedQuery.isPending,
    flashProducts: flashProductsQuery.data ?? [],
    isLoadingFlashProducts: flashProductsQuery.isPending,
  };
};
