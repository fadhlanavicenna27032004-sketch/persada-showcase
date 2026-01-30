import { 
  Monitor, 
  Fingerprint, 
  Wifi, 
  Shield, 
  Zap, 
  Users,
  Mic,
  Camera
} from "lucide-react";
import featuresImage from "@/assets/products/features.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: Monitor,
    title: "4K UHD Display",
    description: "Layar berkualitas tinggi dengan 1.07 miliar warna dan resolusi 4K untuk visual yang tajam dan jernih.",
    color: "primary"
  },
  {
    icon: Fingerprint,
    title: "20-Point Multi-Touch",
    description: "Teknologi sentuh 20 titik dengan akurasi ±1mm untuk pengalaman interaktif yang responsif.",
    color: "accent"
  },
  {
    icon: Wifi,
    title: "Wireless Screen Mirroring",
    description: "Berbagi layar secara nirkabel dari perangkat apa pun untuk kolaborasi yang seamless.",
    color: "highlight"
  },
  {
    icon: Shield,
    title: "7H Hardness Glass",
    description: "Kaca pelindung dengan kekerasan 7H, anti-bakteri, dan filter blue light untuk perlindungan mata.",
    color: "primary"
  },
  {
    icon: Zap,
    title: "Dual System",
    description: "Sistem Android 13 & Windows terintegrasi untuk fleksibilitas penggunaan maksimal.",
    color: "accent"
  },
  {
    icon: Users,
    title: "Collaboration Tools",
    description: "Whiteboard digital, anotasi, dan tools kolaborasi untuk meeting dan pembelajaran yang efektif.",
    color: "highlight"
  },
  {
    icon: Camera,
    title: "AI Camera",
    description: "Kamera 48MP dengan auto-framing dan wide angle 101° untuk video conference berkualitas.",
    color: "primary"
  },
  {
    icon: Mic,
    title: "8 Array Microphones",
    description: "8 mikrofon array dengan jangkauan pickup 10 meter dan noise suppression.",
    color: "accent"
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden"
    >
      {/* Hover glow effect */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
        feature.color === "primary" 
          ? "bg-primary/5" 
          : feature.color === "accent" 
          ? "bg-accent/5" 
          : "bg-highlight/5"
      }`} />
      
      <div className="relative z-10">
        <div 
          className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${
            feature.color === "primary" 
              ? "gradient-primary shadow-sm group-hover:glow-primary" 
              : feature.color === "accent" 
              ? "bg-accent shadow-sm group-hover:glow-accent" 
              : "gradient-highlight shadow-sm group-hover:glow-highlight"
          }`}
        >
          <feature.icon className="w-6 h-6 text-primary-foreground" />
        </div>
        
        <h3 className="font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {feature.title}
        </h3>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { once: true, margin: "-100px" });

  return (
    <section id="fitur" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-accent/5 to-transparent rounded-tr-full" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm mb-4 backdrop-blur-sm">
            Teknologi Unggulan
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Fitur <span className="text-gradient">Canggih</span> dalam Satu Perangkat
          </h2>
          <p className="text-lg text-muted-foreground">
            QEOYO Smart Board menggabungkan 7 perangkat dalam satu solusi: Proyektor, Komputer, 
            Whiteboard, TV, Kamera, Speaker, dan Mikrofon.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div 
            ref={imageRef}
            initial={{ opacity: 0, x: -50 }}
            animate={imageInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/15 to-accent/15 rounded-3xl blur-2xl" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src={featuresImage}
                alt="QEOYO Smart Board Features"
                className="w-full h-auto"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={imageInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-card/90 backdrop-blur-xl rounded-2xl p-5 shadow-xl border border-border/50"
            >
              <div className="text-center">
                <p className="text-4xl font-heading font-bold text-gradient">7-in-1</p>
                <p className="text-sm text-muted-foreground">Integration</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Features */}
          <div className="order-1 lg:order-2 grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
