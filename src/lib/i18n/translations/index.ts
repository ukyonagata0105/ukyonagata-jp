import { Locale } from '../locales';
import { en } from './en';
import { ja } from './ja';
import { th } from './th';
import { dz } from './dz';
import { ne } from './ne';
import { my } from './my';

export const translations = {
  en,
  ja,
  th,
  dz,
  ne,
  my,
} as const;

export type TranslationKeys = typeof translations.en;

export function getTranslation(locale: Locale) {
  return translations[locale];
}

