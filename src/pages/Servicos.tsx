import { CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useImages } from "@/contexts/ImagesContext";
const Servicos = () => {
  const { getImage } = useImages();

  const services = [
    {
      image: getImage('servico_1', '/hero-2.png'),
      title: "Corte a Laser de Chapa",
      description: "Corte de chapas de aço inoxidável com tecnologia laser de alta potência. Precisão milimétrica, acabamento perfeito e velocidade de produção para atender projetos de qualquer escala.",
      features: [
        "Chapas de aço inox de diversas espessuras",
        "Corte de geometrias complexas com alta precisão",
        "Acabamento limpo sem rebarbas",
        "Ideal para peças decorativas, industriais e estruturais",
        "Produção em série ou peças únicas",
        "Otimização de material para redução de desperdício",
      ],
      materials: ["Aço Inox 304", "Aço Inox 316", "Aço Inox 430", "Aço Carbono", "Alumínio"],
    },
    {
      image: getImage('servico_2', '/laser_tubo.png'),
      title: "Corte a Laser de Tubo",
      description: "Corte a laser de tubos redondos, quadrados e retangulares em aço inoxidável. Tecnologia que permite cortes precisos em múltiplos ângulos e geometrias complexas diretamente no tubo.",
      features: [
        "Tubos redondos, quadrados e retangulares",
        "Cortes em ângulos e encaixes perfeitos",
        "Furação e recortes no próprio tubo",
        "Eliminação de etapas manuais de acabamento",
        "Precisão dimensional superior",
        "Redução significativa no tempo de montagem",
      ],
      materials: ["Tubos Redondos", "Tubos Quadrados", "Tubos Retangulares", "Perfis Especiais"],
    },
    {
      image: getImage('servico_3', '/dobra.png'),
      title: "Dobra CNC",
      description: "Dobras em chapas de aço inoxidável com prensa dobradeira CNC de última geração. Controle numérico computadorizado para garantir ângulos perfeitos e repetibilidade em grandes lotes.",
      features: [
        "Prensa dobradeira CNC de alta tonelagem",
        "Ângulos precisos com repetibilidade garantida",
        "Dobras simples e compostas",
        "Chapas de diversas espessuras",
        "Programação CNC para lotes grandes",
        "Controle de qualidade dimensional rigoroso",
      ],
      materials: ["Aço Inox 304", "Aço Inox 316", "Aço Inox 430", "Aço Carbono"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/20 to-transparent" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-background/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-background/80 font-medium">Serviços Industriais</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-background mb-6">
              Corte a Laser e <span className="text-background/60">Dobra CNC</span>
            </h1>
            <p className="text-lg text-background/70 max-w-2xl">
              Equipamentos de última geração para corte a laser de chapas e tubos, e dobras CNC com precisão milimétrica. Solicite seu orçamento.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={service.title} className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:direction-rtl" : ""}`}>
                  {/* Content */}
                  <div className={!isEven ? "lg:order-2" : ""}>
                    <h2 className="text-3xl font-bold text-foreground mb-6">{service.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-8">{service.description}</p>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="text-foreground mt-0.5 shrink-0" size={18} />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {service.materials.map((material) => (
                        <span key={material} className="text-xs font-medium bg-muted text-foreground/80 px-3 py-1.5 rounded-full">
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Visual Image */}
                  <div className={!isEven ? "lg:order-1" : ""}>
                    <Card className="border border-border/50 shadow-lg overflow-hidden rounded-2xl">
                      <CardContent className="p-0">
                        <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                          <img 
                            src={service.image} 
                            alt={service.title} 
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-6">
            Precisa de um orçamento?
          </h2>
          <p className="text-lg text-background/70 max-w-xl mx-auto mb-10">
            Entre em contato pelo WhatsApp e envie seu projeto. Retornamos com o orçamento em até 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://api.whatsapp.com/send?phone=5548988164249&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20sob%20medida.%20O%20meu%20projeto%20%C3%A9%20esse%20e%20j%C3%A1%20vou%20enviar%20as%20fotos%2Fplantas%20logo%20abaixo!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 gap-2 text-base px-8 h-14 w-full sm:w-auto">
                <MessageCircle size={20} />
                Solicitar Orçamento
              </Button>
            </a>
            <a href="tel:+554832571855">
              <Button size="lg" variant="outline" className="bg-transparent border-background/20 text-background hover:bg-background/10 gap-2 text-base px-8 h-14 w-full sm:w-auto">
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

export default Servicos;
