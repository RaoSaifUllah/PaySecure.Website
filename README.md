# PaySecure website

Marketing site for PaySecure, the payments platform for Pakistan. Every product is shown as **coming soon**.

Built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Motion for animations.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (all pages are static)
npm run start
```

## Where things live

| Path | What |
|------|------|
| `lib/content.ts` | All copy: features, roadmap, FAQ. Edit text here. |
| `components/Hero.tsx` | Hero and the animated checkout preview |
| `components/Sections.tsx` | Payments, platform tabs, money movement, Connect, Radar, security, steps |
| `components/More.tsx` | Developers, roadmap, FAQ, waitlist, footer |
| `components/ui.tsx` | Shared bits: reveal-on-scroll, badges, buttons, spotlight cards |
| `app/globals.css` | Theme colours, fonts and keyframes |

## Content source

Feature list and phases come from the PaySecure SRS (`Documents/Meta`, mainly ch. 62 *Stripe Parity Catalog* and ch. 63 *Organizations, Businesses & Teams*) and the architecture docs in the main PaySecure repo.

## Waitlist

There is no backend yet. The waitlist form opens the visitor's email app addressed to `NEXT_PUBLIC_WAITLIST_EMAIL` (default `hello@paysecure.pk`). Swap it for a real endpoint when one exists.

## Accessibility

Animations respect `prefers-reduced-motion`.
