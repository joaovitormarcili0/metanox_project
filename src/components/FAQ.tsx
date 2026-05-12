import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual o prazo de entrega?",
    answer:
      "O prazo varia de acordo com o produto e a complexidade do projeto. Produtos padronizados da loja online são enviados em até 5 dias úteis. Projetos sob medida têm prazo informado no orçamento, geralmente entre 15 a 30 dias úteis.",
  },
  {
    question: "Vocês fazem projetos sob medida?",
    answer:
      "Sim! Desenvolvemos soluções personalizadas em aço inox de acordo com o projeto do cliente. Guarda-corpos, corrimãos, portões, coifas, pias, armários e muito mais. Envie seu projeto pelo WhatsApp e receba um orçamento em até 24 horas.",
  },
  {
    question: "O material é resistente à corrosão?",
    answer:
      "Sim. Trabalhamos com aço inox 304 e 316, materiais altamente resistentes à corrosão, oxidação e intempéries. Os produtos são projetados para durar décadas com manutenção mínima, mesmo em ambientes agressivos como litoral e áreas industriais.",
  },
  {
    question: "Tem garantia?",
    answer:
      "Todos os nossos produtos possuem garantia contra defeitos de fabricação. O prazo de garantia varia de acordo com o produto. Além disso, oferecemos suporte técnico e pós-venda para qualquer necessidade.",
  },
  {
    question: "Vocês entregam para todo o Brasil?",
    answer:
      "Sim! Atendemos todo o território nacional. Já entregamos em mais de 170 cidades brasileiras. O frete é calculado de acordo com o destino e dimensão do pedido.",
  },
  {
    question: "Como solicitar um orçamento?",
    answer:
      "Você pode solicitar um orçamento pelo nosso WhatsApp (48) 98816-4249, por e-mail (atendimento@metanox.com.br) ou pelo formulário de contato no site. Para projetos sob medida, envie fotos e medidas do local para um orçamento mais preciso.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-medium mb-4">
              Dúvidas Frequentes
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Perguntas e respostas
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-background rounded-xl border-0 px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-[15px] font-medium py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-[15px] leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
