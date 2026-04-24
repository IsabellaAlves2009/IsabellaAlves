import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import pt from './locales/portuguese.json';
import en from './locales/english.json';

import ptJson from './locales/portuguese.json';
import enJson from './locales/english.json';

i18n
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt', 
    interpolation: {
      escapeValue: false, 
    },
    resources: {
      pt: { translation: ptJson },
      en: { translation: enJson },
    },
  });

export default i18n;