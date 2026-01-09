import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center shadow-md group-hover:shadow-glow transition-shadow">
              <span className="text-primary-foreground font-heading font-bold text-lg">L</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-lg text-foreground">LDP</span>
              <span className="font-heading font-semibold text-lg text-primary ml-1">Tools</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("beranda")}
              className="font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Beranda
            </button>
            <button 
              onClick={() => scrollToSection("layanan")}
              className="font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Layanan
            </button>
            <button 
              onClick={() => scrollToSection("tentang")}
              className="font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Tentang
            </button>
            <button 
              onClick={() => scrollToSection("kontak")}
              className="font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Kontak
            </button>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <a 
              href="https://ldpgroup.co.id/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:block"
            >
              <Button variant="outline" size="sm">
                Website Utama
              </Button>
            </a>
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => scrollToSection("kontak")}
            >
              Hubungi Kami
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
