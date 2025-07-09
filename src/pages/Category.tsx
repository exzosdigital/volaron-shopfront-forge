import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";
import { ProductCard } from "@/components/common/ProductCard";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, Grid, List } from "lucide-react";

const mockProducts = [
  {
    id: 1,
    name: "Moedor de Carne Elétrico Industrial 2200W",
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
    name: "Moedor de Carne Manual Tradicional",
    image: "/lovable-uploads/62ef28bb-4c2d-4000-b585-53d11661e5f9.png",
    price: 89.99,
    rating: 4.5,
    reviews: 128,
    category: "Moedores",
  },
  // ... mais produtos
];

const brands = ["Tramontina", "Mondial", "Black & Decker", "Electrolux"];
const ratings = [5, 4, 3, 2, 1];

export default function Category() {
  const { slug } = useParams();
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState("relevance");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categoryName = slug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || "Categoria";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">{categoryName}</h1>
          <p className="text-muted-foreground">Encontramos 24 produtos</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filtros Desktop */}
          <aside className="hidden lg:block w-64 space-y-6">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-semibold mb-4">Preço</h3>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={1000}
                step={10}
                className="mb-4"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>R$ {priceRange[0]}</span>
                <span>R$ {priceRange[1]}</span>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-semibold mb-4">Marcas</h3>
              <div className="space-y-3">
                {brands.map((brand) => (
                  <div key={brand} className="flex items-center space-x-2">
                    <Checkbox
                      id={brand}
                      checked={selectedBrands.includes(brand)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedBrands([...selectedBrands, brand]);
                        } else {
                          setSelectedBrands(selectedBrands.filter(b => b !== brand));
                        }
                      }}
                    />
                    <label htmlFor={brand} className="text-sm">{brand}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-semibold mb-4">Avaliação</h3>
              <div className="space-y-2">
                {ratings.map((rating) => (
                  <div key={rating} className="flex items-center space-x-2">
                    <Checkbox
                      id={`rating-${rating}`}
                      checked={selectedRatings.includes(rating)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedRatings([...selectedRatings, rating]);
                        } else {
                          setSelectedRatings(selectedRatings.filter(r => r !== rating));
                        }
                      }}
                    />
                    <label htmlFor={`rating-${rating}`} className="text-sm">
                      {rating} estrelas ou mais
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Produtos */}
          <div className="flex-1">
            {/* Controles */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <Sheet>
                  <SheetTrigger asChild className="lg:hidden">
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filtros
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80">
                    {/* Filtros Mobile - mesmo conteúdo do aside */}
                  </SheetContent>
                </Sheet>

                <div className="flex items-center gap-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevância</SelectItem>
                  <SelectItem value="price-asc">Menor preço</SelectItem>
                  <SelectItem value="price-desc">Maior preço</SelectItem>
                  <SelectItem value="rating">Melhor avaliado</SelectItem>
                  <SelectItem value="newest">Mais recente</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Grid de Produtos */}
            <div className={`grid gap-6 ${
              viewMode === "grid" 
                ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" 
                : "grid-cols-1"
            }`}>
              {mockProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  variant={viewMode === "list" ? "compact" : "default"}
                />
              ))}
            </div>

            {/* Paginação */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">Anterior</Button>
                <Button variant="default" size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">Próximo</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}