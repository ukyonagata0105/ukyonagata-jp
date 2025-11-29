import { ThemeToggle } from '@/components/ThemeToggle';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { MobileNav } from '@/components/MobileNav';
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

  // 構造化データ（JSON-LD）
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: t.hero.name,
    jobTitle: t.hero.subtitle,
    description: t.hero.description,
    url: 'https://ukyonagata.jp',
    sameAs: [
      'https://x.com/ukyokyongt',
      'https://researchmap.jp/ukyonagata',
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
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* 構造化データの挿入 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-fluid-2xl font-bold text-gray-900 dark:text-white">
              Ukyo Nagata
            </h1>
            
            {/* デスクトップナビゲーション */}
            <div className="hidden lg:flex items-center space-x-6">
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                {t.nav.about}
              </a>
              <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                {t.nav.projects}
              </a>
              <a href="#research" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                {t.nav.research}
              </a>
              <a href="#qualifications" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                {t.nav.qualifications}
              </a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                {t.nav.contact}
              </a>
              <LanguageSwitcher currentLocale={locale} />
              <ThemeToggle />
            </div>

            {/* モバイルナビゲーション */}
            <div className="flex lg:hidden items-center space-x-2">
              <LanguageSwitcher currentLocale={locale} />
              <ThemeToggle />
              <MobileNav
                items={[
                  { href: '#about', label: t.nav.about },
                  { href: '#projects', label: t.nav.projects },
                  { href: '#research', label: t.nav.research },
                  { href: '#qualifications', label: t.nav.qualifications },
                  { href: '#contact', label: t.nav.contact },
                ]}
              />
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Latest Presentation Banner */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 sm:p-6 mb-8 sm:mb-12 shadow-sm hover:shadow-md transition-shadow">
          <div className="text-center">
            <p className="text-fluid-base sm:text-fluid-lg text-gray-700 dark:text-gray-200 font-medium mb-2">
              {t.hero.latestPresentation}
            </p>
            <a
              href="https://researchmap.jp/ukyonagata/presentations/51760653"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-semibold text-fluid-sm sm:text-fluid-base"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              ResearchMap
            </a>
          </div>
        </div>

        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-fluid-5xl font-bold text-gray-900 dark:text-white mb-2">
            {t.hero.name}
          </h2>
          <h3 className="text-fluid-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4 sm:mb-6">
            {t.hero.subtitle}
          </h3>
          <p className="text-fluid-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              {t.hero.viewProjects}
            </a>
            <a
              href="#contact"
              className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 sm:px-8 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
            >
              {t.hero.getInTouch}
            </a>
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="mb-12 sm:mb-16 scroll-mt-20">
          <h3 className="text-fluid-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">
            {t.about.title}
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 sm:p-8">
            <p className="text-gray-600 dark:text-gray-300 text-fluid-base leading-relaxed mb-4">
              {t.about.paragraph1}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-fluid-base leading-relaxed">
              {t.about.paragraph2}
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-12 sm:mb-16 scroll-mt-20">
          <h3 className="text-fluid-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">
            {t.projects.title}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 sm:p-6 hover:shadow-md transition-shadow">
              <h4 className="text-fluid-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                {t.projects.maasCreative.title}
              </h4>
              <p className="text-fluid-sm text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
                {t.projects.maasCreative.description}
              </p>
              <a href="https://maas-creative.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-fluid-sm">
                {t.projects.maasCreative.visitProject}
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 sm:p-6 hover:shadow-md transition-shadow">
              <h4 className="text-fluid-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                {t.projects.policyEvaluation.title}
              </h4>
              <p className="text-fluid-sm text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
                {t.projects.policyEvaluation.description}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 sm:p-6 hover:shadow-md transition-shadow">
              <h4 className="text-fluid-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                {t.projects.liquitous.title}
              </h4>
              <p className="text-fluid-sm text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
                {t.projects.liquitous.description}
              </p>
              <a href="https://liquitous.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-fluid-sm">
                {t.projects.liquitous.visitProject}
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 sm:p-6 hover:shadow-md transition-shadow">
              <h4 className="text-fluid-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                {t.projects.marpTemplate.title}
              </h4>
              <p className="text-fluid-sm text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
                {t.projects.marpTemplate.description}
              </p>
              <a href="https://github.com/ukyonagata0105/marptemplate" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-fluid-sm">
                {t.projects.marpTemplate.viewOnGithub}
              </a>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="mb-12 sm:mb-16 scroll-mt-20">
          <h3 className="text-fluid-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">
            {t.research.title}
          </h3>
          
          {/* Research Fields and Keywords */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 sm:p-6">
              <h4 className="text-fluid-lg font-semibold text-gray-900 dark:text-white mb-3">
                {t.research.researchFields.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {t.research.researchFields.fields.map((field, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 sm:px-3 py-1 rounded text-fluid-xs"
                  >
                    {field}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 sm:p-6">
              <h4 className="text-fluid-lg font-semibold text-gray-900 dark:text-white mb-3">
                {t.research.researchKeywords.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {t.research.researchKeywords.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 sm:px-3 py-1 rounded text-fluid-xs"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 sm:p-6">
              <h4 className="text-fluid-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                {t.research.publicTransport.title}
              </h4>
              <p className="text-fluid-sm text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
                {t.research.publicTransport.description}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-fluid-xs">
                  {locale === 'ja' ? '公共交通' : 'Public Transport'}
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-fluid-xs">
                  {locale === 'ja' ? 'モビリティ' : 'Mobility'}
                </span>
                <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-fluid-xs">
                  {locale === 'ja' ? '公共政策学' : 'Public Policy'}
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 sm:p-6">
              <h4 className="text-fluid-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                {t.research.aiPolicy.title}
              </h4>
              <p className="text-fluid-sm text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
                {t.research.aiPolicy.description}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-fluid-xs">
                  AI/LLM
                </span>
                <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-2 py-1 rounded text-fluid-xs">
                  {locale === 'ja' ? '創造性' : 'Creativity'}
                </span>
                <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded text-fluid-xs">
                  {locale === 'ja' ? '官民連携' : 'Public-Private Partnership'}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 sm:p-6 mb-4 sm:mb-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
              <h4 className="text-fluid-xl font-semibold text-gray-900 dark:text-white">
                {t.research.publications.title}
              </h4>
              <a
                href="https://researchmap.jp/ukyonagata"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-fluid-xs flex items-center"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                ResearchMap
              </a>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {t.research.publications.paper1.title}
                </h5>
                <p className="text-fluid-sm text-gray-600 dark:text-gray-400 mb-1">
                  {t.research.publications.paper1.journal}
                </p>
                <p className="text-fluid-sm text-gray-600 dark:text-gray-300">
                  {t.research.publications.paper1.subtitle}
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {t.research.publications.paper2.title}
                </h5>
                <p className="text-fluid-sm text-gray-600 dark:text-gray-400 mb-1">
                  {t.research.publications.paper2.authors} / {t.research.publications.paper2.journal}
                </p>
                <p className="text-fluid-sm text-gray-600 dark:text-gray-300">
                  {t.research.publications.paper2.subtitle}
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {t.research.publications.paper3.title}
                </h5>
                <p className="text-fluid-sm text-gray-600 dark:text-gray-400 mb-1">
                  {t.research.publications.paper3.publisher}
                </p>
                <p className="text-fluid-sm text-gray-600 dark:text-gray-300">
                  {t.research.publications.paper3.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Presentations Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 sm:p-6 mb-4 sm:mb-6">
            <h4 className="text-fluid-xl font-semibold text-gray-900 dark:text-white mb-4">
              {t.research.presentations.title}
            </h4>
            <div className="space-y-4">
              <div className="border-l-4 border-orange-500 pl-4">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {t.research.presentations.presentation1.title}
                </h5>
                <p className="text-fluid-sm text-gray-600 dark:text-gray-400 mb-1">
                  {t.research.presentations.presentation1.conference} / {t.research.presentations.presentation1.date}
                </p>
                {t.research.presentations.presentation1.subtitle && (
                  <p className="text-fluid-sm text-gray-600 dark:text-gray-300">
                    {t.research.presentations.presentation1.subtitle}
                  </p>
                )}
              </div>

              <div className="border-l-4 border-pink-500 pl-4">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {t.research.presentations.presentation2.title}
                </h5>
                <p className="text-fluid-sm text-gray-600 dark:text-gray-400 mb-1">
                  {t.research.presentations.presentation2.conference} / {t.research.presentations.presentation2.date}
                </p>
                {t.research.presentations.presentation2.subtitle && (
                  <p className="text-fluid-sm text-gray-600 dark:text-gray-300">
                    {t.research.presentations.presentation2.subtitle}
                  </p>
                )}
              </div>

              <div className="border-l-4 border-teal-500 pl-4">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {t.research.presentations.presentation3.title}
                </h5>
                <p className="text-fluid-sm text-gray-600 dark:text-gray-400 mb-1">
                  {t.research.presentations.presentation3.conference} / {t.research.presentations.presentation3.date}
                </p>
                {t.research.presentations.presentation3.subtitle && (
                  <p className="text-fluid-sm text-gray-600 dark:text-gray-300">
                    {t.research.presentations.presentation3.subtitle}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 sm:p-6">
            <h4 className="text-fluid-lg font-semibold text-gray-900 dark:text-white mb-3">
              {t.research.education.title}
            </h4>
            <div className="space-y-2 text-fluid-sm text-gray-600 dark:text-gray-300">
              <p>• {t.research.education.doctorate}</p>
              <p>• {t.research.education.company}</p>
              <p>• {t.research.education.masters}</p>
              <p>• {t.research.education.bachelor}</p>
              <p>• {t.research.education.lecturer}</p>
            </div>
            <div className="mt-4">
              <a href="https://researchmap.jp/ukyonagata" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                {t.research.education.researchMap}
              </a>
            </div>
          </div>
        </section>

        {/* Qualifications Section */}
        <section id="qualifications" className="mb-12 sm:mb-16 scroll-mt-20">
          <h3 className="text-fluid-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">
            {t.qualifications.title}
          </h3>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 sm:p-6">
              <h4 className="text-fluid-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                {t.qualifications.travelManager.title}
              </h4>
              <p className="text-fluid-sm text-gray-600 dark:text-gray-300">
                {t.qualifications.travelManager.description}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center scroll-mt-20">
          <h3 className="text-fluid-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
            {t.contact.title}
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 sm:p-8 mb-6">
            {t.contact.description && (
              <p className="text-fluid-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
                {t.contact.description}
              </p>
            )}
            
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 sm:p-6">
                <h4 className="text-fluid-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {t.contact.businessInquiry}
                </h4>
                <a
                  href="https://maas-creative.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-fluid-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {t.contact.businessInquiryLink}
                </a>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 sm:p-6">
                <h4 className="text-fluid-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {t.contact.personalInquiry}
                </h4>
                <a
                  href="mailto:s18568un@gmail.com"
                  className="inline-flex items-center text-fluid-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors break-all"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {t.contact.emailAddress}
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <a
                href="https://x.com/ukyokyongt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center sm:justify-start space-x-2 text-fluid-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>@ukyokyongt</span>
              </a>
              <a
                href="https://researchmap.jp/ukyonagata"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center sm:justify-start space-x-2 text-fluid-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>{t.contact.researchMap}</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
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

