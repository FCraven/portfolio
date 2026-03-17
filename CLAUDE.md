# CLAUDE.md — Portfolio (CRAVEN_OS)

> Primary context document for AI-assisted work on this repo.
> Read this first every session.

---

## What This Is

Francis P. Craven's personal developer portfolio — redesigned as **CRAVEN_OS**, a retro-futuristic terminal-themed portfolio that *is* the proof of engineering skill rather than just describing it.

**Live URL:** Deployed on Vercel (default URL — custom domain pending)
**GitHub:** `FCraven/portfolio` — `main` branch
**Owner:** Francis Craven — craven.francis@gmail.com

---

## Stack

| Layer | Tool | Version |
|---|---|---|
| Framework | Next.js | ^16.0.10 |
| UI | React | ^19.2.3 |
| Styling | Tailwind CSS | ^3.4.19 |
| Animation | Framer Motion | — |
| Icons | FontAwesome, react-icons, Heroicons | various |
| UI Primitives | Custom (cva-based) | — |
| Language | JavaScript (.js — TypeScript migration planned) | — |

> Three.js deps were removed (`@react-three/fiber`, `@react-three/drei` — 59 packages). Re-add if a 3D scene is needed later.

---

## Design System — CRAVEN_OS v1.0

**Color tokens** (CSS custom properties in `globals.css`, mirrored in `tailwind.config.js`):

```css
--void:          #0A0A0F   /* background */
--neon-green:    #00FF88   /* primary accent */
--neon-cyan:     #00D4FF   /* secondary accent */
--neon-magenta:  #FF00FF   /* tertiary accent */
--surface:       #12121A   /* card backgrounds */
--text-primary:  #E0E0E0
--text-muted:    #888888
--border:        #1E1E2E
```

**Fonts** (via `next/font/google`):
- `--font-orbitron` — headings, display text
- `--font-jetbrains` — body, mono, terminal text

**Custom CSS components** (`globals.css`):
- `.terminal-panel` — dark bordered card with subtle glow
- `.hud-panel` — card with animated corner brackets (::before/::after)
- `.neon-text` — green text-shadow glow
- `.scanlines` — full-screen CRT scanline overlay
- `.cyber-grid` — subtle background grid pattern
- `.typing-cursor` — blinking underscore
- `.custom-cursor` — crosshair cursor site-wide

**Animations** (Tailwind + CSS keyframes):
- `glow-pulse` — pulsing green dot for "ACTIVE" status
- `glitch` — chromatic aberration text effect
- `float` — gentle vertical bobbing
- `blink` — cursor blink

---

## Architecture

**Golden rule: ALL content lives in `src/app/resumeData.js`.** Pages read from it. Never hardcode content in components.

**Key resumeData fields:**
- `name`, `handle`, `email`, `github`, `linkedin`
- `tagline`, `bio`, `status`
- `experience[]` — `company`, `codename`, `role`, `start_date`, `end_date`, `brief`, `techStack[]`, `projects[]`, `impact[]`, `image`
- `education[]`, `skills{}` (categorized)

**Component tree:**
```
layout.js
├── MatrixRain.js              — Canvas falling green chars background
├── KonamiCode.js              — ↑↑↓↓←→←→BA easter egg
├── ConsoleMessage.js          — Dev console easter egg
├── Navbar.js                  — Terminal-style nav
└── pages
    ├── page.js (home)         — boot → hero → stats → terminal → arsenal → missions
    │   ├── BootSequence.js    — Timed system boot (sessionStorage skip on revisit)
    │   ├── GlitchText.js      — Hover glitch with cyan/magenta split
    │   ├── InteractiveTerminal.js — Working terminal (help, whoami, skills, missions...)
    │   ├── TypewriterText     — Types out bio char by char
    │   └── AnimatedCounter    — Counts up stats with easing
    ├── about/page.js          — System README style, skills grid, status readout
    ├── projects/page.js       — Mission cards with codenames, tech stacks, impact logs
    └── contact/page.js        — Connection channels, status terminal
```

**Icon mapping:** `utils/iconMapping.js` maps string names (`"SiReact"`) → react-icons components
**UI primitives:** `components/ui/` — badge.js (cva), button.js (cva), card.js

---

## Experience in resumeData (current order)

1. **SeaRaven Studios** — OPERATION: AGENCY BUILD (Jan 2026–Present)
2. **Total Hemp** — OPERATION: GREEN MARKET (Dec 2025–Present)
3. **Digital Fuel Capital** — OPERATION: COMMERCE ENGINE (Apr 2022–Jul 2023)
4. **Smile Direct Club** — OPERATION: BRICK & MORTAR (Aug 2021–Mar 2022)
5. **2U | edX** — OPERATION: KNOWLEDGE TRANSFER (Mar 2019–Aug 2021)

---

## Easter Eggs (3 layers)

1. **Konami Code** (`KonamiCode.js`) — ↑↑↓↓←→←→BA → ASCII "CRAVEN" art + "+30 LIVES UNLOCKED"
2. **Footer hint** — `↑ ↑ ↓ ↓ ← → ← → B A` at 40% opacity
3. **Console message** (`ConsoleMessage.js`) — ASCII banner + "You found the console. Nice. 👀"

---

## Public Assets

```
/public/dfc/     — Digital Fuel Capital brand logos
/public/sdc/     — Smile Direct Club assets
/public/edX/     — 2U / edX assets
```

---

## Active Priorities (as of March 2026)

1. Wire contact form to Formspree or Resend
2. Point custom domain (franciscraven.dev or similar)
3. TypeScript migration (everything is .js currently)
4. Add Three.js scene if desired later (deps were removed — need re-adding)

---

## Rules

- Edit `resumeData.js` for ALL content changes
- Test after changes — boot sequence, terminal commands, Konami code
- Never commit directly to `main` — feature branch → PR
- Commit messages: keep short (Francis preference)
- Public assets per employer in `/public/<employer-slug>/`
