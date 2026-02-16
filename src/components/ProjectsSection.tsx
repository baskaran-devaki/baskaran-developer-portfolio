import { motion } from "framer-motion";
import { ExternalLink, Github, Award } from "lucide-react";

const projects = [
  {
    title: "Student Management System",
    description:
      "A full CRUD application for managing student records with add, edit, delete, and search functionality. Built with a clean UI and efficient data handling.",
    tech: ["React", "Node.js", "MySQL", "CSS"],
    github: "https://github.com/baskaran-devaki",
  },
  {
    title: "BookMyShow Clone",
    description:
      "A feature-rich clone of the BookMyShow platform with movie listing, seat selection UI, and booking functionality. Responsive design with modern UI elements.",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/baskaran-devaki",
  },
  {
    title: "Data Analytics Mega Workshop Project",
    institution: "CCBP 4.0 Academy",
    description:
      "Developed an interactive dashboard using Power BI, Kaggle, and Excel, performing data cleaning, analysis, and visualization to extract actionable business insights.",
    tech: ["Power BI", "Kaggle", "Excel", "Data Analytics"],
    certificate: "https://drive.google.com/file/d/1v-nQqb_WU7xWU_7TYxslo2rWgakDWDRm/view?usp=sharing",
  },
  {
    title: "UI/UX Mega Workshop Project",
    institution: "CCBP 4.0 Academy",
    description:
      "Redesigned a complete application using Figma, applying user-centered design principles, creating design systems, and building interactive prototypes with modern UI/UX best practices.",
    tech: ["Figma", "UI/UX Design", "Prototyping"],
    certificate: "https://drive.google.com/file/d/1kD8BEK5nRiHuhH71ext4V8IM1ffpI_Wn/view?usp=sharing",
  },
  {
    title: "MCP Mega Workshop Project",
    institution: "CCBP 4.0 Academy",
    description:
      "Created prompt-driven AI workflows using Model Context Protocol, Cursor IDE, and Pipedream, integrating AI applications with seamless tool integrations.",
    tech: ["MCP", "Cursor IDE", "Pipedream", "AI"],
    certificate: "https://drive.google.com/file/d/14G1P1fwgrxSaQFtgt7qB5KaLiwbjkul6/view?usp=sharing",
  },
  {
    title: "AI Workflows & Automations Workshop Project",
    institution: "CCBP 4.0 Academy",
    description:
      "Built end-to-end automation workflows using Make.com, integrating AI agents, MCP servers, and APIs to create efficient systems for business process optimization.",
    tech: ["Make.com", "AI Agents", "MCP Servers", "APIs"],
    certificate: "https://drive.google.com/file/d/1BaA2BOCUFI7xDoos6MW48gc7O1YGoMzz/view?usp=sharing",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-2">Projects</h2>
          <div className="w-12 h-1 bg-primary rounded mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
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
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground"
                    >
                      {t}
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
                      GitHub
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
                      Certificate
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
