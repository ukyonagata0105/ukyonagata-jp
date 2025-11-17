'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n/locales';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to default locale (Japanese)
    router.replace(`/${defaultLocale}`);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-300">Loading...</p>
      </div>
    </div>
  );
}
