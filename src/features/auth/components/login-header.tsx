import cart from "@/src/features/auth/assets/images/cart.png";
import { Image, Text, View } from "react-native";

export const LoginHeader = () => {
  return (
    <View className="flex-1 items-center pt-2">
      <Image source={cart} />
      <View className="gap-1 items-center">
        <Text className="text-color_black font-inter_bold text-3xl">
          Bem-vindo de volta
        </Text>
        <Text className="text-color_gray font-inter_regular text-sm">
          Entre para continuar suas compras
        </Text>
      </View>
    </View>
  );
};
