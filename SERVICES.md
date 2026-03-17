# SERVICES.md — Portfolio

> External services this project uses or will use.

---

## Hosting & Deployment

| Service | Purpose | Status | Cost |
|---|---|---|---|
| Vercel | Hosting + CI/CD from GitHub | ⏳ Not deployed | Free |
| GitHub | Version control (already initialized) | ✅ Active | Free |

## Forms

| Service | Purpose | Status | Cost |
|---|---|---|---|
| Formspree / Resend | Contact form → email | ⏳ Check contact/page.js | Free |

## Analytics (optional)

| Service | Purpose | Status | Cost |
|---|---|---|---|
| Vercel Analytics | Traffic | ⏳ Not set up | Free |

## Domain

| Service | Purpose | Status | Cost |
|---|---|---|---|
| TBD | franciscraven.dev or similar | ⏳ Not purchased | ~$12/yr |

---

## Deploy Checklist

- [ ] `gh repo create portfolio --private --source=. --push` (if not already on GitHub)
- [ ] Connect Vercel to GitHub repo
- [ ] `npm run build` — verify clean build before deploying
- [ ] Set up custom domain
- [ ] Wire contact form
