import { useMutation, useQuery } from "@tanstack/react-query";
import { getListCategories } from "../../services/categories.services";
import { searchProducts } from "../../services/search.services";

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

  const handleSearchProducts = (search: string) => {
    mutationProducts.mutate(search);
  };

  return {
    searchProducts: handleSearchProducts,
    isLoadingProducts: mutationProducts.isPending,
    categories: categoriesQuery.data ?? [],
    isLoadingCategories: categoriesQuery.isPending,
  };
};
