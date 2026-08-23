# Vedh Naik — Personal Developer Portfolio

A high-performance personal developer portfolio built with **vanilla HTML5, CSS3, and JavaScript (ES6+)**.

Designed around authentic technical proof of work, verified projects, and clear engineering capabilities:
1. **Featured Projects & Under the Hood** — Interactive architectural breakdowns showing verified data flow, what was built, and key takeaways.
2. **Engineering Blueprint** — Central interactive architecture map connecting 4 major domains (Development, Cybersecurity, Cloud/DevOps, Machine Learning).
3. **Trace My Stack** — Guided interactive pathways demonstrating how foundational languages and operating systems connect to real deployed systems.
4. **Proof of Work** — Verified hands-on experience across Web Development, Cloud & DevOps, Networking & Security, and Machine Learning.
5. **Currently Building** — Active 2026 focus tracks in Machine Learning, Cybersecurity, and Cloud/DevOps.
6. **Why I Build & How I Build** — Core engineering motivation and systematic 6-step problem-solving sequence.
7. **Dev Log** — Chronological learning journal detailing ongoing projects and experiments.
8. **What I Work With** — Categorized technical breadth (Build, Backend, Systems, Cloud, Security, Learning).

---

## Technical Stack

- **Markup**: Semantic HTML5 with complete ARIA attributes & SEO metadata.
- **Styling**: Vanilla CSS3 with CSS Custom Properties (Design Tokens), Dark/Light theme support, and responsive breakpoints.
- **Logic**: Vanilla JavaScript (ES6+), zero dependencies, zero build step.
- **Data Layer**: Centralized data configuration in `data/content.js`.

---

## Project Structure

```text
my_portfolio/
├── index.html        # Semantic page structure & template bindings
├── style.css         # Design system tokens, blueprint styling, dark/light themes
├── script.js         # DOM rendering, blueprint system, modal, & theme logic
├── data/
│   └── content.js    # Single source of truth for all content & blueprint data
├── assets/
│   ├── profile/      # Profile picture storage
│   └── projects/     # Project assets
└── README.md         # Project documentation and developer guide
```

---

## Customization & Content Editing

All personal data, projects, skills, education, and links are managed centrally in **`data/content.js`**:

| Section | Target in `data/content.js` |
| :--- | :--- |
| **Profile & Identity** | `SITE_DATA.profile` (name, title, tagline, location, bio, focus areas) |
| **Engineering Blueprint** | `SITE_DATA.blueprint` (domains, technologies, connections, stackTraces) |
| **Featured Projects** | `SITE_DATA.projects` (name, overview, tech, built, underTheHood, github, demo) |
| **Contact & Socials** | `SITE_DATA.profile.links` (github, linkedin, resume) and `email` |
| **Proof of Work** | `SITE_DATA.proofOfWork` (domain, title, badge, tech, description) |
| **Why I Build** | `SITE_DATA.whyIBuild` (quote, detail) |
| **Currently Building** | `SITE_DATA.currentlyBuilding` (track, area, year, summary, detail) |
| **Dev Log Posts** | `SITE_DATA.activity` (date, content, topic tags) |
| **Tech Breadth** | `SITE_DATA.whatIWorkWith` (category, items) |
| **How I Build** | `SITE_DATA.howIBuild` (steps, statement) |
| **Education & Journey** | `SITE_DATA.journey` (chronological academic milestones) |

---

## Running Locally

```bash
# Python 3
python3 -m http.server 3000

# or Node.js (npx serve)
npx serve .
```

Then open `http://localhost:3000` in your web browser.
