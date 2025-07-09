import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const deals = [
  {
    id: 1,
    name: "Moedor de Carne Elétrico 1000W",
    image: "/lovable-uploads/62ef28bb-4c2d-4000-b585-53d11661e5f9.png",
    originalPrice: 299.99,
    salePrice: 209.99,
    discount: 30,
    rating: 4.5,
    reviews: 128,
  },
  {
    id: 2,
    name: "Kit Jardinagem Completo",
    image: "/lovable-uploads/62ef28bb-4c2d-4000-b585-53d11661e5f9.png",
    originalPrice: 159.99,
    salePrice: 119.99,
    discount: 25,
    rating: 4.7,
    reviews: 89,
  },
  {
    id: 3,
    name: "Escada Alumínio 7 Degraus",
    image: "/lovable-uploads/62ef28bb-4c2d-4000-b585-53d11661e5f9.png",
    originalPrice: 199.99,
    salePrice: 149.99,
    discount: 25,
    rating: 4.3,
    reviews: 156,
  },
  {
    id: 4,
    name: "Processador de Alimentos Multi",
    image: "/lovable-uploads/62ef28bb-4c2d-4000-b585-53d11661e5f9.png",
    originalPrice: 399.99,
    salePrice: 279.99,
    discount: 30,
    rating: 4.6,
    reviews: 203,
  },
];

export function DealsOfTheDay() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 32,
    seconds: 15,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">OFERTAS IMPERDÍVEIS DO DIA</h2>
          <div className="flex items-center justify-center gap-2 text-lg">
            <span className="text-muted-foreground">Termina em:</span>
            <div className="flex items-center gap-1 font-mono font-bold text-destructive">
              <span className="bg-destructive text-destructive-foreground px-2 py-1 rounded">
                {timeLeft.hours.toString().padStart(2, '0')}
              </span>
              <span>:</span>
              <span className="bg-destructive text-destructive-foreground px-2 py-1 rounded">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </span>
              <span>:</span>
              <span className="bg-destructive text-destructive-foreground px-2 py-1 rounded">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((deal) => (
            <Card key={deal.id} className="group hover:shadow-lg transition-all duration-300 hover-scale">
              <CardContent className="p-4">
                <div className="relative mb-4">
                  <img
                    src={deal.image}
                    alt={deal.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground">
                    -{deal.discount}%
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-sm text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                    {deal.name}
                  </h3>
                  
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(deal.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">
                      ({deal.reviews})
                    </span>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-primary">
                        R$ {deal.salePrice.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground line-through">
                      R$ {deal.originalPrice.toFixed(2).replace('.', ',')}
                    </div>
                  </div>
                  
                  <Button className="w-full btn-secondary">
                    COMPRAR AGORA
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}