/* eslint-disable prettier/prettier */
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import common_ru from "../locales/ru/translation.json";
import common_en from "../locales/en/translation.json";
import common_ch from "../locales/ch/translation.json";
// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: common_en,
      },
      ru: {
        translation: common_ru,
      },
      ch: {
        translation: common_ch,
      },
    },
    debug: true,
  });

export default i18next;
