# ASANE – Jogijski položaji

A complete interactive guide to yoga asanas in Slovenian, English, and Sanskrit.

🌐 **Live site:** [makedonkabinova.github.io/yoga_asanas](https://makedonkabinova.github.io/yoga_asanas)

---

## Features

- **Browse** — 82 poses organised into 7 categories (standing, kneeling, seated, lying, support, relaxation, spinal movements)
- **Search & filter** — live search by Slovenian, English, or Sanskrit name; filter chips by category
- **Pose detail** — click any card to open a modal with the full image, all three language names, and a bilingual description
- **Sequence builder** — pick poses, reorder them, and export your sequence as a styled HTML file with photos and descriptions
- **Quiz** — test yourself on pose names in Slovenian, English, or Sanskrit with multiple-choice questions and a score tracker

---

## Tech stack

Pure HTML, CSS, and vanilla JavaScript — no framework, no build step.

```
yoga_asanas/
├── index.html          # App shell and markup
├── css/
│   └── style.css       # All styles
└── js/
    ├── data.js         # Pose data (82 poses with SL/EN/SA names, descriptions, images)
    └── app.js          # Browse, search, modal, sequence builder, quiz logic
```

Images are loaded from [PocketYoga](https://pocketyoga.com).

---

## Run locally

No install needed — just open `index.html` in a browser, or serve it with any static file server:

```bash
npx serve .
# or
python3 -m http.server
```

---

## Deploy

The site deploys automatically to GitHub Pages on every push to `main` via GitHub Actions (`.github/workflows/deploy.yml`).

To set it up on a fork:
1. Go to repo **Settings → Pages**
2. Set source to **GitHub Actions**
3. Push to `main` — the workflow handles the rest
