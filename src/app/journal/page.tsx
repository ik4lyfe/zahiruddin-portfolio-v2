import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { journalPosts } from "@/lib/data";

export const metadata: Metadata = { title: "Journal" };

const photos = [
  "/photos/p0c3e.jpg",
  "/photos/p36cb.jpg",
  "/photos/p4486.jpg",
  "/photos/pc1dc.jpg",
];

export default function Journal() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
      <Reveal>
        <p className="text-xs uppercase tracking-widest text-gold mb-3">Journal</p>
        <h1 className="font-serif text-4xl md:text-5xl text-navy dark:text-gold mb-4">Insights & reflections</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-16 max-w-2xl leading-relaxed">
          Short pieces on operations, finance, and growth — written the way I think: first person, concrete, honest.
          Republished from LinkedIn and Threads.
        </p>
      </Reveal>

      <div className="divide-y divide-line dark:divide-gray-700 border-y border-line dark:border-gray-700">
        {journalPosts.map((p, i) => (
          <Reveal key={p.title} delay={i * 50}>
            <a href="#" className="group flex items-center gap-5 py-6 hover:bg-surface dark:hover:bg-[#1a1d24] px-2 -mx-2 transition-colors">
              <img src={photos[i % photos.length]} alt="" className="hidden sm:block w-20 h-16 object-cover rounded-sm shrink-0" />
              <div className="min-w-0">
                <div className="flex items-baseline gap-4">
                  <span className="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap">{p.date}</span>
                  <span className="font-serif text-lg md:text-xl text-navy dark:text-gold group-hover:underline">
                    {p.title}
                  </span>
                </div>
                <div className="mt-1">
                  <span className="text-[10px] uppercase tracking-widest text-gold">{p.tag}</span>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          Full posts appear on{' '}
          <a href="https://linkedin.com/in/zahiruddin-zaki" target="_blank" rel="noopener noreferrer" className="link-line text-navy dark:text-gold">
            LinkedIn
          </a>
          {' '}and{' '}
          <a href="https://threads.net" target="_blank" rel="noopener noreferrer" className="link-line text-navy dark:text-gold">
            Threads
          </a>
          .
        </p>
      </Reveal>
    </div>
  );
}
