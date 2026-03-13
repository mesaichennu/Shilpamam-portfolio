# Dr. Shilpa Kotla — Portfolio (React)

A React conversion of the portfolio website, built with Vite.

## Project Structure

```
src/
├── assets/
│   └── shilpa.jpeg          ← Add your photo here
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Carousel.jsx
│   ├── Vision.jsx
│   ├── Experience.jsx
│   ├── Skills.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── hooks/
│   └── useScrollReveal.js
├── App.jsx
├── main.jsx
└── index.css
```

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. **Add your photo:**
   Place `shilpa.jpeg` inside `src/assets/`.
   (The Hero component imports it from `../assets/shilpa.jpeg`)

3. Run locally:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```
   The output goes into the `dist/` folder.

## Deploy to Vercel

### Option A — Vercel CLI
```bash
npm run build
npx vercel --prod
```

### Option B — Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project → Import your repo
3. Framework: **Vite** (auto-detected)
4. Click Deploy — done!

## Deploy to Hostinger
1. Run `npm run build`
2. Upload the contents of the `dist/` folder to `public_html/` via hPanel File Manager
3. Done — your site is live!
