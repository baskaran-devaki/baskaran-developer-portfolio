import { motion } from "framer-motion";
import { BookOpen, Code2, Sparkles, Award, ExternalLink } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const certificates = [
  { title: "Build Your Own Static Website", date: "Aug 17, 2023", tech: "HTML, CSS, Bootstrap", description: "Built structured and styled web pages", link: "https://drive.google.com/file/d/1UAOhp84RhQaM0omK1WnQk0iV4BYaOPGz/view?usp=sharing" },
  { title: "Build Your Own Responsive Website", date: "Apr 22, 2024", tech: "Bootstrap, Flexbox", description: "Designed mobile-friendly layouts", link: "https://drive.google.com/file/d/1sgmRtuLZA-yFnfxupaaihnQxZ0I3VOx4/view?usp=sharing" },
  { title: "Programming Foundations with Python", date: "Jun 20, 2024", tech: "Python", description: "Learned programming basics", link: "https://drive.google.com/file/d/1pMwenhyZeqnJlQFEfz2_F2Y1peqUtv-f/view?usp=sharing" },
  { title: "Build Your Own Dynamic Website", date: "Sep 07, 2024", tech: "JavaScript", description: "Built dynamic applications", link: "https://drive.google.com/file/d/1E0MU-CjVVyXDFOywx91Ouw1oo8c-OBPK/view?usp=sharing" },
  { title: "JavaScript Essentials", date: "Nov 06, 2024", tech: "JavaScript", description: "Built dynamic web features", link: "https://drive.google.com/file/d/1dEuZiVWiYOSEWdJZSXkElMzys8fhKxNb/view?usp=drive_link" },
  { title: "Responsive Web Design using Flexbox", date: "Nov 29, 2024", tech: "CSS Flexbox", description: "Created flexible layouts", link: "https://drive.google.com/file/d/1IcYuHRXHKqPlUHjYhYp9p1kniG0D0prk/view?usp=drive_link" },
  { title: "Developer Foundations", date: "Dec 14, 2024", tech: "Git, Command Line Tools", description: "Learned development workflow", link: "https://drive.google.com/file/d/1eKIO8jg8Ffoqb2CE6QU80TUS2PtGuW-p/view?usp=drive_link" },
  { title: "Introduction to Databases", date: "Mar 05, 2024", tech: "SQL", description: "Learned database queries", link: "https://drive.google.com/file/d/1Vm3AQePe7fOzB6IWwyrmHR4yUx9_o7fz/view?usp=drive_link" },
];

const ExperienceSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const { t } = useLanguage();

  const timeline = [
    { icon: BookOpen, title: t("experience.step1.title"), description: t("experience.step1.desc"), step: `${t("experience.step")} 1` },
    { icon: Code2, title: t("experience.step2.title"), description: t("experience.step2.desc"), step: `${t("experience.step")} 2` },
    { icon: Sparkles, title: t("experience.step3.title"), description: t("experience.step3.desc"), step: `${t("experience.step")} 3` },
  ];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animationId: number;
    let scrollPos = 0;
    const step = () => {
      if (!isPaused && el) {
        scrollPos += 2;
        if (scrollPos >= el.scrollWidth / 2) scrollPos = 0;
        el.scrollLeft = scrollPos;
      }
      animationId = requestAnimationFrame(step);
    };
    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  const allCerts = [...certificates, ...certificates];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl font-bold text-foreground text-center mb-2">{t("experience.title")}</h2>
          <div className="w-12 h-1 bg-primary rounded mx-auto mb-12" />

          <div className="relative max-w-2xl mx-auto mb-16">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className={`relative flex items-start gap-6 mb-12 last:mb-0 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                  <div className="p-3 rounded-full bg-primary text-primary-foreground shadow-lg">
                    <item.icon size={22} />
                  </div>
                </div>
                <div className={`flex-1 rounded-xl border border-border bg-card p-5 card-elevated md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
                  <span className="inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full bg-primary/10 text-primary mb-2">{item.step}</span>
                  <h3 className="font-semibold text-foreground text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Award size={24} className="text-primary" />
              <h3 className="text-2xl font-bold text-foreground">{t("experience.achievements")}</h3>
            </div>
            <p className="text-muted-foreground text-sm">{t("experience.achievements.desc")}</p>
          </motion.div>

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
              <a key={`${cert.title}-${i}`} href={cert.link} target="_blank" rel="noopener noreferrer" className="group snap-start shrink-0 w-[280px] rounded-xl border border-border bg-card p-5 flex flex-col justify-between min-h-[180px] cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] hover:border-primary/40">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary"><Award size={18} /></div>
                  <span className="text-xs text-muted-foreground">{cert.date}</span>
                </div>
                <div className="text-center flex-1 flex flex-col justify-center mb-4">
                  <h4 className="font-semibold text-foreground text-sm leading-snug mb-1.5">{cert.title}</h4>
                  <p className="text-xs text-muted-foreground">{cert.description}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent text-accent-foreground">{cert.tech}</span>
                  <ExternalLink size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4 italic">Click any certificate card to view certificate</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
