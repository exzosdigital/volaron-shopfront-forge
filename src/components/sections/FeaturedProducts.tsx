import { ProductCard } from "@/components/common/ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const featuredProducts = [
  {
    id: 1,
    name: "Moedor de Carne Industrial 2200W",
    image: "/lovable-uploads/62ef28bb-4c2d-4000-b585-53d11661e5f9.png",
    price: 459.99,
    originalPrice: 599.99,
    discount: 23,
    rating: 4.8,
    reviews: 245,
    category: "Moedores",
  },
  {
    id: 2,
    name: "Kit Ferramentas Jardinagem Premium",
    image: "/lovable-uploads/62ef28bb-4c2d-4000-b585-53d11661e5f9.png",
    price: 189.99,
    rating: 4.6,
    reviews: 128,
    category: "Jardinagem",
  },
  {
    id: 3,
    name: "Escada Alumínio Telescópica 3.8m",
    image: "/lovable-uploads/62ef28bb-4c2d-4000-b585-53d11661e5f9.png",
    price: 329.99,
    originalPrice: 399.99,
    discount: 18,
    rating: 4.5,
    reviews: 89,
    category: "Escadas",
  },
  {
    id: 4,
    name: "Processador Multifuncional 1000W",
    image: "/lovable-uploads/62ef28bb-4c2d-4000-b585-53d11661e5f9.png",
    price: 279.99,
    rating: 4.7,
    reviews: 167,
    category: "Trituradores",
  },
  {
    id: 5,
    name: "Cilindro Massa Profissional 40cm",
    image: "/lovable-uploads/62ef28bb-4c2d-4000-b585-53d11661e5f9.png",
    price: 149.99,
    originalPrice: 199.99,
    discount: 25,
    rating: 4.4,
    reviews: 76,
    category: "Cilindros",
  },
  {
    id: 6,
    name: "Serra de Fita Profissional 1800W",
    image: "/lovable-uploads/62ef28bb-4c2d-4000-b585-53d11661e5f9.png",
    price: 899.99,
    rating: 4.9,
    reviews: 45,
    category: "Serras",
  },
];

export function FeaturedProducts() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(featuredProducts.length / itemsPerPage);

  const currentProducts = featuredProducts.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">PRODUTOS EM DESTAQUE</h2>
            <p className="text-muted-foreground">Os mais vendidos e bem avaliados</p>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevPage}
              disabled={currentPage === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
}