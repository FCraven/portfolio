# CLAUDE.md — Portfolio

> Primary context document for AI-assisted work on this repo.
> Read this first every session.

---

## What This Is

Francis P. Craven's personal developer portfolio site. Showcases his experience, projects, and skills to potential employers and clients.

**Owner:** Francis Craven — craven.francis@gmail.com
**GitHub:** https://github.com/FCraven
**LinkedIn:** https://www.linkedin.com/in/francis-craven-ab1029b3
**Live URL (pending):** TBD — needs deployment

---

## Stack

| Layer | Tool | Version |
|---|---|---|
| Framework | Next.js | ^16.0.10 |
| UI Library | React | ^19.2.3 |
| Styling | Tailwind CSS | ^3.4.19 |
| 3D | @react-three/fiber + drei | ^9 / ^10 |
| Icons | FontAwesome, react-icons, Heroicons | various |
| Components | Custom + Radix UI primitives | — |
| Language | JavaScript (not TypeScript yet) | — |
| Build | Next.js built-in | — |

---

## Project Structure

```
src/app/
├── page.js              ← Homepage (hero, stats, experience preview, brand logos)
├── layout.js            ← Root layout, fonts, global styles
├── globals.css          ← Tailwind base + custom glass-panel / subtle-grid utilities
├── resumeData.js        ← ALL content lives here — edit this to update the site
├── about/page.js        ← About page
├── projects/page.js     ← Projects & experience deep-dive
├── contact/page.js      ← Contact form
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   ├── MobileMenu.js
│   ├── ThemeToggle.js
│   ├── Chip.js
│   └── ui/              ← badge.js, button.js, card.js (custom shadcn-style)
└── utils/
    └── iconMapping.js   ← Maps icon name strings to react-icons components
```

---

## Content Architecture

**All site content lives in `resumeData.js`.** To update anything — job titles, achievements, tech stacks, projects — edit that file. Don't hardcode content in page components.

---

## Francis's Background (from resumeData.js)

**Current:** B.S. Computer Science, CUNY Queens College (Sep 2023 – Present)

**Experience:**
1. **Digital Fuel Capital** — Front End Engineer (Apr 2022 – Jul 2023)
   - Shopify, React.js, Node.js, Webpack, Gulp, Grunt, Git, Google Analytics
   - Led technical work across 4 women's fashion eCommerce brands
   - Monthly revenue influenced: **$1.5M/month**
   - Lighthouse score improvement: 3 → 55 for Lime Lush, -12% bounce rate
   - Brands: Boutique Brands, LimeLush, Filly Flair, Nana Macs, Discount Divas

2. **Smile Direct Club** — Front End Developer (Aug 2021 – Mar 2022)
   - Nuxt.js, Vue.js, Vuetify, Contentful CMS, Storybook, Google Maps
   - Built Brick & Mortar Locator feature

3. **2U | edX** — Web Development Educator (Mar 2019 – Aug 2021)
   - Taught full-stack JS to **350+ developers**
   - HTML/CSS/JS/React/Redux/Node/Express/MongoDB/SQL/PostgreSQL/AWS

**Skills:**
- Languages: JS, TypeScript, HTML5, CSS3, C++, Java, SQL
- Front End: React, Redux, React Native, Vue.js, Next.js, Nuxt.js
- UI: Bootstrap, Tailwind, MaterialUI, styled-components
- Back End: Node.js, Express, GraphQL, MongoDB, MySQL, PostgreSQL, REST API
- Tools: AWS, GCP, Webpack, Gulp, Git, Postman, Figma, Jira, Storybook, Shopify, Agile/Scrum
- Testing: Jest, Vitest, Chai, Mocha, Enzyme, @testing-library, Jasmine

---

## Active Priorities (as of March 2026)

1. **Add Total Hemp as a featured project** — This is the most impressive thing in the portfolio. Production-grade Medusa build with loyalty, CRM, fulfillment, compliance. Add it to `resumeData.js` once launched.
2. **Add SeaRaven Studios** — The agency itself is a project/achievement.
3. **Deploy to Vercel** — Not live yet. Get it up.
4. **TypeScript migration** — Currently `.js`. Worth doing for credibility as a senior dev.
5. **Add Three.js scene** — `@react-three/fiber` is in the deps but may not be used yet. Check `projects/page.js`.

---

## Important Notes for AI Work

- **Edit `resumeData.js` for all content changes.** Page components read from it.
- **`iconMapping.js`** maps string names like `"SiReact"` to actual react-icons components — used in the tech stack chips.
- **Glass-panel utility** is defined in `globals.css` — a frosted glass card style used throughout.
- **`subtle-grid` utility** is a CSS grid background overlay for visual texture on cards.
- The site has dark mode support via `ThemeToggle.js` — test any new components in both modes.
- **Public assets** are in `/public/dfc/`, `/public/sdc/`, `/public/edX/` — one folder per employer.

---

## What Needs Work (honest assessment)

- Needs Total Hemp + SeaRaven Studios added to showcase current work
- Projects page likely has older/student projects — worth auditing
- No live URL yet (deploy it!)
- `.js` throughout — TypeScript migration would strengthen credibility
- Contact form may not be wired to anything (check `contact/page.js`)
