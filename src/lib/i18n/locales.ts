export const locales = ['en', 'ja', 'th', 'dz', 'ne', 'my'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'ja';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ja: '日本語',
  th: 'ไทย',
  dz: 'རྫོང་ཁ',
  ne: 'नेपाली',
  my: 'မြန်မာ',
};

