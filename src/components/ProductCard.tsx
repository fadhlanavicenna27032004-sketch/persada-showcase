import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Eye, MessageCircle } from "lucide-react";
import { Product } from "@/data/products";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: Product;
  onViewDetails?: (product: Product) => void;
}

const ProductCard = ({ product, onViewDetails }: ProductCardProps) => {
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
    <div className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary/50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <Badge 
            className={`absolute top-4 left-4 ${
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
        
        {/* Hover Actions */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <div className="flex gap-3">
            <Button 
              variant="secondary" 
              size="sm"
              onClick={handleViewDetails}
              className="bg-background/90 hover:bg-background"
            >
              <Eye className="w-4 h-4 mr-2" />
              Detail
            </Button>
            <Button 
              variant="hero" 
              size="sm"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Tanya
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 lg:p-6">
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
              className="px-2 py-1 bg-secondary text-xs font-medium text-muted-foreground rounded-md"
            >
              {size}
            </span>
          ))}
        </div>

        {/* Key Features */}
        <div className="space-y-1 mb-5">
          {product.features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              {feature}
            </div>
          ))}
        </div>

        {/* CTA */}
        <Button 
          variant="outline" 
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors"
          onClick={handleWhatsApp}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Hubungi untuk Harga
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
