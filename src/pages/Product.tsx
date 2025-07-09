import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Heart, Share2, ShoppingCart, Minus, Plus, Truck, Shield, RotateCcw } from "lucide-react";

const productImages = [
  "/lovable-uploads/62ef28bb-4c2d-4000-b585-53d11661e5f9.png",
  "/lovable-uploads/62ef28bb-4c2d-4000-b585-53d11661e5f9.png",
  "/lovable-uploads/62ef28bb-4c2d-4000-b585-53d11661e5f9.png",
  "/lovable-uploads/62ef28bb-4c2d-4000-b585-53d11661e5f9.png",
];

export default function Product() {
  const { slug } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState("110v");

  const product = {
    name: "Moedor de Carne Elétrico Industrial 2200W",
    rating: 4.8,
    reviews: 245,
    price: 459.99,
    originalPrice: 599.99,
    discount: 23,
    sku: "VOL-MOE-2200W",
    brand: "Volaron",
    variants: [
      { id: "110v", name: "110V", available: true },
      { id: "220v", name: "220V", available: true },
    ],
    specifications: {
      "Potência": "2200W",
      "Voltagem": "110V/220V",
      "Material": "Aço Inoxidável",
      "Peso": "8.5kg",
      "Dimensões": "45x35x25cm",
      "Garantia": "2 anos",
    },
    description: `
      Moedor de carne elétrico industrial com motor de 2200W de potência. 
      Ideal para uso doméstico e profissional. Corpo em aço inoxidável resistente 
      e fácil de limpar. Acompanha 3 discos para diferentes espessuras de moagem.
    `,
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-muted-foreground">
          <span>Home</span> / <span>Moedores</span> / <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Galeria de Imagens */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden border">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? "border-primary" : "border-transparent"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Informações do Produto */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{product.brand}</Badge>
                <Badge className="bg-destructive text-destructive-foreground">
                  -{product.discount}% OFF
                </Badge>
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    {product.rating} ({product.reviews} avaliações)
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">
                  SKU: {product.sku}
                </div>
              </div>
            </div>

            {/* Preço */}
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground line-through">
                R$ {product.originalPrice.toFixed(2).replace('.', ',')}
              </div>
              <div className="text-4xl font-bold text-primary">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </div>
              <div className="text-sm text-muted-foreground">
                ou 12x de R$ {(product.price / 12).toFixed(2).replace('.', ',')} sem juros
              </div>
            </div>

            {/* Variantes */}
            <div>
              <h3 className="font-semibold mb-3">Voltagem:</h3>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <Button
                    key={variant.id}
                    variant={selectedVariant === variant.id ? "default" : "outline"}
                    onClick={() => setSelectedVariant(variant.id)}
                    disabled={!variant.available}
                  >
                    {variant.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantidade */}
            <div>
              <h3 className="font-semibold mb-3">Quantidade:</h3>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-4 py-2 border rounded-md min-w-[60px] text-center">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Botões */}
            <div className="space-y-4">
              <Button size="lg" className="w-full btn-primary">
                <ShoppingCart className="h-5 w-5 mr-2" />
                ADICIONAR AO CARRINHO
              </Button>
              
              <div className="flex gap-4">
                <Button variant="outline" className="flex-1">
                  <Heart className="h-4 w-4 mr-2" />
                  Favoritar
                </Button>
                <Button variant="outline" className="flex-1">
                  <Share2 className="h-4 w-4 mr-2" />
                  Compartilhar
                </Button>
              </div>
            </div>

            {/* Benefícios */}
            <div className="space-y-3 pt-6 border-t">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-primary" />
                <span className="text-sm">Frete grátis para pedidos acima de R$ 299</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm">Garantia de 2 anos</span>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="h-5 w-5 text-primary" />
                <span className="text-sm">Troca grátis em 30 dias</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs com Informações Detalhadas */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Descrição</TabsTrigger>
              <TabsTrigger value="specifications">Especificações</TabsTrigger>
              <TabsTrigger value="reviews">Avaliações</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="specifications" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between border-b pb-2">
                        <span className="font-medium">{key}:</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center py-8">
                    <h3 className="text-lg font-semibold mb-2">Avaliações dos Clientes</h3>
                    <p className="text-muted-foreground">Em breve, sistema de avaliações completo</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
}