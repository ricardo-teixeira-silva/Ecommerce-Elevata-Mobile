import { Image, Text, TouchableOpacity, View } from "react-native";
import { Product } from "../types/product";

type ProductLimitedCardProps = {
  data: Product;
  loading?: boolean;
};

export const ProductLimitedCard = ({
  data,
  loading,
}: ProductLimitedCardProps) => {
  if (loading) {
    return <Text>Carregando...</Text>;
  }

  const getTitle = (title: string): string => {
    return title.trim().split(/\s+/).slice(0, 2).join(" ");
  };

  return (
    <TouchableOpacity className="max-h-[270px] p-4 gap-4 bg-white rounded-3xl">
      <Image
        source={{
          uri: data?.thumbnail,
        }}
        resizeMode="contain"
        className="rounded-3xl object-cover w-full h-[140px]"
      />
      <View className="gap-1">
        <Text className="text-color_black font-inter_regular">
          {getTitle(data.title)}
        </Text>
        <Text className="text-color_slate_dark text-xs font-inter_medium">
          {data.brand}
        </Text>
      </View>
      <View className="flex-row gap-4">
        <Text className="text-color_blue font-inter_bold text-[22px]">
          R$ {data.price}
        </Text>
        <View className="gap-1 justify-center">
          <Text className="text-color_red font-inter_bold text-[10px]">
            APENAS {data.stock} RESTANTES
          </Text>
          <View className="bg-color_red w-14 h-[6px] rounded-full" />
        </View>
      </View>
    </TouchableOpacity>
  );
};
