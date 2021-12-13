import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';

import translationEN from './en.json';
import translationVI from './vi.json';

import  Backend  from 'i18next-http-backend';

// the translations
const resources = {
    en: {
        translation: translationEN
    },
    vi: {
        translation: translationVI
    }
};

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'vi',
        debug: true,
        interpolation: {
            escapeValue: false // not needed for react as it escapes by default
        }
    });

export default i18n;