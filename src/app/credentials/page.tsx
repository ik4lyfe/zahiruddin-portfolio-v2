import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { credentials, numbers } from "@/lib/data";

export const metadata: Metadata = { title: "Credentials", alternates: { canonical: "/credentials" } };

export default function Credentials() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <Reveal>
        <p className="text-xs uppercase tracking-widest text-gold mb-3">Credentials</p>
        <h1 className="font-serif text-4xl md:text-5xl text-navy dark:text-gold mb-4">Built for operations</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-16 max-w-2xl leading-relaxed">
          Operations management is the core — process improvement, leadership, people. Data analytics and finance are the
          tools I bring to make operations decisions better. Every cert below earns its place by making me more useful to
          an operations team.
        </p>
      </Reveal>

      {/* numbers */}
      <Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {numbers.map((n) => (
            <Counter key={n.label} value={n.value} prefix={n.prefix} suffix={n.suffix} decimals={n.decimals || 0} label={n.label} />
          ))}
        </div>
      </Reveal>

      {/* certs — warm cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {credentials.map((c, i) => (
          <Reveal key={c.name} delay={i * 50}>
            <div className="border border-line dark:border-gray-700 rounded-sm p-6 bg-surface dark:bg-[#12354f] h-full flex flex-col hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-3">
                <h2 className="font-serif text-xl text-navy dark:text-gold">{c.name}</h2>
                <span className={`text-[10px] uppercase tracking-widest px-2 py-1 rounded-sm whitespace-nowrap ${
                  c.status === "Complete"
                    ? "bg-gold/20 text-gold"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                }`}>
                  {c.status}
                </span>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">{c.org}</div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-auto leading-relaxed">{c.note}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* warm close */}
      <Reveal>
        <div className="mt-16 border-l-2 border-gold pl-6 max-w-2xl">
          <p className="font-serif text-xl md:text-2xl text-navy dark:text-gold leading-relaxed">
            &ldquo;I studied operations so I could lead them. I studied data and finance so I could decide well.&rdquo;
          </p>
        </div>
      </Reveal>
    </div>
  );
}
