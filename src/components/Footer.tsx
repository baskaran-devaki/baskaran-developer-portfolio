import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 border-t border-[hsl(220,15%,15%)]" style={{ background: "linear-gradient(180deg, hsl(222 30% 8%) 0%, hsl(222 30% 4%) 100%)" }}>
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-[hsl(220,15%,45%)]">
          © {new Date().getFullYear()} Baskaran R. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
