import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import i18n, { initI18n } from "../i18n";
import { Language } from "../types/Language";

const I18nContext = createContext<TranslationFunction>((key : string) => key);

export type TranslationFunction = (key: string, params?: Record<string, string | number>) => string;

export const TranslationProvider = ({ children, language } : { children : ReactNode, language: Language }) => {
  const [t, setT] = useState<TranslationFunction>(() => i18n.t.bind(i18n));

  useEffect(() => {
    initI18n(language);
    setT(() => i18n.t.bind(i18n));
  }, [language]);

  return <I18nContext.Provider value={t}>{children}</I18nContext.Provider>;
};

export const useTranslation = () => useContext(I18nContext);
