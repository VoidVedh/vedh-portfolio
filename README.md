# Vedh Jayesh Naik — Editorial Portfolio & Kayla Padilla Showcase

An authentic, editorial personal portfolio inspired by the literary and minimalist aesthetic of [kaylapadilla.org](https://kaylapadilla.org). Designed to completely replace generic developer templates with a high-status, publication-grade design system and interactive features.

Live on Vercel: [https://vedh-portfolio.vercel.app/](https://vedh-portfolio.vercel.app/)

---

## Key Features

1. **Dual-Profile Interactive Mode**:
   - Seamlessly toggle between **Vedh Jayesh Naik** (Software Engineer, Smart India Hackathon '24 Winner) and **Kayla Padilla** (USC/Wharton alum, The Sideline Post Founder, Klutch Sports Analyst).
   - Powered by the native **View Transitions API** (`document.startViewTransition`) with fluid reduced-motion fallbacks.

2. **Signature "Current Song on Repeat" Audio Player Widget**:
   - Located in the footer, directly paying homage to `kaylapadilla.org`.
   - Features a spinning vinyl record animation, dancing soundwave equalizer, track information, and Spotify links.
   - Built with an interactive **Web Audio API synthesizer** generating warm ambient and acoustic chord progressions directly in the browser with zero external MP3 dependencies.

3. **Editorial Typography & Visual Hierarchy**:
   - Built with **Newsreader** (editorial serif) and **Plus Jakarta Sans** (contemporary sans-serif).
   - Warm parchment palette in Light Mode (`#fbfaf8`) and obsidian paper in Dark Mode (`#111113`).
   - Clean literary drop caps and generous white space.

4. **"My Projects (both serious and fun!)"**:
   - Filterable projects grid (Technical & Systems, Creative & Media).
   - Role badges, impact metrics, technical stacks, and direct repository/platform links.

5. **Chronological Resume & Credentials**:
   - High-signal track record highlighting education, leadership, and experience without juvenile skill progress bars.
   - Direct PDF resume download support.

6. **Media, Features & Helpful Resources**:
   - Curated press coverage cards and public resources.

7. **Zero Dependencies & Blazing Performance**:
   - 100% semantic HTML5, modern CSS3 variables, and clean vanilla JavaScript (ES6+).
   - Zero build step, instant deployment on Vercel.

---

## Local Development

Run the portfolio locally with any static web server:

```bash
# Python 3
python3 -m http.server 3000

# or Node.js
npx serve .
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deployment to Vercel

```bash
# Deploy to production
vercel --prod
```

---

## License

Code and editorial design &copy; 2026 Vedh Jayesh Naik. Homage to [kaylapadilla.org](https://kaylapadilla.org).
