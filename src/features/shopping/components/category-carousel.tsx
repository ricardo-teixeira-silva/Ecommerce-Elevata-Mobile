import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ListCategoriesResponse } from "../../../shared/types/categories";
import { CategoryItem } from "./category-item";
import { SkeletonCategoryCarousel } from "./skeleton-category-carousel";

type CategoryCarouselProps = {
  categories: Array<ListCategoriesResponse>;
  loading?: boolean;
};

export const CategoryCarousel = ({
  categories,
  loading,
}: CategoryCarouselProps) => {
  if (loading) {
    return <SkeletonCategoryCarousel />;
  }

  return (
    <View className="gap-2">
      <View className="flex-row justify-between">
        <Text className="leading-10 text-color_black text-lg font-semibold">
          Categorias
        </Text>
        <TouchableOpacity className="h-12 items-center justify-center">
          <Text className="font-inter_medium text-color_blue_strong text-sm">
            Ver tudo
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ alignSelf: "flex-start" }}
      >
        {categories.map((categorie, index) => (
          <CategoryItem key={index} categories={categorie} />
        ))}
      </ScrollView>
    </View>
  );
};
