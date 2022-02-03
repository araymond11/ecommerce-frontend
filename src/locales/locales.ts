import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const translationsFr = {
};
  
const translationsEn = {
};
  
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      fr: { translation: translationsFr },
      en: { translation: translationsEn },
    },
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: { escapeValue: false },
  });

export default i18n;