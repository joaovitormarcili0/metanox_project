import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${form.name}. ${form.message}. Contato: ${form.phone || form.email}`;
    window.open(
      `https://api.whatsapp.com/send?phone=5548988164249&text=${encodeURIComponent(
        text
      )}`,
      "_blank"
    );
    toast({
      title: "Redirecionado para o WhatsApp!",
      description: "Conclua o envio da mensagem pelo WhatsApp.",
    });
  };

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-medium mb-4">
            Fale Conosco
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em contato
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Solicite um orçamento ou tire suas dúvidas. Estamos prontos para
            atender você.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-sm font-medium">
                Nome *
              </Label>
              <Input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Seu nome completo"
                className="mt-2 h-12 rounded-xl border-border/50 focus:border-foreground"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email" className="text-sm font-medium">
                  E-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="seu@email.com"
                  className="mt-2 h-12 rounded-xl border-border/50 focus:border-foreground"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-sm font-medium">
                  Telefone
                </Label>
                <Input
                  id="phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="(48) 99999-9999"
                  className="mt-2 h-12 rounded-xl border-border/50 focus:border-foreground"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="message" className="text-sm font-medium">
                Mensagem *
              </Label>
              <Textarea
                id="message"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Descreva o que você precisa..."
                className="mt-2 min-h-[140px] rounded-xl border-border/50 focus:border-foreground"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 gap-2 rounded-full px-8 w-full sm:w-auto"
            >
              <MessageCircle size={18} />
              Enviar via WhatsApp
              <ArrowRight size={16} />
            </Button>
          </form>

          {/* Info */}
          <div className="space-y-8 lg:pl-8">
            {[
              {
                icon: MapPin,
                title: "Endereço",
                desc: "Rua Cecília do Rego Almeida, 63\nJardim Eldorado, Palhoça/SC",
              },
              { icon: Phone, title: "Telefone", desc: "(48) 3257-1855" },
              {
                icon: Mail,
                title: "E-mail",
                desc: "atendimento@metanox.com.br",
              },
              {
                icon: Clock,
                title: "Horário",
                desc: "Segunda a Sexta: 8h às 18h",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
                    <Icon className="text-foreground" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
