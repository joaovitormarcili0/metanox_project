import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Index from "./pages/Index.tsx";
import Servicos from "./pages/Servicos.tsx";
import Produtos from "./pages/Produtos.tsx";
import Orcamento from "./pages/Orcamento.tsx";
import NotFound from "./pages/NotFound.tsx";
import { ImagesProvider } from "./contexts/ImagesContext.tsx";
import AdminLayout from "./layouts/AdminLayout.tsx";
import AdminDashboard from "./pages/admin/AdminDashboard.tsx";

const queryClient = new QueryClient();

const GlobalWhatsApp = () => {
  const location = useLocation();
  if (location.pathname.startsWith('/admin')) return null;
  return <WhatsAppFloat />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ImagesProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/orcamento" element={<Orcamento />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
          <GlobalWhatsApp />
        </ImagesProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
