import { Text, TouchableOpacity, View } from "react-native";
import { CategoryItemProps } from "../../../shared/types/categories";
import { mapCategoryToUI } from "../utils/functions/translateCategoriesToPtBR";

export const CategoryItem = ({ categories }: CategoryItemProps) => {
  return (
    <TouchableOpacity
      className="w-20 items-start justify-start mr-4 gap-1"
      onPress={() => console.log({ url: categories.url })}
    >
      <View className="bg-[#EDEEEF] w-full h-16 rounded-2xl items-center justify-center">
        {mapCategoryToUI(categories).icon}
      </View>
      <Text
        className="text-color_slate_dark text-xs text-center mt-1 w-full leading-none"
        numberOfLines={2}
        ellipsizeMode="tail"
        style={{ minHeight: 28 }}
      >
        {mapCategoryToUI(categories).name}
      </Text>
    </TouchableOpacity>
  );
};
