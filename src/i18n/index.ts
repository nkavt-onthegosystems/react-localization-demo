import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

type TranslationResources = string | { [k: string]: TranslationResources } | TranslationResources[];

const modules = import.meta.glob<{default: Record<string, TranslationResources>}>('./locales/*.json', { eager: true })

const resources: Record<string, { translation: Record<string, TranslationResources> }> = {};

for (const path in modules) {
  const lang = path.match(/\.\/locales\/(.*)\.json$/)?.[1];
  if (lang) {
    resources[lang] = { translation: modules[path].default };
  }
}

i18n
  .use(LanguageDetector) // detect browser/localStorage/etc.
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "fr", "de", "ar"], // adjust to your languages
    interpolation: { escapeValue: false },
    detection: {
      order: ["querystring", "localStorage", "cookie", "navigator"],
      caches: ["localStorage", "cookie"],
    }
  });

export default i18n;
