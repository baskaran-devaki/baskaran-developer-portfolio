import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react";

const contactLinks = [
  { icon: Mail, label: "Email", value: "baskar.sona46@gmail.com", href: "mailto:baskar.sona46@gmail.com" },
  { icon: Phone, label: "Mobile", value: "8778243596", href: "tel:8778243596" },
  { icon: Github, label: "GitHub", value: "baskaran-devaki", href: "https://github.com/baskaran-devaki" },
  { icon: Linkedin, label: "LinkedIn", value: "baskarandevaki", href: "https://linkedin.com/in/baskarandevaki" },
  { icon: Twitter, label: "Twitter", value: "baskarandevaki", href: "https://twitter.com/baskarandevaki" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-2">Get In Touch</h2>
          <div className="w-12 h-1 bg-primary rounded mx-auto mb-4" />
          <p className="text-muted-foreground text-center max-w-md mx-auto mb-12">
            I'm open to opportunities and collaborations. Feel free to reach out!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {contactLinks.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-4 p-5 rounded-xl bg-card card-elevated group"
              >
                <div className="p-2.5 rounded-lg bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <item.icon size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                  <p className="text-sm font-medium text-foreground truncate">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
