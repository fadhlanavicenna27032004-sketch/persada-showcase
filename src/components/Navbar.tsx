import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useState } from "react";
import logoLdpTools from "@/assets/logo-ldptools.jpg";
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: "beranda", label: "Beranda" },
    { id: "katalog", label: "Katalog" },
    { id: "fitur", label: "Fitur" },
    { id: "tentang", label: "Tentang" },
    { id: "kontak", label: "Kontak" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={logoLdpTools} 
              alt="LDP Tools Logo" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://ldpgroup.co.id/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm">
                Website Utama
              </Button>
            </a>
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => scrollToSection("katalog")}
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Katalog
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left px-4 py-3 font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <hr className="my-2 border-border" />
              <a 
                href="https://ldpgroup.co.id/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4"
              >
                <Button variant="outline" size="sm" className="w-full">
                  Website Utama
                </Button>
              </a>
              <div className="px-4 mt-2">
                <Button 
                  variant="hero" 
                  size="sm"
                  className="w-full"
                  onClick={() => scrollToSection("katalog")}
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Lihat Katalog
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
