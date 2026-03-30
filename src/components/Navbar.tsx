import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { languageNames, Language } from "@/i18n/translations";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.experience"), href: "#experience" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(222,30%,6%,0.8)] backdrop-blur-xl border-b border-[hsl(220,15%,20%,0.5)]">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="text-xl font-bold text-white tracking-tight">
          BASKARAN<span className="text-[hsl(190,80%,55%)]">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[hsl(220,15%,60%)] hover:text-[hsl(190,80%,60%)] transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1.5 text-sm font-medium text-[hsl(220,15%,60%)] hover:text-[hsl(190,80%,60%)] transition-colors cursor-pointer">
                <Globe size={16} />
                {languageNames[language]}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-[hsl(222,25%,12%)] border-[hsl(220,15%,20%)]">
              {(Object.keys(languageNames) as Language[]).map((lang) => (
                <DropdownMenuItem
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`text-[hsl(220,15%,75%)] hover:text-white ${language === lang ? "bg-[hsl(190,80%,50%,0.15)] font-semibold text-[hsl(190,80%,60%)]" : ""}`}
                >
                  {languageNames[lang]}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-white p-1" aria-label="Change language">
                <Globe size={20} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-[hsl(222,25%,12%)] border-[hsl(220,15%,20%)]">
              {(Object.keys(languageNames) as Language[]).map((lang) => (
                <DropdownMenuItem
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`text-[hsl(220,15%,75%)] ${language === lang ? "bg-[hsl(190,80%,50%,0.15)] font-semibold text-[hsl(190,80%,60%)]" : ""}`}
                >
                  {languageNames[lang]}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <button
            onClick={() => setOpen(!open)}
            className="text-white"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[hsl(222,25%,10%)] border-b border-[hsl(220,15%,18%)] overflow-hidden"
          >
            <div className="flex flex-col gap-2 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-[hsl(220,15%,60%)] hover:text-[hsl(190,80%,60%)] py-2 transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
