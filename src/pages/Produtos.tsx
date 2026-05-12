import {
  ArrowRight,
  MessageCircle,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ───────────────────────── PRODUTOS SOB MEDIDA ───────────────────────── */

const produtosSobMedida = [
  {
    image: "/hero-1.png",
    title: "Guarda-corpo",
    description:
      "Guarda-corpos em aço inox para escadas, sacadas, mezaninos e rampas. Modelos com tubo redondo, quadrado, com vidro e combinações.",
    tags: ["Tubo Redondo", "Tubo Quadrado", "Com Vidro", "Redondo e Quadrado"],
    highlight: true,
  },
  {
    image: "/residencia.png",
    title: "Corrimão",
    description:
      "Corrimãos em aço inox para escadas e rampas. Modelos redondos e quadrados/retangulares, fabricados sob medida.",
    tags: ["Redondo", "Quadrado / Retangular"],
  },
  {
    image: "/bate_carrinho.png",
    title: "Bate Carrinho & Check Out",
    description:
      "Proteções em aço inox para supermercados, lojas e áreas comerciais. Resistência e durabilidade para ambientes de alto tráfego.",
    tags: ["Supermercados", "Comércios"],
  },
  {
    image: "/suporte_tv.png",
    title: "Suporte Giratório p/ TV",
    description:
      "Suportes giratórios em aço inox para televisores. Design moderno e funcionalidade premium. Marca PipesTV.",
    tags: ["PipesTV", "Giratório", "Inox"],
    externalLink: "https://www.pipestv.com.br/",
  },
  {
    image: "/hero-3.png",
    title: "Portão, Muro de Vidro & Fachada",
    description:
      "Fachadas, portões, muros de vidro e portais com estrutura em aço inox. Elegância e segurança para residências e comércios.",
    tags: ["Fachada", "Portão", "Muro de Vidro", "Portal"],
    highlight: true,
  },
  {
    image: "/pia_inox.png",
    title: "Pia, Mesa & Tanque",
    description:
      "Pias, mesas, tanques e mobiliário em aço inox para cozinhas industriais, padarias, clínicas e hospitais. Projetos sob medida.",
    tags: ["Cozinha Industrial", "Padaria", "Clínica", "Hospital"],
  },
  {
    image: "/coifa_inox.png",
    title: "Coifa & Tubulação",
    description:
      "Coifas de 1, 2, 3 ou 4 águas e tubulações em aço inox. Soluções para ambientes industriais e residenciais.",
    tags: ["Coifa", "Tubulação", "Industrial", "Residencial"],
  },
  {
    image: "/armario_inox.png",
    title: "Armário, Prateleira & Estante",
    description:
      "Armários, prateleiras, estantes e mobiliário industrial em aço inox. Ideal para cozinhas, padarias, clínicas e hospitais.",
    tags: ["Armário", "Prateleira", "Estante", "Móveis Industriais"],
  },
  {
    image: "/obras_de_arte_inox.png",
    title: "Obras de Arte",
    description:
      "Esculturas e peças artísticas em aço inox fabricadas sob encomenda. Transformamos conceitos artísticos em realidade.",
    tags: ["Esculturas", "Peças Artísticas"],
  },
  {
    image: "/obras_de_arte_inox.png",
    title: "Decorativo & Outros",
    description:
      "Produtos decorativos diversos: acessórios para churrasqueira, totens, mesas, bancos, letras caixa e muito mais em aço inox.",
    tags: ["Churrasqueira", "Totens", "Mesas", "Letras Caixa", "Outros"],
  },
];

/* ───────────────────────── LOJA ONLINE ───────────────────────── */

const produtosLoja = [
  {
    image: "/puxador.png",
    title: "Ferragens",
    description: "Dobradiças, kits para portas pivotantes, fechaduras e demais ferragens em aço inox.",
    subcategories: ["Dobradiças", "Fechaduras", "Kits"],
    link: "https://www.loja.metanox.com.br/ferragens",
  },
  {
    image: "/spider.png",
    title: "Prolongadores",
    description: "Prolongadores em aço inox nos formatos quadrado e redondo.",
    subcategories: ["Quadrados", "Redondos"],
    link: "https://www.loja.metanox.com.br/prolongadores",
  },
  {
    image: "/residencia.png",
    title: "Kit Box p/ Banheiro",
    description: "Kits completos para box de banheiro em aço inox.",
    subcategories: ["Abrir Simples", "De Canto", "Frontal"],
    link: "https://www.loja.metanox.com.br/kit-box",
  },
  {
    image: "/puxador.png",
    title: "Kit Pivotante",
    description: "Kits completos para portas pivotantes em aço inox.",
    subcategories: [],
    link: "https://www.loja.metanox.com.br/kit-pivotante-23077890",
  },
  {
    image: "/residencia.png",
    title: "Toalheiro",
    description: "Toalheiros em aço inox com design moderno e durável.",
    subcategories: [],
    link: "https://www.loja.metanox.com.br/toalheiro",
  },
  {
    image: "/spider.png",
    title: "Torres",
    description: "Torres em aço inox para fixação de vidros.",
    subcategories: ["Pinça", "Redondas"],
    link: "https://www.loja.metanox.com.br/torres",
  },
  {
    image: "/hero-3.png",
    title: "Spiders",
    description: "Sistemas spider em aço inox para fachadas e envidraçamento.",
    subcategories: ["Acessórios", "Spider Completo"],
    link: "https://www.loja.metanox.com.br/spider",
  },
  {
    image: "/puxador.png",
    title: "Puxadores",
    description: "Puxadores em aço inox para portas de vidro e madeira.",
    subcategories: ["Redondo", "Retangulares"],
    link: "https://www.loja.metanox.com.br/puxadores",
  },
  {
    image: "/obras.png",
    title: "Perfil U",
    description: "Perfis U em aço inox para acabamento de vidros.",
    subcategories: [],
    link: "https://www.loja.metanox.com.br/perfil-u",
  },
  {
    image: "/residencia.png",
    title: "Barras de Apoio",
    description: "Barras de apoio acessíveis em inox para áreas molhadas.",
    subcategories: ["Em Ângulo", "Em L", "Em U", "Reta"],
    link: "https://www.loja.metanox.com.br/barras-de-apoio",
  },
  {
    image: "/hero-1.png",
    title: "Caixas de Correio",
    description: "Caixas de correio em aço inox com acabamento premium.",
    subcategories: [],
    link: "https://www.loja.metanox.com.br/caixas-de-correio-23055476",
  },
  {
    image: "/dobra.png",
    title: "Caixas de Hidrante",
    description: "Caixas de hidrante em aço inox para edificações.",
    subcategories: ["Dupla", "Simples"],
    link: "https://www.loja.metanox.com.br/caixas-de-hidrante",
  },
  {
    image: "/suporte_tv.png",
    title: "Suporte de TV",
    description: "Suportes em aço inox para televisores.",
    subcategories: ["Móvel", "Teto", "Teto/Móvel"],
    link: "https://www.loja.metanox.com.br/suporte-de-tv",
  },
];

/* ───────────────────────── PAGE COMPONENT ───────────────────────── */

const Produtos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/20 to-transparent" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-background/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-background/80 font-medium">
                Catálogo Completo
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-background mb-6">
              Nossos <span className="text-background/60">Produtos</span>
            </h1>
            <p className="text-lg text-background/70 max-w-2xl">
              Mais de 20 anos desenvolvendo soluções em aço inox. Conheça nosso
              catálogo completo de produtos sob medida e nossa loja online com
              produtos prontos para envio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="#sob-medida">
                <Button
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90 gap-2 text-base px-8 w-full sm:w-auto"
                >
                  Produtos Sob Medida
                  <ChevronDown size={20} />
                </Button>
              </a>
              <a href="#loja-online">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-background/30 text-background hover:bg-background/10 gap-2 text-base px-8 w-full sm:w-auto"
                >
                  Loja Online
                  <ChevronDown size={20} />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Produtos Sob Medida ── */}
      <section id="sob-medida" className="py-24 bg-background scroll-mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-medium mb-4">
              Fabricação Própria
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Produtos Sob Medida
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Projetos personalizados em aço inox, desenvolvidos e fabricados de
              acordo com a necessidade do cliente e da obra.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {produtosSobMedida.map((product) => (
              <Card
                key={product.title}
                className={`group border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
                  product.highlight ? "ring-1 ring-foreground/20" : ""
                }`}
              >
                {/* Image placed on top instead of icon */}
                <div className="w-full h-48 overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-7 flex flex-col h-[calc(100%-12rem)]">
                  <h3 className="text-xl font-bold text-foreground leading-tight mb-3">
                    {product.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium bg-muted text-muted-foreground px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {product.externalLink ? (
                    <a
                      href={product.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="w-full gap-2 border-border text-foreground hover:bg-muted"
                      >
                        Visitar Site
                        <ExternalLink size={16} />
                      </Button>
                    </a>
                  ) : (
                    <a
                      href={`https://api.whatsapp.com/send?phone=5548988164249&text=${encodeURIComponent(
                        `Olá! Gostaria de solicitar um orçamento para: ${product.title}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full gap-2 bg-foreground text-background hover:bg-foreground/90">
                        <MessageCircle size={16} />
                        Solicitar Orçamento
                      </Button>
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Loja Online ── */}
      <section id="loja-online" className="py-24 bg-muted scroll-mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-medium mb-4">
              Pronta Entrega
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Loja Online
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Produtos padronizados em aço inox prontos para envio. Ferragens,
              prolongadores, torres, puxadores e muito mais.
            </p>
            <a
              href="https://www.loja.metanox.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 gap-2">
                Acessar Loja Completa
                <ExternalLink size={16} />
              </Button>
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {produtosLoja.map((product) => (
              <a
                key={product.title}
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="group h-full border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-background">
                  <div className="w-full h-40 overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-5 flex flex-col h-[calc(100%-10rem)]">
                    <h3 className="text-base font-bold text-foreground mb-2">
                      {product.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
                      {product.description}
                    </p>
                    {product.subcategories.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {product.subcategories.map((sub) => (
                          <span
                            key={sub}
                            className="text-[10px] font-medium bg-muted text-foreground/70 px-2 py-0.5 rounded-full"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="flex items-center gap-1.5 text-foreground font-semibold text-sm group-hover:gap-2.5 transition-all">
                      Ver na Loja <ArrowRight size={14} />
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="py-24 bg-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-6">
            Não encontrou o que procura?
          </h2>
          <p className="text-lg text-background/70 max-w-xl mx-auto mb-10">
            Fabricamos produtos personalizados em aço inox de acordo com seu
            projeto. Solicite um orçamento sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://api.whatsapp.com/send?phone=5548988164249&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20produto%20sob%20medida."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 gap-2 text-base px-8 h-14 w-full sm:w-auto"
              >
                <MessageCircle size={20} />
                Solicitar Orçamento
              </Button>
            </a>
            <a href="tel:+554832571855">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-background/20 text-background hover:bg-background/10 gap-2 text-base px-8 h-14 w-full sm:w-auto"
              >
                Ligar: (48) 3257-1855
                <ArrowRight size={20} />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Produtos;
