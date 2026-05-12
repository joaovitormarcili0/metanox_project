import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5548988164249&text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      {/* Pulse ring */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />

      {/* Button */}
      <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
        <MessageCircle size={24} className="text-white" />
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background text-xs font-medium px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
        Fale com um especialista
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-foreground rotate-45" />
      </div>
    </a>
  );
};

export default WhatsAppFloat;
