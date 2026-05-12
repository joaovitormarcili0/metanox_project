import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold tracking-[0.15em] mb-4">
              METANOX
            </h3>
            <p className="text-background/40 text-sm leading-relaxed mb-6">
              A marca da excelência. Soluções em produtos de aço inox desde 2000.
              Qualidade premium para todo o Brasil.
            </p>
            <div className="flex gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=5548988164249"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href="mailto:atendimento@metanox.com.br"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Produtos */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-6">
              Produtos
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                to="/produtos#sob-medida"
                className="text-sm text-background/40 hover:text-background transition-colors"
              >
                Produtos Sob Medida
              </Link>
              <a
                href="https://loja.metanox.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-background/40 hover:text-background transition-colors"
              >
                Loja Online
              </a>
              <Link
                to="/servicos"
                className="text-sm text-background/40 hover:text-background transition-colors"
              >
                Corte a Laser
              </Link>
              <Link
                to="/servicos"
                className="text-sm text-background/40 hover:text-background transition-colors"
              >
                Dobra CNC
              </Link>
            </nav>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-6">
              Empresa
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                to="/#sobre"
                className="text-sm text-background/40 hover:text-background transition-colors"
              >
                Quem Somos
              </Link>
              <Link
                to="/#contato"
                className="text-sm text-background/40 hover:text-background transition-colors"
              >
                Contato
              </Link>
              <a
                href="https://www.metanox.com.br/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-background/40 hover:text-background transition-colors"
              >
                Blog
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-6">
              Contato
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+554832571855"
                className="flex items-center gap-3 text-sm text-background/40 hover:text-background transition-colors"
              >
                <Phone size={14} className="shrink-0" />
                (48) 3257-1855
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5548988164249"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-background/40 hover:text-background transition-colors"
              >
                <MessageCircle size={14} className="shrink-0" />
                (48) 98816-4249
              </a>
              <a
                href="mailto:atendimento@metanox.com.br"
                className="flex items-center gap-3 text-sm text-background/40 hover:text-background transition-colors"
              >
                <Mail size={14} className="shrink-0" />
                atendimento@metanox.com.br
              </a>
              <div className="flex items-start gap-3 text-sm text-background/40">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>
                  Rua Cecília do Rego Almeida, 63
                  <br />
                  Palhoça/SC · CEP 88133-560
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/30">
            © {new Date().getFullYear()} Metanox Metalúrgica Ltda · CNPJ
            04.806.132/0001-66
          </p>
          <p className="text-xs text-background/30">
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
