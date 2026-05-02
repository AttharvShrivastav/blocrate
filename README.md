# Blocrate Landing Page

Premium dark landing page prototype inspired by the supplied Blocrate design.

## Run locally

This project works as a static site:

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Open `http://127.0.0.1:4173`.

## Update content

Most mock copy lives in:

```text
src/content.js
```

Edit the section arrays there to update the hero, feature cards, horizontal scroll panels, roadmap, and proof strip.

## Animation stack

GSAP and ScrollTrigger are loaded from CDN in `index.html`.
The animation setup lives in `src/main.js`, including:

- hero parallax
- split-text reveal animations
- scroll-triggered fades and rises
- pinned horizontal scroll section
