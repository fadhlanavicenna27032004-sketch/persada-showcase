import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  MessageCircle, 
  Phone, 
  Check, 
  Monitor, 
  Cpu, 
  Hand, 
  Tv,
  ChevronLeft,
  ChevronRight,
  Zap,
  Shield,
  Award
} from "lucide-react";
import { useState } from "react";

// Gallery images for products
const galleryImages = {
  'qeoyo-smart-board-65': [
    '/products/qeoyo-board.jpg',
    '/products/features.jpg',
    '/products/product-showcase.jpg',
  ],
  'qeoyo-smart-board-75': [
    '/products/qeoyo-board.jpg',
    '/products/features.jpg',
    '/products/product-showcase.jpg',
  ],
  'qeoyo-smart-board-85': [
    '/products/qeoyo-board.jpg',
    '/products/features.jpg',
    '/products/product-showcase.jpg',
  ],
  'qeoyo-smart-board-98': [
    '/products/qeoyo-board.jpg',
    '/products/features.jpg',
    '/products/product-showcase.jpg',
  ],
  'mobile-stand': ['/products/features.jpg'],
  'stylus-pen': ['/products/features.jpg'],
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const product = products.find((p) => p.id === id);
  
  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-heading font-bold text-foreground mb-4">
            Produk Tidak Ditemukan
          </h1>
          <p className="text-muted-foreground mb-8">
            Maaf, produk yang Anda cari tidak tersedia.
          </p>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Beranda
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const images = galleryImages[product.id as keyof typeof galleryImages] || [product.image];

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Halo, saya tertarik dengan produk ${product.name}. Mohon informasi lebih lanjut mengenai harga dan spesifikasi.`
    );
    window.open(`https://wa.me/6281223598599?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+6281223598599', '_blank');
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <Link to="/#katalog" className="hover:text-primary transition-colors">
              Katalog
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{product.name}</span>
          </nav>
        </div>

        {/* Product Hero Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary/50 border border-border">
                <img
                  src={images[currentImageIndex]}
                  alt={`${product.name} - Image ${currentImageIndex + 1}`}
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

                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 hover:bg-background flex items-center justify-center shadow-lg transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5 text-foreground" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 hover:bg-background flex items-center justify-center shadow-lg transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 text-foreground" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Gallery */}
              {images.length > 1 && (
                <div className="flex gap-3">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        currentImageIndex === idx 
                          ? 'border-primary' 
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-medium text-primary uppercase tracking-wide">
                    {product.category === 'smart-board' ? 'Smart Board' : 'Accessories'}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                  {product.name}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Size Tags */}
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <span 
                    key={size}
                    className="px-4 py-2 bg-secondary text-sm font-medium text-foreground rounded-lg"
                  >
                    {size}
                  </span>
                ))}
              </div>

              {/* Key Features */}
              <div className="bg-secondary/50 rounded-xl p-6 border border-border">
                <h3 className="font-heading font-semibold text-foreground mb-4">
                  Fitur Unggulan
                </h3>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="lg"
                  className="flex-1"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Hubungi via WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="flex-1"
                  onClick={handleCall}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Telepon Sekarang
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-3 rounded-lg bg-secondary/30">
                  <Shield className="w-6 h-6 mx-auto text-primary mb-2" />
                  <p className="text-xs text-muted-foreground">Garansi Resmi</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-secondary/30">
                  <Zap className="w-6 h-6 mx-auto text-accent mb-2" />
                  <p className="text-xs text-muted-foreground">Support 24/7</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-secondary/30">
                  <Award className="w-6 h-6 mx-auto text-highlight mb-2" />
                  <p className="text-xs text-muted-foreground">Produk Terjamin</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications Section */}
        {product.category === 'smart-board' && (
          <section className="container mx-auto px-4 py-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">
              Spesifikasi Lengkap
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <Tv className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Resolusi</h3>
                <p className="text-muted-foreground">{product.specs.resolution}</p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-4">
                  <Hand className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Touch Points</h3>
                <p className="text-muted-foreground">{product.specs.touchPoints}</p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="w-12 h-12 rounded-lg gradient-highlight flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-highlight-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Sistem</h3>
                <p className="text-muted-foreground">{product.specs.system}</p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="w-12 h-12 rounded-lg bg-foreground flex items-center justify-center mb-4">
                  <Monitor className="w-6 h-6 text-background" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Display</h3>
                <p className="text-muted-foreground">{product.specs.display}</p>
              </div>
            </div>

            {/* Detailed Specs Table */}
            <div className="mt-8 bg-card rounded-xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-secondary">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Spesifikasi</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Detail</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-6 py-4 text-sm text-muted-foreground">Ukuran Layar</td>
                      <td className="px-6 py-4 text-sm text-foreground font-medium">{product.sizes.join(', ')}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-muted-foreground">Resolusi Display</td>
                      <td className="px-6 py-4 text-sm text-foreground font-medium">{product.specs.resolution}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-muted-foreground">Teknologi Touch</td>
                      <td className="px-6 py-4 text-sm text-foreground font-medium">{product.specs.touchPoints} Multi-touch</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-muted-foreground">Sistem Operasi</td>
                      <td className="px-6 py-4 text-sm text-foreground font-medium">{product.specs.system}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-muted-foreground">Tipe Display</td>
                      <td className="px-6 py-4 text-sm text-foreground font-medium">{product.specs.display}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-muted-foreground">Warna Display</td>
                      <td className="px-6 py-4 text-sm text-foreground font-medium">1.07 Billion Colors</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-muted-foreground">Anti-Glare</td>
                      <td className="px-6 py-4 text-sm text-foreground font-medium">Yes (AG Tempered Glass)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-muted-foreground">Konektivitas</td>
                      <td className="px-6 py-4 text-sm text-foreground font-medium">HDMI, USB-C, USB 3.0, LAN, WiFi</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-muted-foreground">Speaker</td>
                      <td className="px-6 py-4 text-sm text-foreground font-medium">Built-in 2x 15W Stereo</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-muted-foreground">Camera (Opsional)</td>
                      <td className="px-6 py-4 text-sm text-foreground font-medium">48MP AI Camera with Auto-framing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="container mx-auto px-4 py-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">
              Produk Terkait
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/produk/${relatedProduct.id}`}
                  className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-secondary/50">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      {relatedProduct.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back to Catalog */}
        <section className="container mx-auto px-4 py-8 mb-8">
          <div className="text-center">
            <Button
              variant="outline"
              onClick={() => navigate('/#katalog')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Katalog
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
