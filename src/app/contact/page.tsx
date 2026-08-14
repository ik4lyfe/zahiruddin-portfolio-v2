import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/data";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
      <Reveal>
        <p className="text-xs uppercase tracking-widest text-gold mb-3">Contact</p>
        <h1 className="font-serif text-4xl md:text-5xl text-navy dark:text-gold mb-4">Let&apos;s talk.</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-xl">
          Open to operations roles — procurement, supply chain, logistics, planning. Also taking freelance web development
          projects. Reach out, I usually reply within a day.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <Reveal>
          <a href={`mailto:${site.email}`} className="block border border-line dark:border-gray-700 rounded-sm p-6 bg-surface dark:bg-[#1a1d24] hover:shadow-md transition-shadow">
            <div className="text-xs uppercase tracking-widest text-gold mb-2">Email</div>
            <div className="font-medium text-navy dark:text-gold break-all">{site.email}</div>
          </a>
        </Reveal>
        <Reveal delay={80}>
          <div className="border border-line dark:border-gray-700 rounded-sm p-6 bg-surface dark:bg-[#1a1d24]">
            <div className="text-xs uppercase tracking-widest text-gold mb-3">Socials</div>
            <div className="flex gap-6">
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="link-line text-navy dark:text-gold font-medium">LinkedIn</a>
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="link-line text-navy dark:text-gold font-medium">GitHub</a>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="border border-line dark:border-gray-700 rounded-sm p-8 bg-surface dark:bg-[#1a1d24]">
          <h2 className="font-serif text-2xl text-navy dark:text-gold mb-6">Send a message</h2>
          <form
            action={`mailto:${site.email}`}
            method="post"
            encType="text/plain"
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Name</label>
                <input id="name" name="name" required className="w-full px-3 py-2 border border-line dark:border-gray-600 rounded-sm bg-bg dark:bg-[#121212] text-ink focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Email</label>
                <input id="email" name="email" type="email" required className="w-full px-3 py-2 border border-line dark:border-gray-600 rounded-sm bg-bg dark:bg-[#121212] text-ink focus:outline-none focus:border-gold" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Message</label>
              <textarea id="message" name="message" rows={5} required className="w-full px-3 py-2 border border-line dark:border-gray-600 rounded-sm bg-bg dark:bg-[#121212] text-ink focus:outline-none focus:border-gold resize-y" />
            </div>
            <button type="submit" className="px-6 py-3 bg-navy dark:bg-gold text-white dark:text-[#121212] font-medium rounded-sm hover:opacity-90 transition-opacity">
              Send message
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
}
