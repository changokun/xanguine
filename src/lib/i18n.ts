// src/lib/i18n.ts
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
  const target = dictionaries[language] ?? dictionaries[DEFAULT_LANGUAGE];
  const fallback = dictionaries[DEFAULT_LANGUAGE];

  // If the target is English, just return it directly
  if (language === DEFAULT_LANGUAGE) {
    return target;
  }

  // Return a proxy that falls back to English for missing properties
  return new Proxy(target, {
    get(obj, prop) {
      const value = obj[prop as keyof typeof obj];
      // If the value is undefined or null, try the fallback
      if (value === undefined || value === null) {
        return fallback[prop as keyof typeof fallback];
      }
      // If it's an object, create a proxy for nested fallback
      if (typeof value === 'object' && value !== null) {
        return new Proxy(value, {
          get(nestedObj, nestedProp) {
            const nestedValue = nestedObj[nestedProp as keyof typeof nestedObj];
            if (nestedValue === undefined || nestedValue === null) {
              const fallbackNested = fallback[prop as keyof typeof fallback];
              return fallbackNested?.[nestedProp as keyof typeof fallbackNested];
            }
            return nestedValue;
          }
        });
      }
      return value;
    }
  }) as Translations;
}

// Rest of the file remains the same...

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
