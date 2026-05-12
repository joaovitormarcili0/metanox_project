import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Qualidade impecável e entrega dentro do prazo. Já usamos em vários projetos e sempre superaram nossas expectativas.",
    author: "Ricardo Mendes",
    role: "Arquiteto",
    company: "Mendes Arquitetura",
  },
  {
    quote:
      "O acabamento dos guarda-corpos é sensacional. Os clientes sempre elogiam o resultado final. Recomendo sem nenhuma dúvida.",
    author: "Fernanda Costa",
    role: "Engenheira Civil",
    company: "Costa Engenharia",
  },
  {
    quote:
      "Parceiro confiável para todas as nossas obras. A Metanox entende o que precisamos e entrega sempre com perfeição.",
    author: "Marcos Oliveira",
    role: "Construtor",
    company: "Oliveira Construções",
  },
  {
    quote:
      "Produtos de altíssima qualidade. As ferragens para vidro têm acabamento perfeito e encaixe preciso. Excelente custo-benefício.",
    author: "Ana Paula Silva",
    role: "Vidraceira",
    company: "AP Vidros",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-medium mb-4">
              Depoimentos
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              O que dizem nossos clientes
            </h2>
          </div>

          {/* Testimonial */}
          <div className="text-center relative">
            <Quote className="mx-auto text-border mb-8" size={48} />

            <blockquote className="text-xl md:text-2xl lg:text-3xl text-foreground font-light leading-relaxed mb-10 min-h-[120px]">
              "{testimonials[current].quote}"
            </blockquote>

            <div className="mb-10">
              <div className="text-base font-semibold text-foreground">
                {testimonials[current].author}
              </div>
              <div className="text-sm text-muted-foreground">
                {testimonials[current].role} · {testimonials[current].company}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === current
                        ? "bg-foreground w-6"
                        : "bg-border hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
