# Storytelling, Layout & Animations — Design Spec

Adaptasi dari reference **recruit.pearl-idea.co.jp** (analisis penuh: `references/pearl-idea-analysis.md`).
Prinsip: warmth Pearl datang dari STORY & PHOTOS, bukan warna. Palette kita navy+gold (trust dulu, human lepas tu).

## Storytelling Arc (Homepage → Contact)

```
① Hook       → Hero serif display: "Built on operations. Led by purpose."
               + portrait collage (potret professional + kerja lapangan)
② Manifesto  → "Di sebalik operasi yang licin, ada manusia yang jaga standard."
               (1-2 ayat, bukan paragraph)
③ Proof      → Numbers strip: RM12K freelance, 5 systems built, 25/100 VC, 550/5000+ NIP,
               CGPA 3.70, 10→8 sem
④ Chapters   → Journey preview: EHO → BBA Ops → Freelance → Investor → Target (COO/CEO)
⑤ Hero story → Featured: Dashboard project — peta benang → dashboard digital.
               Third-party endorsement: pengarah WAJIBKAN semua unit, "belajar dengan Zahiruddin"
⑥ Capability → 3 card: Operations · Finance · Digital Transformation
⑦ CTA        → "Let's talk." — open to ops roles + freelance (bukan "Hire me" hard-sell)
```

Warmth elements: candid photos (APM uniform, kerja lapangan), first-person prose, understated UI.

## Layout per Page

| Page | Layout |
|---|---|
| `/` | Hero split (text kiri + photo kanan) → manifesto line → numbers strip → chapters preview → featured work → capabilities → CTA |
| `/about` | Split sticky: manifesto text kiri, foto kanan sticky semasa scroll |
| `/career` | Vertical timeline — chapters (KKM → UiTM → BBA → Target). Setiap chapter: tahun + tajuk + cerita pendek + angka |
| `/credentials` | Grid certs + numbers strip (tiada timeline — cepat scan) |
| `/work` | Case study rows alternating (5 internal projects + freelance). Setiap row: problem → built → result (angka) |
| `/journal` | List minimal: date + title (macam Pearl Journal) |
| `/contact` | Form minimal + socials (LinkedIn, GitHub, email) |

## Animations (subset — buang yang berat)

| # | Animation | Source | Cara |
|---|---|---|---|
| 1 | Reveal on scroll | Pearl (semua section) | 1 util IntersectionObserver — fade + translate-y 20px, reuse semua section |
| 2 | Parallax hero photo | Pearl | CSS `transform: translateY` ikut scroll, subtle (max 40px) |
| 3 | Marquee strip | Pearl Memories | CSS keyframes — numbers/capabilities scroll horizontal, auto-pause on hover |
| 4 | Text-link underline animate | Pearl signature | Hover: underline scale 0→1 (1 class, guna semua nav/links) |
| 5 | Counter count-up | Pearl Products | Numbers strip: 0→N bila masuk viewport (1 util) |

**SKIP:** Lenis smooth scroll (extra dep, browser native ok), Lottie (berat), SVG mask stroke (complex, tak payah untuk recruiter), loading crossfade (buang masa user), video bg (heavy).

## Typography

```
Display/headings: Libre Baskerville (serif editorial — warmth, macam Pearl)
Body:             Inter or Poppins (sans — corporate, readable)
```

Serif di headings = warmth; sans di body = professional. Gold accent boleh untuk serif headings sekali-sekala.

## Rules

- NO glassmorphism, NO backdrop-blur, NO AI-looking effects (rule ayah)
- Dark mode: navy tenggelam atas dark → gold jadi primary, terracotta #E35D3C accent (design system sedia ada)
- Desktop ≠ mobile layout (rule ayah)
- Foto real > stock (rule ayah)
