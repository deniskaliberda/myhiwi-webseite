# myhiwi-webseite — Repo Map

Die **MyHiwi-Agentur-Website** (Marke „Lokale Wachstumssysteme"). Next.js, deployt via Vercel.

## Where things live

| Path | What it is |
|------|------------|
| `app/` | Next.js App-Router — Seiten inkl. `/fahrschule` (kanonische Fahrschul-LP, Phase 0) |
| `components/` · `lib/` | UI-Komponenten · Helfer (u. a. `webEvents.ts` → Supabase web_events) |
| `Brand/` · `DESIGN.md` | Brand-Assets + Design-Gate (Status prüfen vor jedem Build — kein Bypass) |
| `website-sections/` · `website-guidelines/` | Sektions-Bausteine + Richtlinien |
| `docs/` · `tasks.md` | interne Specs + Aufgabenliste |
| `MYHIWI-DESIGN-BASELINE-ORCHESTRATOR.md` | Design-Baseline für AI-Builds |

## Running

```bash
npm install
npm run dev     # lokal · build/start/lint analog
```

Deploy: Vercel (Prod = merge auf master). Invarianten: DESIGN.md-GATE + Anti-AI-Slop (Master-CLAUDE). Regeln für Agenten: `CLAUDE.md`.
