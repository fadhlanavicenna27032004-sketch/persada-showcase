import { Shield, Wrench, Sparkles, Monitor, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  { 
    icon: Shield, 
    title: "Garansi Resmi", 
    description: "Dukungan & sparepart" 
  },
  { 
    icon: Sparkles, 
    title: "Inovasi Terbaru", 
    description: "Teknologi all-in-one" 
  },
  { 
    icon: Layers, 
    title: "Solusi Terintegrasi", 
    description: "Untuk kelas dan kantor" 
  },
];

const AboutSection = () => {
  return (
    <section id="tentang" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Header */}
          <div>
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm mb-4">
              Tentang Kami
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Profil <span className="text-gradient">LDP Tools</span>
            </h2>
          </div>

          {/* Description */}
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              Di LDP Tools, kami bersemangat untuk mengubah cara orang melakukan presentasi, mengajar, dan berkolaborasi. 
              Sebagai divisi dari <strong className="text-foreground">PT. Lentera Duta Persada</strong>, kami mengkhususkan diri dalam menyediakan 
              solusi teknologi interaktif mutakhir seperti papan pintar, papan tulis digital, dan tablet rapat pintar 
              yang memberdayakan ruang kelas dan ruang pertemuan perusahaan.
            </p>
            <p>
              Dengan komitmen kami terhadap inovasi dan kualitas, LDP Tools membantu para pendidik, pelatih, dan profesional 
              untuk memberikan pengalaman yang lebih menarik, efisien, dan efektif. Solusi terintegrasi kami menggantikan 
              alat tradisional dengan teknologi pintar modern yang serba guna.
            </p>
            <p className="text-primary font-medium italic">
              "Kami percaya dalam menyederhanakan hal-hal yang kompleks, membuat komunikasi lebih jelas, 
              kolaborasi lebih cerdas, dan pembelajaran lebih interaktif."
            </p>
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-3 gap-6 pt-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <a href="#produk">
              <Button variant="accent" size="lg">
                Lihat Katalog
              </Button>
            </a>
            <a href="#kontak">
              <Button variant="outline" size="lg">
                Hubungi Kami
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
