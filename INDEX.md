# Project Index — Writing 50 ePortfolio (7 pages, 3 sections)

Quick-reference map of all pages, connections, nav patterns, and assets.

---

## Page Map

### 🏠 Reflexive Intro (1 page)

| Page | File | Description |
|------|------|-------------|
| Reflective Introduction | [reflective-introduction.html](reflective-introduction.html) | Metacognitive analysis of learning across the semester. Covers pre-writing, genre transfer, revision as discovery, multimodal composing, and transfer to future writing. |

### 📦 Archive (1 main + 2 sub-pages)

| Page | File | Description |
|------|------|-------------|
| Archive Overview | [archives/index.html](archives/index.html) | Links to Analyzing Technology and Rhetorical Invention. |
| Analyzing Technology | [archives/analyzing-technology.html](archives/analyzing-technology.html) | Artifacts on AI co-authorship (Claude Code, Gemini), Canva diary design, GitHub Pages transparency, and the distinction between AI as build tool vs. AI as compositional strategy. |
| Rhetorical Invention | [archives/rhetorical-invention.html](archives/rhetorical-invention.html) | Artifacts on handwriting degradation, color desaturation, stickers and drawings, photo juxtaposition, and iterative discovery through making. |

### 📝 Assignments (1 main + 2 sub-pages + craft essay)

| Page | File | Description |
|------|------|-------------|
| Assignments Overview | [assignments/index.html](assignments/index.html) | Links to Genre Analysis and Imitation Project. Links to Craft Essay as additional resource. |
| Genre Analysis | [assignments/genre-analysis.html](assignments/genre-analysis.html) | "Antiviral: How a Bio-Capitalism Film Warns Against Dehumanization In Our Modern World." Complete essay with Works Cited. |
| Imitation Project | [imitation-project/index.html](imitation-project/index.html) | Twitter/X thread simulation — Linda Doe (@MomsWarning) shares Jane's diary. Full X sidebar, image grids, lightbox, reply comments. Minimal portfolio bar back link to Assignments. |
| Craft Essay | [imitation-project/craft-essay.html](imitation-project/craft-essay.html) | "From Human to Machine." Rhetorical analysis of the Imitation Project's visual, structural, and platform choices. Linked from Assignments overview. |

---

## Navigation

| Scope | Pattern |
|-------|---------|
| All academic pages | 4-item nav: Home \| Reflective Introduction \| Archives \| Assignments |
| Imitation Project | Minimal portfolio bar with back link to Assignments (preserves Twitter illusion) |
| Craft Essay | Full 4-item nav (academic page, not part of the simulation) |
| Active state | Set by `portfolio.js` based on `window.location.pathname` |

**Nav implementation:** Every academic page duplicates the `<nav class="portfolio-nav">` block (static site, no build step). `portfolio.js` handles mobile hamburger toggle and active link highlighting.

---

## CSS & JS

| File | Scope | Description |
|------|-------|-------------|
| [css/portfolio.css](css/portfolio.css) | All academic pages | Medical horror design system. Morandi palette, dark surgical steel nav, clinical typography (Lora + Inter + JetBrains Mono), card grids, artifact displays, pull quotes, responsive breakpoints (1024/768/480px), print styles. |
| [imitation-project/css/styles.css](imitation-project/css/styles.css) | Imitation Project only | Twitter/X dark theme. 3-column desktop layout, tweet/reply/thread components, image grids, action buttons, lightbox, responsive breakpoints (1300/1000/700/600px). |
| [js/portfolio.js](js/portfolio.js) | All academic pages | Mobile nav toggle (hamburger), active link highlighting, Escape-to-close. |
| [imitation-project/js/lightbox.js](imitation-project/js/lightbox.js) | Imitation Project only | IIFE image lightbox. Click `.grid-img` to open fullscreen, arrow keys to navigate, Escape/backdrop to close. |

---

## Assets — Imitation Project

### Diary Images (11 pages)

