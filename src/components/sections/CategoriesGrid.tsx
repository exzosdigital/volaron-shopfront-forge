import { 
  Utensils, 
  Construction, 
  Flower, 
  ChefHat, 
  Zap, 
  Scissors, 
  Cookie, 
  Shirt, 
  Home, 
  UtensilsCrossed 
} from "lucide-react";

const categories = [
  { name: "Moedores", icon: Utensils, href: "/categoria/moedores" },
  { name: "Escadas", icon: Construction, href: "/categoria/escadas" },
  { name: "Jardinagem", icon: Flower, href: "/categoria/jardinagem" },
  { name: "Raladores", icon: ChefHat, href: "/categoria/raladores" },
  { name: "Trituradores", icon: Zap, href: "/categoria/trituradores" },
  { name: "Serras de Fita", icon: Scissors, href: "/categoria/serras-de-fita" },
  { name: "Cilindros de Massa", icon: Cookie, href: "/categoria/cilindros-de-massa" },
  { name: "Lavanderia", icon: Shirt, href: "/categoria/lavanderia" },
  { name: "Utilidades Domésticas", icon: Home, href: "/categoria/utilidades-domesticas" },
  { name: "Cozinha e Buffet", icon: UtensilsCrossed, href: "/categoria/cozinha-e-buffet" },
];

export function CategoriesGrid() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-2">NAVEGUE POR CATEGORIA</h2>
          <p className="text-muted-foreground">Encontre exatamente o que você precisa</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <a
                key={index}
                href={category.href}
                className="group p-6 bg-card rounded-xl border hover:shadow-lg transition-all duration-300 hover-scale"
              >
                <div className="text-center space-y-3">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}