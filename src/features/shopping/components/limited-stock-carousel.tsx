import { FlatList } from "react-native";
import { Product } from "../types/product";
import { ProductLimitedCard } from "./product-limited-card";
import { SkeletonLimitedStockCarousel } from "./skeleton";
import { TitleAction } from "./title-action";

type LimitedStockCarouselProps = {
  onPressActionLabel?: () => void;
  data: Array<Product>;
  loading?: boolean;
};

export const LimitedStockCarousel = ({
  onPressActionLabel,
  data,
  loading,
}: LimitedStockCarouselProps) => {
  const ITEM_SPACING = 12;

  if (loading) {
    return (
      <TitleAction
        title="Estoque Limitado"
        actionLabel="Ver tudo"
        badgeTitle="Flash"
        onPress={onPressActionLabel}
      >
        <SkeletonLimitedStockCarousel />
      </TitleAction>
    );
  }

  return (
    <TitleAction
      title="Estoque Limitado"
      actionLabel="Ver tudo"
      badgeTitle="Flash"
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
        renderItem={({ item }) => <ProductLimitedCard data={item} />}
      />
    </TitleAction>
  );
};
