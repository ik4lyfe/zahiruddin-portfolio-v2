import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { timeline } from "@/lib/data";

export const metadata: Metadata = { title: "Career" };

const photos = [
  "/photos/p0c3e.jpg",
  "/photos/p36cb.jpg",
  "/photos/p4486.jpg",
  "/photos/pc1dc.jpg",
  "/photos/pc84e.jpg",
  "/photos/pd0de.jpg",
];

const stories = [
  {
    year: "2017",
    title: "APM — Civil Defence",
    desc: "I joined as a reserve member. What started as community service became discipline — showing up, staying ready, leading when asked.",
    tag: "#Discipline #Service",
  },
  {
    year: "2020",
    title: "KKM — Ministry of Health",
    desc: "A contract officer during COVID. The pressure taught me what I can carry. I left seeking growth — not fleeing.",
    tag: "#Pressure #Growth",
  },
  {
    year: "2021",
    title: "UiTM — Environmental Health Officer",
    desc: "Five years of continuous improvement. Policies changed, processes fixed, systems built — until they became standards.",
    tag: "#Improvement #Standards",
  },
  {
    year: "2024",
    title: "Vice Chancellor Special Project",
    desc: "Selected 25 out of 100 applicants nationwide. Fully sponsored by UiTM. This opened the door to HR — MIHRM, CHRO.",
    tag: "#Selected #Sponsored",
  },
  {
    year: "2026",
    title: "BBA Ops Management — Final Stretch",
    desc: "CGPA 3.70, on track for First Class. Finishing 10 semesters in 8 — without dropping the grades. That's the work ethic.",
    tag: "#Discipline #Efficiency",
  },
  {
    year: "2027",
    title: "Graduation & Transition",
    desc: "The degree completes. The next chapter: operations management — procurement, supply chain, logistics, planning.",
    tag: "#NextChapter #Operations",
  },
];

export default function Career() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
      <Reveal>
        <p className="text-xs uppercase tracking-widest text-gold mb-3">Career</p>
        <h1 className="font-serif text-4xl md:text-5xl text-navy dark:text-gold mb-4">A journey of continuous improvement</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-16 max-w-2xl leading-relaxed">
          Every chapter added a layer — field officer, operations student, freelance builder. The thread is the same:
          I see broken processes, and I fix them.
        </p>
      </Reveal>

      <div className="space-y-10">
        {stories.map((s, i) => (
          <Reveal key={s.year} delay={i * 60}>
            <article className={`grid md:grid-cols-2 gap-6 items-center border border-line dark:border-gray-700 rounded-sm overflow-hidden bg-surface dark:bg-[#12354f] hover:shadow-md transition-shadow ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
              <div className="h-56 md:h-64 overflow-hidden [direction:ltr]">
                <img src={photos[i % photos.length]} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 md:p-8 [direction:ltr]">
                <div className="text-xs uppercase tracking-widest text-gold mb-2">{s.year}</div>
                <h2 className="font-serif text-2xl text-navy dark:text-gold mb-3">{s.title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{s.desc}</p>
                <div className="text-xs text-gold">{s.tag}</div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
