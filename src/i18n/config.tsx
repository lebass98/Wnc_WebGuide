import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import koTranslations from './locales/ko.json';
import enTranslations from './locales/en.json';

export type Locale = 'ko' | 'en';

type Translations = typeof koTranslations;

interface I18nContextValue {
  locale: Locale;
  t: (key: string, params?: Record<string, string | number>) => string;
  setLocale: (locale: Locale) => void;
  availableLocales: Locale[];
}

const I18nContext = createContext<I18nContextValue | null>(null);

const translations: Record<Locale, Translations> = {
  ko: koTranslations,
  en: enTranslations,
};

function resolveKey(obj: Record<string, unknown>, key: string): string {
  const parts = key.split('.');
  let current: unknown = obj;
  for (const part of parts) {
    if (current == null || typeof current !== 'object') return key;
    current = (current as Record<string, unknown>)[part];
  }
  return typeof current === 'string' ? current : key;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const saved = localStorage.getItem('locale') as Locale | null;
    if (saved && (saved === 'ko' || saved === 'en')) return saved;
    return 'ko';
  });

  const t = useCallback(
    (key: string, params?: Record<string, string | number>): string => {
      const value = resolveKey(translations[locale], key);
      if (!params) return value;
      return Object.entries(params).reduce(
        (str, [k, v]) => str.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v)),
        value,
      );
    },
    [locale],
  );

  const setLocale = useCallback(
    (next: Locale) => {
      setLocaleState(next);
      localStorage.setItem('locale', next);
    },
    [],
  );

  return (
    <I18nContext.Provider value={{ locale, t, setLocale, availableLocales: ['ko', 'en'] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
