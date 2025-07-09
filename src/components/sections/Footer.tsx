import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Institucional */}
          <div>
            <h3 className="font-bold text-lg mb-4">Institucional</h3>
            <div className="space-y-2">
              <a href="#" className="block hover:text-secondary transition-colors">Sobre a Volaron</a>
              <a href="#" className="block hover:text-secondary transition-colors">Trabalhe Conosco</a>
              <a href="#" className="block hover:text-secondary transition-colors">Política de Privacidade</a>
              <a href="#" className="block hover:text-secondary transition-colors">Termos de Uso</a>
              <a href="#" className="block hover:text-secondary transition-colors">Política de Trocas</a>
            </div>
          </div>

          {/* Atendimento */}
          <div>
            <h3 className="font-bold text-lg mb-4">Atendimento</h3>
            <div className="space-y-2">
              <a href="#" className="block hover:text-secondary transition-colors">Central de Ajuda</a>
              <a href="#" className="block hover:text-secondary transition-colors">Rastrear Pedido</a>
              <a href="#" className="block hover:text-secondary transition-colors">Trocas e Devoluções</a>
              <a href="#" className="block hover:text-secondary transition-colors">FAQ</a>
              <a href="#" className="block hover:text-secondary transition-colors">Fale Conosco</a>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-secondary" />
                <span>(18) 3643-1990</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-secondary" />
                <span>contato@volaron.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>Segunda à Sexta<br />8h às 18h</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-sm mb-4 text-background/80">
              Receba ofertas exclusivas e novidades em primeira mão
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Seu e-mail"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button className="w-full btn-secondary">
                Inscrever-se
              </Button>
            </div>
            <div className="flex gap-3 mt-4">
              <Button variant="ghost" size="icon" className="text-background hover:text-secondary">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-secondary">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-secondary">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div>
              <h4 className="font-semibold mb-2">Formas de Pagamento</h4>
              <div className="flex items-center gap-2 text-sm">
                <span className="bg-background/10 px-2 py-1 rounded">Cartão</span>
                <span className="bg-background/10 px-2 py-1 rounded">PIX</span>
                <span className="bg-background/10 px-2 py-1 rounded">Boleto</span>
                <span className="bg-background/10 px-2 py-1 rounded">Até 12x</span>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">V</span>
                </div>
                <span className="font-bold">VOLARON</span>
              </div>
              <p className="text-xs text-background/60">
                Certeza de quem faz a escolha certa
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 mt-8 pt-6 text-center">
          <p className="text-sm text-background/60">
            © 2024 Volaron. Todos os direitos reservados. CNPJ: 00.000.000/0001-00
          </p>
        </div>
      </div>
    </footer>
  );
}