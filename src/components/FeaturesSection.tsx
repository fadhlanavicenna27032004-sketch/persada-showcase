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

const FeaturesSection = () => {
  return (
    <section id="fitur" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm mb-4">
            Teknologi Unggulan
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Fitur <span className="text-gradient">Canggih</span> dalam Satu Perangkat
          </h2>
          <p className="text-lg text-muted-foreground">
            QEOYO Smart Board menggabungkan 7 perangkat dalam satu solusi: Proyektor, Komputer, 
            Whiteboard, TV, Kamera, Speaker, dan Mikrofon.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={featuresImage}
                alt="QEOYO Smart Board Features"
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-card rounded-xl p-4 shadow-lg border border-border">
              <div className="text-center">
                <p className="text-3xl font-heading font-bold text-gradient">7-in-1</p>
                <p className="text-sm text-muted-foreground">Integration</p>
              </div>
            </div>
          </div>

          {/* Right: Features */}
          <div className="order-1 lg:order-2 grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div 
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                    feature.color === "primary" 
                      ? "gradient-primary" 
                      : feature.color === "accent" 
                      ? "bg-accent" 
                      : "gradient-highlight"
                  }`}
                >
                  <feature.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                
                <h3 className="font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
