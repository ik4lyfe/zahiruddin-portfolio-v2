import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/data";

export const metadata: Metadata = { title: "Journal", alternates: { canonical: "/journal" } };

const photos = [
  "/photos/p0c3e.jpg",
  "/photos/p36cb.jpg",
  "/photos/p4486.jpg",
  "/photos/pc1dc.jpg",
];

const posts = [
  {
    date: "2026",
    title: "Why I'm finishing my degree in 8 semesters instead of 10",
    tag: "Ops Career",
    excerpt: "Everyone asked how. Nobody asked why — and the why is the part worth telling. It's not about speed. It's about not wasting a single semester of momentum.",
  },
  {
    date: "2026",
    title: "The dashboard that became an organisational standard",
    tag: "Ops Career",
    excerpt: "It started as a request for a map with pins and strings. It ended with the director mandating every unit to build one. The lesson: listen first, then build better.",
  },
  {
    date: "2026",
    title: "What environmental health taught me about process",
    tag: "Ops Career",
    excerpt: "Five years of inspections taught me that standards only work when people believe in them. Same lesson applies to any operation, any industry.",
  },
  {
    date: "2026",
    title: "What the National Investment Programme changed in how I read numbers",
    tag: "Finance",
    excerpt: "550 of 5000+ selected. But the real win was learning to see a company as a set of decisions, not a ticker symbol.",
  },
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

      <div className="space-y-10">
        {posts.map((p, i) => (
          <Reveal key={p.title} delay={i * 60}>
            <article className={`grid md:grid-cols-2 gap-6 items-center border border-line dark:border-gray-700 rounded-sm overflow-hidden bg-surface dark:bg-[#12354f] hover:shadow-md transition-shadow ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
              <div className="h-48 md:h-56 overflow-hidden [direction:ltr]">
                <img src={photos[i % photos.length]} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 md:p-8 [direction:ltr]">
                <div className="text-xs uppercase tracking-widest text-gold mb-2">{p.date} · {p.tag}</div>
                <h2 className="font-serif text-xl md:text-2xl text-navy dark:text-gold mb-3">{p.title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{p.excerpt}</p>
                <a href="#" className="link-line text-navy dark:text-gold text-sm font-medium">Read on LinkedIn →</a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-12 text-sm text-gray-500 dark:text-gray-400">
          More on{' '}
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
