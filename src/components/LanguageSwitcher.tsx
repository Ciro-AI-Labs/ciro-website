import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggle = () => {
    const next = i18n.language?.startsWith("es") ? "en" : "es";
    i18n.changeLanguage(next);
  };

  const label = i18n.language?.startsWith("es") ? "ES" : "EN";

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all"
      aria-label="Toggle language"
    >
      <Globe className="w-3.5 h-3.5" />
      {label}
    </button>
  );
};

export default LanguageSwitcher;
