import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { timeline } from "@/lib/data";

export const metadata: Metadata = { title: "Career" };

export default function Career() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
      <Reveal>
        <p className="text-xs uppercase tracking-widest text-gold mb-3">Career</p>
        <h1 className="font-serif text-4xl md:text-5xl text-navy dark:text-gold mb-4">A journey of continuous improvement</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl">
          Every chapter — from field officer to operations student to freelance builder — added a layer. The thread is the
          same: I see broken processes and I fix them.
        </p>
      </Reveal>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-line dark:bg-gray-700" />
        <div className="space-y-12">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 60}>
              <div className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="absolute left-4 md:left-1/2 w-2 h-2 rounded-full bg-gold -translate-x-1/2 mt-2" />
                <div className={`pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="border border-line dark:border-gray-700 rounded-sm p-6 bg-surface dark:bg-[#1a1d24] hover:shadow-md transition-shadow">
                    <div className="text-xs uppercase tracking-widest text-gold mb-1">{t.year}</div>
                    <h3 className="font-serif text-xl text-navy dark:text-gold mb-2">{t.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{t.desc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
