'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navLinks, site } from '@/lib/data';
import ThemeToggle from './ThemeToggle';

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur border-b border-line dark:bg-[#121212]/80">
      <nav className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="shrink-0 font-serif text-lg text-navy dark:text-gold" onClick={() => setOpen(false)}>
            {site.name}
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-2 text-sm link-line ${pathname === l.href ? 'text-navy dark:text-gold font-medium' : 'text-gray-600 dark:text-gray-300 hover:text-navy dark:hover:text-gold'}`}
              >
                {l.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              className="p-2 rounded text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden absolute left-0 right-0 top-16 bg-surface dark:bg-[#1a1d24] border-b border-line shadow-lg z-50">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block px-6 py-3 text-sm ${pathname === l.href ? 'text-navy dark:text-gold font-medium' : 'text-gray-600 dark:text-gray-300'}`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
