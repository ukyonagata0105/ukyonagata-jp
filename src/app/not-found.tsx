import Link from 'next/link';
import { ThemeBackground } from '@/components/ThemeBackground';

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      <ThemeBackground />
      <div className="relative z-10 text-center theme-card p-8 sm:p-12">
        <h2 className="text-4xl font-bold text-forest-dark mb-4">
          404 - Page Not Found
        </h2>
        <p className="text-xl theme-body-text mb-8">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link href="/ja" className="theme-btn-primary inline-block">
          Return Home
        </Link>
      </div>
    </div>
  );
}
