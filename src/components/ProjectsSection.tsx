import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="p-6 rounded-xl bg-card card-elevated flex flex-col"
              >
                <h3 className="text-lg font-bold text-foreground mb-3">{project.title}</h3>
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
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  <Github size={16} />
                  View on GitHub
                  <ExternalLink size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
