import Link from 'next/link';
import { site } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-line mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
        <div>© {new Date().getFullYear()} {site.name}, {site.postNominal}. All rights reserved.</div>
        <div className="flex gap-6">
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="link-line">LinkedIn</a>
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="link-line">GitHub</a>
          <a href={`mailto:${site.email}`} className="link-line">Email</a>
        </div>
        <div>
          Powered by{' '}
          <a href="https://zahiruddinzaki.my" target="_blank" rel="noopener noreferrer" className="text-navy dark:text-gold link-line">
            Zahiruddin Zaki
          </a>
        </div>
      </div>
    </footer>
  );
}
