import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="py-32 bg-foreground text-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-3xl mx-auto">
          Pronto para elevar o padrão
          <br />
          <span className="text-background/50">do seu projeto?</span>
        </h2>

        <p className="text-lg text-background/50 max-w-xl mx-auto mb-12">
          Fale com um especialista e descubra a solução ideal em aço inox para
          sua obra ou projeto.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/produtos">
            <Button
              size="lg"
              className="bg-white text-foreground hover:bg-white/90 gap-2 text-[15px] font-medium px-10 rounded-full h-14"
            >
              Ver Produtos
              <ArrowRight size={18} />
            </Button>
          </Link>
          <a
            href="https://api.whatsapp.com/send?phone=5548988164249&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20sob%20medida.%20O%20meu%20projeto%20%C3%A9%20esse%20e%20j%C3%A1%20vou%20enviar%20as%20fotos%2Fplantas%20logo%20abaixo!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-background/20 text-background hover:bg-background/10 gap-2 text-[15px] font-medium px-10 rounded-full h-14"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
