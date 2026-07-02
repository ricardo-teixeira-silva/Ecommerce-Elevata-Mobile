import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { ProductCard } from "./product-card";

export const BestRatedCarousel = () => {
  const ITEM_SPACING = 12;

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
      <FlatList
        horizontal
        data={Array.from({ length: 10 })}
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignSelf: "flex-start", gap: ITEM_SPACING }}
        snapToInterval={76}
        snapToAlignment="start"
        decelerationRate="fast"
        renderItem={({ index }) => <ProductCard data={[]} showRating />}
      />
    </View>
  );
};
