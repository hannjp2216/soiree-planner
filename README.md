# Summer Soirée

*Three nights, warm glow and a summer drink under the lights.*

A single-page event planner for an intimate three-night summer gathering. Built with plain HTML, CSS, and JavaScript — no frameworks, no build step, just open and enjoy.

---

## Overview

**Summer Soirée** helps you welcome guests to opening night with a live golden-hour countdown, collect RSVPs in real time, and showcase a curated signature drink for each evening.

The design evokes a premium outdoor party at dusk: a deep purple-to-golden sunset gradient, frosted glass panels, and a string of warm lights across the top of the page.

---

## Features

### Golden Hour Countdown
A live timer begins at **3 days, 0 hours, 0 minutes, and 0 seconds**, ticking down second by second until opening night arrives.

### Guest List & RSVPs
An interactive form lets you register guests with:

- **Name** — full guest name
- **RSVP Status** — Attending, Maybe, or Declined
- **Plus-One** — optional checkbox for an additional guest

Submitted guests appear instantly in a dynamic list with color-coded status badges. A live **Total Attending** counter tallies confirmed guests (including plus-ones).

### Signature Drink Menu
A three-night cocktail lineup, elegantly presented:

| Night | Drink |
|-------|-------|
| 1st Night | Aperol Spritz |
| 2nd Night | Roy Rogers |
| 3rd Night | Lucky Devil |

---

## Getting Started

No installation required. Clone the repository and open the app in any modern browser.

```bash
git clone https://github.com/hannjp2216/soiree-planner.git
cd soiree-planner
```

Then open `index.html` — double-click the file, or run:

```powershell
Start-Process index.html
```

That's it. The countdown starts immediately and RSVPs are managed entirely in the browser session.

---

## Project Structure

```
soiree-planner/
├── index.html   # Page structure and content
├── styles.css   # Sunset gradient theme, layout, and responsive design
├── app.js       # Countdown timer and RSVP guest list logic
└── README.md    # This file
```

---

## Design

- **Palette** — Deep dusk purple (`#2d1b4e`) fading through twilight into warm golden hour (`#e8a84a`)
- **Typography** — Cormorant Garamond for headings, Outfit for body text
- **Layout** — Two-column grid on desktop; stacks gracefully on mobile
- **Atmosphere** — Glassmorphism panels, amber glow accents, and decorative string lights

---

## Browser Support

Works in all modern browsers that support CSS `backdrop-filter` and ES6 JavaScript (Chrome, Firefox, Safari, Edge).

---

## License

This project is open source. Feel free to fork, adapt, and host your own soirée.

---

## A project from Global Hack Week: Season Launch
