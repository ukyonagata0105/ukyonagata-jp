import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { ThemeProvider } from '../providers';
import { locales, type Locale } from '@/lib/i18n/locales';

const inter = Inter({ subsets: ['latin'] });

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Ukyo Nagata - Portfolio',
  description: 'Personal portfolio website of Ukyo Nagata - Software Engineer & Researcher',
};

type PageParams = {
  params: Promise<{
    locale: string;
  }>;
  children: React.ReactNode;
};

export default async function LocaleLayout({
  children,
  params,
}: PageParams) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;
  
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-gray-900 dark:bg-gray-900 dark:text-white`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

