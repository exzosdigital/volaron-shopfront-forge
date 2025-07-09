import { Star, ShoppingCart, Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  category: string;
}

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'compact';
}

export function ProductCard({ product, variant = 'default' }: ProductCardProps) {
  const isCompact = variant === 'compact';

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover-scale cursor-pointer">
      <CardContent className={`p-${isCompact ? '3' : '4'}`}>
        <div className="relative mb-4">
          <img
            src={product.image}
            alt={product.name}
            className={`w-full ${isCompact ? 'h-36' : 'h-48'} object-cover rounded-lg`}
          />
          
          {product.discount && (
            <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground">
              -{product.discount}%
            </Badge>
          )}
          
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button variant="ghost" size="icon" className="bg-card/80 backdrop-blur">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
            <Button variant="outline" size="sm" className="bg-card/80 backdrop-blur">
              <Eye className="h-4 w-4 mr-2" />
              Ver Detalhes
            </Button>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="text-xs text-muted-foreground uppercase tracking-wide">
            {product.category}
          </div>
          
          <h3 className={`font-semibold ${isCompact ? 'text-sm' : 'text-base'} text-foreground line-clamp-2 group-hover:text-primary transition-colors`}>
            {product.name}
          </h3>
          
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-muted-foreground"
                }`}
              />
            ))}
            <span className="text-xs text-muted-foreground ml-1">
              ({product.reviews})
            </span>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className={`${isCompact ? 'text-lg' : 'text-xl'} font-bold text-primary`}>
                R$ {product.price.toFixed(2).replace('.', ',')}
              </span>
            </div>
            {product.originalPrice && (
              <div className="text-sm text-muted-foreground line-through">
                R$ {product.originalPrice.toFixed(2).replace('.', ',')}
              </div>
            )}
          </div>
          
          <Button className="w-full btn-primary" size={isCompact ? 'sm' : 'default'}>
            <ShoppingCart className="h-4 w-4 mr-2" />
            Adicionar ao Carrinho
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}