/* eslint-disable prettier/prettier */
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    debug: true,
  });
export default i18next;
