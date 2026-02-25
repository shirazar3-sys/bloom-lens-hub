import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { en, type Translations } from "./translations/en";
import { he } from "./translations/he";

type Language = "en" | "he";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isRTL: boolean;
}

const fallbackContext: LanguageContextType = {
  language: "en",
  setLanguage: () => {},
  t: en,
  isRTL: false,
};

const LanguageContext = createContext<LanguageContextType>(fallbackContext);

const translations: Record<Language, Translations> = { en, he };

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved === "he" ? "he" : "en") as Language;
  });

  const isRTL = language === "he";
  const t = translations[language];

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
