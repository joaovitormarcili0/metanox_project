import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CustomProject = () => {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="/custom.png"
              alt="Projeto personalizado em aço inox"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <div className="inline-flex items-center gap-2 border border-background/20 rounded-full px-4 py-1.5 mb-8">
              <span className="text-[11px] text-background/60 uppercase tracking-[0.2em] font-medium">
                Sob Medida
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Precisa de um projeto
              <br />
              <span className="text-background/50">personalizado?</span>
            </h2>

            <p className="text-lg text-background/60 leading-relaxed mb-10 max-w-lg">
              Desenvolvemos soluções sob medida para sua obra com precisão e
              acabamento profissional. Envie seu projeto e receba um orçamento
              em até 24 horas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=5548988164249&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20sob%20medida.%20O%20meu%20projeto%20%C3%A9%20esse%20e%20j%C3%A1%20vou%20enviar%20as%20fotos%2Fplantas%20logo%20abaixo!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-white text-foreground hover:bg-white/90 gap-2 rounded-full px-8 text-[15px] font-medium w-full sm:w-auto h-13"
                >
                  <MessageCircle size={18} />
                  Falar no WhatsApp
                </Button>
              </a>
              <a href="/produtos#sob-medida">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-background/20 text-background hover:bg-background/10 gap-2 rounded-full px-8 text-[15px] font-medium w-full sm:w-auto h-13"
                >
                  Ver Produtos
                  <ArrowRight size={18} />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomProject;
