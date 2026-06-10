# Modura Home — Sofa Store SPA

Bilingual (Hebrew / English) showroom website for **Modura Home** / **מודורה הום**.

## Pages

| Route | Page |
|-------|------|
| `/` | Home — hero, featured models, hours, contact |
| `/models` | Full model catalog (8 sofas) |
| `/showroom` | Showroom display days |
| `/appointment` | Book a visit |

## Run locally

```bash
cd ~/modura-home-spa
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
```

Output: `dist/` folder

## Deploy to Vercel

This project includes `vercel.json` with SPA rewrites so routes like `/models` and `/appointment` work on Vercel.

1. Create a new repo on GitHub named **`modura-home-sofa1`** (under **mainability**)
2. Push this folder:

```bash
cd ~/modura-home-spa
git init
git add .
git commit -m "Add Modura Home sofa store website"
git branch -M main
git remote add origin https://github.com/mainability/modura-home-sofa1.git
git push -u origin main
```

3. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo
4. Vercel reads `vercel.json` automatically:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Click **Deploy**

## Customize content

Edit [`src/content/site.js`](src/content/site.js):

- Brand name and taglines
- Address, phone, email, WhatsApp number
- Opening hours
- Sofa models (names, styles, images)
- Showroom display days
- Appointment time slots

## Features

- Hebrew / English toggle (saved in browser)
- RTL layout for Hebrew
- WhatsApp floating button + footer link
- Google Maps link in footer and home page
- Client-side appointment form (confirmation screen only — no email backend in v1)
