import banner from "@/src/features/shopping/assets/images/banner.png";
import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  ImageBackground,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const bannerSource = Image.resolveAssetSource(banner);
const bannerAspectRatio = bannerSource.width / bannerSource.height;
const isAndroid = Platform.OS === "android";

export const OfferBanner = () => {
  const navigateToCategorieDresses = () => {
    const url = "https://dummyjson.com/products/category/womens-dresses";
    console.log(url);
  };

  return (
    <ImageBackground
      source={banner}
      resizeMode="cover"
      className={`rounded-[32px] overflow-hidden ${
        isAndroid ? "w-full" : "flex-1 h-full"
      }`}
      style={isAndroid ? { aspectRatio: bannerAspectRatio } : undefined}
      imageStyle={{ borderRadius: 32 }}
    >
      <LinearGradient
        colors={["#004ce3ca", "#004ce3c0", "#004BE380", "#004ce34c"]}
        locations={[0, 0.3, 0.6, 1]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        className="absolute inset-0 justify-center items-start rounded-[32px]"
        style={{ flex: 1 }}
      >
        <View className="w-full h-full p-6">
          <View className="self-start bg-[#ffffff3b] rounded-full px-3 py-1 mb-2">
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
          <Text className="text-[#ffffffec] font-inter_regular text-sm mt-2">
            Até 50% de desconto em itens selecionados
          </Text>
          <TouchableOpacity
            className="bg-white py-2 px-7 rounded-full self-start mt-3"
            onPress={navigateToCategorieDresses}
          >
            <Text className="font-inter_bold text-color_blue">
              Comprar Agora
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};
