import { Zap, CircleDot, Wrench, ShoppingCart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    icon: ShoppingCart,
    title: "Loja Online",
    description: "Produtos de aço inox prontos para envio. Corrimãos, guarda-corpos, ferragens e acessórios.",
    href: "https://loja.metanox.com.br",
    external: true,
  },
  {
    icon: Zap,
    title: "Corte a Laser",
    description: "Corte a laser de chapas e tubos de aço inox com alta precisão e acabamento perfeito.",
    href: "/servicos",
    external: false,
  },
  {
    icon: Wrench,
    title: "Dobra CNC",
    description: "Dobras em chapas de aço inox com prensa dobradeira CNC. Precisão milimétrica.",
    href: "/servicos",
    external: false,
  },
  {
    icon: CircleDot,
    title: "Sob Medida",
    description: "Projetos personalizados em aço inox. Guarda-corpos, corrimãos, portões, coifas e muito mais.",
    href: "/produtos",
    external: false,
  },
];

const ServicesPreview = () => {
  return (
    <section id="produtos" className="py-24 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que você precisa?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Atendemos desde pequenas ferragens até grandes projetos industriais. Escolha a solução ideal para você.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const Wrapper = cat.external ? "a" : Link;
            const wrapperProps = cat.external
              ? { href: cat.href, target: "_blank", rel: "noopener noreferrer" }
              : { to: cat.href };

            return (
              <Wrapper key={cat.title} {...(wrapperProps as any)}>
                <Card className="group h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                      <Icon className="text-accent" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{cat.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{cat.description}</p>
                    <div className="flex items-center gap-1 text-accent font-medium text-sm mt-4 group-hover:gap-2 transition-all">
                      Saiba mais <ArrowRight size={16} />
                    </div>
                  </CardContent>
                </Card>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
