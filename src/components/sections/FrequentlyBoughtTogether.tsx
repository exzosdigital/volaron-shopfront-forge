import { Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const combos = [
  {
    id: 1,
    products: [
      {
        name: "Moedor de Carne 1000W",
        image: "/lovable-uploads/62ef28bb-4c2d-4000-b585-53d11661e5f9.png",
        price: 259.99,
      },
      {
        name: "Linguiça Caseira Kit",
        image: "/lovable-uploads/62ef28bb-4c2d-4000-b585-53d11661e5f9.png",
        price: 49.99,
      },
      {
        name: "Temperos Especiais",
        image: "/lovable-uploads/62ef28bb-4c2d-4000-b585-53d11661e5f9.png",
        price: 29.99,
      },
    ],
    totalPrice: 339.97,
    comboPrice: 289.97,
    discount: 15,
  },
  {
    id: 2,
    products: [
      {
        name: "Kit Jardinagem Premium",
        image: "/lovable-uploads/62ef28bb-4c2d-4000-b585-53d11661e5f9.png",
        price: 189.99,
      },
      {
        name: "Vasos Decorativos 3un",
        image: "/lovable-uploads/62ef28bb-4c2d-4000-b585-53d11661e5f9.png",
        price: 79.99,
      },
      {
        name: "Adubo Orgânico 5kg",
        image: "/lovable-uploads/62ef28bb-4c2d-4000-b585-53d11661e5f9.png",
        price: 39.99,
      },
    ],
    totalPrice: 309.97,
    comboPrice: 259.97,
    discount: 16,
  },
];

export function FrequentlyBoughtTogether() {
  return (
    <section className="py-12 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">FREQUENTEMENTE COMPRADOS JUNTOS</h2>
          <p className="text-muted-foreground">Economize comprando em combo</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {combos.map((combo) => (
            <Card key={combo.id} className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-6">
                  <Badge className="bg-secondary text-secondary-foreground">
                    -{combo.discount}% OFF
                  </Badge>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground line-through">
                      R$ {combo.totalPrice.toFixed(2).replace('.', ',')}
                    </div>
                    <div className="text-xl font-bold text-primary">
                      R$ {combo.comboPrice.toFixed(2).replace('.', ',')}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4 mb-6">
                  {combo.products.map((product, index) => (
                    <div key={index} className="flex items-center">
                      <div className="text-center">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-20 h-20 object-cover rounded-lg border mb-2"
                        />
                        <h4 className="text-xs font-medium line-clamp-2 mb-1">
                          {product.name}
                        </h4>
                        <p className="text-sm font-semibold text-primary">
                          R$ {product.price.toFixed(2).replace('.', ',')}
                        </p>
                      </div>
                      {index < combo.products.length - 1 && (
                        <Plus className="h-4 w-4 text-muted-foreground mx-3" />
                      )}
                    </div>
                  ))}
                </div>

                <Button className="w-full btn-primary" size="lg">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  COMPRAR COMBO
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}