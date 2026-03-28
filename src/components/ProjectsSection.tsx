import { motion } from "framer-motion";
import { ExternalLink, Github, Award } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ProjectsSection = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t("projects.data.title"),
      institution: "CCBP 4.0 Academy",
      description: t("projects.data.desc"),
      tech: ["Power BI", "Kaggle", "Excel", "Data Analytics"],
      certificate: "https://drive.google.com/file/d/1v-nQqb_WU7xWU_7TYxslo2rWgakDWDRm/view?usp=sharing",
    },
    {
      title: t("projects.uiux.title"),
      institution: "CCBP 4.0 Academy",
      description: t("projects.uiux.desc"),
      tech: ["Figma", "UI/UX Design", "Prototyping"],
      certificate: "https://drive.google.com/file/d/1kD8BEK5nRiHuhH71ext4V8IM1ffpI_Wn/view?usp=sharing",
    },
    {
      title: t("projects.mcp.title"),
      institution: "CCBP 4.0 Academy",
      description: t("projects.mcp.desc"),
      tech: ["MCP", "Cursor IDE", "Pipedream", "AI"],
      certificate: "https://drive.google.com/file/d/14G1P1fwgrxSaQFtgt7qB5KaLiwbjkul6/view?usp=sharing",
    },
    {
      title: t("projects.ai.title"),
      institution: "CCBP 4.0 Academy",
      description: t("projects.ai.desc"),
      tech: ["Make.com", "AI Agents", "MCP Servers", "APIs"],
      certificate: "https://drive.google.com/file/d/1BaA2BOCUFI7xDoos6MW48gc7O1YGoMzz/view?usp=sharing",
    },
  ];

  return (
    <section id="projects" className="py-20 section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-2">{t("projects.title")}</h2>
          <div className="w-12 h-1 bg-primary rounded mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-xl bg-card card-elevated flex flex-col"
              >
                <h3 className="text-lg font-bold text-foreground mb-1">{project.title}</h3>
                {"institution" in project && project.institution && (
                  <p className="text-xs font-medium text-primary mb-3">{project.institution}</p>
                )}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {"github" in project && project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                      <Github size={16} />
                      {t("projects.github")}
                      <ExternalLink size={14} />
                    </a>
                  )}
                  {"certificate" in project && project.certificate && (
                    <a
                      href={project.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                      <Award size={16} />
                      {t("projects.certificate")}
                      <ExternalLink size={14} />
                    </a>
                  )}
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
