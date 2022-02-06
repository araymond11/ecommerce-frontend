import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const translationsFr = {
  firstName: 'First name',
  lastName: 'Last name',
  full: 'Full',
  logout: 'Log out',
  login: 'Login',
  email: 'Email',
  password: 'Password',
  confirmPassword: 'Confirm password',
  submit: 'Submit',
  registerNow: 'Register now',
  notAMember: 'Not a member ?'
};
  
const translationsEn = {
  firstName: 'First name',
  lastName: 'Last name',
  full: 'Full',
  logout: 'Log out',
  login: 'Login',
  email: 'Email',
  password: 'Password',
  confirmPassword: 'Confirm password',
  submit: 'Submit',
  registerNow: 'Register now',
  notAMember: 'Not a member ?'
};
  
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      fr: { translation: translationsFr },
      en: { translation: translationsEn },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;