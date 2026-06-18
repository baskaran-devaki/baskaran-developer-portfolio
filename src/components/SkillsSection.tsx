import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 90 },
  { name: "Python", level: 87 },
  { name: "JavaScript", level: 91 },
  { name: "NodeJS", level: 87 },
  { name: "ReactJS", level: 91 },
  { name: "SQL", level: 92 },
  { name: "DSA", level: 42 },
  { name: "Generative AI", level: 66 },
];

const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-2">
            {t("skills.title")}
          </h2>
          <div className="w-12 h-1 bg-primary rounded mx-auto mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="p-5 rounded-xl bg-card card-elevated neon-border hover:shadow-[0_0_20px_hsl(var(--primary)/0.25)] transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-semibold text-foreground">
                    {skill.name}
                  </span>
                  <span className="text-xs font-mono text-primary">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60 shadow-[0_0_10px_hsl(var(--primary)/0.6)]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.05, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
