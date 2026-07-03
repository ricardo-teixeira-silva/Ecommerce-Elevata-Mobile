import { Container } from "@/src/shared/components";
import { InputSearch } from "@/src/shared/components/input-search";
import { BestRatedCarousel } from "../../components/best-rated-carousel";
import { CategoryCarousel } from "../../components/category-carousel";
import { LimitedStockCarousel } from "../../components/limited-stock-carousel";
import { OfferBanner } from "../../components/offer-banner";
import { ProductBanner } from "../../components/product-banner";
import { useHomeModel } from "./home.model";

export default function Home() {
  const {
    searchProducts,
    isLoadingProducts,
    categories,
    isLoadingCategories,
    bestRatedProducts,
    isLoadingBestRatedProducts,
    flashProducts,
    isLoadingFlashProducts,
  } = useHomeModel();

  return (
    <Container>
      <InputSearch
        onSearch={searchProducts}
        placeholder="Buscar produtos"
        loading={isLoadingProducts}
      />
      <OfferBanner />
      <CategoryCarousel categories={categories} loading={isLoadingCategories} />
      <BestRatedCarousel data={bestRatedProducts} />
      <LimitedStockCarousel
        data={flashProducts}
        loading={isLoadingFlashProducts}
      />
      <ProductBanner />
    </Container>
  );
}
