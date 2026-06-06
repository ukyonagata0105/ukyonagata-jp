'use client';

import { useEffect, useRef, useState } from 'react';

interface MobileNavProps {
  items: Array<{ href: string; label: string }>;
}

export function MobileNav({ items }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (
        panelRef.current &&
        event.target instanceof Node &&
        !panelRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <div className="relative lg:hidden">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-2 theme-control transition-colors"
        aria-label="メニュー"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-panel"
      >
        <svg
          className="w-6 h-6 text-forest-dark"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm" />
          <div
            ref={panelRef}
            id="mobile-navigation-panel"
            className="fixed inset-x-4 top-20 z-50 rounded-2xl theme-card shadow-2xl"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--card-border)]">
              <span className="text-base font-semibold text-forest-dark">
                Menu
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 theme-control transition-colors"
                aria-label="閉じる"
              >
                <svg
                  className="w-5 h-5 text-forest-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col divide-y divide-[var(--card-border)]">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between px-5 py-4 text-lg font-medium text-forest-dark hover:bg-[var(--mint-light)] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{item.label}</span>
                  <span className="text-royal text-sm">→</span>
                </a>
              ))}
            </nav>
          </div>
        </>
      )}
    </div>
  );
}



