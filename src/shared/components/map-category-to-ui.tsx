import { CategoriesMap } from "@/src/shared/types/categories";
import { colors } from "@/src/styles/colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

export const listContentCategories: CategoriesMap = {
  beauty: {
    name: "Beleza",
    icon: (
      <MaterialCommunityIcons
        name="face-woman"
        size={24}
        color={colors.color_gray}
      />
    ),
  },
  fragrances: {
    name: "Fragrâncias",
    icon: <Fontisto name="test-bottle" size={20} color={colors.color_gray} />,
  },
  furniture: {
    name: "Móveis",
    icon: (
      <MaterialCommunityIcons
        name="table-furniture"
        size={28}
        color={colors.color_gray}
      />
    ),
  },
  groceries: {
    name: "Mercado",
    icon: <AntDesign name="shop" size={24} color={colors.color_gray} />,
  },
  "home-decoration": {
    name: "Decoração",
    icon: (
      <MaterialCommunityIcons
        name="sofa-outline"
        size={24}
        color={colors.color_gray}
      />
    ),
  },
  "kitchen-accessories": {
    name: "Cozinha",
    icon: (
      <FontAwesome6 name="kitchen-set" size={24} color={colors.color_gray} />
    ),
  },
  laptops: {
    name: "Notebooks",
    icon: <Fontisto name="laptop" size={24} color={colors.color_gray} />,
  },
  "mens-shirts": {
    name: "Camisas Masculinas",
    icon: <Ionicons name="shirt-outline" size={24} color={colors.color_gray} />,
  },
  "mens-shoes": {
    name: "Sapatos Masculinos",
    icon: (
      <MaterialCommunityIcons
        name="shoe-sneaker"
        size={24}
        color={colors.color_gray}
      />
    ),
  },
  "mens-watches": {
    name: "Relógios Masculinos",
    icon: <Feather name="watch" size={24} color={colors.color_gray} />,
  },
  "mobile-accessories": {
    name: "Acessórios Mobile",
    icon: (
      <SimpleLineIcons
        name="screen-smartphone"
        size={24}
        color={colors.color_gray}
      />
    ),
  },
  motorcycle: {
    name: "Motos",
    icon: <FontAwesome name="motorcycle" size={24} color={colors.color_gray} />,
  },
  "skin-care": {
    name: "Cuidados com a Pele",
    icon: (
      <MaterialCommunityIcons
        name="face-woman-outline"
        size={24}
        color={colors.color_gray}
      />
    ),
  },
  smartphones: {
    name: "Smartphones",
    icon: (
      <SimpleLineIcons
        name="screen-smartphone"
        size={24}
        color={colors.color_gray}
      />
    ),
  },
  "sports-accessories": {
    name: "Esportes",
    icon: <Ionicons name="football" size={28} color={colors.color_gray} />,
  },
  sunglasses: {
    name: "Óculos de Sol",
    icon: (
      <Fontisto name="sunglasses-alt" size={24} color={colors.color_gray} />
    ),
  },
  tablets: {
    name: "Tablets",
    icon: (
      <FontAwesome5 name="tablet-alt" size={24} color={colors.color_gray} />
    ),
  },
  tops: {
    name: "Roupas",
    icon: (
      <MaterialCommunityIcons
        name="underwear-outline"
        size={28}
        color={colors.color_gray}
      />
    ),
  },
  vehicle: {
    name: "Veículos",
    icon: <AntDesign name="car" size={28} color={colors.color_gray} />,
  },
  "womens-bags": {
    name: "Bolsas Femininas",
    icon: (
      <Ionicons name="bag-handle-outline" size={28} color={colors.color_gray} />
    ),
  },
  "womens-dresses": {
    name: "Vestidos",
    icon: <Ionicons name="woman" size={28} color={colors.color_gray} />,
  },
  "womens-jewellery": {
    name: "Joias",
    icon: <AntDesign name="ruby" size={24} color={colors.color_gray} />,
  },
  "womens-shoes": {
    name: "Sapatos Femininos",
    icon: (
      <MaterialCommunityIcons
        name="shoe-heel"
        size={32}
        color={colors.color_gray}
      />
    ),
  },
  "womens-watches": {
    name: "Relógios Femininos",
    icon: <Feather name="watch" size={28} color={colors.color_gray} />,
  },
};
