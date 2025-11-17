'use client';

import { usePathname, useRouter } from 'next/navigation';
import { locales, localeNames, type Locale } from '@/lib/i18n/locales';

export function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (newLocale: Locale) => {
    // Remove current locale from pathname
    const pathnameWithoutLocale = pathname.replace(`/${currentLocale}`, '');
    // Navigate to new locale
    router.push(`/${newLocale}${pathnameWithoutLocale}`);
  };

  return (
    <div className="flex items-center space-x-2">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLanguage(locale)}
          className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
            currentLocale === locale
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
          aria-label={`Switch to ${localeNames[locale]}`}
        >
          {localeNames[locale]}
        </button>
      ))}
    </div>
  );
}

