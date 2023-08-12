import React, { createContext, useState } from "react";

type Language = "tr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}

export const LanguageContext = createContext<LanguageContextType | null>(null);

interface ILanguageProvider {
  children: React.ReactNode;
}

const LanguageProvider = ({ children }: ILanguageProvider) => {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
