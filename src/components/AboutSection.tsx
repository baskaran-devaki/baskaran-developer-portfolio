import { motion } from "framer-motion";
import { User, Zap, Users, BookOpen } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  const highlights = [
    { icon: BookOpen, text: t("about.highlight1") },
    { icon: Zap, text: t("about.highlight2") },
    { icon: User, text: t("about.highlight3") },
    { icon: Users, text: t("about.highlight4") },
  ];

  return (
    <section id="about" className="py-20 section-gradient-1 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(hsl(190 80% 50%) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-2">{t("about.title")}</h2>
          <div className="w-16 h-1 rounded-full mx-auto mb-8 bg-gradient-to-r from-[hsl(190,80%,50%)] to-[hsl(270,60%,55%)]" />
          <p className="text-[hsl(220,15%,60%)] max-w-2xl mx-auto text-center mb-12 leading-relaxed">
            {t("about.description")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-2xl glass-card"
              >
                <div className="p-2.5 rounded-xl bg-[hsl(190,80%,50%,0.15)] text-[hsl(190,80%,60%)] flex-shrink-0">
                  <item.icon size={20} />
                </div>
                <p className="text-sm text-[hsl(220,15%,75%)] leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
