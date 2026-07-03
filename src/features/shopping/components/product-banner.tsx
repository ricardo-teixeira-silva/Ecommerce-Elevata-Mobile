import phone from "@/src/features/shopping/assets/images/phone.png";
import slugPhone from "@/src/features/shopping/assets/images/slug-phone.png";
import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  ImageBackground,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TitleAction } from "./title-action";

const isAndroid = Platform.OS === "android";

type ProductBannerProps = {
  onPressActionLabel?: () => void;
};

export const ProductBanner = ({ onPressActionLabel }: ProductBannerProps) => {
  const navigateToCategorieDresses = () => {
    const url = "https://dummyjson.com/products/category/womens-dresses";
    console.log(url);
  };

  return (
    <TitleAction
      title="Novidades"
      actionLabel="Ver galeria"
      onPress={onPressActionLabel}
    >
      <ImageBackground
        source={phone}
        resizeMode="cover"
        className={`rounded-[32px] overflow-hidden ${
          isAndroid ? "w-full h-[235px]" : "flex-1 h-full"
        }`}
        imageStyle={{ borderRadius: 32 }}
      >
        <LinearGradient
          colors={["#001551", "#001651af", "#3366ffd0", "#3366ff8c"]}
          locations={[0, 0.4, 0.8, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="absolute inset-0 justify-center items-start rounded-[32px]"
          style={{ flex: 1 }}
        >
          <View className="w-full h-full p-6">
            <View>
              <Text className="text-[#ffffffec] font-inter_bold text-[28px] leading-tight">
                Áudio
              </Text>
              <Text className="text-[#ffffffec] font-inter_bold text-[28px] leading-tight">
                Premium
              </Text>
            </View>
            <View className="flex-row">
              <Text className="text-[#ffffffec] font-inter_regular text-sm mt-2 w-[50%]">
                Descubra o próximo nível de som com nossa nova coleção
                exclusiva.
              </Text>
              <Image
                source={slugPhone}
                width={175}
                height={224}
                className="absolute -right-[12%] -top-[50%]"
              />
            </View>
            <TouchableOpacity
              className="bg-white py-2 px-7 rounded-full self-start mt-3"
              onPress={navigateToCategorieDresses}
            >
              <Text className="font-inter_bold text-color_blue">Explorar</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TitleAction>
  );
};
