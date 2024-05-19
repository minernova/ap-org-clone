// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationHI from "./locales/hi/translation.json";

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  hi: {
    translation: translationHI,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "hi", // default language
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

function toggleLanguage() {
  const currentLanguage = i18n.language;
  const newLanguage = currentLanguage === "en" ? "hi" : "en";
  i18n.changeLanguage(newLanguage);
}

export default i18n;
