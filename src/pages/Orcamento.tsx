import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BudgetForm from "@/components/BudgetForm";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Orcamento = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Voltar para o início
          </Link>

          <div className="grid lg:grid-cols-[1fr_600px] gap-12 lg:gap-24">
            {/* Context Section */}
            <div className="space-y-8 pt-4 lg:pt-12">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                  Envie seu projeto para análise técnica
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Na Metanox, unimos nossa estrutura fabril avançada com o melhor acabamento em aço inox. Preencha o formulário e nossa equipe avaliará seu projeto para entregar a melhor solução sob medida.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="flex gap-4 p-4 rounded-xl border bg-card/50">
                  <div className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center shrink-0 font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Envio do Arquivo</h3>
                    <p className="text-muted-foreground">Envie seu detalhamento (PDF, DWG ou DXF) contendo as medidas e especificações necessárias.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl border bg-card/50">
                  <div className="w-12 h-12 bg-foreground/10 text-foreground rounded-full flex items-center justify-center shrink-0 font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Análise Técnica</h3>
                    <p className="text-muted-foreground">Nossa engenharia analisa a viabilidade, cortes necessários e acabamentos ideais para sua necessidade.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl border bg-card/50">
                  <div className="w-12 h-12 bg-foreground/10 text-foreground rounded-full flex items-center justify-center shrink-0 font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Retorno Ágil</h3>
                    <p className="text-muted-foreground">Retornaremos via WhatsApp ou E-mail com a proposta comercial e o prazo de execução da obra.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div>
              <BudgetForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Orcamento;
