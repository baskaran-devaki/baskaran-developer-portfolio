import { motion } from "framer-motion";
import { Brain, Zap, BookOpen, Rocket } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const WhyHireMeSection = () => {
  const { t } = useLanguage();

  const cards = [
    { icon: Brain, title: t("whyhire.card1.title"), description: t("whyhire.card1.desc") },
    { icon: Zap, title: t("whyhire.card2.title"), description: t("whyhire.card2.desc") },
    { icon: BookOpen, title: t("whyhire.card3.title"), description: t("whyhire.card3.desc") },
    { icon: Rocket, title: t("whyhire.card4.title"), description: t("whyhire.card4.desc") },
  ];

  return (
    <section id="why-hire-me" className="py-20 section-gradient-1 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[hsl(270,60%,55%,0.04)] blur-3xl" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl font-bold text-white text-center mb-2">{t("whyhire.title")}</h2>
          <div className="w-16 h-1 rounded-full mx-auto mb-4 bg-gradient-to-r from-[hsl(190,80%,50%)] to-[hsl(270,60%,55%)]" />
          <p className="text-[hsl(220,15%,55%)] text-center max-w-lg mx-auto mb-12">{t("whyhire.subtitle")}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group rounded-2xl p-6 text-center glass-card"
              >
                <div className="mx-auto mb-4 inline-flex p-3.5 rounded-xl bg-[hsl(190,80%,50%,0.12)] text-[hsl(190,80%,60%)] group-hover:bg-gradient-to-r group-hover:from-[hsl(190,80%,50%)] group-hover:to-[hsl(220,80%,55%)] group-hover:text-white transition-all duration-300">
                  <card.icon size={28} />
                </div>
                <h3 className="font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-sm text-[hsl(220,15%,55%)] leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyHireMeSection;
