import { motion } from "framer-motion";
import { GraduationCap, Rocket, Award, ExternalLink } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const timeline = [
  {
    icon: GraduationCap,
    title: "Full Stack Development at NxtWave",
    description: "Currently learning full stack web development with industry-relevant curriculum covering frontend, backend, and database technologies.",
    status: "In Progress",
  },
  {
    icon: Rocket,
    title: "Real-World Projects",
    description: "Completed multiple hands-on projects including a Student Management System and BookMyShow Clone, applying learned skills to practical scenarios.",
    status: "Completed",
  },
];

const certificates = [
  {
    title: "Build Your Own Static Website",
    date: "Aug 17, 2023",
    tech: "HTML, CSS, Bootstrap",
    description: "Built structured and styled web pages",
    link: "https://drive.google.com/file/d/1UAOhp84RhQaM0omK1WnQk0iV4BYaOPGz/view?usp=sharing",
  },
  {
    title: "Build Your Own Responsive Website",
    date: "Apr 22, 2024",
    tech: "Bootstrap, Flexbox",
    description: "Designed mobile-friendly layouts",
    link: "https://drive.google.com/file/d/1sgmRtuLZA-yFnfxupaaihnQxZ0I3VOx4/view?usp=sharing",
  },
  {
    title: "Programming Foundations with Python",
    date: "Jun 20, 2024",
    tech: "Python",
    description: "Learned programming basics",
    link: "https://drive.google.com/file/d/1pMwenhyZeqnJlQFEfz2_F2Y1peqUtv-f/view?usp=sharing",
  },
  {
    title: "Build Your Own Dynamic Website",
    date: "Sep 07, 2024",
    tech: "JavaScript",
    description: "Built dynamic applications",
    link: "https://drive.google.com/file/d/1E0MU-CjVVyXDFOywx91Ouw1oo8c-OBPK/view?usp=sharing",
  },
  {
    title: "JavaScript Essentials",
    date: "Nov 06, 2024",
    tech: "JavaScript",
    description: "Built dynamic web features",
    link: "https://drive.google.com/file/d/1dEuZiVWiYOSEWdJZSXkElMzys8fhKxNb/view?usp=drive_link",
  },
  {
    title: "Responsive Web Design using Flexbox",
    date: "Nov 29, 2024",
    tech: "CSS Flexbox",
    description: "Created flexible layouts",
    link: "https://drive.google.com/file/d/1IcYuHRXHKqPlUHjYhYp9p1kniG0D0prk/view?usp=drive_link",
  },
  {
    title: "Developer Foundations",
    date: "Dec 14, 2024",
    tech: "Git, Command Line Tools",
    description: "Learned development workflow",
    link: "https://drive.google.com/file/d/1eKIO8jg8Ffoqb2CE6QU80TUS2PtGuW-p/view?usp=drive_link",
  },
  {
    title: "Introduction to Databases",
    date: "Mar 05, 2024",
    tech: "SQL",
    description: "Learned database queries",
    link: "https://drive.google.com/file/d/1IcYuHRXHKqPlUHjYhYp9p1kniG0D0prk/view?usp=drive_link",
  },
];

const ExperienceSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let scrollPos = 0;

    const step = () => {
      if (!isPaused && el) {
        scrollPos += 1.5;
        // Reset when we've scrolled through the first set
        if (scrollPos >= el.scrollWidth / 2) {
          scrollPos = 0;
        }
        el.scrollLeft = scrollPos;
      }
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Duplicate cards for infinite loop
  const allCerts = [...certificates, ...certificates];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-2">Learning Journey</h2>
          <div className="w-12 h-1 bg-primary rounded mx-auto mb-12" />

          {/* Timeline */}
          <div className="max-w-2xl mx-auto space-y-8 mb-16">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="flex gap-5"
              >
                <div className="flex flex-col items-center">
                  <div className="p-3 rounded-full bg-accent text-accent-foreground">
                    <item.icon size={20} />
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-3" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements Sub-section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Award size={24} className="text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Achievements</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              I have completed multiple certifications during my learning journey.
            </p>
          </motion.div>

          {/* Certificate Cards - Auto-scrolling infinite loop */}
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {allCerts.map((cert, i) => (
              <a
                key={`${cert.title}-${i}`}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group snap-start shrink-0 w-[280px] rounded-xl border border-border bg-card p-5 flex flex-col justify-between min-h-[180px] cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] hover:border-primary/40"
              >
                {/* Top row: icon + date */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Award size={18} />
                  </div>
                  <span className="text-xs text-muted-foreground">{cert.date}</span>
                </div>

                {/* Center: title + description */}
                <div className="text-center flex-1 flex flex-col justify-center mb-4">
                  <h4 className="font-semibold text-foreground text-sm leading-snug mb-1.5">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">{cert.description}</p>
                </div>

                {/* Bottom row: tech + link icon */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent text-accent-foreground">
                    {cert.tech}
                  </span>
                  <ExternalLink size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
