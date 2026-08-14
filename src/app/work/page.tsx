import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { freelanceWork, projects } from "@/lib/data";

export const metadata: Metadata = { title: "Work" };

export default function Work() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <Reveal>
        <p className="text-xs uppercase tracking-widest text-gold mb-3">Work</p>
        <h1 className="font-serif text-4xl md:text-5xl text-navy dark:text-gold mb-4">Internal digital transformation</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl">
          Five systems built inside my organisation — not as IT projects, but as operations improvements. Each one turned
          days of manual work into a few clicks.
        </p>
      </Reveal>

      <div className="space-y-12">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 60}>
            <article className={`grid md:grid-cols-2 gap-8 items-center border border-line dark:border-gray-700 rounded-sm p-8 bg-surface dark:bg-[#1a1d24] ${i === 0 ? "border-gold dark:border-gold" : ""}`}>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs uppercase tracking-widest text-gold">{p.tag}</span>
                  <span className="text-xs text-gray-400 dark:text-gray-500">· {p.metric}</span>
                </div>
                <h2 className="font-serif text-2xl text-navy dark:text-gold mb-4">{p.title}</h2>
                <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <p><span className="font-medium text-gray-800 dark:text-gray-200">Problem: </span>{p.problem}</p>
                  <p><span className="font-medium text-gray-800 dark:text-gray-200">What I did: </span>{p.action}</p>
                  <p><span className="font-medium text-gray-800 dark:text-gray-200">Result: </span>{p.result}</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full aspect-[4/3] bg-navy dark:bg-[#121212] border border-line dark:border-gray-700 rounded-sm flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="font-serif text-3xl text-gold">{p.metric}</div>
                    <div className="mt-2 text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest">Before → After</div>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <h2 className="font-serif text-3xl text-navy dark:text-gold mt-20 mb-8">Freelance</h2>
      </Reveal>
      <div className="grid md:grid-cols-2 gap-6">
        {freelanceWork.map((f, i) => (
          <Reveal key={f.title} delay={i * 80}>
            <div className="border border-line dark:border-gray-700 rounded-sm p-6 bg-surface dark:bg-[#1a1d24] h-full hover:shadow-md transition-shadow">
              <div className="text-xs uppercase tracking-widest text-gold mb-2">{f.type}</div>
              <h3 className="font-serif text-xl text-navy dark:text-gold mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{f.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
