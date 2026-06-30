import banner from "@/src/features/shopping/assets/images/banner.png";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

export const OfferBanner = () => {
  return (
    <ImageBackground
      source={banner}
      resizeMode="cover"
      className="w-full h-[224px] rounded-[32px] overflow-hidden"
    >
      <LinearGradient
        colors={["#004ce3ca", "#004ce3c0", "#004BE380", "#004ce34c"]}
        locations={[0, 0.3, 0.6, 1]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        className="flex-1 px-7 py-5 gap-2"
      >
        <View className="self-start bg-[#ffffff3b] rounded-full px-3 py-1">
          <Text className="text-[#ffffffec] font-inter_regular text-sm">
            Oferta Exclusiva
          </Text>
        </View>
        <View>
          <Text className="text-[#ffffffec] font-inter_bold text-[28px] leading-tight">
            Coleção de
          </Text>
          <Text className="text-[#ffffffec] font-inter_bold text-[28px] leading-tight">
            Primavera
          </Text>
        </View>
        <Text className="text-[#ffffffec] font-inter_regular text-sm">
          Até 50% de desconto em itens selecionados
        </Text>
        <TouchableOpacity className="bg-white p-2 px-7 rounded-full justify-center items-center self-start top-2">
          <Text className=" font-inter_bold text-color_blue">
            Comprar Agora
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  );
};
