// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend) // loads translations from your server
  .use(LanguageDetector) // detects user language
  .use(initReactI18next) // initializes i18next with React
  .init({
    fallbackLng: 'da', // default language if detection fails
    interpolation: {
      escapeValue: false, // not needed for React as it escapes by default
    },
    react: {
      useSuspense: false, // set to true if you use Suspense for loading translations
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
