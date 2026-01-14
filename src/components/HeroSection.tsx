import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Monitor, ShoppingBag } from "lucide-react";
import productShowcase from "@/assets/products/product-showcase.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="beranda" className="relative min-h-screen flex items-center overflow-hidden gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-highlight/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">PT. Lentera Duta Persada</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              <span className="text-gradient">Smart Board</span>
              <br />
              <span className="text-foreground">untuk </span>
              <span className="text-gradient">Edukasi</span>
              <br />
              <span className="text-foreground">& </span>
              <span className="text-gradient">Meeting</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              QEOYO Smart Board - Solusi all-in-one yang menggabungkan proyektor, komputer, 
              whiteboard, dan TV dalam satu perangkat interaktif berkualitas 4K.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection("katalog")}
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Lihat Katalog
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection("fitur")}
              >
                <Play className="w-5 h-5 mr-2" />
                Lihat Fitur
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div>
                <p className="text-3xl md:text-4xl font-heading font-bold text-gradient">4K</p>
                <p className="text-sm text-muted-foreground mt-1">UHD Display</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-heading font-bold text-gradient">20</p>
                <p className="text-sm text-muted-foreground mt-1">Touch Points</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-heading font-bold text-gradient">7-in-1</p>
                <p className="text-sm text-muted-foreground mt-1">Integration</p>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative animate-fade-in hidden lg:block">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={productShowcase} 
                alt="QEOYO Smart Board - Interactive Display" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">Ukuran</p>
                  <p className="text-sm text-muted-foreground">55" - 98"</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card p-4 rounded-xl shadow-lg border border-border animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 gradient-highlight rounded-lg flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6 text-highlight-foreground" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">Garansi</p>
                  <p className="text-sm text-muted-foreground">Resmi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
