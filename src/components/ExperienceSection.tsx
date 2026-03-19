import { motion } from "framer-motion";
import { GraduationCap, Rocket, ExternalLink } from "lucide-react";

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

const ExperienceSection = () => {
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

          <div className="max-w-2xl mx-auto space-y-8">
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

          {/* Certifications Button */}
          <div className="text-center mt-10">
            <a
              href="https://drive.google.com/drive/folders/1K32fF5bl9FSONCPoRnDJo3Rs4eDU5zj0?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              View My NxtWave Certifications
              <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
