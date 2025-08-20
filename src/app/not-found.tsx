import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          404 - Page Not Found
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link 
          href="/"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-block"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}