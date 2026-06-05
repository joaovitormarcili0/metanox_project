import { useState, useEffect, useCallback } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import { useImages } from "@/contexts/ImagesContext";
import { useCopy } from "@/contexts/CopyContext";

const HeroSection = () => {
  const { getImage } = useImages();
  const { getCopy } = useCopy();
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      image: getImage('hero_slide_1', '/hero-1.png'),
      alt: "Guarda-corpo em aço inox com vidro",
    },
    {
      image: getImage('hero_slide_2', '/hero-2.png'),
      alt: "Máquina de corte a laser industrial",
    },
    {
      image: getImage('hero_slide_3', '/hero-3.png'),
      alt: "Fachada de vidro com spider em aço inox",
    },
  ];

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 1000);
    },
    [isTransitioning]
  );

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide((current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current, goToSlide]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images Carousel */}
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: index === current ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover scale-105"
            style={{
              transform: index === current ? "scale(1.05)" : "scale(1)",
              transition: "transform 6s ease-out",
            }}
          />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 border border-white/20 rounded-full px-5 py-2.5 mb-10 backdrop-blur-sm bg-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[13px] text-white/80 font-medium tracking-wide">
              Desde 2000 · Palhoça, SC
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
            {getCopy('hero_title', 'Acabamento em aço inox que dura décadas.')}
          </h1>

          {/* Sub */}
          <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-12 max-w-lg whitespace-pre-line">
            {getCopy('hero_subtitle', 'Produtos padrão e sob medida com qualidade profissional.\nFabricamos e entregamos para todo o Brasil.')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link to="/produtos">
              <Button
                size="lg"
                className="bg-white text-foreground hover:bg-white/90 gap-2 text-[15px] font-medium px-8 rounded-full w-full sm:w-auto h-13"
              >
                {getCopy('hero_button_primary', 'Ver Produtos')}
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/orcamento">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white/30 text-white hover:bg-white/10 gap-2 text-[15px] font-medium px-8 rounded-full w-full sm:w-auto h-13 backdrop-blur-sm"
              >
                <MessageCircle size={18} />
                {getCopy('hero_button_secondary', 'Solicitar Orçamento')}
              </Button>

            </Link>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap gap-8 sm:gap-12 border-t border-white/10 pt-8">
            {[
              { value: "26", label: "Anos de\nexperiência" },
              { value: "+4.500", label: "Projetos\nrealizados" },
              { value: "+3.200", label: "Clientes\natendidos" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-[11px] text-white/40 uppercase tracking-widest whitespace-pre-line leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 right-10 z-10 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-10 h-2.5 bg-white"
                : "w-2.5 h-2.5 bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
