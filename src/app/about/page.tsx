import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/data";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
      <Reveal>
        <p className="text-xs uppercase tracking-widest text-gold mb-3">About</p>
        <h1 className="font-serif text-4xl md:text-5xl text-navy dark:text-gold mb-8">Not a tech guy. An operator with technical hands.</h1>
      </Reveal>

      <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
        <Reveal>
          <p>
            Five years as a public health officer. Fieldwork, inspections, forms — so many forms. Every month, someone had
            to sit for two or three days compiling reports. That was normal, until I asked: why?
          </p>
        </Reveal>
        <Reveal>
          <p>
            So I built systems. Not because I&apos;m an IT kid — because I can&apos;t stand watching fixable processes stay
            broken. A dashboard, eFOPRINS, eSAFE, a unit hub, the UKA website. One by one, they became standards.
          </p>
        </Reveal>
        <Reveal>
          <p>
            Outside work, I keep learning. BBA Operations Management (CGPA 3.70, finishing early — 10 semesters in 8),
            CGMA FLP, the National Investment Programme sponsored by Bursa Malaysia, CHRO. I want to understand not just
            processes, but the business behind them.
          </p>
        </Reveal>
        <Reveal>
          <p>
            Freelance taught me execution. I designed jerseys in primary school and sold RM12K worth to KKM students and
            staff. This year, my first website client — pre-hospital emergency services in oil &amp; gas.
          </p>
        </Reveal>
        <Reveal>
          <p className="font-serif text-2xl text-navy dark:text-gold">
            I&apos;m not someone who waits. I see a problem, build the fix, and make it the standard — with the track
            record to show it.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-4">
        <Reveal delay={100}>
          <div className="border border-line dark:border-gray-700 rounded-sm p-6 bg-surface dark:bg-[#12354f]">
            <h2 className="font-serif text-xl text-navy dark:text-gold mb-3">How I work</h2>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Listen to the stakeholder first, then offer the better version</li>
              <li>• Build things people will actually use — adoption beats cleverness</li>
              <li>• Numbers are stronger than adjectives</li>
              <li>• Third-party endorsement beats self-claim</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={180}>
          <div className="border border-line dark:border-gray-700 rounded-sm p-6 bg-surface dark:bg-[#12354f]">
            <h2 className="font-serif text-xl text-navy dark:text-gold mb-3">Beyond the job</h2>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Civil Defence (APM) reserve member since 2017</li>
              <li>• Graphic designer since 2008 — Photoshop in primary school</li>
              <li>• BSMM, Rakan Alam Sekitar, MIHRM member</li>
              <li>• Based in {site.location}</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
