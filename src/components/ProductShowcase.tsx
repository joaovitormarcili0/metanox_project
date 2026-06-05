import { ArrowRight } from "lucide-react";
import { useImages } from "@/contexts/ImagesContext";

const ProductShowcase = () => {
  const { getImage } = useImages();

  const products = [
    {
      title: "Guarda-corpo",
      benefit: "Segurança e elegância para sacadas e escadas",
      image: getImage('showcase_1', '/hero.png'),
      link: "/produtos#sob-medida",
    },
    {
      title: "Puxador",
      benefit: "Acabamento premium para portas de vidro e madeira",
      image: getImage('showcase_2', '/puxador.png'),
      link: "/produtos#loja-online",
    },
    {
      title: "Spider",
      benefit: "Fachadas envidraçadas com fixação de alta performance",
      image: getImage('showcase_3', '/spider.png'),
      link: "/produtos#loja-online",
    },
    {
      title: "Corrimão",
      benefit: "Conforto e acessibilidade com design moderno",
      image: getImage('showcase_4', '/residencia.png'),
      link: "/produtos#sob-medida",
    },
    {
      title: "Kit Box Banheiro",
      benefit: "Kit completo em aço inox para box de vidro",
      image: getImage('showcase_5', '/puxador.png'),
      link: "/produtos#loja-online",
    },
    {
      title: "Barra de Apoio",
      benefit: "Acessibilidade e segurança para todos os ambientes",
      image: getImage('showcase_6', '/residencia.png'),
      link: "/produtos#loja-online",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-medium mb-4">
              Nossos Produtos
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Produtos em contexto real
            </h2>
          </div>
          <a
            href="/produtos"
            className="flex items-center gap-2 text-sm font-medium text-foreground hover:gap-3 transition-all"
          >
            Ver catálogo completo <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <a key={product.title} href={product.link} className="group block">
              <div className="rounded-2xl overflow-hidden mb-4">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:underline underline-offset-4">
                {product.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {product.benefit}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
