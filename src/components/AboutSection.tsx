import { Shield, Sparkles, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  { 
    icon: Shield, 
    title: "Garansi Resmi", 
    description: "Dukungan & sparepart",
    gradient: "from-primary to-primary/70"
  },
  { 
    icon: Sparkles, 
    title: "Inovasi Terbaru", 
    description: "Teknologi all-in-one",
    gradient: "from-accent to-accent/70"
  },
  { 
    icon: Layers, 
    title: "Solusi Terintegrasi", 
    description: "Untuk kelas dan kantor",
    gradient: "from-highlight to-highlight/70"
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tentang" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={ref} className="max-w-4xl mx-auto text-center space-y-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm mb-4">
              <Sparkles className="w-4 h-4" />
              Tentang Kami
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Profil <span className="text-gradient">LDP Tools</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6 text-muted-foreground leading-relaxed"
          >
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
            <motion.p 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-primary font-medium italic text-lg bg-primary/5 rounded-2xl p-6 border border-primary/10"
            >
              "Kami percaya dalam menyederhanakan hal-hal yang kompleks, membuat komunikasi lebih jelas, 
              kolaborasi lebih cerdas, dan pembelajaran lebih interaktif."
            </motion.p>
          </motion.div>

          {/* Features */}
          <div className="grid sm:grid-cols-3 gap-6 pt-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group relative bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Hover background effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 gradient-highlight rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-highlight-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 pt-6"
          >
            <a href="#produk">
              <Button variant="accent" size="lg" className="shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-shadow">
                Lihat Katalog
              </Button>
            </a>
            <a href="#kontak">
              <Button variant="outline" size="lg" className="backdrop-blur-sm">
                Hubungi Kami
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
