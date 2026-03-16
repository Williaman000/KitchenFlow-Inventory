import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ko from './locales/ko.json';
import ja from './locales/ja.json';

const fixedLang = import.meta.env.VITE_FIXED_LANG as string | undefined;

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			ko: { translation: ko },
			ja: { translation: ja },
		},
		supportedLngs: ['ko', 'ja'],
		...(fixedLang ? { lng: fixedLang } : {}),
		fallbackLng: fixedLang || 'ko',
		interpolation: { escapeValue: false },
		detection: fixedLang ? { order: [] } : {
			order: ['localStorage', 'navigator'],
			caches: ['localStorage'],
			lookupLocalStorage: 'kitchenflow_lang',
		},
	});

export default i18n;
