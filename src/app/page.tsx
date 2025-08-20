export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Ukyo Nagata
            </h1>
            <div className="flex space-x-6">
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                About
              </a>
              <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Projects
              </a>
              <a href="#research" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Research
              </a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Software Engineer & Researcher
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate about building innovative solutions and conducting meaningful research. 
            Experienced in full-stack development, machine learning, and academic research.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            About Me
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              I&apos;m a passionate software engineer and researcher with experience in developing 
              scalable web applications and conducting academic research. My interests span 
              across modern web technologies, machine learning, and user experience design.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Portfolio Website
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Modern portfolio built with Next.js 15, TypeScript, and Tailwind CSS.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
                  Next.js
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm">
                  TypeScript
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-sm">
                  Tailwind CSS
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Coming Soon
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                More projects will be showcased here as the portfolio develops.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded text-sm">
                  TBD
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Research Projects
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Academic research and publications in computer science and related fields.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-sm">
                  Research
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Research & Publications
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-center">
              Research publications and academic work will be featured here. 
              Stay tuned for updates on ongoing research projects and collaborations.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Get in Touch
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
              Interested in collaborating or have questions about my work?
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Contact information and social links will be added soon.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>&copy; 2024 Ukyo Nagata. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Built with Next.js 15, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
