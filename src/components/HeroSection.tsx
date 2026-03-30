import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter, Mail } from "lucide-react";
import baskaranImg from "@/assets/baskaran.jpg";
import heroBg1 from "@/assets/hero-bg-1.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import heroBg3 from "@/assets/hero-bg-3.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const heroImages = [heroBg1, heroBg2, heroBg3];

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/baskarandevaki", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/baskarandevaki", label: "Twitter" },
  { icon: Mail, href: "mailto:baskar.sona46@gmail.com", label: "Email" },
  { icon: Github, href: "https://github.com/baskaran-devaki", label: "GitHub" },
  { icon: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.783-1.278A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.137 0-4.146-.663-5.829-1.918l-.246-.178-3.577.956.811-3.407-.206-.279A9.955 9.955 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
    </svg>
  ), href: "https://wa.me/918778243596", label: "WhatsApp" },
];

const HeroSection = () => {
  const { t } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Slideshow Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1.05 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.5 }, scale: { duration: 8, ease: "linear" } }}
        >
          <img
            src={heroImages[currentImage]}
            alt=""
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[hsl(222,30%,6%,0.75)] via-[hsl(222,30%,6%,0.85)] to-[hsl(222,30%,6%,0.95)]" />

      {/* Decorative particles */}
      <div className="absolute inset-0 z-[2] opacity-30" style={{
        backgroundImage: "radial-gradient(hsl(190 80% 50%) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }} />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              className="text-sm font-medium tracking-[0.2em] uppercase mb-4"
              style={{ color: "hsl(190 80% 60%)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t("hero.greeting")}
            </motion.p>
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span className="text-white">BASKARAN </span>
              <span className="text-gradient-glow">R</span>
            </motion.h1>
            <motion.h2
              className="text-xl sm:text-2xl font-medium mb-5"
              style={{ color: "hsl(220 20% 75%)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {t("hero.subtitle")}
            </motion.h2>
            <motion.p
              className="max-w-lg mx-auto md:mx-0 leading-relaxed mb-8"
              style={{ color: "hsl(220 15% 60%)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              className="flex items-center justify-center md:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="p-3 rounded-full border border-[hsl(190,80%,50%,0.3)] text-[hsl(190,80%,60%)] hover:bg-[hsl(190,80%,50%,0.15)] hover:border-[hsl(190,80%,50%,0.6)] hover:text-white hover:shadow-[0_0_20px_hsl(190,80%,50%,0.3)] transition-all duration-300 hover:scale-110"
                >
                  <item.icon size={20} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[hsl(190,80%,50%,0.4)] via-[hsl(220,80%,55%,0.4)] to-[hsl(270,60%,55%,0.4)] blur-xl animate-pulse-glow" />
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-2 border-[hsl(190,80%,50%,0.5)]">
                <img
                  src={baskaranImg}
                  alt="Baskaran R"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={20} className="text-[hsl(190,80%,60%)]" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
