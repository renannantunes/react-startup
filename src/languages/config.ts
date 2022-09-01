import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enUs from './en-us.json';
import ptBr from './pt-br.json';
import es from './es.json';

export const resources = {
  'en-US': {
    translation: enUs,
    description: "Inglês"
  },
  'pt-BR': {
    translation: ptBr,
    description: "Português"
  },
  'es': {
    translation: es,
    description: "Espanhol"
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: 'en-US',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources,
});

export default i18n;
