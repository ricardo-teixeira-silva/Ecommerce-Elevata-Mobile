import { FlatList } from "react-native";
import { ListCategoriesResponse } from "../../../shared/types/categories";
import { CategoryItem } from "./category-item";
import { SkeletonCategoryCarousel } from "./skeleton-category-carousel";
import { TitleAction } from "./title-action";

type CategoryCarouselProps = {
  categories: Array<ListCategoriesResponse>;
  loading?: boolean;
  onPressActionLabel?: () => void;
};

export const CategoryCarousel = ({
  categories,
  loading,
  onPressActionLabel,
}: CategoryCarouselProps) => {
  if (loading) {
    return <SkeletonCategoryCarousel />;
  }

  const ITEM_WIDTH = 80;
  const ITEM_SPACING = 16;

  return (
    <TitleAction
      title="Categorias"
      actionLabel="Ver tudo"
      onPress={onPressActionLabel}
    >
      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item.slug}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignSelf: "flex-start", gap: ITEM_SPACING }}
        snapToInterval={ITEM_WIDTH + ITEM_SPACING}
        snapToAlignment="start"
        decelerationRate="fast"
        renderItem={({ item }) => <CategoryItem categories={item} />}
      />
    </TitleAction>
  );
};
