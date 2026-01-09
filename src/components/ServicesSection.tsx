import { BookOpen, FileText, Laptop, PenTool, Printer, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: BookOpen,
    title: "Penerbitan Buku",
    description: "Layanan penerbitan buku profesional dari proses editing hingga distribusi dengan standar kualitas tinggi.",
    color: "primary",
  },
  {
    icon: FileText,
    title: "Penerbitan Jurnal",
    description: "Penerbitan jurnal ilmiah dan akademik dengan proses peer-review dan indexing yang terpercaya.",
    color: "accent",
  },
  {
    icon: PenTool,
    title: "Editing & Proofreading",
    description: "Tim editor berpengalaman untuk menyempurnakan naskah Anda dengan standar editorial tertinggi.",
    color: "highlight",
  },
  {
    icon: Laptop,
    title: "Konten Digital",
    description: "Pengembangan konten digital interaktif termasuk e-book, multimedia, dan platform pembelajaran.",
    color: "primary",
  },
  {
    icon: Printer,
    title: "Cetak & Produksi",
    description: "Layanan cetak berkualitas tinggi dengan berbagai pilihan format, binding, dan finishing.",
    color: "accent",
  },
  {
    icon: Globe,
    title: "Distribusi & Marketing",
    description: "Jaringan distribusi luas dan strategi pemasaran digital untuk menjangkau audiens yang lebih luas.",
    color: "highlight",
  },
];

const ServicesSection = () => {
  return (
    <section id="layanan" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm mb-4">
            Layanan Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Solusi <span className="text-gradient">Penerbitan</span> Lengkap
          </h2>
          <p className="text-lg text-muted-foreground">
            Rangkaian layanan penerbitan dan tools bisnis yang komprehensif untuk mendukung 
            kebutuhan publikasi dan transformasi digital Anda.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div 
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  service.color === "primary" 
                    ? "gradient-primary" 
                    : service.color === "accent" 
                    ? "bg-accent" 
                    : "gradient-highlight"
                }`}
              >
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <Button variant="ghost" className="p-0 h-auto text-primary hover:text-accent">
                Pelajari Lebih Lanjut
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a href="https://ldpgroup.co.id/#services" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="lg">
              Lihat Semua Layanan LDP Group
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
