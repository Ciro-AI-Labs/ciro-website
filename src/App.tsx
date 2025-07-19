import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import UseCases from "./pages/use-cases/UseCases";
import Products from "./pages/Products";
import AIAnalytics from "./pages/products/AIAnalytics";
import Vision from "./pages/products/Vision";
import NewDesign from "./pages/NewDesign";

const queryClient = new QueryClient();

const App = () => {
  // Clear any saved language preferences
  localStorage.removeItem('i18nextLng');

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/ai-analytics" element={<AIAnalytics />} />
            <Route path="/products/vision" element={<Vision />} />
            <Route path="/new-design" element={<NewDesign />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
