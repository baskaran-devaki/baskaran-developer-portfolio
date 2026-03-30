import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const SkillsSection = () => {
  const { t } = useLanguage();

  const skillCategories = [
    { title: t("skills.frontend"), skills: [{ name: "HTML", level: 90 }, { name: "CSS", level: 85 }, { name: "JavaScript", level: 80 }, { name: "React", level: 75 }] },
    { title: t("skills.backend"), skills: [{ name: "Node.js", level: 70 }, { name: "Python", level: 75 }] },
    { title: t("skills.database"), skills: [{ name: "MySQL", level: 70 }] },
    { title: t("skills.tools"), skills: [{ name: "Git", level: 80 }, { name: "GitHub", level: 85 }, { name: "VS Code", level: 90 }] },
    { title: t("skills.learning"), skills: [{ name: "Generative AI", level: 30 }] },
  ];

  return (
    <section id="skills" className="py-20 section-gradient-2 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[hsl(215,80%,50%,0.03)] blur-3xl" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-2">{t("skills.title")}</h2>
          <div className="w-16 h-1 rounded-full mx-auto mb-12 bg-gradient-to-r from-[hsl(190,80%,50%)] to-[hsl(270,60%,55%)]" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skillCategories.map((cat, ci) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: ci * 0.1 }}
                className="p-6 rounded-2xl glass-card"
              >
                <h3 className="text-sm font-semibold uppercase tracking-widest text-[hsl(190,80%,60%)] mb-5">
                  {cat.title}
                </h3>
                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm font-medium text-[hsl(220,15%,85%)]">{skill.name}</span>
                        <span className="text-xs text-[hsl(220,15%,55%)]">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-[hsl(222,20%,18%)] rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: "linear-gradient(90deg, hsl(190 80% 50%), hsl(220 80% 55%), hsl(270 60% 55%))" }}
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
