import { Truck, Shield, Headphones, Percent } from "lucide-react";

const benefits = [
  {
    icon: Truck,
    title: "ENTREGA RÁPIDA",
    description: "Receba hoje na região",
  },
  {
    icon: Shield,
    title: "PAGAMENTO SEGURO",
    description: "Até 12x sem juros",
  },
  {
    icon: Headphones,
    title: "SUPORTE 24/7",
    description: "Atendimento especializado",
  },
  {
    icon: Percent,
    title: "DESCONTOS",
    description: "Até 15% à vista",
  },
];

export function BenefitsBar() {
  return (
    <section className="py-8 bg-card border-b">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="font-semibold text-sm text-foreground">{benefit.title}</h3>
                  <p className="text-xs text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}