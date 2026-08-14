import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { freelanceWork, projects } from "@/lib/data";

export const metadata: Metadata = { title: "Work" };

const photos = [
  "/photos/p0c3e.jpg",
  "/photos/p36cb.jpg",
  "/photos/p4486.jpg",
  "/photos/pc1dc.jpg",
  "/photos/pc84e.jpg",
];

export default function Work() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <Reveal>
        <p className="text-xs uppercase tracking-widest text-gold mb-3">Work</p>
        <h1 className="font-serif text-4xl md:text-5xl text-navy dark:text-gold mb-4">Digital transformation, from the inside</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-16 max-w-2xl leading-relaxed">
          Five systems built inside my own organisation — not as IT projects, but as answers to problems people lived
          with every day. Each one turned days of manual work into a few clicks.
        </p>
      </Reveal>

      {/* Hero case study — full width */}
      <Reveal>
        <article className="grid md:grid-cols-2 gap-0 border border-gold dark:border-gold rounded-sm overflow-hidden mb-10 bg-surface dark:bg-[#12354f]">
          <div className="h-64 md:h-auto overflow-hidden">
            <img src={photos[0]} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <div className="text-xs uppercase tracking-widest text-gold mb-2">Hero story · {projects[0].metric}</div>
            <h2 className="font-serif text-2xl md:text-3xl text-navy dark:text-gold mb-4">{projects[0].title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
              <span className="font-medium text-gray-800 dark:text-gray-200">The problem: </span>{projects[0].problem}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
              <span className="font-medium text-gray-800 dark:text-gray-200">What I did: </span>{projects[0].action}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              <span className="font-medium text-gray-800 dark:text-gray-200">The result: </span>{projects[0].result}
            </p>
          </div>
        </article>
      </Reveal>

      {/* Other projects — alternating */}
      <div className="space-y-10">
        {projects.slice(1).map((p, i) => (
          <Reveal key={p.title} delay={i * 60}>
            <article className={`grid md:grid-cols-2 gap-6 items-center border border-line dark:border-gray-700 rounded-sm overflow-hidden bg-surface dark:bg-[#12354f] hover:shadow-md transition-shadow ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
              <div className="h-56 md:h-72 overflow-hidden [direction:ltr]">
                <img src={photos[(i + 1) % photos.length]} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 md:p-8 [direction:ltr]">
                <div className="text-xs uppercase tracking-widest text-gold mb-2">{p.tag} · {p.metric}</div>
                <h2 className="font-serif text-2xl text-navy dark:text-gold mb-4">{p.title}</h2>
                <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p><span className="font-medium text-gray-800 dark:text-gray-200">The problem: </span>{p.problem}</p>
                  <p><span className="font-medium text-gray-800 dark:text-gray-200">What I did: </span>{p.action}</p>
                  <p><span className="font-medium text-gray-800 dark:text-gray-200">The result: </span>{p.result}</p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Freelance — warm close */}
      <Reveal>
        <h2 className="font-serif text-3xl text-navy dark:text-gold mt-20 mb-8">Freelance</h2>
      </Reveal>
      <div className="grid md:grid-cols-2 gap-6">
        {freelanceWork.map((f, i) => (
          <Reveal key={f.title} delay={i * 80}>
            <div className="border border-line dark:border-gray-700 rounded-sm p-6 bg-surface dark:bg-[#12354f] h-full hover:shadow-md transition-shadow">
              <div className="text-xs uppercase tracking-widest text-gold mb-2">{f.type}</div>
              <h3 className="font-serif text-xl text-navy dark:text-gold mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{f.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
