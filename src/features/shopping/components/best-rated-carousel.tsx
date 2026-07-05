import { FlatList } from "react-native";
import { Product } from "../types/product";
import { ProductCard } from "./product-card";
import { TitleAction } from "./title-action";

type BestRatedCarouselProps = {
  data: Array<Product> | [];
  onPressActionLabel?: () => void;
};

export const BestRatedCarousel = ({
  data,
  onPressActionLabel,
}: BestRatedCarouselProps) => {
  const ITEM_SPACING = 12;

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
