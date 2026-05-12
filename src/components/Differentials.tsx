import { Shield, Gem, Factory, Truck } from "lucide-react";

const differentials = [
  {
    icon: Shield,
    title: "Alta Durabilidade",
    description:
      "Aço inoxidável de primeira qualidade, resistente à corrosão e intempéries. Feito para durar décadas.",
  },
  {
    icon: Gem,
    title: "Acabamento Premium",
    description:
      "Polimento impecável e precisão milimétrica em cada peça. Padrão de excelência em todos os produtos.",
  },
  {
    icon: Factory,
    title: "Produção Própria",
    description:
      "Parque fabril de 1.450m² com equipamentos de última geração. Controle total de qualidade.",
  },
  {
    icon: Truck,
    title: "Entrega Nacional",
    description:
      "Enviamos para todo o Brasil com segurança e pontualidade. Mais de 170 cidades atendidas.",
  },
];

const Differentials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-medium mb-4">
            Por que a Metanox?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Nossos diferenciais
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((diff) => {
            const Icon = diff.icon;
            return (
              <div key={diff.title} className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-6 group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                  <Icon size={28} className="transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {diff.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {diff.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
