import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";

interface IndividualProject {
  number: string;
  title: string;
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
    title: "Personal Developer Portfolio Website",
    description:
      "A personal developer portfolio website created to showcase skills, projects, certifications, and learning journey in a professional way.",
    purpose:
      "Used as an online identity to showcase technical skills, projects, achievements, and career profile to recruiters. Acts as a single hub linking resume, GitHub, LinkedIn, and live project demos.",
    tech: ["React", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Framer Motion"],
    uiux:
      "Clean, modern, neon-themed layout with smooth scroll navigation, dark/light mode toggle, glassmorphism cards, and animated section reveals for a premium recruiter-friendly experience.",
    features: [
      "Hero, About, Skills, Projects, Experience & Contact sections",
      "Dark / Light mode with neon accents",
      "Multi-language support (EN, TA, HI, TE)",
      "Auto-scrolling certificate & podcast carousels",
      "Fully responsive across mobile, tablet, and desktop",
    ],
    liveLink: "https://baskaran-developer-portfolio.vercel.app/",
  },
  {
    number: "02",
    title: "Next Hire Faster",
    description:
      "A career-focused web application designed to help users improve their job searching and career preparation journey.",
    purpose:
      "Solves the common problem of disorganized job hunting by helping users track applications, prepare for interviews, and accelerate their hiring process in one place.",
    tech: ["React", "JavaScript", "CSS", "REST API"],
    uiux:
      "Minimal and focused interface with intuitive dashboards, clear call-to-actions, and distraction-free layouts that guide users through every step of their hiring journey.",
    features: [
      "Career preparation tools and resources",
      "Job application tracking dashboard",
      "Interview readiness guidance",
      "Clean, distraction-free user flow",
      "Responsive design for on-the-go use",
    ],
    liveLink: "https://next-hire-faster.vercel.app/",
  },
  {
    number: "03",
    title: "AK Billing System",
    description:
      "A billing management system developed to simplify invoice creation and business transaction handling for small businesses.",
    purpose:
      "Helps shops and small businesses digitize their billing operations — generating invoices, tracking sales, and managing customers efficiently without paperwork.",
    tech: ["React", "JavaScript", "CSS", "Database / API"],
    uiux:
      "Business-friendly dashboard with a structured invoice builder, large readable typography, and an organized layout optimized for fast data entry and quick checkout.",
    features: [
      "Quick invoice generation & printing",
      "Product and customer management",
      "Real-time bill calculation with tax",
      "Sales transaction history",
      "Responsive UI usable on counter tablets & desktops",
    ],
    liveLink: "https://ak-billing-system.vercel.app/",
  },
];

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
            Self-built, real-world projects showcasing end-to-end development —
            from concept and design to deployment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, i) => (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="group relative p-6 rounded-2xl bg-card card-elevated neon-border flex flex-col transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold tracking-wider">
                    <Sparkles size={12} />
                    PROJECT NO_{project.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">
                    Purpose / Real-world Usage
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.purpose}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                    UI / UX Design
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.uiux}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                    Key Features
                  </h4>
                  <ul className="space-y-1.5">
                    {project.features.map((f) => (
                      <li
                        key={f}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">▹</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-5">
                  <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neon-btn inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-all"
                  >
                    View Live Project
                    <ExternalLink size={16} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndividualProjectsSection;
