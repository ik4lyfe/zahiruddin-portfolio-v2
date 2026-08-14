# Implementation Plan — Digital Portfolio v2

## 1. Tech Stack (Keputusan)

**Stack: Next.js (App Router) + Tailwind CSS, static export (`output: "export"`), deploy ke Cloudflare Pages.**

Sebab:
- Dah proven dengan ASP Al-Hayat (repo `asp-alhayat-website`) — workflow `cloudflare-pages-deploy` skill dah sedia.
- Portfolio = static content je, takde backend/DB/auth → zero server cost, free hosting.
- SEO friendly (SSG), fast load (edge CDN).
- Guna design system yang ayah dah confirm (navy+gold, off-white/off-black, dark mode toggle).

**Alternatif (kalau nak paling ringan):**
| Stack | Pros | Cons |
|---|---|---|
| **Next.js static export** ✅ | Proven, sama macam ASP | Build sikit berat (Node) |
| Astro | Lebih ringan, content-first | Stack baru, tak proven dgn CF workflow kita |
| Plain HTML/CSS/JS | Paling ringan, zero build | Susah maintain content, no component reuse |

**Keputusan: Next.js static export — sama macam asp-alhayat.** Tak payah belajar stack baru, deploy workflow dah jalan.

## 2. Struktur Halaman (Multi-Page, DECIDED)

```
/            → Homepage summary (hero, 3 capabilities, numbers, journey ringkas, CTA)
/about       → Manifesto + origin story + leadership philosophy
/career      → Journey timeline + improvement stories
/credentials → Certs grid + numbers
/work        → Internal projects + freelance case studies
/journal     → Blog/insights (repurpose LinkedIn/Threads, jangan embed)
/contact     → Form + socials
```

## 3. Design System (CONFIRMED)

**Palette — Corporate Navy + Gold** (light default + dark toggle):

```css
Light: bg #FAFAFA, surface #FFFFFF, text #212121, primary #102A43 (navy), accent #BBA764 (gold), border #E5E7EB
Dark:  bg #121212, surface #1A1D24, text #F5F5F5, primary #BBA764 (gold), accent #E35D3C (terracotta), border #2A2D35
```

**Typography:** corporate → Poppins/Roboto/Gilroy. Serif editorial untuk warmth (Libre Baskerville style) — hero/display headings serif, body sans.

**Warmth datang dari content, bukan warna:** real stories, candid photos, understated UI. (Pelajaran dari Pearl reference.)

## 4. Phases

### Phase 0 — Content Finalization (SEBELUM build)
- [ ] Hero story selection — guna 4-criteria framework /20 (5-7 cerita, score, pilih tertinggi)
- [ ] Polish semua raw copy dalam `content/`
- [ ] Gambar inventory — potret professional, kerja lapangan EHO, APM, UiTM, freelance, poster jersey, certs, leadership programs (semua dah ada)
- [ ] Confirm CGPA (3.70 vs 3.71 — verify dari LinkedIn)
- [ ] Confirm personal/family policy (research done: JANGAN include family/marital status — HR red flag)

### Phase 1 — Scaffold
- [ ] `npx create-next-app@latest` (App Router, TS, Tailwind)
- [ ] Design tokens (CSS vars untuk palette)
- [ ] Layout components: Nav, Footer, ThemeToggle
- [ ] Homepage hero + summary sections

### Phase 2 — Pages
- [ ] `/about` — manifesto + origin story
- [ ] `/career` — timeline + improvement stories
- [ ] `/credentials` — certs grid + numbers
- [ ] `/work` — case studies (5 internal projects + freelance)
- [ ] `/journal` — blog list
- [ ] `/contact` — form + socials

### Phase 3 — Polish & SEO
- [ ] Dark mode toggle (light default)
- [ ] Responsive — desktop ≠ mobile layouts
- [ ] robots.ts + sitemap.ts (fix: `export const dynamic = "force-static"`)
- [ ] Meta tags, OG image
- [ ] Footer: "Powered by Zahiruddin Zaki" → link domain aktif

### Phase 4 — Deploy (Cloudflare Pages)
- [ ] `wrangler pages project create zahiruddin-portfolio --production-branch=main`
- [ ] GitHub Actions auto-deploy (pattern dari asp-alhayat)
- [ ] Custom domain: zahiruddinzaki.my (belum configure — last phase)
- [ ] GSC submit

## 5. Content Rules (NON-NEGOTIABLE)

1. **Bukan budak tech** — positioning: "Lelaki dengan latar belakang technical, tapi fikir & memimpin macam operator dan pemodal."
2. **OSH/tech = bukti, bukan brand** — kelayakan SHO/SOSHCo/KKM guna sbg bukti kepimpinan/operasi/regulatory dalam cerita domain baharu, bukan identiti.
3. **Commitment paradox — Angle A** — tunjuk track record improvement dalam scope, bukan "aku nak lari". Recruiter takut resign.
4. **Warmth dari service & kerja keras, bukan family** — no family/marital status.
5. **Internal projects = GOLD section** — frame sebagai "Internal Digital Transformation Projects", BUKAN freelance.
6. **English sepenuhnya.**

## 6. Reference

- Reference analysis Pearl: `references/pearl-idea-analysis.md` (asal: `~/projects/digital-portfolio/reference/pearl-idea/` + Obsidian `Projects/digital-portfolio-pearl-analysis.md`)
- Deploy workflow: skill `cloudflare-pages-deploy`
