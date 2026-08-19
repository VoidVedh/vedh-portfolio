# Vedh Naik — Personal Developer Portfolio

A clean, high-performance personal developer portfolio built with **vanilla HTML5, CSS3, and JavaScript (ES6+)**.

Designed around three core pillars:
1. **GitHub** — Verified featured projects, tech stacks, and architecture details.
2. **LinkedIn** — Professional identity, education background, and focus areas.
3. **X / Twitter** — Authentic chronological Dev Log stream detailing active learning and experiments.
4. **Interactive Terminal Easter Egg** — A memorable hacker-inspired terminal interface for fast technical exploration.

---

## Technical Stack

- **Markup**: Semantic HTML5 with complete ARIA attributes & SEO metadata.
- **Styling**: Vanilla CSS3 with CSS Custom Properties (Design Tokens), Dark/Light theme support, Glassmorphism, and responsive breakpoints.
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
│   └── content.js    # Single source of truth for all content & placeholders
├── assets/
│   ├── profile/      # Profile picture storage (defaults to initials avatar)
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
| **Education & Journey** | `SITE_DATA.journey` (chronological academic milestones) |
| **Featured Projects** | `SITE_DATA.projects` (project name, overview, tech stack, what was built/learned, links) |
| **Dev Log Posts** | `SITE_DATA.activity` (date, content, topic tags) |
| **Tech Stack** | `SITE_DATA.skills` (categories and list of tools/languages) |
| **Currently Learning**| `SITE_DATA.learning` (active study topics & key focus areas) |

---

## Placeholders & TODO System

Any value containing `TODO` (such as `TODO_ADD_GITHUB_URL` or `TODO_ADD_EMAIL@example.com`) is automatically detected by `script.js`.
- The interface gracefully disables the button/link (`aria-disabled="true"`).
- Visually applies an inactive opacity state (`opacity: 0.5; cursor: not-allowed;`).
- Displays a tooltip indicating that the link is not yet configured, preventing broken dead `#` links.

---

## Interactive Terminal Easter Egg

Visitors can toggle the developer terminal at any time:
- **Click**: The `>_ Terminal` button in the navigation header or the shortcut hint in the hero.
- **Keyboard Shortcut**: Press `` ` `` (backtick) or `~` anywhere on the page (outside text inputs).

### Supported Commands:
- `help` — List all available commands
- `about` — Display developer bio and focus areas
- `projects` — Display featured project summaries
- `skills` — Output categorized technical capabilities
- `activity` — Print recent Dev Log entries
- `learning` — View in-progress technical subjects
- `journey` — Show education milestones
- `contact` — Print contact and profile links
- `theme [dark|light|toggle]` — Switch portfolio color theme directly from the shell
- `whoami` — Display visitor role
- `date` — Show current system time
- `clear` — Clear the terminal output
- `exit` — Close the terminal dialog

**Bonus Features**: Command history via <kbd>&uparrow;</kbd> / <kbd>&downarrow;</kbd> arrow keys and auto-completion with <kbd>Tab</kbd>.

---

## Running Locally

Since this project has no build step or package dependencies, you can serve it with any static HTTP server:

```bash
# Python 3
python3 -m http.server 3000

# or Node.js (npx serve)
npx serve .
```

Then open `http://localhost:3000` in your web browser.
