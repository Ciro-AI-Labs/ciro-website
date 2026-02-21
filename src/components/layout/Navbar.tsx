import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, BarChart3, Database, Smartphone, Factory, Eye } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const productDefs = [
  { name: "CIRO AI", href: "/products/ai-analytics", icon: BarChart3, descKey: "menu.productDesc.ai" },
  { name: "CIRO ERP", href: "/products/erp", icon: Factory, descKey: "menu.productDesc.erp" },
  { name: "CIRO SALES", href: "/products/sales", icon: Smartphone, descKey: "menu.productDesc.sales" },
  { name: "CIRO LAKE", href: "/products/lake", icon: Database, descKey: "menu.productDesc.lake" },
  { name: "CIRO LABS", href: "/products/vision", icon: Eye, descKey: "menu.productDesc.labs" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        mobileMenuOpen
          ? "bg-[#0b0c10] py-3"
          : isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center relative z-[60]">
            <img
              src="/logos/Ciro Logo Full White.svg"
              alt="CIRO"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              {t('menu.home')}
            </Link>

            {/* Products Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-1"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                {t('menu.products')}
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${productsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <div className="bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl p-2 shadow-2xl min-w-[280px]">
                  {productDefs.map((product) => (
                    <Link
                      key={product.href}
                      to={product.href}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors group/item"
                    >
                      <div className="w-8 h-8 bg-blue-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <product.icon className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{product.name}</div>
                        <div className="text-xs text-gray-500">{t(product.descKey)}</div>
                      </div>
                    </Link>
                  ))}
                  <div className="border-t border-white/5 mt-2 pt-2">
                    <Link
                      to="/products"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-sm text-blue-400"
                    >
                      {t('menu.viewAllProducts')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/use-cases"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              {t('menu.useCases')}
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              {t('menu.about')}
            </Link>
            <LanguageSwitcher />
            <Button variant="default" asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link to="/contact">{t('menu.bookDemo')}</Link>
            </Button>
            <a
              href="https://app.ciroai.us"
              className="text-sm font-medium text-gray-300 hover:text-white border border-white/10 hover:border-white/20 px-4 py-2 rounded-lg transition-all"
            >
              {t('menu.login')}
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              className="text-white relative z-[60]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <>
            <div className="fixed inset-0 z-[54]" style={{ backgroundColor: '#000000' }} />
            <div className="fixed inset-0 z-[55] md:hidden" style={{ backgroundColor: '#0b0c10' }}>
              <div className="container mx-auto px-4 pt-20 pb-6 flex flex-col h-full">
                <div className="flex flex-col space-y-2 text-lg font-medium">
                  <Link to="/" className="py-3 text-white hover:text-blue-400 border-b border-gray-800" onClick={() => setMobileMenuOpen(false)}>
                    {t('menu.home')}
                  </Link>

                  {/* Mobile Products Accordion */}
                  <div className="border-b border-gray-800">
                    <button
                      className="py-3 text-white hover:text-blue-400 w-full text-left flex items-center justify-between"
                      onClick={() => setProductsOpen(!productsOpen)}
                    >
                      {t('menu.products')}
                      <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {productsOpen && (
                      <div className="pl-4 pb-3 space-y-1">
                        {productDefs.map((product) => (
                          <Link
                            key={product.href}
                            to={product.href}
                            className="flex items-center gap-3 py-2 text-gray-400 hover:text-blue-400 text-base"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <product.icon className="w-4 h-4 text-blue-400" />
                            {product.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link to="/use-cases" className="py-3 text-white hover:text-blue-400 border-b border-gray-800" onClick={() => setMobileMenuOpen(false)}>
                    {t('menu.useCases')}
                  </Link>
                  <Link to="/about" className="py-3 text-white hover:text-blue-400 border-b border-gray-800" onClick={() => setMobileMenuOpen(false)}>
                    {t('menu.about')}
                  </Link>
                </div>

                <div className="mt-auto space-y-3">
                  <Button variant="default" size="lg" className="w-full mt-6 bg-blue-600 hover:bg-blue-700" onClick={() => setMobileMenuOpen(false)} asChild>
                    <Link to="/contact">{t('menu.bookDemo')}</Link>
                  </Button>
                  <a
                    href="https://app.ciroai.us"
                    className="block w-full text-center text-sm font-medium text-white border border-white/10 hover:border-white/20 px-4 py-3 rounded-lg transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t('menu.login')}
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
