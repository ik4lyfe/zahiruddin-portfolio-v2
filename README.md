# Zahiruddin Zaki — Digital Portfolio v2

Personal knowledge base + implementation plan untuk portfolio digital Zahiruddin Zaki.
Bukan "budak tech" portfolio — positioning: **Ops & Business professional dengan track record execution.**

> Source of truth: `content/` = raw materials. `docs/` = plan. **Live site: https://zahiruddinzaki.my** (Cloudflare Pages).

## Quick Facts

| | |
|---|---|
| Nama | Muhammad Zahiruddin bin Zaki (ZZ) |
| Lokasi | Kuantan, Malaysia |
| Email | zahey97@gmail.com |
| LinkedIn | linkedin.com/in/zahiruddin-zaki |
| GitHub | github.com/ik4lyfe |
| Domain | **zahiruddinzaki.my (LIVE)** — .com bila beli 2027 |
| Target role | Ops Management — procurement/supply chain/logistics/planning |
| Long-term | COO/CEO |
| Bahasa site | English |

## Live Site

- **URL:** https://zahiruddinzaki.my (apex) + https://www.zahiruddinzaki.my
- **Hosting:** Cloudflare Pages — project `zahiruddin-portfolio`
- **Deploy:** GitHub Actions → `wrangler pages deploy --branch=main` (push ke `main` auto-deploy)
- **DNS:** NS kat Cloudflare (saanvi/andy.ns.cloudflare.com). Apex = CNAME `@` → `zahiruddin-portfolio.pages.dev` (proxied, flatten). www = A records proxied.

## Struktur Repo

```
zahiruddin-portfolio-v2/
├── README.md
├── docs/
│   ├── 01-implementation-plan.md     ← plan pembangunan (phases, tasks, stack)
│   └── 02-positioning.md             ← positioning rules + narrative
├── content/
│   ├── 01-about.md                   ← manifesto, origin story, leadership
│   ├── 02-career.md                  ← timeline + improvement stories
│   ├── 03-credentials.md             ← certs, numbers, proof
│   ├── 04-work.md                    ← internal projects + freelance case studies
│   └── 05-journal.md                 ← insights/repurpose content
├── assets/                           ← gambar (inventory belum penuh)
└── references/                       ← research & reference analysis
```

## Status

- [x] Fasa brainstorming (2026-08-14) — positioning, cerita, palette, structure
- [x] Implementation plan + raw content disimpan di repo ini
- [x] Build site — Next.js static export, 7 pages + 404
- [x] Deploy Cloudflare Pages (2026-08-14)
- [x] Custom domain zahiruddinzaki.my LIVE (2026-08-15 — apex CNAME + www)
- [ ] Vision analysis Pearl reference (tunggu credit)
- [ ] Content polish — hero story scoring
- [ ] Replace placeholder images dengan gambar real
- [ ] Full journal content
