import { useState } from "react";
import { Search, User, ShoppingCart, Menu, Truck, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

const categories = [
  { name: "Moedores", items: ["Moedor de Carne", "Moedor de Café", "Moedor Elétrico"] },
  { name: "Escadas", items: ["Escada Doméstica", "Escada Profissional", "Banquetas"] },
  { name: "Jardinagem", items: ["Ferramentas", "Vasos", "Sementes", "Adubos"] },
  { name: "Raladores", items: ["Ralador Manual", "Ralador Elétrico", "Fatiador"] },
  { name: "Trituradores", items: ["Triturador de Alimentos", "Processador"] },
  { name: "Serras de Fita", items: ["Serra Manual", "Serra Elétrica"] },
  { name: "Cilindros de Massa", items: ["Cilindro Manual", "Cilindro Elétrico"] },
  { name: "Lavanderia", items: ["Cestas", "Varais", "Organizadores"] },
  { name: "Utilidades Domésticas", items: ["Limpeza", "Organização", "Decoração"] },
  { name: "Cozinha e Buffet", items: ["Panelas", "Utensílios", "Equipamentos"] },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card border-b shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(18) 3643-1990</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Seg à Sex: 8h às 18h</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span>Acompanhe seu pedido</span>
            <span>|</span>
            <span>Atendimento</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <nav className="flex flex-col gap-4 mt-8">
                  {categories.map((category) => (
                    <div key={category.name} className="border-b pb-4">
                      <h3 className="font-semibold text-foreground mb-2">{category.name}</h3>
                      <div className="flex flex-col gap-1">
                        {category.items.map((item) => (
                          <a key={item} href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                            {item}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            
            <div className="flex items-center">
              <h1 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                VOLARON
              </h1>
              <p className="text-xs text-muted-foreground ml-2 hidden sm:block">
                Certeza de quem faz a escolha certa
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8 hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Busque por produtos, marcas e muito mais..."
                className="pl-10 pr-4 py-2 w-full"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hidden sm:flex items-center gap-2">
              <Truck className="h-4 w-4" />
              <span className="hidden lg:inline">Rastrear</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="hidden lg:inline">Entrar</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden lg:inline">Carrinho</span>
              <span className="bg-secondary text-secondary-foreground rounded-full text-xs px-2 py-1 min-w-[20px] h-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-4 md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Busque por produtos..."
              className="pl-10 pr-4 py-2 w-full"
            />
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="hidden lg:block border-t bg-card/95 backdrop-blur">
        <div className="container mx-auto px-4">
          <NavigationMenu>
            <NavigationMenuList className="gap-0">
              {categories.map((category) => (
                <NavigationMenuItem key={category.name}>
                  <NavigationMenuTrigger className="h-12 px-4 text-sm font-medium">
                    {category.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-80">
                      <div className="grid grid-cols-1 gap-2">
                        {category.items.map((item) => (
                          <a
                            key={item}
                            href="#"
                            className="block p-2 hover:bg-muted rounded-md transition-colors"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}