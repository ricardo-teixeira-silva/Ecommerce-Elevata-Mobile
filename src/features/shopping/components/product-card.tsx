import { colors } from "@/src/styles/colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Product } from "../types/product";
import { FavoriteButton } from "./favorite-button";

type ProductCardProps = {
  showRating?: boolean;
  data: Product | [];
};

export const ProductCard = ({ data, showRating = false }: ProductCardProps) => {
  const SIZE_IMAGE_PRODUCT = 153;

  return (
    <TouchableOpacity className="w-[169px] max-h-[250px] items-center p-2 bg-white rounded-3xl">
      <View>
        <Image
          source={{
            uri: "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/thumbnail.webp",
          }}
          width={SIZE_IMAGE_PRODUCT}
          height={SIZE_IMAGE_PRODUCT}
          className="rounded-3xl"
        />
        <FavoriteButton isFavorite />
      </View>
      <View className="gap-1">
        <Text className="text-color_black text-sm font-inter_regular">
          Apple MacBook Pro
        </Text>
        {showRating && (
          <View className="flex-row items-center gap-1">
            <FontAwesome
              name="star"
              size={11}
              color={colors.color_yellow_gold}
            />
            <Text className="text-color_slate_dark text-xs font-inter_medium">
              4.9 (124 avaliações)
            </Text>
          </View>
        )}
        <Text className="text-color_blue font-inter_bold text-[22px]">
          R$ 1999.99
        </Text>
      </View>
    </TouchableOpacity>
  );
};
