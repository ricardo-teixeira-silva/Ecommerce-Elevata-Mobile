import { FlatList } from "react-native";
import { Product } from "../types/product";
import { ProductCard } from "./product-card";
import { SkeletonRatedCarousel } from "./skeleton/skeleton-rated-carousel";
import { TitleAction } from "./title-action";

type BestRatedCarouselProps = {
  data: Array<Product> | [];
  loading?: boolean;
  onPressActionLabel?: () => void;
};

export const BestRatedCarousel = ({
  data,
  loading,
  onPressActionLabel,
}: BestRatedCarouselProps) => {
  const ITEM_SPACING = 12;

  if (loading) {
    return (
      <TitleAction
        title="Mais vendidos"
        actionLabel="Ver tudo"
        onPress={onPressActionLabel}
      >
        <SkeletonRatedCarousel />
      </TitleAction>
    );
  }

  return (
    <TitleAction
      title="Mais vendidos"
      actionLabel="Ver tudo"
      onPress={onPressActionLabel}
    >
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignSelf: "flex-start", gap: ITEM_SPACING }}
        snapToInterval={76}
        snapToAlignment="start"
        decelerationRate="fast"
        renderItem={({ item }) => <ProductCard data={item} showRating />}
      />
    </TitleAction>
  );
};
