'use client';

import { useRouter, usePathname } from 'next/navigation';
import { locales, localeNames, type Locale } from '@/lib/i18n/locales';

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as Locale;
    // 現在のロケールを新しいロケールに置き換え
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <select
      onChange={handleChange}
      value={currentLocale}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="言語を選択"
    >
      {locales.map((locale) => (
        <option key={locale} value={locale}>
          {localeNames[locale]}
        </option>
      ))}
    </select>
  );
}

