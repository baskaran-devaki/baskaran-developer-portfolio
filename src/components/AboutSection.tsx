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
    <section id="about" className="py-20 section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-2">{t("about.title")}</h2>
          <div className="w-12 h-1 bg-primary rounded mx-auto mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-center mb-12 leading-relaxed">
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
                className="flex items-start gap-4 p-5 rounded-xl bg-card card-elevated"
              >
                <div className="p-2.5 rounded-lg bg-accent text-accent-foreground flex-shrink-0">
                  <item.icon size={20} />
                </div>
                <p className="text-sm text-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
