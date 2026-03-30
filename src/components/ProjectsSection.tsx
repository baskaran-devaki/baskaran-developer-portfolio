import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ProjectsSection = () => {
  const { t } = useLanguage();

  const projects = [
    { title: t("projects.data.title"), institution: "CCBP 4.0 Academy", description: t("projects.data.desc"), tech: ["Power BI", "Kaggle", "Excel", "Data Analytics"], certificate: "https://drive.google.com/file/d/1v-nQqb_WU7xWU_7TYxslo2rWgakDWDRm/view?usp=sharing" },
    { title: t("projects.uiux.title"), institution: "CCBP 4.0 Academy", description: t("projects.uiux.desc"), tech: ["Figma", "UI/UX Design", "Prototyping"], certificate: "https://drive.google.com/file/d/1kD8BEK5nRiHuhH71ext4V8IM1ffpI_Wn/view?usp=sharing" },
    { title: t("projects.mcp.title"), institution: "CCBP 4.0 Academy", description: t("projects.mcp.desc"), tech: ["MCP", "Cursor IDE", "Pipedream", "AI"], certificate: "https://drive.google.com/file/d/14G1P1fwgrxSaQFtgt7qB5KaLiwbjkul6/view?usp=sharing" },
    { title: t("projects.ai.title"), institution: "CCBP 4.0 Academy", description: t("projects.ai.desc"), tech: ["Make.com", "AI Agents", "MCP Servers", "APIs"], certificate: "https://drive.google.com/file/d/1BaA2BOCUFI7xDoos6MW48gc7O1YGoMzz/view?usp=sharing" },
  ];

  return (
    <section id="projects" className="py-20 section-gradient-3 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[hsl(270,60%,55%,0.04)] blur-3xl" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-2">{t("projects.title")}</h2>
          <div className="w-16 h-1 rounded-full mx-auto mb-12 bg-gradient-to-r from-[hsl(190,80%,50%)] to-[hsl(270,60%,55%)]" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-2xl glass-card flex flex-col"
              >
                <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                <p className="text-xs font-medium text-[hsl(190,80%,60%)] mb-3">{project.institution}</p>
                <p className="text-sm text-[hsl(220,15%,60%)] leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-[hsl(190,80%,50%,0.1)] text-[hsl(190,80%,60%)] border border-[hsl(190,80%,50%,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[hsl(190,80%,60%)] hover:text-white transition-colors"
                  >
                    <Award size={16} />
                    {t("projects.certificate")}
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
