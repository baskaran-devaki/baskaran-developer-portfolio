import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Twitter, FileText, MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeW6KK2b9RX0KWTaOhyAN1Lq8P7iit-HOt9oe4sgvX0BYjc6w/viewform";

const ContactSection = () => {
  const { t } = useLanguage();

  const contactLinks = [
    { icon: Mail, label: t("contact.email"), value: "baskar.sona46@gmail.com", href: "mailto:baskar.sona46@gmail.com" },
    { icon: Phone, label: t("contact.mobile"), value: "8778243596", href: "tel:8778243596" },
    { icon: Github, label: "GitHub", value: "baskaran-devaki", href: "https://github.com/baskaran-devaki" },
    { icon: Linkedin, label: "LinkedIn", value: "baskarandevaki", href: "https://linkedin.com/in/baskarandevaki" },
    { icon: Twitter, label: "Twitter", value: "baskarandevaki", href: "https://twitter.com/baskarandevaki" },
    { icon: FileText, label: t("contact.resume"), value: t("contact.viewResume"), href: "https://docs.google.com/document/d/17vK41bWUpR5E9f1btC8qYHPYUTgcbCHu/edit?usp=sharing&ouid=110155258988125851637&rtpof=true&sd=true" },
  ];

  return (
    <>
      <section id="contact" className="py-20 section-alt">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-foreground text-center mb-2">{t("contact.title")}</h2>
            <div className="w-12 h-1 bg-primary rounded mx-auto mb-4" />
            <p className="text-muted-foreground text-center max-w-md mx-auto mb-12">{t("contact.subtitle")}</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-card rounded-2xl p-8 sm:p-10 shadow-lg border border-border flex flex-col items-center justify-center text-center neon-border">
                <div className="mx-auto mb-5 inline-flex p-4 rounded-xl bg-primary/10 text-primary"><Mail size={32} /></div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{t("contact.cta.title")}</h3>
                <p className="text-muted-foreground mb-6 max-w-sm">{t("contact.cta.desc")}</p>
                <Button asChild size="lg" className="gap-2 rounded-lg neon-btn">
                  <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={18} />
                    {t("contact.cta.button")}
                  </a>
                </Button>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">
                {contactLinks.map((item, i) => (
                  <motion.a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-md border border-border group">
                    <div className="p-2.5 rounded-lg bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors"><item.icon size={18} /></div>
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

      <a href="https://wa.me/918778243596" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform" aria-label="Chat on WhatsApp">
        <MessageCircle size={24} />
      </a>
    </>
  );
};

export default ContactSection;
