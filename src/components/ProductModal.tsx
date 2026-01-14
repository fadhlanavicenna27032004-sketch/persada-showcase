import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";
import { CheckCircle2, MessageCircle, Phone, X } from "lucide-react";

interface ProductModalProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProductModal = ({ product, open, onOpenChange }: ProductModalProps) => {
  if (!product) return null;

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Halo, saya tertarik dengan produk ${product.name}. Mohon informasi harga dan ketersediaan.`
    );
    window.open(`https://wa.me/6281223598599?text=${message}`, '_blank');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative aspect-square md:aspect-auto bg-secondary/50">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
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
          </div>

          {/* Content */}
          <div className="p-6 lg:p-8 flex flex-col">
            <DialogHeader className="text-left mb-4">
              <DialogTitle className="text-2xl font-heading font-bold text-foreground">
                {product.name}
              </DialogTitle>
            </DialogHeader>

            <p className="text-muted-foreground mb-6">
              {product.description}
            </p>

            {/* Sizes */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-foreground mb-2">Ukuran Tersedia:</h4>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <span 
                    key={size}
                    className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-lg"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-foreground mb-3">Fitur Utama:</h4>
              <div className="space-y-2">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specs */}
            {product.specs.resolution !== 'N/A' && (
              <div className="mb-6 p-4 bg-secondary/50 rounded-xl">
                <h4 className="text-sm font-semibold text-foreground mb-3">Spesifikasi:</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-muted-foreground">Resolusi:</span>
                    <p className="font-medium text-foreground">{product.specs.resolution}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Touch Points:</span>
                    <p className="font-medium text-foreground">{product.specs.touchPoints}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">System:</span>
                    <p className="font-medium text-foreground">{product.specs.system}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Display:</span>
                    <p className="font-medium text-foreground">{product.specs.display}</p>
                  </div>
                </div>
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-col gap-3 mt-auto">
              <Button variant="hero" size="lg" onClick={handleWhatsApp}>
                <MessageCircle className="w-5 h-5 mr-2" />
                Hubungi via WhatsApp
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+6281223598599">
                  <Phone className="w-5 h-5 mr-2" />
                  +62 812 2359 8599
                </a>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
