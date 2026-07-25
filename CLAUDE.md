# nazz-d.github.io — live portfolio (masternazz.com)

Astro site, currently **v10.2**. This is the live portfolio. Every other `nazz-d.github.io-vN`
snapshot lives in `_archive/old-portfolios/` and is dead — never copy from them.

Research and rationale live in `PORTFOLIO-RESEARCH.md` and `RESUME-RESEARCH.md`.
`PUBLISH-CHECKLIST.md` gates releases.

## Commands

```bash
npm install
npm run dev      # astro dev
npm run check    # astro check && astro build && node tools/check-site.mjs  <- run before publishing
npm run preview
```

`npm run check` is the real gate: it type-checks, builds, and runs `tools/check-site.mjs`
against the output. Use it, not bare `npm run build`.

Deploy is GitHub Pages via `.github/workflows/pages.yml`. `public/CNAME` pins `masternazz.com`.

## Public-safety boundary

This site is public and is read by recruiters. Infrastructure write-ups **intentionally omit**
internal addressing, MAC addresses, credentials, precise firewall rules, and real alert data.
Public claims trace back to the sanitized material in `homelab-docs/`.

When adding or editing case-study content: no 10.226.x.x addresses, no CT IDs, no API keys,
no OPNsense rule UUIDs, no real hostnames beyond the public ones. If a detail makes the story
better but exposes the network, cut it.

## Routes

| Route | Content |
|---|---|
| `/` | Home |
| `/work`, `/work/[slug]` | Six recruiter-facing case studies |
| `/about` | Story |
| `/credentials` | Certification record |
| `/evidence/cisco-ios`, `/evidence/homelab-operations` | Public-safe evidence |
| `/resume` | Print-ready resume |

## Resume

`/resume` is the source; the downloadable PDF at `public/Nazeem-Massoom-Dickey-Resume.pdf` is
generated from it. It is a **single page** — that constraint is load-bearing, and the layout is
sized for US Letter with a single-column reading order for ATS parsing. Any content added to
the resume page has to be paid for by removing something else. Re-measure and re-export the PDF
after any resume edit; don't let the page and the PDF drift.

Shared profile data (phone, email, LinkedIn, site) comes from `src/data/portfolio.ts` — edit it
there, not inline in the pages.
