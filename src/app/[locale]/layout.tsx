import type { Metadata } from 'next';
import { HtmlLang } from '@/components/HtmlLang';
import { locales, type Locale } from '@/lib/i18n/locales';
import { getTranslation } from '@/lib/i18n/translations';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type GenerateMetadataProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;
  const t = getTranslation(locale);

  const siteUrl = 'https://ukyonagata.jp';
  const currentUrl = `${siteUrl}/${locale}`;
  const ogImage = `${siteUrl}/og-image.png`;

  return {
    title: {
      default: `${t.hero.name} - ${t.hero.subtitle}`,
      template: `%s | ${t.hero.name}`,
    },
    description: t.hero.description,
    keywords: [
      ...t.research.researchKeywords.keywords,
      'Next.js',
      'TypeScript',
      'React',
      '岩手県立大学',
      'MaaS Creative',
    ],
    authors: [{ name: t.hero.name, url: siteUrl }],
    creator: t.hero.name,
    publisher: t.hero.name,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: currentUrl,
      languages: {
        ja: `${siteUrl}/ja`,
        en: `${siteUrl}/en`,
        th: `${siteUrl}/th`,
        dz: `${siteUrl}/dz`,
        ne: `${siteUrl}/ne`,
        my: `${siteUrl}/my`,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: currentUrl,
      title: `${t.hero.name} - ${t.hero.subtitle}`,
      description: t.hero.description,
      siteName: t.hero.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${t.hero.name} - ${t.hero.subtitle}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@ukyokyongt',
      creator: '@ukyokyongt',
      title: `${t.hero.name} - ${t.hero.subtitle}`,
      description: t.hero.description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
    },
  };
}

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
    <>
      <HtmlLang locale={locale} />
      {children}
    </>
  );
}
