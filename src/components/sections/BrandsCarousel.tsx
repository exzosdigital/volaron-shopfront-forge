const brands = [
  { name: "Tramontina", logo: "/lovable-uploads/62ef28bb-4c2d-4000-b585-53d11661e5f9.png" },
  { name: "Mondial", logo: "/lovable-uploads/62ef28bb-4c2d-4000-b585-53d11661e5f9.png" },
  { name: "Black & Decker", logo: "/lovable-uploads/62ef28bb-4c2d-4000-b585-53d11661e5f9.png" },
  { name: "Electrolux", logo: "/lovable-uploads/62ef28bb-4c2d-4000-b585-53d11661e5f9.png" },
  { name: "Philips", logo: "/lovable-uploads/62ef28bb-4c2d-4000-b585-53d11661e5f9.png" },
  { name: "Arno", logo: "/lovable-uploads/62ef28bb-4c2d-4000-b585-53d11661e5f9.png" },
  { name: "Oster", logo: "/lovable-uploads/62ef28bb-4c2d-4000-b585-53d11661e5f9.png" },
  { name: "Britânia", logo: "/lovable-uploads/62ef28bb-4c2d-4000-b585-53d11661e5f9.png" },
];

export function BrandsCarousel() {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">NOSSAS MARCAS</h2>
          <p className="text-muted-foreground">Trabalhamos com as melhores marcas do mercado</p>
        </div>
        
        <div className="overflow-hidden">
          <div className="flex animate-[scroll_30s_linear_infinite] gap-8">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-16 bg-card rounded-lg border flex items-center justify-center hover:shadow-md transition-shadow"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}