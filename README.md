# Vedh Jayesh Naik — Personal Developer Portfolio

The personal portfolio of **Vedh Jayesh Naik**, an entry-level software development candidate and B.Tech Computer Science & Engineering student at ITM, Kharghar.

Built with **clean, semantic, vanilla HTML5, CSS3, and JavaScript (ES6+)** with zero external dependencies and zero build step.

Deployed live on Vercel at: [https://vedh-portfolio.vercel.app/](https://vedh-portfolio.vercel.app/)

---

## Portfolio Sections

1. **Hero**: Quick introduction, status badge, profile picture, location, and key links (Resume, GitHub, LinkedIn, Email).
2. **About**: Academic background (Diploma in Computer Engineering & B.Tech CSE) and career objectives.
3. **Skills**: Honest technical skills grouped by category (Programming Languages, Web Development, Academic Fundamentals, Tools & Environment, and Cloud Fundamentals).
4. **Projects**: Verified coursework and personal projects, featuring the C++ DSA practice project with room for future projects.
5. **Achievements**: First prize recognition at Smart India Hackathon (SIH) 2024.
6. **Education**: Chronological academic credentials from school, polytechnic diploma, and university degree.
7. **Contact**: Direct communication links via email and professional socials.

---

## Key Features

- **Semantic HTML5 & Accessibility**: Fully semantic sectioning (`header`, `main`, `section`, `article`, `footer`), high contrast color ratios, explicit image dimensions, visible focus outlines, and keyboard accessibility.
- **Theme Support**: Seamless Dark Mode and Light Mode with system preference detection and `localStorage` persistence.
- **Fast & Responsive**: Mobile-first responsive layout tested from 360px mobile viewports up to large desktop screens with zero horizontal scrolling.
- **Performance Optimized**: Inline theme script to eliminate Flash of Unstyled Content (FOUC), modern WebP image support with fallback, and zero heavy dependencies.

---

## Local Development

You can run the portfolio locally using any static web server:

```bash
# Using Python 3
python3 -m http.server 3000

# or using Node.js
npx serve .
```

Then visit [http://localhost:3000](http://localhost:3000) in your web browser.

---

## Adding New Projects

To add a new project card, add an `<article class="project-card">` block to the `#projects` section in `index.html`:

```html
<article class="project-card">
  <div class="project-card-header">
    <div class="project-type-badge">Project Type</div>
    <a href="<GITHUB_LINK>" class="project-link-icon" target="_blank" rel="noopener noreferrer" aria-label="View on GitHub">
      <!-- SVG icon -->
    </a>
  </div>
  <h3 class="project-title">
    <a href="<GITHUB_LINK>" target="_blank" rel="noopener noreferrer">Project Title</a>
  </h3>
  <div class="project-tech-tags">
    <span class="tech-pill">Tech 1</span>
    <span class="tech-pill">Tech 2</span>
  </div>
  <p class="project-description">
    Two-line concise description of the project problem, implementation, and results.
  </p>
  <div class="project-card-footer">
    <a href="<GITHUB_LINK>" class="project-text-link" target="_blank" rel="noopener noreferrer">
      <span>View on GitHub</span>
    </a>
  </div>
</article>
```

---

## License

Personal portfolio content and code &copy; 2026 Vedh Jayesh Naik.
