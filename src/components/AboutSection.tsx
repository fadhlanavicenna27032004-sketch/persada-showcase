import { CheckCircle2, Users, Award, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Tim profesional berpengalaman lebih dari 15 tahun",
  "Proses editorial yang komprehensif dan terstruktur",
  "Jaringan distribusi nasional dan internasional",
  "Dukungan teknologi digital terkini",
  "Layanan konsultasi gratis",
  "Garansi kualitas dan kepuasan klien",
];

const AboutSection = () => {
  return (
    <section id="tentang" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm mb-4">
                Tentang Kami
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                Bagian dari <span className="text-gradient">LDP Group</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                LDP Tools adalah divisi penerbitan dan alat bisnis dari PT. Lentera Duta Persada. 
                Kami berkomitmen untuk memberikan solusi penerbitan profesional dengan standar 
                kualitas tertinggi dan inovasi teknologi terkini.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Dengan dedikasi terhadap kesuksesan klien, kami bermitra dengan institusi pendidikan, 
              pemerintahan, dan organisasi bisnis untuk menghasilkan publikasi berkualitas yang 
              berdampak luas.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <a href="https://ldpgroup.co.id/#about" target="_blank" rel="noopener noreferrer">
              <Button variant="accent" size="lg">
                Pelajari Lebih Lanjut Tentang LDP Group
              </Button>
            </a>
          </div>

          {/* Right Stats Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg hover:border-primary/30 transition-all">
              <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-4xl font-heading font-bold text-gradient mb-2">8+</h3>
              <p className="text-muted-foreground">Divisi Layanan</p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg hover:border-accent/30 transition-all">
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-4xl font-heading font-bold text-accent mb-2">100+</h3>
              <p className="text-muted-foreground">Klien Terpuaskan</p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg hover:border-highlight/30 transition-all">
              <div className="w-14 h-14 gradient-highlight rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-highlight-foreground" />
              </div>
              <h3 className="text-4xl font-heading font-bold text-highlight mb-2">15+</h3>
              <p className="text-muted-foreground">Tahun Pengalaman</p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
              <p className="font-heading font-semibold text-foreground mb-3">Misi Kami</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Memberdayakan bisnis dengan solusi penerbitan inovatif yang mendorong 
                pertumbuhan dan kesuksesan berkelanjutan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
