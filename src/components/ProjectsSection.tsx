import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const ProjectsSection = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const projects = [
    {
      title: "Build and Launch Your MVP Workshop Project",
      institution: "CCBP 4.0 Academy",
      description:
        "Successfully completed the Build and Launch Your MVP Workshop project by designing, developing, and deploying a functional Minimum Viable Product (MVP) using modern AI and development tools.",
      tech: ["Lovable.dev", "Supabase", "Leonardo AI"],
      certificate:
        "https://drive.google.com/file/d/1iBK6ffV0RqOm5vZfG52Z0jtCT7yMkvDA/view?usp=drive_link",
    },
    {
      title: t("projects.data.title"),
      institution: "CCBP 4.0 Academy",
      description: t("projects.data.desc"),
      tech: ["Power BI", "Kaggle", "Excel", "Data Analytics"],
      certificate:
        "https://drive.google.com/file/d/1v-nQqb_WU7xWU_7TYxslo2rWgakDWDRm/view?usp=sharing",
    },
    {
      title: t("projects.uiux.title"),
      institution: "CCBP 4.0 Academy",
      description: t("projects.uiux.desc"),
      tech: ["Figma", "UI/UX Design", "Prototyping"],
      certificate:
        "https://drive.google.com/file/d/1kD8BEK5nRiHuhH71ext4V8IM1ffpI_Wn/view?usp=sharing",
    },
    {
      title: t("projects.mcp.title"),
      institution: "CCBP 4.0 Academy",
      description: t("projects.mcp.desc"),
      tech: ["MCP", "Cursor IDE", "Pipedream", "AI"],
      certificate:
        "https://drive.google.com/file/d/14G1P1fwgrxSaQFtgt7qB5KaLiwbjkul6/view?usp=sharing",
    },
    {
      title: t("projects.ai.title"),
      institution: "CCBP 4.0 Academy",
      description: t("projects.ai.desc"),
      tech: ["Make.com", "AI Agents", "MCP Servers", "APIs"],
      certificate:
        "https://drive.google.com/file/d/1BaA2BOCUFI7xDoos6MW48gc7O1YGoMzz/view?usp=sharing",
    },
  ];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animationId: number;
    let scrollPos = 0;
    const step = () => {
      if (!isPaused && el) {
        scrollPos += 1.2;
        if (scrollPos >= el.scrollWidth / 2) scrollPos = 0;
        el.scrollLeft = scrollPos;
      }
      animationId = requestAnimationFrame(step);
    };
    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  const allProjects = [...projects, ...projects];

  return (
    <section id="projects" className="py-20 section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-2">
            {t("projects.title")}
          </h2>
          <div className="w-12 h-1 bg-primary rounded mx-auto mb-12" />

          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {allProjects.map((project, i) => (
              <div
                key={`${project.title}-${i}`}
                className="shrink-0 w-[320px] p-6 rounded-xl bg-card card-elevated neon-border flex flex-col hover:scale-[1.02] hover:shadow-[0_0_25px_hsl(var(--primary)/0.3)] transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-foreground mb-1 line-clamp-2 min-h-[3.5rem]">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-primary mb-3">
                  {project.institution}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-accent text-accent-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
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
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4 italic">
            Click any card to view certificate
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
