# Vedh Naik — Personal Developer Portfolio

A high-performance personal developer portfolio built with **vanilla HTML5, CSS3, and JavaScript (ES6+)**.

Designed around authentic technical proof of work, verified projects, and clear engineering capabilities:
1. **Proof of Work** — Verified hands-on experience across Web Development, Cloud & DevOps, Networking & Security, and Machine Learning.
2. **Featured Projects** — Detailed technical breakdowns: What I Built, What I Worked With, What I Learned.
3. **Currently Building** — Active 2026 focus tracks in Machine Learning, Cybersecurity, and Cloud/DevOps.
4. **Why I Build & How I Build** — Core engineering motivation and systematic 6-step problem-solving sequence.
5. **Dev Log** — Chronological learning journal detailing ongoing projects and experiments.
6. **What I Work With** — Categorized technical breadth (Build, Backend, Systems, Cloud, Security, Learning).
7. **Interactive Terminal Easter Egg** — A developer-friendly terminal interface for rapid exploration.

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
├── style.css         # Design system tokens, component styling, dark/light themes
├── script.js         # DOM rendering, theme switching, modal, & terminal logic
├── data/
│   └── content.js    # Single source of truth for all content
├── assets/
│   ├── profile/      # Profile picture storage
│   └── projects/     # Project screenshots and diagrams
└── README.md         # Project documentation and developer guide
```

---

## Customization & Content Editing

All personal data, projects, skills, education, and links are managed centrally in **`data/content.js`**:

| Section | Target in `data/content.js` |
| :--- | :--- |
| **Profile & Identity** | `SITE_DATA.profile` (name, title, tagline, location, bio, focus areas) |
| **Contact & Socials** | `SITE_DATA.profile.links` (github, linkedin, resume) and `email` |
| **Proof of Work** | `SITE_DATA.proofOfWork` (domain, title, badge, tech, description) |
| **Why I Build** | `SITE_DATA.whyIBuild` (quote, detail) |
| **Currently Building** | `SITE_DATA.currentlyBuilding` (track, area, year, summary, detail) |
| **Featured Projects** | `SITE_DATA.projects` (name, overview, tech, built, workedWith, learned, github, demo) |
| **Dev Log Posts** | `SITE_DATA.activity` (date, content, topic tags) |
| **Tech Breadth** | `SITE_DATA.whatIWorkWith` (category, items) |
| **How I Build** | `SITE_DATA.howIBuild` (steps, statement) |
| **Education & Journey** | `SITE_DATA.journey` (chronological academic milestones) |

---

## Interactive Terminal Easter Egg

Visitors can toggle the developer terminal at any time:
- **Click**: The `>_ Terminal` button in the navigation header or the shortcut hint in the hero.
- **Keyboard Shortcut**: Press `` ` `` (backtick) or `~` anywhere on the page (outside text inputs).

### Supported Commands:
- `help` — List all available commands
- `about` — Display developer bio and focus areas
- `proof` — View verified hands-on Proof of Work
- `projects` — Display featured project summaries & architectures
- `stack` / `skills` — Output categorized technical capabilities
- `learning` / `currently` — View active 2026 technical tracks
- `why` — Output developer philosophy
- `how` — Display 6-step engineering learning sequence
- `activity` — Print recent Dev Log entries
- `journey` — Show education milestones
- `contact` — Print contact and profile links
- `theme [dark|light|toggle]` — Switch portfolio color theme directly from the shell
- `whoami` — Display visitor role
- `date` — Show current system time
- `clear` — Clear the terminal output
- `exit` — Close the terminal window

---

## Running Locally

```bash
# Python 3
python3 -m http.server 3000

# or Node.js (npx serve)
npx serve .
```

Then open `http://localhost:3000` in your web browser.
