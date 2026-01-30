import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ShoppingBag, Sparkles } from "lucide-react";
import productShowcase from "@/assets/products/product-showcase.jpg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="beranda" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-hero">
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/25 rounded-full blur-3xl"
          animate={{ 
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-highlight/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), 
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-highlight animate-pulse" />
              <span className="text-sm font-medium text-primary">PT. Lentera Duta Persada</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-[1.1]"
            >
              <span className="text-gradient">Smart Board</span>
              <br />
              <span className="text-foreground">untuk </span>
              <span className="text-gradient">Edukasi</span>
              <br />
              <span className="text-foreground">& </span>
              <span className="text-gradient">Meeting</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              QEOYO Smart Board - Solusi all-in-one yang menggabungkan proyektor, komputer, 
              whiteboard, dan TV dalam satu perangkat interaktif berkualitas 4K.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection("katalog")}
                className="group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Lihat Katalog
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection("fitur")}
                className="group backdrop-blur-sm bg-background/50"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Lihat Fitur
              </Button>
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50"
            >
              <div className="group cursor-default">
                <p className="text-3xl md:text-4xl font-heading font-bold text-gradient group-hover:scale-105 transition-transform">
                  <AnimatedCounter value="4K" />
                </p>
                <p className="text-sm text-muted-foreground mt-1">UHD Display</p>
              </div>
              <div className="group cursor-default">
                <p className="text-3xl md:text-4xl font-heading font-bold text-gradient group-hover:scale-105 transition-transform">
                  <AnimatedCounter value="20" />
                </p>
                <p className="text-sm text-muted-foreground mt-1">Touch Points</p>
              </div>
              <div className="group cursor-default">
                <p className="text-3xl md:text-4xl font-heading font-bold text-gradient group-hover:scale-105 transition-transform">
                  <AnimatedCounter value="7-in-1" />
                </p>
                <p className="text-sm text-muted-foreground mt-1">Integration</p>
              </div>
            </motion.div>
          </div>
          
          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
            style={{ transform: `translateY(${scrollY * -0.1}px)` }}
          >
            {/* Glow effect behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-highlight/20 rounded-3xl blur-2xl opacity-60" />
            
            {/* Main image container */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 z-10" />
              <img 
                src={productShowcase} 
                alt="QEOYO Smart Board - Interactive Display" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-xl rounded-2xl p-5 shadow-xl border border-border/50"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 gradient-highlight rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-highlight-foreground" />
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground">Best Seller</p>
                  <p className="text-sm text-muted-foreground">2024 Series</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1"
        >
          <motion.div className="w-1.5 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
