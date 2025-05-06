import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        mobileMenuOpen
          ? "bg-[#0b0c10] py-3"
          : isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center relative z-[60]">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              CIRO LABS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              {t('menu.home')}
            </Link>
            <Link
              to="/products"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              {t('menu.products')}
            </Link>
            <Link
              to="/use-cases"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              {t('menu.useCases')}
            </Link>
            <Link
              to="/about"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              {t('menu.about')}
            </Link>
            <LanguageSwitcher />
            <Button variant="default" asChild>
              <Link to="/contact">{t('menu.bookDemo')}</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button and Language Switcher */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              className="text-foreground relative z-[60]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - solid background with multiple layers */}
        {mobileMenuOpen && (
          <>
            {/* Overlay base layer with max z-index to block all background content */}
            <div 
              className="fixed inset-0 z-[54]" 
              style={{ backgroundColor: '#000000' }} 
            />
            
            {/* Main content layer with solid background */}
            <div 
              className="fixed inset-0 z-[55] md:hidden"
              style={{ backgroundColor: '#0b0c10' }}
            >
              <div className="container mx-auto px-4 pt-20 pb-6 flex flex-col h-full">
                <div className="flex flex-col space-y-6 text-lg font-medium">
                  <Link
                    to="/"
                    className="py-3 text-white hover:text-purple-300 border-b border-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t('menu.home')}
                  </Link>
                  <Link
                    to="/products"
                    className="py-3 text-white hover:text-purple-300 border-b border-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t('menu.products')}
                  </Link>
                  <Link
                    to="/use-cases"
                    className="py-3 text-white hover:text-purple-300 border-b border-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t('menu.useCases')}
                  </Link>
                  <Link
                    to="/about"
                    className="py-3 text-white hover:text-purple-300 border-b border-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t('menu.about')}
                  </Link>
                </div>
                
                <div className="mt-auto">
                  <Button
                    variant="default"
                    size="lg"
                    className="w-full mt-6"
                    onClick={() => setMobileMenuOpen(false)}
                    asChild
                  >
                    <Link to="/contact">{t('menu.bookDemo')}</Link>
                  </Button>
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
