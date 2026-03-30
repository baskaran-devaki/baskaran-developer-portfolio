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
      <section id="contact" className="py-20 section-gradient-3 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-[hsl(190,80%,50%,0.03)] blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-white text-center mb-2">{t("contact.title")}</h2>
            <div className="w-16 h-1 rounded-full mx-auto mb-4 bg-gradient-to-r from-[hsl(190,80%,50%)] to-[hsl(270,60%,55%)]" />
            <p className="text-[hsl(220,15%,55%)] text-center max-w-md mx-auto mb-12">{t("contact.subtitle")}</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl p-8 sm:p-10 glass-card flex flex-col items-center justify-center text-center">
                <div className="mx-auto mb-5 inline-flex p-4 rounded-xl bg-[hsl(190,80%,50%,0.12)] text-[hsl(190,80%,60%)]"><Mail size={32} /></div>
                <h3 className="text-xl font-semibold text-white mb-3">{t("contact.cta.title")}</h3>
                <p className="text-[hsl(220,15%,55%)] mb-6 max-w-sm">{t("contact.cta.desc")}</p>
                <Button asChild size="lg" className="gap-2 rounded-xl bg-gradient-to-r from-[hsl(190,80%,50%)] to-[hsl(220,80%,55%)] hover:from-[hsl(190,80%,45%)] hover:to-[hsl(220,80%,50%)] text-white border-0 shadow-lg shadow-[hsl(190,80%,50%,0.25)]">
                  <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={18} />
                    {t("contact.cta.button")}
                  </a>
                </Button>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">
                {contactLinks.map((item, i) => (
                  <motion.a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="flex items-center gap-4 p-4 rounded-2xl glass-card group">
                    <div className="p-2.5 rounded-xl bg-[hsl(190,80%,50%,0.12)] text-[hsl(190,80%,60%)] group-hover:bg-gradient-to-r group-hover:from-[hsl(190,80%,50%)] group-hover:to-[hsl(220,80%,55%)] group-hover:text-white transition-all duration-300"><item.icon size={18} /></div>
                    <div className="min-w-0">
                      <p className="text-xs text-[hsl(220,15%,50%)] uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm font-medium text-white truncate">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <a href="https://wa.me/918778243596" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform hover:shadow-[0_0_20px_hsl(145,60%,45%,0.4)]" aria-label="Chat on WhatsApp">
        <MessageCircle size={24} />
      </a>
    </>
  );
};

export default ContactSection;
