import { ThemeToggle } from '@/components/ThemeToggle';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Ukyo Nagata
            </h1>
            <div className="flex items-center space-x-6">
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
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
            {t.hero.name}
          </h2>
          <h3 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
            {t.hero.subtitle}
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              {t.hero.viewProjects}
            </a>
            <a
              href="#contact"
              className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
            >
              {t.hero.getInTouch}
            </a>
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t.about.title}
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-4">
              {t.about.paragraph1}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {t.about.paragraph2}
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t.projects.title}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t.projects.maasCreative.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t.projects.maasCreative.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-sm">
                  AI/LLM
                </span>
                <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-2 py-1 rounded text-sm">
                  Public Tech
                </span>
                <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded text-sm">
                  Communication
                </span>
              </div>
              <a href="https://maas-creative.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                {t.projects.maasCreative.visitProject}
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t.projects.policyEvaluation.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t.projects.policyEvaluation.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
                  React
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm">
                  Supabase
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-sm">
                  Gemini API
                </span>
                <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-sm">
                  RAG
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t.projects.liquitous.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t.projects.liquitous.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm">
                  Nuxt.js
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
                  Vue.js
                </span>
                <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-sm">
                  Firebase
                </span>
              </div>
              <a href="https://liquitous.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                {t.projects.liquitous.visitProject}
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t.projects.marpTemplate.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t.projects.marpTemplate.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 px-2 py-1 rounded text-sm">
                  Markdown
                </span>
                <span className="bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 px-2 py-1 rounded text-sm">
                  Marp
                </span>
                <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 px-2 py-1 rounded text-sm">
                  Templates
                </span>
              </div>
              <a href="https://github.com/ukyonagata0105/marptemplate" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                {t.projects.marpTemplate.viewOnGithub}
              </a>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t.research.title}
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t.research.publicTransport.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t.research.publicTransport.description}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
                  {locale === 'ja' ? '公共交通' : 'Public Transport'}
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm">
                  {locale === 'ja' ? 'モビリティ' : 'Mobility'}
                </span>
                <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-sm">
                  {locale === 'ja' ? '公共政策学' : 'Public Policy'}
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t.research.aiPolicy.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t.research.aiPolicy.description}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-sm">
                  AI/LLM
                </span>
                <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-2 py-1 rounded text-sm">
                  {locale === 'ja' ? '創造性' : 'Creativity'}
                </span>
                <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded text-sm">
                  {locale === 'ja' ? '官民連携' : 'Public-Private Partnership'}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {t.research.publications.title}
            </h4>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {t.research.publications.paper1.title}
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {t.research.publications.paper1.journal}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t.research.publications.paper1.subtitle}
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {t.research.publications.paper2.title}
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {t.research.publications.paper2.authors} / {t.research.publications.paper2.journal}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t.research.publications.paper2.subtitle}
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {t.research.publications.paper3.title}
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {t.research.publications.paper3.publisher}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t.research.publications.paper3.subtitle}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              {t.research.education.title}
            </h4>
            <div className="space-y-2 text-gray-600 dark:text-gray-300">
              <p>• {t.research.education.doctorate}</p>
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
        <section id="qualifications" className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t.qualifications.title}
          </h3>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t.qualifications.travelManager.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {t.qualifications.travelManager.description}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            {t.contact.title}
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 mb-6">
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
              {t.contact.description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {t.contact.businessInquiry}
                </h4>
                <a
                  href="https://maas-creative.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {t.contact.businessInquiryLink}
                </a>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {t.contact.personalInquiry}
                </h4>
                <a
                  href="mailto:s18568un@gmail.com"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {t.contact.emailAddress}
                </a>
              </div>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://x.com/ukyokyongt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>@ukyokyongt</span>
              </a>
              <a
                href="https://researchmap.jp/ukyonagata"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>{t.contact.researchMap}</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>{t.footer.copyright}</p>
            <p className="mt-2 text-sm">{t.footer.builtWith}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

