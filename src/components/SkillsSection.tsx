import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const SkillsSection = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t("skills.frontend"),
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 91 },
        { name: "ReactJS", level: 91 },
      ],
    },
    {
      title: t("skills.backend"),
      skills: [
        { name: "NodeJS", level: 87 },
        { name: "Python", level: 87 },
      ],
    },
    {
      title: t("skills.database"),
      skills: [
        { name: "MongoDB", level: 90 },
      ],
    },
    {
      title: t("skills.tools"),
      skills: [
        { name: "Git", level: 80 },
        { name: "GitHub", level: 85 },
        { name: "VS Code", level: 90 },
      ],
    },
    {
      title: t("skills.learning"),
      skills: [
        { name: "Generative AI", level: 66 },
      ],
    },
    {
      title: t("skills.problemsolving"),
      skills: [
        { name: "DSA", level: 42 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-2">{t("skills.title")}</h2>
          <div className="w-12 h-1 bg-primary rounded mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skillCategories.map((cat, ci) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: ci * 0.1 }}
                className="p-6 rounded-xl bg-card card-elevated neon-border"
              >
                <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-5">
                  {cat.title}
                </h3>
                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-primary"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
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
