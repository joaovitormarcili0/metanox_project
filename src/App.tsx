import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { ImagesProvider } from "./contexts/ImagesContext.tsx";
import { CopyProvider } from "./contexts/CopyContext.tsx";

const Index = lazy(() => import("./pages/Index.tsx"));
const Servicos = lazy(() => import("./pages/Servicos.tsx"));
const Produtos = lazy(() => import("./pages/Produtos.tsx"));
const Orcamento = lazy(() => import("./pages/Orcamento.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const AdminLayout = lazy(() => import("./layouts/AdminLayout.tsx"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard.tsx"));

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
          <CopyProvider>
            <Suspense fallback={<div className="min-h-screen bg-background" />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/servicos" element={<Servicos />} />
                <Route path="/produtos" element={<Produtos />} />
                <Route path="/orcamento" element={<Orcamento />} />
                <Route path="/admin" element={<AdminLayout />}>
                  <Route index element={<AdminDashboard />} />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            <GlobalWhatsApp />
          </CopyProvider>
        </ImagesProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
