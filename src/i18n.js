import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from './locale/en';
import translationPt from './locale/pt';
import translationEs from './locale/es';
i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: translationPt
      },
      en: {
        translation: translationEn,
      },
      es: {
        translation: translationEs
      }
    },
    fallbackLng: "pt",
    debug: false,

    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });

export default i18n;
