import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Twitter, FileText, MessageCircle, Send, Loader2, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const contactLinks = [
  { icon: Mail, label: "Email", value: "baskar.sona46@gmail.com", href: "mailto:baskar.sona46@gmail.com" },
  { icon: Phone, label: "Mobile", value: "8778243596", href: "tel:8778243596" },
  { icon: Github, label: "GitHub", value: "baskaran-devaki", href: "https://github.com/baskaran-devaki" },
  { icon: Linkedin, label: "LinkedIn", value: "baskarandevaki", href: "https://linkedin.com/in/baskarandevaki" },
  { icon: Twitter, label: "Twitter", value: "baskarandevaki", href: "https://twitter.com/baskarandevaki" },
  { icon: FileText, label: "Resume", value: "View Resume", href: "https://drive.google.com/file/d/1QLL6liuQmyDNQrYnsOD3WpV33qKeV3Ab/view?usp=sharing" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const sendWhatsApp = () => {
    if (!validate()) return;
    setStatus("loading");
    const text = `New Portfolio Message:\n\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`;
    const url = `https://wa.me/918778243596?text=${encodeURIComponent(text)}`;
    setTimeout(() => {
      setStatus("success");
      window.open(url, "_blank");
      setTimeout(() => {
        setForm({ name: "", email: "", message: "" });
        setStatus("idle");
      }, 3000);
    }, 800);
  };

  const sendEmail = () => {
    if (!validate()) return;
    const subject = encodeURIComponent(`Portfolio Message from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:baskar.sona46@gmail.com?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <>
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-2xl p-6 sm:p-8 card-elevated"
              >
                <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                  <MessageCircle size={20} className="text-primary" />
                  Send a Message
                </h3>
                <div className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={form.name}
                      onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: "" }); }}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: "" }); }}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: "" }); }}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                  </div>

                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-sm text-primary font-medium"
                    >
                      <CheckCircle size={16} /> Redirecting to WhatsApp...
                    </motion.div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button
                      onClick={sendWhatsApp}
                      disabled={status !== "idle"}
                      className="flex-1 bg-[#25D366] hover:bg-[#1da851] text-white gap-2"
                    >
                      {status === "loading" ? <Loader2 size={16} className="animate-spin" /> : <MessageCircle size={16} />}
                      Send via WhatsApp
                    </Button>
                    <Button
                      onClick={sendEmail}
                      variant="outline"
                      className="flex-1 gap-2"
                    >
                      <Mail size={16} />
                      Email Me
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Contact Links */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-start"
              >
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
                    className="flex items-center gap-4 p-4 rounded-xl bg-card card-elevated group"
                  >
                    <div className="p-2.5 rounded-lg bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <item.icon size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm font-medium text-foreground truncate">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918778243596"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </>
  );
};

export default ContactSection;
