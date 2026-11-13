import en from '../locales/en.json';
import pt from '../locales/pt.json';
import es from '../locales/es.json';

export const SUPPORTED_LANGUAGES = ['en', 'pt', 'es'] as const;
export type Language = (typeof SUPPORTED_LANGUAGES)[number];
export const DEFAULT_LANGUAGE: Language = 'en';
export const LANGUAGE_STORAGE_KEY = 'xanguine-lang';

export type Translations = typeof en;

const dictionaries: Record<Language, Translations> = { en, pt, es };

export function getTranslations(language: Language): Translations {
  return dictionaries[language] ?? dictionaries[DEFAULT_LANGUAGE];
}

export function isLanguage(value: string | null | undefined): value is Language {
  return !!value && (SUPPORTED_LANGUAGES as readonly string[]).includes(value);
}

export function detectBrowserLanguage(): Language {
  if (typeof navigator === 'undefined') return DEFAULT_LANGUAGE;
  const candidates = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const c of candidates) {
    const code = c?.toLowerCase().split('-')[0];
    if (isLanguage(code)) return code;
  }
  return DEFAULT_LANGUAGE;
}
