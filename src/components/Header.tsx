import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Produtos", href: "/produtos" },
  { label: "Serviços", href: "/servicos" },
  { label: "Quem Somos", href: "/#sobre" },
  { label: "Contato", href: "/#contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <span className={`text-2xl font-extrabold tracking-[0.15em] transition-colors duration-300 ${
              scrolled ? "text-foreground" : "text-white"
            }`}>
              METANOX
            </span>
            <span className={`hidden sm:block text-[10px] uppercase tracking-[0.2em] border-l pl-3 leading-tight transition-colors duration-300 ${
              scrolled
                ? "text-muted-foreground border-border"
                : "text-white/60 border-white/20"
            }`}>
              A marca da
              <br />
              excelência
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-[13px] font-medium tracking-wide transition-colors duration-300 hover:opacity-70 ${
                  scrolled ? "text-foreground" : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/orcamento">
              <Button
                className={`gap-2 text-[13px] font-medium rounded-full px-6 transition-all duration-300 ${
                  scrolled
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "bg-white text-foreground hover:bg-white/90"
                }`}
              >
                Solicitar Orçamento
                <ArrowRight size={14} />
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden transition-colors ${
              scrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 top-20 bg-white z-40">
            <nav className="flex flex-col p-6 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-lg font-medium text-foreground py-3 border-b border-border/50 hover:pl-2 transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/orcamento" className="mt-6">
                <Button className="w-full bg-foreground text-background hover:bg-foreground/90 gap-2 rounded-full text-base py-6">
                  Solicitar Orçamento
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
