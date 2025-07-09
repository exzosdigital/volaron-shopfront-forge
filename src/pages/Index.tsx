import { Header } from "@/components/layout/Header";
import { BenefitsBar } from "@/components/sections/BenefitsBar";
import { HeroSlider } from "@/components/sections/HeroSlider";
import { CategoriesGrid } from "@/components/sections/CategoriesGrid";
import { DealsOfTheDay } from "@/components/sections/DealsOfTheDay";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { BrandsCarousel } from "@/components/sections/BrandsCarousel";
import { FrequentlyBoughtTogether } from "@/components/sections/FrequentlyBoughtTogether";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BenefitsBar />
      <HeroSlider />
      <CategoriesGrid />
      <DealsOfTheDay />
      <FeaturedProducts />
      <BrandsCarousel />
      <FrequentlyBoughtTogether />
      <Footer />
    </div>
  );
};

export default Index;
