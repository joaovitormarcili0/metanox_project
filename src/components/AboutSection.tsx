import { useEffect, useRef, useState } from "react";
import { useImages } from "@/contexts/ImagesContext";
import { useCopy } from "@/contexts/CopyContext";

const stats = [
  { value: 26, suffix: "", label: "Anos de Experiência" },
  { value: 4500, suffix: "+", label: "Projetos Realizados" },
  { value: 3200, suffix: "+", label: "Clientes Atendidos" },
  { value: 170, suffix: "+", label: "Cidades Atendidas" },
];

const AnimatedCounter = ({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-foreground">
      {count.toLocaleString("pt-BR")}
      {suffix}
    </div>
  );
};

const AboutSection = () => {
  const { getImage } = useImages();
  const { getCopy } = useCopy();

  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 pb-20 border-b border-border">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-xs text-muted-foreground mt-3 uppercase tracking-[0.15em] font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-medium mb-4">
              Quem Somos
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
              {getCopy('about_title', 'Excelência em aço inox desde 2000.')}
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-[15px] whitespace-pre-line">
              {getCopy('about_description_1', 'A Metanox Metalúrgica atua na transformação do aço inoxidável, oferecendo soluções completas para construção civil, arquitetura, indústria e decoração.')}
              <br /><br />
              {getCopy('about_description_2', 'Com um parque fabril de 1.450m² em Palhoça/SC, investimos constantemente em tecnologia e capacitação para garantir produtos com acabamento impecável e durabilidade superior.\n\nAtendemos desde arquitetos e construtoras até clientes finais em todo o Brasil, com a mesma qualidade e dedicação em cada projeto.')}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={getImage('about_image_1', '/obras.png')}
                alt="Metanox — Produção industrial em aço inox"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-4 bg-foreground text-background px-6 py-4 rounded-xl shadow-xl">
              <div className="text-2xl font-bold">1.450m²</div>
              <div className="text-xs text-background/60 uppercase tracking-wider">
                Parque Fabril
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
