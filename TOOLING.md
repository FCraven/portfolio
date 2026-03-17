# TOOLING.md — Portfolio

> Tech stack, commands, and conventions.

---

## Stack

| Layer | Tool | Version |
|---|---|---|
| Framework | Next.js | ^16.0.10 |
| Runtime | React | ^19.2.3 |
| Styling | Tailwind CSS | ^3.4.19 |
| 3D (optional) | @react-three/fiber + @react-three/drei | ^9 / ^10 |
| Icons | FontAwesome + react-icons + Heroicons | various |
| UI primitives | @radix-ui/react-slot, class-variance-authority | — |
| Utility | clsx, tailwind-merge | — |
| Language | JavaScript (.js) | — |

---

## Commands

```bash
npm run dev        # Start dev server at localhost:3000
npm run build      # Production build
npm run start      # Serve production build
npm run lint       # ESLint check
```

---

## Key Files

| File | Purpose |
|---|---|
| `src/app/resumeData.js` | **All content** — edit this to update anything |
| `src/app/globals.css` | Tailwind config + custom utilities (glass-panel, subtle-grid) |
| `src/app/utils/iconMapping.js` | Maps "SiReact" string → actual react-icon component |
| `tailwind.config.js` | Tailwind theme extensions |

---

## Custom CSS Utilities (in globals.css)

```css
.glass-panel    /* frosted glass card — dark bg with border + backdrop blur */
.subtle-grid    /* CSS grid texture overlay */
```

---

## Content Update Pattern

To add a new job, update project, or change any copy:
1. Edit `src/app/resumeData.js` only
2. Page components read from it automatically
3. For new tech stack icons, add to `src/app/utils/iconMapping.js`
4. For new employer logos, add images to `/public/<employer-slug>/`

---

## Conventions

- No TypeScript yet (migration on the roadmap)
- Client components marked with `'use client'` directive
- All page files named `page.js` (Next.js App Router convention)
- Component files PascalCase: `Navbar.js`, `Footer.js`
- Utility files camelCase: `iconMapping.js`, `utils.js`

---

## Git Branching

```
main        ← production
dev         ← staging
feature/*   ← new features
content/*   ← resumeData.js changes only
fix/*       ← bug fixes
```

## Commit Format

```
feat:     new component or page
fix:      bug fix
content:  resumeData.js updates (new job, project, etc.)
style:    visual/CSS changes only
chore:    deps, config, tooling
docs:     CLAUDE.md, README, MEMORY.md
```
