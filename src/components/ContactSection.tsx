import { Mail, Phone, MapPin, Send, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useRef } from "react";
import { toast } from "@/hooks/use-toast";
import { motion, useInView } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const COMPANY_EMAIL = "ptlenteradutapersada@gmail.com";
  const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Komplek+Pesona+Bali+City+View+Residence+Cigugurgirang+Parongpong+Bandung+Barat+Jawa+Barat+40559+Indonesia";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      toast({
        title: "Form tidak lengkap",
        description: "Mohon lengkapi semua field sebelum mengirim pesan.",
        variant: "destructive"
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Email tidak valid",
        description: "Mohon masukkan alamat email yang benar.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Construct mailto link
    const subject = encodeURIComponent(`[LDP Tools] ${formData.subject}`);
    const body = encodeURIComponent(
      `Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;

    // Reset form after short delay
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
      toast({
        title: "Email client terbuka",
        description: "Silakan kirim email melalui aplikasi email Anda."
      });
    }, 1000);
  };

  const contactItems = [
    {
      icon: Mail,
      title: "Email",
      value: "ptlenteradutapersada@gmail.com",
      href: "mailto:ptlenteradutapersada@gmail.com",
      gradient: "gradient-primary",
      hoverColor: "primary"
    },
    {
      icon: Phone,
      title: "Telepon / WhatsApp",
      value: "+62 812 2359 8599",
      href: "https://wa.me/6281223598599",
      gradient: "bg-accent",
      hoverColor: "accent"
    },
    {
      icon: MapPin,
      title: "Lokasi",
      value: "Jl. Komplek Pesona Bali City View Residence, Desa Cigugurgirang, Kec. Parongpong, Kab. Bandung Barat, Jawa Barat, 40559",
      href: GOOGLE_MAPS_URL,
      gradient: "gradient-highlight",
      hoverColor: "highlight"
    }
  ];

  return (
    <section id="kontak" className="py-24 bg-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent" />
      
      <div ref={ref} className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-highlight/10 text-highlight font-medium rounded-full text-sm mb-4">
            <Sparkles className="w-4 h-4" />
            Hubungi Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Siap <span className="text-gradient">Berkolaborasi</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Hubungi kami untuk mendiskusikan kebutuhan penerbitan dan tools bisnis Anda. 
            Tim kami siap membantu Anda.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-border/50">
              <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                Informasi Kontak
              </h3>
              
              <div className="space-y-6">
                {contactItems.map((item, index) => (
                  <motion.a 
                    key={index}
                    href={item.href}
                    target={item.title === "Lokasi" ? "_blank" : undefined}
                    rel={item.title === "Lokasi" ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 group p-3 -m-3 rounded-xl hover:bg-secondary/50 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <div className={`w-12 h-12 ${item.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                      <item.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className={`font-semibold text-foreground group-hover:text-${item.hoverColor} transition-colors`}>{item.title}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-background rounded-2xl p-8 shadow-lg border border-border/50"
            >
              <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                Ikuti Kami
              </h3>
              
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://wa.me/6281223598599"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 bg-[#25D366]/10 text-[#25D366] rounded-xl hover:bg-[#25D366]/20 hover:scale-105 transition-all shadow-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-medium">WhatsApp</span>
                </a>
                
                <a 
                  href="https://www.instagram.com/ldpgroup.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-[#833AB4]/10 via-[#FD1D1D]/10 to-[#FCAF45]/10 text-[#E1306C] rounded-xl hover:from-[#833AB4]/20 hover:via-[#FD1D1D]/20 hover:to-[#FCAF45]/20 hover:scale-105 transition-all shadow-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="font-medium">Instagram</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/company/ldpgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 bg-[#0A66C2]/10 text-[#0A66C2] rounded-xl hover:bg-[#0A66C2]/20 hover:scale-105 transition-all shadow-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-background rounded-2xl p-8 shadow-lg border border-border/50"
          >
            <h3 className="text-xl font-heading font-bold text-foreground mb-6">
              Kirim Pesan
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Nama Lengkap</label>
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Masukkan nama Anda" 
                    className="h-12 bg-secondary/30 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl"
                    maxLength={100}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email@example.com" 
                    className="h-12 bg-secondary/30 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl"
                    maxLength={255}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Subjek</label>
                <Input 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Topik pesan Anda" 
                  className="h-12 bg-secondary/30 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl"
                  maxLength={200}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Pesan</label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tulis pesan Anda di sini..." 
                  rows={5}
                  className="bg-secondary/30 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none rounded-xl"
                  maxLength={1000}
                />
              </div>
              
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full shadow-lg shadow-highlight/25 hover:shadow-xl hover:shadow-highlight/30 transition-all group" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Membuka Email..." : "Kirim Pesan"}
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
