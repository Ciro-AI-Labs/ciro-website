import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Products
            </Link>
            <Link
              to="/use-cases"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Use Cases
            </Link>
            <Link
              to="/about"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              to="/new-design"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              New Design
            </Link>
            <Button variant="default" asChild>
              <Link to="/contact">Book a Demo</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground relative z-[60]"
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
                    Home
                  </Link>
                  <Link
                    to="/products"
                    className="py-3 text-white hover:text-purple-300 border-b border-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Products
                  </Link>
                  <Link
                    to="/use-cases"
                    className="py-3 text-white hover:text-purple-300 border-b border-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Use Cases
                  </Link>
                  <Link
                    to="/about"
                    className="py-3 text-white hover:text-purple-300 border-b border-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    to="/new-design"
                    className="py-3 text-white hover:text-purple-300 border-b border-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    New Design
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
                    <Link to="/contact">Book a Demo</Link>
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
