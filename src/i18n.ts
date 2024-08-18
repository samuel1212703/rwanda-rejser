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
    fallbackLng: 'en', // default language if detection fails
    react: {
      useSuspense: false, // set to true if you use Suspense for loading translations
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
