import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Eye, MessageCircle, ArrowUpRight } from "lucide-react";
import { Product } from "@/data/products";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
  onViewDetails?: (product: Product) => void;
  index?: number;
}

const ProductCard = ({ product, onViewDetails, index = 0 }: ProductCardProps) => {
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Halo, saya tertarik dengan produk ${product.name}. Mohon informasi lebih lanjut.`
    );
    window.open(`https://wa.me/6281223598599?text=${message}`, '_blank');
  };

  const handleViewDetails = () => {
    navigate(`/produk/${product.id}`);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-border hover:border-primary/30 transition-all duration-500"
    >
      {/* Animated border gradient on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-highlight/10" />
      </div>
      
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary/50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {product.badge && (
          <Badge 
            className={`absolute top-4 left-4 shadow-lg ${
              product.badge === 'Best Seller' 
                ? 'bg-highlight text-highlight-foreground' 
                : product.badge === 'Popular'
                ? 'bg-accent text-accent-foreground'
                : product.badge === 'Premium'
                ? 'bg-primary text-primary-foreground'
                : 'bg-foreground text-background'
            }`}
          >
            {product.badge}
          </Badge>
        )}
        
        {/* Quick action button */}
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          className="absolute top-4 right-4 w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-lg"
          onClick={handleViewDetails}
        >
          <ArrowUpRight className="w-5 h-5 text-primary" />
        </motion.button>
        
        {/* Hover Actions */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex gap-2">
            <Button 
              variant="secondary" 
              size="sm"
              onClick={handleViewDetails}
              className="flex-1 bg-card/90 backdrop-blur-sm hover:bg-card shadow-lg"
            >
              <Eye className="w-4 h-4 mr-2" />
              Detail
            </Button>
            <Button 
              variant="hero" 
              size="sm"
              onClick={handleWhatsApp}
              className="flex-1 shadow-lg"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Tanya
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-5 lg:p-6 z-10">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 
            className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2 cursor-pointer"
            onClick={handleViewDetails}
          >
            {product.name}
          </h3>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Size Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.sizes.map((size) => (
            <span 
              key={size}
              className="px-2.5 py-1 bg-secondary/80 text-xs font-medium text-muted-foreground rounded-full border border-border/50"
            >
              {size}
            </span>
          ))}
        </div>

        {/* Key Features */}
        <div className="space-y-1.5 mb-5">
          {product.features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent flex-shrink-0" />
              <span className="line-clamp-1">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Button 
          variant="outline" 
          className="w-full group/btn relative overflow-hidden border-primary/20 hover:border-primary"
          onClick={handleWhatsApp}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10 flex items-center justify-center group-hover/btn:text-primary-foreground transition-colors">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Hubungi untuk Harga
          </span>
        </Button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
