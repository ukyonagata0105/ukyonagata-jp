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
            Civic Tech Engineer & Democracy Researcher
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Creating technology that bridges AI innovation with human experience, focusing on 
            participatory governance and civic engagement platforms. Passionate about democratizing 
            technology to maximize human potential in public spaces.
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
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-4">
              I&apos;m a civic technology engineer and democracy researcher, dedicated to creating 
              technology that maximizes human potential through participatory governance and 
              AI-human collaboration. My work focuses on transforming public spaces through 
              innovative digital solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Currently developing platforms for citizen engagement and consensus-building, 
              while also serving as a lecturer for Rule Makers DAO RIFT, exploring the 
              intersection of blockchain technology and democratic governance.
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
                Liquitous
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Civic engagement platform for participatory governance and consensus-building. 
                Operating in Kamakura City and Kashiwanoha Smart City.
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
              <a 
                href="https://liquitous.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                Visit Project →
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                MaaS Creative
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Technology initiative creating &quot;More Creative Public&quot; spaces by developing 
                technologies that maximize human potential through AI-human collaboration.
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
              <a 
                href="https://maas-creative.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                Visit Project →
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Rule Makers DAO RIFT
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Lecturer role exploring blockchain technology and democratic governance, 
                bridging Web3 innovation with participatory decision-making systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-sm">
                  Blockchain
                </span>
                <span className="bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 px-2 py-1 rounded text-sm">
                  DAO
                </span>
                <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-sm">
                  Governance
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Research & Academic Work
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Civic Technology Research
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Exploring the intersection of technology and democratic governance, 
                focusing on participatory platforms and citizen engagement mechanisms.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
                  Democracy
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm">
                  Civic Tech
                </span>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                AI & Human Collaboration
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Research on integrating AI-generated content with human experience, 
                transforming limitations into creative opportunities for public innovation.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-sm">
                  AI/LLM
                </span>
                <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-2 py-1 rounded text-sm">
                  HCI
                </span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Academic Profile
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Detailed research activities and publications available on ResearchMap.
            </p>
            <a 
              href="https://researchmap.jp/ukyonagata" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              View ResearchMap Profile →
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Connect & Collaborate
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
              Interested in civic technology, democratic innovation, or AI-human collaboration? 
              Let&apos;s connect and explore how we can create more participatory digital futures together.
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://x.com/ukyonagata" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>@ukyonagata</span>
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
                <span>ResearchMap</span>
              </a>
            </div>
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
