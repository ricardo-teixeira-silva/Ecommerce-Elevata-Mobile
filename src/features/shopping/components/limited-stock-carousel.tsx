import { FlatList, Text } from "react-native";
import { Product } from "../types/product";
import { ProductLimitedCard } from "./product-limited-card";
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

  const renderItem = ({ item }: { item: Product | any }) => {
    if (loading) {
      return <Text>Carregando...</Text>;
    }
    return <ProductLimitedCard data={item} />;
  };

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
        renderItem={renderItem}
      />
    </TitleAction>
  );
};
