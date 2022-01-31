import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enUs from './en-us.json';
import ptBr from './pt-br.json';

export const resources = {
  en: {
    translation: enUs
  },
  pt: {
    translation: ptBr,
  },
} as const;

i18n.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources,
});

export default i18n;
