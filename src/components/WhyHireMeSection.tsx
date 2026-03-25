import { motion } from "framer-motion";
import { Brain, Zap, BookOpen, Rocket } from "lucide-react";

const cards = [
  {
    icon: Brain,
    title: "Strong Problem-Solving Skills",
    description: "I approach challenges methodically, breaking complex problems into manageable solutions with clean, efficient code.",
  },
  {
    icon: Zap,
    title: "Quick Adaptability",
    description: "I rapidly learn and adopt new technologies, frameworks, and tools to stay current in the fast-paced tech industry.",
  },
  {
    icon: BookOpen,
    title: "Passion for Continuous Learning",
    description: "I'm committed to lifelong learning, constantly exploring new concepts and improving my skills through courses and projects.",
  },
  {
    icon: Rocket,
    title: "Real-World Project Builder",
    description: "I don't just learn theory — I build practical, functional applications that solve real problems and deliver value.",
  },
];

const WhyHireMeSection = () => {
  return (
    <section id="why-hire-me" className="py-20 section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-2">Why Hire Me</h2>
          <div className="w-12 h-1 bg-primary rounded mx-auto mb-4" />
          <p className="text-muted-foreground text-center max-w-lg mx-auto mb-12">
            Here's what sets me apart and makes me a great addition to your team.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_24px_hsl(var(--primary)/0.15)] hover:border-primary/40"
              >
                <div className="mx-auto mb-4 inline-flex p-3.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <card.icon size={28} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyHireMeSection;
