import { Text, View } from "react-native";
import { Product } from "../types/product";
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
  if (loading) {
    return <Text>Carregando...</Text>;
  }

  return (
    <TitleAction
      title="Estoque Limitado"
      actionLabel="Ver tudo"
      badgeTitle="Flash"
      onPress={onPressActionLabel}
    >
      <View>
        <Text>Conteúdo carrossel</Text>
        <Text>{data[0].price}</Text>
      </View>
    </TitleAction>
  );
};
