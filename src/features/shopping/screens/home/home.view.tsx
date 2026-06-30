import { Container } from "@/src/shared/components";
import { InputSearch } from "@/src/shared/components/input-search";
import { Text } from "react-native";
import { OfferBanner } from "../../components/offer-banner";
import { useHomeModel } from "./home.model";

export default function Home() {
  const { searchProducts } = useHomeModel();

  return (
    <Container>
      <InputSearch onSearch={searchProducts} placeholder="Buscar produtos" />
      <OfferBanner />
      <Text>123</Text>
      <Text>123</Text>
      <Text>123</Text>
      <Text>123</Text>
    </Container>
  );
}
