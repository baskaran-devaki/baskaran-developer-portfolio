import { motion } from "framer-motion";
import { ExternalLink, Sparkles, Code2 } from "lucide-react";
import { useState } from "react";

interface IndividualProject {
  number: string;
  title: string;
  shortDesc: string;
  description: string;
  purpose: string;
  tech: string[];
  uiux: string;
  features: string[];
  liveLink: string;
}

const projects: IndividualProject[] = [
  {
    number: "01",
    title: "Personal Developer Portfolio",
    shortDesc: "Modern neon-themed portfolio to showcase my work.",
    description:
      "A personal developer portfolio website created to showcase skills, projects, certifications, and learning journey in a professional way.",
    purpose:
      "Used as an online identity to showcase technical skills, projects, achievements, and career profile to recruiters.",
    tech: ["React", "Tailwind", "Framer Motion"],
    uiux:
      "Clean, modern, neon-themed layout with smooth scroll, dark/light toggle and glassmorphism cards.",
    features: [
      "Dark / Light neon theme",
      "Multi-language (EN, TA, HI, TE)",
      "Auto-scrolling carousels",
      "Fully responsive",
    ],
    liveLink: "https://baskaran-developer-portfolio.vercel.app/",
  },
  {
    number: "02",
    title: "Next Hire Faster",
    shortDesc: "Career app to track jobs and ace interviews.",
    description:
      "A career-focused web application designed to help users improve their job searching and career preparation journey.",
    purpose:
      "Helps users organize job hunting, track applications, and prepare for interviews in one place.",
    tech: ["React", "JavaScript", "REST API"],
    uiux:
      "Minimal, focused interface with intuitive dashboards and distraction-free layouts.",
    features: [
      "Career prep tools",
      "Application tracking",
      "Interview guidance",
      "Responsive design",
    ],
    liveLink: "https://next-hire-faster.vercel.app/",
  },
  {
    number: "03",
    title: "AK Billing System",
    shortDesc: "Smart billing & invoice tool for small businesses.",
    description:
      "A billing management system developed to simplify invoice creation and business transaction handling for small businesses.",
    purpose:
      "Helps shops digitize billing — invoices, sales, and customers without paperwork.",
    tech: ["React", "JavaScript", "Database/API"],
    uiux:
      "Business-friendly dashboard with structured invoice builder and large readable typography.",
    features: [
      "Quick invoice generation",
      "Product & customer management",
      "Real-time tax calculation",
      "Sales history",
    ],
    liveLink: "https://ak-billing-system.vercel.app/",
  },
];

const FlipCard = ({ project, index }: { project: IndividualProject; index: number }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group [perspective:1200px] h-[440px]"
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] p-6 rounded-2xl bg-card card-elevated neon-border flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold tracking-wider">
              <Sparkles size={12} />
              PROJECT_{project.number}
            </span>
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Code2 size={18} />
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center text-center">
            <div className="mx-auto mb-5 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/30 shadow-[0_0_25px_hsl(var(--primary)/0.25)]">
              <Sparkles size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              {project.shortDesc}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-accent text-accent-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <p className="text-center text-[11px] text-muted-foreground italic mt-4">
            Hover or tap to view details
          </p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] p-5 rounded-2xl bg-card card-elevated neon-border flex flex-col overflow-y-auto">
          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed mb-3">
            {project.description}
          </p>

          <div className="mb-3">
            <h4 className="text-[10px] font-semibold text-primary uppercase tracking-wider mb-1">
              Purpose
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {project.purpose}
            </p>
          </div>

          <div className="mb-3">
            <h4 className="text-[10px] font-semibold text-primary uppercase tracking-wider mb-1">
              UI / UX
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {project.uiux}
            </p>
          </div>

          <div className="mb-3">
            <h4 className="text-[10px] font-semibold text-primary uppercase tracking-wider mb-1">
              Key Features
            </h4>
            <ul className="space-y-1">
              {project.features.map((f) => (
                <li
                  key={f}
                  className="text-xs text-muted-foreground flex items-start gap-1.5"
                >
                  <span className="text-primary mt-0.5">▹</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-accent text-accent-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="neon-btn mt-auto inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-all"
          >
            View Live Project
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const IndividualProjectsSection = () => {
  return (
    <section id="individual-projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-2">
            Individual Projects
          </h2>
          <div className="w-12 h-1 bg-primary rounded mx-auto mb-4" />
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Self-built, real-world projects — hover or tap to flip and explore the details.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((p, i) => (
              <FlipCard key={p.number} project={p} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndividualProjectsSection;
