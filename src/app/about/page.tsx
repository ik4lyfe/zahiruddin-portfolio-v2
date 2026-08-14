import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/data";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <Reveal>
        <p className="text-xs uppercase tracking-widest text-gold mb-3">About</p>
        <h1 className="font-serif text-4xl md:text-5xl text-navy dark:text-gold mb-8">Not a tech guy. An operator with technical hands.</h1>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <Reveal>
            <p>
              I started as an Environmental Health Officer — a field professional who lives in standards, compliance, and risk.
              Every inspection, every report, every process was a lesson in how operations really work on the ground.
            </p>
          </Reveal>
          <Reveal>
            <p>
              Then I studied operations management. Lean, process, structure — the language of business. And I kept building:
              five internal systems that became organisational standards, adopted by units beyond my own.
            </p>
          </Reveal>
          <Reveal>
            <p>
              Freelance taught me execution — from designing jerseys at eleven years old to delivering corporate websites.
              Investing taught me to read numbers like an owner.
            </p>
          </Reveal>
          <Reveal>
            <p className="font-serif text-xl text-navy dark:text-gold">
              My brand: an operations professional who fixes broken processes, revives dead units, and changes policy — with a
              track record to prove it.
            </p>
          </Reveal>
        </div>

        <div className="space-y-4">
          <Reveal delay={100}>
            <div className="border border-line dark:border-gray-700 rounded-sm p-6 bg-surface dark:bg-[#1a1d24]">
              <h2 className="font-serif text-xl text-navy dark:text-gold mb-3">Leadership philosophy</h2>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Fix broken processes before building new things</li>
                <li>• Listen to the stakeholder, then offer the better version</li>
                <li>• Adoption matters as much as the build — one URL the team remembers beats ten clever systems</li>
                <li>• Third-party endorsement beats self-claim</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div className="border border-line dark:border-gray-700 rounded-sm p-6 bg-surface dark:bg-[#1a1d24]">
              <h2 className="font-serif text-xl text-navy dark:text-gold mb-3">Beyond the job</h2>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Civil Defence (APM) reserve member since 2017</li>
                <li>• Graphic designer since 2008 — Photoshop before it was cool</li>
                <li>• BSMM, Rakan Alam Sekitar, MIHRM member</li>
                <li>• Based in {site.location}</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
