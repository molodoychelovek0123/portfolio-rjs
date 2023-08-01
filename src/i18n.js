// Конфиги для i18n

import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: false,
        whitelist: ['en', 'ru'],
        detection: {
            order: ['localStorage', 'cookie'],
            cache: ['localStorage', 'cookie']
        },
        interpolation: {
            escapeValue: false
        },
        backend:{
            loadPath: '/locales/{{lng}}/{{ns}}.json',           // For Local Build
            // loadPath: '/portfolio-rjs/locales/{{lng}}/{{ns}}.json' // For GHPAGES
        }
    });

export default i18n;