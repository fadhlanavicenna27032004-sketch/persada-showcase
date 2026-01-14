import { CheckCircle2, Users, Award, Target, Building2, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import caseStudyImage from "@/assets/products/case-study.jpg";

const features = [
  "Dukungan teknis profesional 24/7",
  "Instalasi dan training gratis",
  "Garansi resmi hingga 3 tahun",
  "Spare part tersedia",
  "Sertifikasi CE & RoHS",
  "After-sales service terpercaya",
];

const useCases = [
  { icon: GraduationCap, label: "Sekolah & Universitas" },
  { icon: Building2, label: "Ruang Meeting Kantor" },
  { icon: Users, label: "Training Center" },
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
                Tentang LDP Tools
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                <span className="text-gradient">Smart Tools</span> for <span className="text-gradient">Smart Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                LDP Tools adalah divisi dari PT. Lentera Duta Persada yang berfokus pada penyediaan 
                solusi teknologi interaktif seperti smart board, digital whiteboard, dan smart meeting tablet 
                untuk ruang kelas dan ruang meeting.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Kami berkomitmen untuk mentransformasi cara orang berpresentasi, mengajar, dan berkolaborasi. 
              Dengan teknologi all-in-one yang modern, kami menggantikan alat tradisional dengan solusi cerdas 
              yang terintegrasi.
            </p>

            {/* Use Cases */}
            <div className="flex flex-wrap gap-4">
              {useCases.map((useCase, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg"
                >
                  <useCase.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{useCase.label}</span>
                </div>
              ))}
            </div>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="https://ldpgroup.co.id/#about" target="_blank" rel="noopener noreferrer">
                <Button variant="accent" size="lg">
                  Tentang LDP Group
                </Button>
              </a>
              <a href="https://wa.me/6281223598599" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  Konsultasi Gratis
                </Button>
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={caseStudyImage}
                alt="LDP Tools Case Study"
                className="w-full h-auto"
              />
            </div>

            {/* Stats Cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-card rounded-xl p-5 shadow-sm border border-border hover:shadow-lg hover:border-primary/30 transition-all text-center">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-gradient mb-1">15+</h3>
                <p className="text-xs text-muted-foreground">Tahun Pengalaman</p>
              </div>

              <div className="bg-card rounded-xl p-5 shadow-sm border border-border hover:shadow-lg hover:border-accent/30 transition-all text-center">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-accent mb-1">100+</h3>
                <p className="text-xs text-muted-foreground">Klien Terpuaskan</p>
              </div>

              <div className="bg-card rounded-xl p-5 shadow-sm border border-border hover:shadow-lg hover:border-highlight/30 transition-all text-center">
                <div className="w-12 h-12 gradient-highlight rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-highlight-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-highlight mb-1">500+</h3>
                <p className="text-xs text-muted-foreground">Unit Terjual</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
