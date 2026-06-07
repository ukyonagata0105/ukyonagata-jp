import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { MobileNav } from '@/components/MobileNav';
import { ThemeBackground } from '@/components/ThemeBackground';
import { SiteIntro } from '@/components/SiteIntro';
import { getTranslation } from '@/lib/i18n/translations/index';
import { type Locale } from '@/lib/i18n/locales';

type PageParams = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function Home({ params }: PageParams) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;
  const t = getTranslation(locale);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: t.hero.name,
    jobTitle: t.hero.subtitle,
    description: t.hero.description,
    url: 'https://ukyonagata.jp',
    sameAs: [
      'https://x.com/ukyokyongt',
      'https://github.com/ukyonagata0105',
    ],
    affiliation: [
      {
        '@type': 'Organization',
        name: '岩手県立大学',
        url: 'https://www.iwate-pu.ac.jp/',
      },
      {
        '@type': 'Organization',
        name: '株式会社MaaS Creative',
        url: 'https://maas-creative.com',
      },
    ],
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: '慶應義塾大学',
        url: 'https://www.keio.ac.jp/',
      },
    ],
    knowsAbout: t.research.researchKeywords.keywords,
  };

  return (
    <div className="relative min-h-screen">
      <SiteIntro
        name={t.hero.name}
        subtitle={t.hero.subtitle}
        skipLabel={t.hero.introSkip}
      />
      <ThemeBackground />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="theme-header sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-fluid-2xl font-bold text-forest-dark">
              Ukyo Nagata
            </h1>

            <div className="hidden lg:flex items-center space-x-6">
              <a href="#about" className="theme-nav-link text-fluid-sm transition-colors">
                {t.nav.about}
              </a>
              <a href="#projects" className="theme-nav-link text-fluid-sm transition-colors">
                {t.nav.projects}
              </a>
              <a href="#research" className="theme-nav-link text-fluid-sm transition-colors">
                {t.nav.research}
              </a>
              <a href="#contact" className="theme-nav-link text-fluid-sm transition-colors">
                {t.nav.contact}
              </a>
              <Link href="/presentation" className="px-3 py-1.5 rounded-lg bg-forest-dark text-white text-fluid-sm font-medium hover:opacity-90 transition-opacity">
                {t.nav.presentation}
              </Link>
              <LanguageSwitcher currentLocale={locale} />
              <ThemeToggle />
            </div>

            <div className="flex lg:hidden items-center space-x-2">
              <LanguageSwitcher currentLocale={locale} />
              <ThemeToggle />
              <MobileNav
                items={[
                  { href: '#about', label: t.nav.about },
                  { href: '#projects', label: t.nav.projects },
                  { href: '#research', label: t.nav.research },
                  { href: '#contact', label: t.nav.contact },
                  { href: '/presentation', label: t.nav.presentation },
                ]}
              />
            </div>
          </nav>
        </div>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="theme-hero text-center mb-12 sm:mb-16 p-8 sm:p-12">
          <h2 className="text-fluid-5xl font-bold text-forest-dark mb-2">
            {t.hero.name}
          </h2>
          <h3 className="text-fluid-3xl theme-subtitle mb-4 sm:mb-6">
            {t.hero.subtitle}
          </h3>
          <p className="text-fluid-lg theme-body-text max-w-3xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a href="#projects" className="theme-btn-primary inline-block">
              {t.hero.viewProjects}
            </a>
            <a href="#contact" className="theme-btn-secondary inline-block">
              {t.hero.getInTouch}
            </a>
          </div>
        </div>

        <section id="about" className="mb-12 sm:mb-16 scroll-mt-20">
          <h3 className="text-fluid-3xl theme-section-title mb-6 sm:mb-8 text-center">
            {t.about.title}
          </h3>
          <div className="theme-card p-6 sm:p-8">
            <p className="theme-body-text text-fluid-base leading-relaxed mb-4">
              {t.about.paragraph1}
            </p>
            <p className="theme-body-text text-fluid-base leading-relaxed">
              {t.about.paragraph2}
            </p>
          </div>
        </section>

        <section id="projects" className="mb-12 sm:mb-16 scroll-mt-20">
          <h3 className="text-fluid-3xl theme-section-title mb-6 sm:mb-8 text-center">
            {t.projects.title}
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                title: t.projects.maasCreative.title,
                description: t.projects.maasCreative.description,
                link: { href: 'https://maas-creative.com', label: t.projects.maasCreative.visitProject },
              },
              {
                title: t.projects.liquitous.title,
                description: t.projects.liquitous.description,
                link: { href: 'https://liquitous.com', label: t.projects.liquitous.visitProject },
              },
              {
                title: t.projects.ruleMakersDao.title,
                description: t.projects.ruleMakersDao.description,
                link: { href: 'https://rulemakers.io', label: t.projects.ruleMakersDao.visitProject },
              },
              {
                title: t.projects.minatoMediaMuseum.title,
                description: t.projects.minatoMediaMuseum.description,
                link: { href: 'https://minato-media-museum.com', label: t.projects.minatoMediaMuseum.visitProject },
              },
            ].map((project) => (
              <div key={project.title} className="theme-card p-5 sm:p-6">
                <h4 className="text-fluid-xl font-semibold text-forest-dark mb-2 sm:mb-3">
                  {project.title}
                </h4>
                <p className="text-fluid-sm theme-body-text mb-3 sm:mb-4">
                  {project.description}
                </p>
                {project.link && (
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-link text-fluid-sm"
                  >
                    {project.link.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="research" className="mb-12 sm:mb-16 scroll-mt-20">
          <h3 className="text-fluid-3xl theme-section-title mb-6 sm:mb-8 text-center">
            {t.research.title}
          </h3>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div className="theme-card p-5 sm:p-6">
              <h4 className="text-fluid-lg font-semibold text-forest-dark mb-3">
                {t.research.researchFields.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {t.research.researchFields.fields.map((field, index) => (
                  <span key={index} className="theme-badge">{field}</span>
                ))}
              </div>
            </div>

            <div className="theme-card p-5 sm:p-6">
              <h4 className="text-fluid-lg font-semibold text-forest-dark mb-3">
                {t.research.researchKeywords.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {t.research.researchKeywords.keywords.map((keyword, index) => (
                  <span key={index} className="theme-badge">{keyword}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div className="theme-card p-5 sm:p-6">
              <h4 className="text-fluid-xl font-semibold text-forest-dark mb-2 sm:mb-3">
                {t.research.publicTransport.title}
              </h4>
              <p className="text-fluid-sm theme-body-text mb-3 sm:mb-4">
                {t.research.publicTransport.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {t.research.publicTransport.tags.map((tag) => (
                  <span key={tag} className="theme-badge">{tag}</span>
                ))}
              </div>
            </div>

            <div className="theme-card p-5 sm:p-6">
              <h4 className="text-fluid-xl font-semibold text-forest-dark mb-2 sm:mb-3">
                {t.research.aiPolicy.title}
              </h4>
              <p className="text-fluid-sm theme-body-text mb-3 sm:mb-4">
                {t.research.aiPolicy.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {t.research.aiPolicy.tags.map((tag) => (
                  <span key={tag} className="theme-badge">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="theme-card p-5 sm:p-6 mb-4 sm:mb-6">
            <h4 className="text-fluid-xl font-semibold text-forest-dark mb-4">
              {t.research.publications.title}
            </h4>
            <div className="space-y-4">
              {[t.research.publications.paper1, t.research.publications.paper2].map((paper) => (
                <div key={paper.title} className="theme-accent-border">
                  <h5 className="font-semibold text-forest-dark mb-1">{paper.title}</h5>
                  {paper.subtitle && (
                    <p className="text-fluid-sm theme-body-text mb-1">{paper.subtitle}</p>
                  )}
                  <p className="text-fluid-sm theme-muted-text">
                    {'authors' in paper && paper.authors
                      ? `${paper.authors} / ${paper.journal}`
                      : paper.journal}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="theme-card p-5 sm:p-6 mb-4 sm:mb-6">
            <h4 className="text-fluid-xl font-semibold text-forest-dark mb-4">
              {t.research.presentations.title}
            </h4>
            <div className="space-y-4">
              {[t.research.presentations.presentation1, t.research.presentations.presentation2, t.research.presentations.presentation3].map((item) => (
                <div key={item.title} className="theme-accent-border">
                  <h5 className="font-semibold text-forest-dark mb-1">{item.title}</h5>
                  {item.subtitle && (
                    <p className="text-fluid-sm theme-body-text mb-1">{item.subtitle}</p>
                  )}
                  <p className="text-fluid-sm theme-muted-text">
                    {item.conference} / {item.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="text-center scroll-mt-20">
          <h3 className="text-fluid-3xl theme-section-title mb-6 sm:mb-8">
            {t.contact.title}
          </h3>
          <div className="theme-card p-6 sm:p-8 mb-6">
            {t.contact.description && (
              <p className="text-fluid-base theme-body-text mb-6 sm:mb-8">
                {t.contact.description}
              </p>
            )}

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="theme-card p-5 sm:p-6">
                <h4 className="text-fluid-lg font-semibold text-forest-dark mb-3">
                  {t.contact.businessInquiry}
                </h4>
                <a
                  href="https://maas-creative.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="theme-link inline-flex items-center text-fluid-sm"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {t.contact.businessInquiryLink}
                </a>
              </div>

              <div className="theme-card p-5 sm:p-6">
                <h4 className="text-fluid-lg font-semibold text-forest-dark mb-3">
                  {t.contact.personalInquiry}
                </h4>
                <a
                  href="mailto:s18568un@gmail.com"
                  className="theme-link inline-flex items-center text-fluid-sm break-all"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {t.contact.emailAddress}
                </a>
              </div>
            </div>

            <a
              href="https://x.com/ukyokyongt"
              target="_blank"
              rel="noopener noreferrer"
              className="theme-link inline-flex items-center justify-center space-x-2 text-fluid-sm"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span>@ukyokyongt</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="theme-footer relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="text-center theme-muted-text">
            <p className="text-fluid-sm">{t.footer.copyright}</p>
            {t.footer.builtWith && (
              <p className="mt-2 text-fluid-xs">{t.footer.builtWith}</p>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
