import { motion } from "framer-motion";
import { User, Zap, Users, BookOpen } from "lucide-react";

const highlights = [
  { icon: BookOpen, text: "Currently learning Full Stack Development through NxtWave" },
  { icon: Zap, text: "Strong interest in problem solving & building real-world projects" },
  { icon: User, text: "Fast learner with a growth mindset" },
  { icon: Users, text: "Excellent team player & collaborator" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-2">About Me</h2>
          <div className="w-12 h-1 bg-primary rounded mx-auto mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-center mb-12 leading-relaxed">
            I am an aspiring Full Stack Developer currently learning through NxtWave. Skilled in HTML, CSS, JavaScript, React, Node.js, and Python. I have a strong interest in problem solving and building real-world projects that make an impact.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-card card-elevated"
              >
                <div className="p-2.5 rounded-lg bg-accent text-accent-foreground flex-shrink-0">
                  <item.icon size={20} />
                </div>
                <p className="text-sm text-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
