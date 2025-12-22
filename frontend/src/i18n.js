import i18n from "i18next";
import arSA from "./locales/ar-SA.json";
import daDK from "./locales/da-DK.json";
import deDE from "./locales/de-DE.json";
import enUS from "./locales/en-US.json";
import esES from "./locales/es-ES.json";
import faIR from "./locales/fa-IR.json";
import fiFI from "./locales/fi-FI.json";
import frFR from "./locales/fr-FR.json";
import heIL from "./locales/he-IL.json";
import hiIN from "./locales/hi-IN.json";
import itIT from "./locales/it-IT.json";
import jaJP from "./locales/ja-JP.json";
import koKR from "./locales/ko-KR.json";
import nbNO from "./locales/nb-NO.json";
import ptBR from "./locales/pt-BR.json";
import ptPT from "./locales/pt-PT.json";
import ruRU from "./locales/ru-RU.json";
import svSE from "./locales/sv-SE.json";
import trTR from "./locales/tr-TR.json";
import ukUA from "./locales/uk-UA.json";
import urUR from "./locales/ur-UR.json";
import viVN from "./locales/vi-VN.json";
import zhCN from "./locales/zh-CN.json";
import plPL from "./locales/pl-PL.json";

const resources = {
  "ar-SA": { translation: arSA },
  "da-DK": { translation: daDK },
  "de-DE": { translation: deDE },
  "en-US": { translation: enUS },
  "es-ES": { translation: esES },
  "fa-IR": { translation: faIR },
  "fi-FI": { translation: fiFI },
  "fr-FR": { translation: frFR },
  "he-IL": { translation: heIL },
  "hi-IN": { translation: hiIN },
  "it-IT": { translation: itIT },
  "ja-JP": { translation: jaJP },
  "ko-KR": { translation: koKR },
  "nb-NO": { translation: nbNO },
  "pt-BR": { translation: ptBR },
  "pt-PT": { translation: ptPT },
  "ru-RU": { translation: ruRU },
  "sv-SE": { translation: svSE },
  "tr-TR": { translation: trTR },
  "uk-UA": { translation: ukUA },
  "ur-UR": { translation: urUR },
  "vi-VN": { translation: viVN },
  "zh-CN": { translation: zhCN },
  "pl-PL": { translation: plPL },
};

export const initI18n = (lng = "en-US") => {
  if (!i18n.isInitialized) {
    i18n.init({
      resources,
      lng,
      fallbackLng: "en-US",
      interpolation: {
        escapeValue: false,
      },
    });
  } else {
    i18n.changeLanguage(lng);
  }
};

export default i18n;
