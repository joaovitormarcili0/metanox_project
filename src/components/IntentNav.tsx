import { Building2, GlassWater, Accessibility, Home, Puzzle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useImages } from "@/contexts/ImagesContext";
import { useCopy } from "@/contexts/CopyContext";

const IntentNav = () => {
  const { getImage } = useImages();
  const { getCopy } = useCopy();

  const intents = [
    {
      icon: Building2,
      title: "Para Obras",
      description: "Guarda-corpos, corrimãos e estruturas para construção civil.",
      image: getImage('intent_1', '/obras.png'),
      href: "/produtos#sob-medida",
    },
    {
      icon: GlassWater,
      title: "Para Vidraçaria",
      description: "Ferragens, torres, spiders e perfis para envidraçamento.",
      image: getImage('intent_2', '/spider.png'),
      href: "/produtos#loja-online",
    },
    {
      icon: Accessibility,
      title: "Para Acessibilidade",
      description: "Barras de apoio e soluções para acessibilidade.",
      image: getImage('intent_3', '/residencia.png'),
      href: "/produtos#loja-online",
    },
    {
      icon: Home,
      title: "Para Residências",
      description: "Puxadores, box para banheiro, toalheiros e acabamentos.",
      image: getImage('intent_4', '/residencia.png'),
      href: "/produtos#loja-online",
    },
    {
      icon: Puzzle,
      title: "Peças Avulsas",
      description: "Prolongadores, ferragens e componentes de reposição.",
      image: getImage('intent_5', '/puxador.png'),
      href: "/produtos#loja-online",
    },
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-medium mb-4">
            {getCopy('intent_subtitle', 'O que você precisa?')}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {getCopy('intent_title', 'Encontre a solução ideal')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {intents.map((intent) => {
            const Icon = intent.icon;
            return (
              <Link key={intent.title} to={intent.href}>
                <div className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer">
                  {/* Image */}
                  <img
                    src={intent.image}
                    alt={intent.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/90 transition-all duration-300" />

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-6">
                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:bg-white/20 transition-colors">
                      <Icon className="text-white" size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {intent.title}
                    </h3>
                    <p className="text-[13px] text-white/60 leading-relaxed mb-3">
                      {intent.description}
                    </p>
                    <div className="flex items-center gap-1 text-white/80 text-sm font-medium group-hover:gap-2 transition-all">
                      Ver produtos <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IntentNav;
