import i18n from "i18next";
import ar from "./locales/ar-SA.json";
import de from "./locales/de-DE.json";
import en from "./locales/en-US.json";
import es from "./locales/es-ES.json";
import fr from "./locales/fr-FR.json";
import he from "./locales/he-IL.json";
import hi from "./locales/hi-IN.json";
import it from "./locales/it-IT.json";
import ja from "./locales/ja-JP.json";
import ko from "./locales/ko-KR.json";
import pt from "./locales/pt-BR.json";
import ru from "./locales/ru-RU.json";
import tr from "./locales/tr-TR.json";
import uk from "./locales/uk-UA.json";
import ur from "./locales/ur-UR.json";
import vi from "./locales/vi-VN.json";
import zh from "./locales/zh-CN.json";

const resources = {
  ar: { translation: ar },
  de: { translation: de },
  en: { translation: en },
  es: { translation: es },
  fr: { translation: fr },
  he: { translation: he },
  hi: { translation: hi },
  it: { translation: it },
  ja: { translation: ja },
  ko: { translation: ko },
  pt: { translation: pt },
  ru: { translation: ru },
  tr: { translation: tr },
  uk: { translation: uk },
  ur: { translation: ur },
  vi: { translation: vi },
  zh: { translation: zh },
};

export const initI18n = (lng = "en") => {
  if (!i18n.isInitialized) {
    i18n.init({
      resources,
      lng,
      fallbackLng: "en",
      interpolation: {
        escapeValue: false,
      },
    });
  } else {
    i18n.changeLanguage(lng);
  }
};

export default i18n;
