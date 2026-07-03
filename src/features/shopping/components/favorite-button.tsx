import { colors } from "@/src/styles/colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { TouchableOpacity, View } from "react-native";

type FavoriteButtonProps = {
  isFavorite?: boolean;
};

export const FavoriteButton = ({ isFavorite = false }: FavoriteButtonProps) => {
  return (
    <View className="absolute top-2 right-2">
      {isFavorite ? (
        <TouchableOpacity className="bg-[#b1a9a933] w-8 h-8 rounded-full items-center justify-center">
          <MaterialCommunityIcons
            name="cards-heart"
            size={16}
            color={colors.color_blue}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity className="bg-[#88838325] w-8 h-8 rounded-full items-center justify-center">
          <MaterialCommunityIcons
            name="cards-heart-outline"
            size={16}
            color={colors.color_gray_light}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