| File | Description |
|------|-------------|
| [imitation-project/Diary_Images/1.png](imitation-project/Diary_Images/1.png) | First entry at 18 — eyelid surgery, warm colors, cursive |
| [imitation-project/Diary_Images/2.png](imitation-project/Diary_Images/2.png) | She thought it would stop there |
| [imitation-project/Diary_Images/3.png](imitation-project/Diary_Images/3.png) | Obsession begins to grow |
| [imitation-project/Diary_Images/4.png](imitation-project/Diary_Images/4.png) | Can't recognize herself anymore |
| [imitation-project/Diary_Images/5.png](imitation-project/Diary_Images/5.png) | Writing about the pain |
| [imitation-project/Diary_Images/6.png](imitation-project/Diary_Images/6.png) | Hoping the next surgery fixes everything |
| [imitation-project/Diary_Images/7.png](imitation-project/Diary_Images/7.png) | She couldn't stop |
| [imitation-project/Diary_Images/8.png](imitation-project/Diary_Images/8.png) | She trusted the clinics |
| [imitation-project/Diary_Images/9.png](imitation-project/Diary_Images/9.png) | Each procedure sold as routine |
| [imitation-project/Diary_Images/10.png](imitation-project/Diary_Images/10.png) | She kept going back (?v=2 cache-bust) |
| [imitation-project/Diary_Images/11.png](imitation-project/Diary_Images/11.png) | Jane's final entry — grey, stiff, AI voice |

### Profile Pictures (7 files)

| File | Character |
|------|-----------|
| [imitation-project/Profile_Picture_Images/906c78c1baae6fcf84f75ca05631412e.png](imitation-project/Profile_Picture_Images/906c78c1baae6fcf84f75ca05631412e.png) | Linda Doe (OP) |
| [imitation-project/Profile_Picture_Images/1054089f269ec953033c83145d25802a.png](imitation-project/Profile_Picture_Images/1054089f269ec953033c83145d25802a.png) | Dr. Sarah Kim |
| [imitation-project/Profile_Picture_Images/519d2c4598073dd1409afb2d68157d61.png](imitation-project/Profile_Picture_Images/519d2c4598073dd1409afb2d68157d61.png) | maya |
| [imitation-project/Profile_Picture_Images/6a2352baa05e427bc6286499eb0852aa.png](imitation-project/Profile_Picture_Images/6a2352baa05e427bc6286499eb0852aa.png) | The Guardian |
| [imitation-project/Profile_Picture_Images/cc032f64eece6f8a1035cd348cb40bed.png](imitation-project/Profile_Picture_Images/cc032f64eece6f8a1035cd348cb40bed.png) | James Morrison |
| [imitation-project/Profile_Picture_Images/699bfaf05e19b8b65efb0be20e332f3a.png](imitation-project/Profile_Picture_Images/699bfaf05e19b8b65efb0be20e332f3a.png) | Rainniies (Who to follow) |
| [imitation-project/Profile_Picture_Images/Screenshot 2026-06-02 at 12.00.57 AM.png](imitation-project/Profile_Picture_Images/Screenshot%202026-06-02%20at%2012.00.57%E2%80%AFAM.png) | Guardian article card |

---

## File Tree

```
ePortfolio/Website/
├── index.html                              ← Landing page
├── reflective-introduction.html            ← Section 1
├── css/portfolio.css                       ← Shared academic styles
├── js/portfolio.js                         ← Nav + UI
├── archives/
│   ├── index.html                          ← Archive overview
│   ├── analyzing-technology.html           ← AI tools, co-authorship, platform
│   └── rhetorical-invention.html           ← Diary design, visual rhetoric
├── assignments/
│   ├── index.html                          ← Assignments overview
│   └── genre-analysis.html                 ← Antiviral essay
├── imitation-project/
│   ├── index.html                          ← X thread simulation (Section 3)
│   ├── craft-essay.html                    ← Rhetorical analysis essay
│   ├── css/styles.css                      ← X simulation styles
│   ├── js/lightbox.js                      ← Image lightbox
│   ├── Diary_Images/                       ← 11 diary pages (.png)
│   └── Profile_Picture_Images/             ← 7 profile-related images (.png)
└── INDEX.md                                ← You are here
```

---

*Sophie Ren · Writing 50: Critical Reading and Rhetoric · Spring 2026*
