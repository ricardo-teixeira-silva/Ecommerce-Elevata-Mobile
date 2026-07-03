import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Product } from "../types/product";
import { ProductCard } from "./product-card";

type BestRatedCarouselProps = {
  data: Array<Product> | [];
};

export const BestRatedCarousel = ({ data }: BestRatedCarouselProps) => {
  const ITEM_SPACING = 12;

  return (
    <View className="gap-2">
      <View className="flex-row justify-between">
        <Text className="leading-10 text-color_black text-lg font-semibold">
          Mais Vendidos
        </Text>
        <TouchableOpacity className="h-12 items-center justify-center">
          <Text className="font-inter_medium text-color_blue_strong text-sm">
            Ver tudo
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignSelf: "flex-start", gap: ITEM_SPACING }}
        snapToInterval={76}
        snapToAlignment="start"
        decelerationRate="fast"
        renderItem={({ item }) => <ProductCard data={item} showRating />}
      />
    </View>
  );
};
