import Link from "next/link";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { capabilities, chapters, numbers, site } from "@/lib/data";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-16 md:pt-24 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <Reveal>
          <p className="text-sm uppercase tracking-widest text-gold mb-4">Operations · Finance · Digital Transformation</p>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight text-navy dark:text-gold">
            Built on operations.<br />Led by purpose.
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-md">
            I&apos;m {site.name} — an operations professional with a technical background. I fix broken processes, revive dead
            units, and turn manual work into standards people actually use.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/work"
              className="px-6 py-3 bg-navy dark:bg-gold text-white dark:text-[#121212] font-medium rounded-sm hover:opacity-90 transition-opacity"
            >
              View my work
            </Link>
            <Link href="/contact" className="px-6 py-3 border border-line dark:border-gray-600 rounded-sm link-line text-gray-700 dark:text-gray-200">
              Let&apos;s talk
            </Link>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="relative">
            <div className="aspect-[4/5] bg-navy dark:bg-[#1a1d24] border border-line dark:border-gray-700 rounded-sm flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <div className="font-serif text-7xl text-gold">ZZ</div>
                <div className="mt-4 text-white dark:text-gray-300 text-sm tracking-wide">{site.name}</div>
                <div className="mt-1 text-gray-400 dark:text-gray-500 text-xs">{site.location}</div>
                <div className="mt-6 text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500">Photo coming soon</div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Manifesto */}
      <section className="bg-navy dark:bg-[#1a1d24] py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <Reveal>
            <p className="font-serif text-2xl md:text-3xl text-white dark:text-gold leading-relaxed">
              &ldquo;Behind smooth operations, there are people who hold the standard.&rdquo;
            </p>
            <p className="mt-6 text-gray-400 dark:text-gray-400 text-sm uppercase tracking-widest">— Manifesto</p>
          </Reveal>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-16 overflow-hidden">
        <div className="marquee-track flex gap-12 w-max">
          {[...numbers, ...numbers].map((n, i) => (
            <div key={i} className="flex items-center gap-3 whitespace-nowrap px-6">
              <span className="font-serif text-3xl text-navy dark:text-gold">
                {n.prefix}{n.value}{n.suffix}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 max-w-[200px]">{n.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Chapters */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <Reveal>
          <h2 className="font-serif text-3xl md:text-4xl text-navy dark:text-gold mb-2">The journey</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-12">Five chapters that built the operator.</p>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <div className="border border-line dark:border-gray-700 rounded-sm p-6 h-full hover:shadow-md transition-shadow bg-surface dark:bg-[#1a1d24]">
                <div className="text-xs uppercase tracking-widest text-gold mb-3">Chapter {String(i + 1).padStart(2, "0")} · {c.period}</div>
                <h3 className="font-serif text-xl text-navy dark:text-gold mb-2">{c.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured work */}
      <section className="bg-surface dark:bg-[#1a1d24] border-y border-line dark:border-gray-700 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-gold mb-3">Hero story</p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy dark:text-gold mb-4">
              A dashboard that became an organisational standard
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              What started as a request for a physical map with pins became a digital dashboard — one the director mandated
              every unit to use. <span className="italic">&ldquo;If you don&apos;t know how, learn from Zahiruddin.&rdquo;</span>
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Monthly reports that took 2-3 days now take a few clicks. Data is real-time. Two workshop series, led by me.
            </p>
            <Link href="/work" className="link-line text-navy dark:text-gold font-medium">Read the full story →</Link>
          </Reveal>
          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-6 text-center">
              {numbers.slice(0, 4).map((n) => (
                <Counter key={n.label} value={n.value} prefix={n.prefix} suffix={n.suffix} label={n.label} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <Reveal>
          <h2 className="font-serif text-3xl md:text-4xl text-navy dark:text-gold mb-12">What I bring</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <div className="border-l-2 border-gold pl-6">
                <h3 className="font-serif text-xl text-navy dark:text-gold mb-2">{c.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 text-center">
        <Reveal>
          <h2 className="font-serif text-3xl md:text-5xl text-navy dark:text-gold mb-4">Let&apos;s talk.</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
            Open to operations roles — procurement, supply chain, logistics, planning. And freelance web development.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-navy dark:bg-gold text-white dark:text-[#121212] font-medium rounded-sm hover:opacity-90 transition-opacity">
              Get in touch
            </Link>
            <Link href="/credentials" className="px-8 py-3 border border-line dark:border-gray-600 rounded-sm link-line text-gray-700 dark:text-gray-200">
              See credentials
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
