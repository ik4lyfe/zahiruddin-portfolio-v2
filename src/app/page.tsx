import Link from "next/link";
import Reveal from "@/components/Reveal";
import { capabilities, chapters, numbers, site } from "@/lib/data";

const photos = [
  "/photos/hero-workshop.jpg",
  "/photos/fieldwork-eho.jpg",
  "/photos/apm-flood.jpg",
  "/photos/dashboard-actual.png",
  "/photos/pc84e.jpg",
  "/photos/pd0de.jpg",
  "/photos/pf0d3.jpg",
];

export default function Home() {
  return (
    <div>
      {/* ═══ HERO — collage + catch (Pearl home_fv) ═══ */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-12 pb-20 grid md:grid-cols-2 gap-10 items-center">
          {/* collage — Pearl home_fv--imgs (2 panel, gambar berselerak) */}
          <div className="relative order-2 md:order-1">
            <div className="grid grid-cols-3 gap-3">
              <img src={photos[0]} alt="work" className="hero-img col-span-2 aspect-[4/3] object-cover rounded-sm" />
              <img src={photos[1]} alt="work" className="hero-img aspect-[4/3] object-cover rounded-sm mt-8" />
              <img src={photos[2]} alt="work" className="hero-img aspect-[3/4] object-cover rounded-sm -mt-4" />
              <img src={photos[3]} alt="work" className="hero-img col-span-2 aspect-[4/3] object-cover rounded-sm" />
            </div>
            <div className="absolute -bottom-4 -right-2 md:-right-6 rotate-2 bg-gold text-navy font-serif text-lg px-4 py-2 rounded-sm shadow-lg">
              5 years · public health
            </div>
          </div>

          {/* catch copy — Pearl voice: pendek, manusia */}
          <div className="order-1 md:order-2">
            <p className="text-sm uppercase tracking-widest text-gold mb-6">Behind smooth operations, there are people who hold the standard.</p>
            <h1 className="font-serif text-4xl md:text-6xl leading-tight text-navy dark:text-gold">
              The work that stays.<br />
              <span className="text-gray-400 dark:text-gray-500">The people behind it.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-md leading-relaxed">
              I&apos;m {site.name}, <span className="whitespace-nowrap">{site.postNominal}</span>. For five years I&apos;ve
              been fixing the small things — the forms, the reports, the processes nobody had time to question. Then the
              director made it a standard.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/work" className="px-6 py-3 bg-navy dark:bg-gold text-white dark:text-[#f5f5f5] font-medium rounded-sm hover:opacity-90 transition-opacity">
                See the work
              </Link>
              <Link href="/contact" className="px-6 py-3 border border-line dark:border-gray-600 rounded-sm link-line text-gray-700 dark:text-gray-200">
                Let&apos;s talk
              </Link>
            </div>
          </div>
        </div>
        {/* scroll indicator */}
        <div className="hidden md:flex justify-center pb-6">
          <div className="w-px h-12 bg-line dark:bg-gray-700 overflow-hidden">
            <div className="w-full h-full bg-gold scroll-bar" />
          </div>
        </div>
      </section>

      {/* ═══ MEMORIES — 4 rows marquee photos (Pearl home_memories) ═══ */}
      <section className="py-16 overflow-hidden">
        <div className="mb-10 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-gold mb-2">Memories</p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy dark:text-gold">Work that stays in memory.</h2>
            <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Every project leaves something behind — a system people still use, a process that never goes back to manual.</p>
          </Reveal>
        </div>
        <div className="space-y-4">
          {[0, 1, 2, 3].map((row) => (
            <div key={row} className={`mem-row ${row % 2 === 1 ? "reverse" : ""}`}>
              {[...photos, ...photos].map((p, i) => (
                <img key={i} src={p} alt="" className={`h-40 md:h-52 object-cover rounded-sm mx-2 ${row % 2 === 0 ? "" : "grayscale-[30%]"}`} />
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══ MY STORIES — cards with hashtag (Pearl My Stories) ═══ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <Reveal>
          <p className="text-xs uppercase tracking-widest text-gold mb-2">My Stories</p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy dark:text-gold mb-12">“The people who make it.”</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {chapters.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <article className="border border-line dark:border-gray-700 rounded-sm overflow-hidden bg-surface dark:bg-[#12354f] group hover:shadow-md transition-shadow">
                <div className="h-40 overflow-hidden">
                  <img src={photos[i % photos.length]} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-gold mb-2">My stories.{String(i + 1).padStart(2, "0")} · {c.period}</div>
                  <h3 className="font-serif text-xl text-navy dark:text-gold mb-2">{c.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{c.desc}</p>
                  <div className="flex gap-2 text-xs text-gold">
                    {["#Process", "#Standard", "#People"][i % 3]}
                    <span className="text-gray-400 dark:text-gray-500">#PublicHealth</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══ NUMBERS — marquee strip (Pearl numbers) ═══ */}
      <section className="bg-navy dark:bg-[#12354f] py-16 overflow-hidden">
        <p className="text-center text-xs uppercase tracking-widest text-gray-400 mb-8">Numbers that tell the story</p>
        <div className="text-loop">
          {[...numbers, ...numbers].map((n, i) => (
            <div key={i} className="flex items-baseline gap-4 whitespace-nowrap px-8">
              <span className="font-serif text-4xl text-[#f59e0b]">{n.prefix}{n.value}{n.suffix}</span>
              <span className="text-sm text-gray-300 max-w-[180px]">{n.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ INTRO SPLIT — sticky image + story (Pearl intro split) ═══ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20 grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <Reveal>
            <p className="font-serif text-2xl text-navy dark:text-gold">Why do I do all this?</p>
          </Reveal>
          <Reveal>
            <p>My director once said: “I want a big map like they have at the police station. Pin every food premise, pull strings, update by hand.”</p>
          </Reveal>
          <Reveal>
            <p>I listened. Then I showed him a dashboard — data connects itself, reports generate, updates in real time. No strings.</p>
          </Reveal>
          <Reveal>
            <p>He loved it. The director praised it. Every unit had to have a dashboard — “if you don&apos;t know how, learn from Zahiruddin.” Two workshop series, I facilitated both.</p>
          </Reveal>
          <Reveal>
            <p>That&apos;s my story: listen to people&apos;s problems, build the fix, make it the standard.</p>
          </Reveal>
        </div>
        <div className="md:sticky md:top-24">
          <Reveal delay={100}>
            <img src={photos[3]} alt="work in progress" className="w-full aspect-[3/4] object-cover rounded-sm" />
          </Reveal>
        </div>
      </section>

      {/* ═══ CULTURE — pull quote (Pearl culture) ═══ */}
      <section className="bg-surface dark:bg-[#12354f] border-y border-line dark:border-gray-700 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Reveal>
            <p className="font-serif text-2xl md:text-3xl text-navy dark:text-gold leading-relaxed">
              “Smooth processes don&apos;t happen by themselves.<br />There&apos;s someone holding the standard behind them.”
            </p>
            <p className="mt-6 text-xs uppercase tracking-widest text-gray-400">— What I believe</p>
          </Reveal>
        </div>
      </section>

      {/* ═══ CAPABILITIES ═══ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <Reveal>
          <p className="text-xs uppercase tracking-widest text-gold mb-2">What I bring</p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy dark:text-gold mb-12">Three domains, one way of thinking.</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <div className="border border-line dark:border-gray-700 rounded-sm p-6 h-full bg-surface dark:bg-[#12354f] hover:shadow-md transition-shadow">
                <div className="text-xs uppercase tracking-widest text-gold mb-3">0{i + 1}</div>
                <h3 className="font-serif text-xl text-navy dark:text-gold mb-2">{c.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══ CTA — image wall (Pearl cta) ═══ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20">
        <div className="text-center mb-10">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl text-navy dark:text-gold">Let&apos;s talk.</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
              Open to operations roles — procurement, supply chain, logistics, planning. And freelance web development.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="px-8 py-3 bg-navy dark:bg-gold text-white dark:text-[#f5f5f5] font-medium rounded-sm hover:opacity-90 transition-opacity">
                Get in touch
              </Link>
              <Link href="/credentials" className="px-8 py-3 border border-line dark:border-gray-600 rounded-sm link-line text-gray-700 dark:text-gray-200">
                See credentials
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[...photos.slice(0, 4), ...photos.slice(0, 4)].map((p, i) => (
            <img key={i} src={p} alt="" className="aspect-square object-cover rounded-sm" />
          ))}
        </div>
      </section>
    </div>
  );
}
