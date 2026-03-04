# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MyHiwi (myhiwi.de) is a German-language marketing website for a Local SEO & Web Design agency targeting small local businesses (KMU). Built with Next.js 14 App Router, Tailwind CSS, and Framer Motion. Deployed on Vercel.

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint check
- No test framework is configured

## Architecture

**Next.js App Router** with the following page structure under `app/`:

| Route | Purpose |
|---|---|
| `/` | Homepage (hero, services, trust, contact CTA) |
| `/leistungen` | Services overview |
| `/seo`, `/webdesign` | Service detail pages |
| `/kontakt` | Interactive multi-step quiz contact form |
| `/ueber-mich` | About/story page with scroll animations |
| `/blog` | Blog listing + individual posts |
| `/datenschutz`, `/impressum` | Legal pages |
| `/api/contact` | POST endpoint — sends quiz form data via Resend email service |

**Root layout** (`app/layout.tsx`): Wraps all pages with `<Navigation />` + `<main>{children}</main>` + `<Footer />`. Sets `<html lang="de">` and loads Inter font.

**Component organization:**
- `components/` — shared components (Navigation, Footer, HeroSection, etc.)
- `components/quiz/` — multi-step contact quiz with typed data model in `types.ts` (QuizData, step types, label records). `QuizContainer` orchestrates 6 steps → summary → API submission → success screen.
- `components/about/` — story-driven about page split into 7 sequential `sections/` components (StoryHero → StoryMission), composed by `AboutStoryPage`. Uses co-located `hooks/useScrollReveal` (Framer Motion `useInView` wrapper).

**Client vs Server Components:** Most pages are Server Components. Client Components (`"use client"`) are used for: Navigation (mobile menu state), quiz steps (form state), about sections (scroll animations via Framer Motion).

**Icons:** Lucide React (`lucide-react`) for all icons.

## Styling

- **Primary approach:** Tailwind utility classes with custom theme colors defined in `tailwind.config.ts`
- **Custom CSS:** `app/globals.css` defines reusable utility classes (`.container-custom`, `.glass-effect`, `.btn-*`, `.card`, `.gradient-text`) and `@keyframes` animations (`.animate-fade-in-up`, `.animate-float`, etc.)
- **Color palette:** `primary` (#1e3a5f deep blue), `accent`/`cta` (#3b82f6 blue), `cyan` (#06b6d4), `secondary` (#f8fafc slate)
- **Font:** Inter via `next/font/google`, applied through CSS variable `--font-inter` and Tailwind's `font-inter`

**Note:** `website-guidelines/` contains the original style guide and product brief but they have diverged from the implementation (e.g., the style guide specifies Poppins for headlines and amber CTA color, but the codebase uses Inter throughout and blue CTAs). Always treat the actual code as the source of truth.

## Environment Variables

```
RESEND_API_KEY    # Resend API key for contact form emails
CONTACT_EMAIL     # Recipient email address
```

The Resend client is lazy-initialized in the API route to avoid build failures when the env var is missing.

## Key Conventions

- Import alias: `@/*` maps to project root (e.g., `import X from "@/components/X"`)
- All content is in German (locale `de_DE`)
- SEO metadata is exported from each page component
- Semantic HTML required: one H1 per page, correct section tags, all images need alt text
- The contact quiz (`/kontakt`) is the primary conversion funnel — all site CTAs point to it
