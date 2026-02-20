import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter, Mail } from "lucide-react";
import baskaranImg from "@/assets/baskaran.jpg";

const contactLinks = [
  { icon: Github, href: "https://github.com/baskaran-devaki", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/baskarandevaki", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/baskarandevaki", label: "Twitter" },
  { icon: Mail, href: "mailto:baskar.sona46@gmail.com", label: "Email" },
];

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(hsl(215 80% 48%) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Text */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-4">
              BASKARAN <span className="text-gradient">R</span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium text-muted-foreground mb-4">
              Aspiring Full Stack Developer
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto md:mx-0 leading-relaxed">
              Passionate about building scalable web applications with modern technologies. Turning ideas into elegant, functional digital experiences.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-accent ring-4 ring-primary/10">
              <img
                src={baskaranImg}
                alt="Baskaran R"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>
        </div>

        {/* Contact Icons */}
        <motion.div
          className="flex justify-center gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="p-2.5 rounded-full bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
            >
              <link.icon size={20} />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={20} className="text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
