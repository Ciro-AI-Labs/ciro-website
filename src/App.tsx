import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef, useCallback } from "react";
import { logVisitorEvent } from "@/lib/analytics";
import { trackEvent, GA_TRACKING_ID } from "@/lib/gtag";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import UseCases from "./pages/use-cases/UseCases";
import Products from "./pages/Products";
import AIAnalytics from "./pages/products/AIAnalytics";
import Vision from "./pages/products/Vision";
import Singularity from "./pages/products/Singularity";
import Orbita from "./pages/products/Orbita";
import ERP from "./pages/products/ERP";
import Careers from "./pages/Careers";
import Partners from "./pages/Partners";
import News from "./pages/News";
import NewsPost from "./pages/NewsPost";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Admin from "./pages/Admin";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import { CookieBanner } from "./components/CookieBanner";

const queryClient = new QueryClient();

// Analytics tracking component
const AnalyticsTracker = () => {
  const location = useLocation();
  const pageEntryTime = useRef(Date.now());
  const firedScrollMilestones = useRef(new Set<number>());

  // Scroll depth tracking
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;
    const percent = Math.round((scrollTop / docHeight) * 100);

    for (const milestone of [25, 50, 75, 100]) {
      if (percent >= milestone && !firedScrollMilestones.current.has(milestone)) {
        firedScrollMilestones.current.add(milestone);
        trackEvent('scroll_depth', { depth: milestone, page: location.pathname });
      }
    }
  }, [location.pathname]);

  // Page view + GA4 SPA tracking
  useEffect(() => {
    // Supabase tracking
    logVisitorEvent({ event_type: "page_view" });

    // GA4 SPA tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', GA_TRACKING_ID, {
        page_path: location.pathname,
        page_title: document.title,
      });
    }

    // Reset scroll milestones and page entry time on route change
    pageEntryTime.current = Date.now();
    firedScrollMilestones.current.clear();
  }, [location.pathname]);

  // Scroll depth listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Time on page tracking via beforeunload
  useEffect(() => {
    const handleBeforeUnload = () => {
      const timeOnPage = Math.round((Date.now() - pageEntryTime.current) / 1000);
      trackEvent('time_on_page', { seconds: timeOnPage, page: location.pathname });
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [location.pathname]);

  // Outbound link click tracking
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (href && href.startsWith('http') && !href.includes(window.location.hostname)) {
        trackEvent('outbound_click', { url: href, page: location.pathname });
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [location.pathname]);

  return null;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnalyticsTracker />
          <CookieBanner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/ai-analytics" element={<AIAnalytics />} />
            <Route path="/products/vision" element={<Vision />} />
            <Route path="/products/singularity" element={<Singularity />} />
            <Route path="/products/lake" element={<Singularity />} />
            <Route path="/products/orbita" element={<Orbita />} />
            <Route path="/products/sales" element={<Orbita />} />
            <Route path="/products/erp" element={<ERP />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsPost />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
