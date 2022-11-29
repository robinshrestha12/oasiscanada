import i18next from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import languageEn from './components/assets/locales/en/translation.json';
import languageFr from './components/assets/locales/fr/translation.json';
import languageIt from './components/assets/locales/it/translation.json';
import Backend from 'i18next-http-backend';


i18next
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en:{translation:languageEn,
      },
      fr: {translation:languageFr,
      },
      it: {translation:languageIt},
    },
   
    fallbackLng:"en",
      detection: {
      order: ['queryString', 'cookie'],
     caches: ['cookie'],
    }, 
   
    debug:true,

   interpolation:{
    
     formatSeparator: ","
   },

  });
export default i18next;