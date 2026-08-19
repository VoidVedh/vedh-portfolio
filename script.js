/**
 * script.js
 * ---------------------------------------------------------------
 * Vanilla JavaScript (ES6+). Zero external libraries or frameworks.
 * Renders data from data/content.js and powers interactivity:
 * - Theme management (Dark/Light mode with persistence)
 * - Mobile responsive navigation
 * - Project details modal dialog with accessible focus management
 * - Terminal Easter egg with command history, autocomplete & rich output
 * - Illustrative activity heatmap & interactive tooltips
 * ---------------------------------------------------------------
 */

(function () {
  "use strict";

  // Robust data retrieval from data/content.js
  function getSiteData() {
    if (typeof window !== "undefined" && window.SITE_DATA) return window.SITE_DATA;
    if (typeof globalThis !== "undefined" && globalThis.SITE_DATA) return globalThis.SITE_DATA;
    if (typeof SITE_DATA !== "undefined") return SITE_DATA;
    if (typeof SITE_CONTENT !== "undefined") return SITE_CONTENT;
    return {};
  }

  const data = getSiteData();

  /* ---------------------------------------------------------
     1. DOM UTILITIES & HELPERS
     --------------------------------------------------------- */
  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined && html !== null) {
      if (typeof html === "string") {
        node.innerHTML = html;
      } else if (html instanceof Node) {
        node.appendChild(html);
      }
    }
    return node;
  }

  function isPlaceholder(value) {
    if (!value) return true;
    const str = String(value).trim();
    return str.startsWith("TODO") || str.includes("TODO_ADD_") || str === "#";
  }

  /**
   * Safely configures an anchor element:
   * If URL is a TODO placeholder, disables it visually & semantically with a tooltip.
   */
  function wireLink(elementId, url, label) {
    const node = document.getElementById(elementId);
    if (!node) return;

    if (isPlaceholder(url)) {
      node.setAttribute("href", "#");
      node.setAttribute("aria-disabled", "true");
      node.setAttribute("role", "link");
      node.title = `${label || "Link"} not yet configured`;
      node.style.opacity = "0.5";
      node.style.cursor = "not-allowed";
      node.addEventListener("click", function (e) {
        e.preventDefault();
      });
    } else {
      node.setAttribute("href", url);
      node.removeAttribute("aria-disabled");
      node.style.opacity = "";
      node.style.cursor = "";
    }
  }

  function formatDate(iso) {
    if (!iso) return "";
    const d = new Date(iso + "T00:00:00");
    if (isNaN(d.getTime())) return iso;
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }

  /* ---------------------------------------------------------
     2. THEME ENGINE (DARK / LIGHT)
     --------------------------------------------------------- */
  function initTheme() {
    let theme = "dark";
    try {
      const stored = localStorage.getItem("portfolio-theme");
      if (stored) theme = stored;
    } catch (e) {}

    setTheme(theme);

    const toggleBtn = document.getElementById("theme-toggle");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", function () {
        const current = document.documentElement.getAttribute("data-theme") || "dark";
        const next = current === "dark" ? "light" : "dark";
        setTheme(next);
      });
    }
  }

  function setTheme(theme) {
    const finalTheme = theme === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", finalTheme);
    try {
      localStorage.setItem("portfolio-theme", finalTheme);
    } catch (e) {}
    updateThemeIcon(finalTheme);
  }

  function updateThemeIcon(theme) {
    const darkIcon = document.getElementById("theme-icon-dark");
    const lightIcon = document.getElementById("theme-icon-light");
    if (!darkIcon || !lightIcon) return;

    if (theme === "dark") {
      darkIcon.style.display = "block";
      lightIcon.style.display = "none";
    } else {
      darkIcon.style.display = "none";
      lightIcon.style.display = "block";
    }
  }

  /* ---------------------------------------------------------
     3. MOBILE NAVIGATION DRAWER
     --------------------------------------------------------- */
  function initMobileNav() {
    const toggle = document.getElementById("nav-toggle");
    const drawer = document.getElementById("mobile-drawer");
    if (!toggle || !drawer) return;

    function close() {
      drawer.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
      document.body.style.overflow = "";
    }

    function open() {
      drawer.hidden = false;
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close menu");
    }

    toggle.addEventListener("click", function () {
      if (drawer.hidden) {
        open();
      } else {
        close();
      }
    });

    drawer.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", close);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !drawer.hidden) {
        close();
        toggle.focus();
      }
    });
  }

  /* ---------------------------------------------------------
     4. PROFILE & IDENTITY RENDERING
     --------------------------------------------------------- */
  function renderProfile() {
    const p = data.profile || {};

    const heroName = document.getElementById("hero-name");
    const heroRole = document.getElementById("hero-role");
    const heroTagline = document.getElementById("hero-tagline");
    const heroLocation = document.getElementById("hero-location");
    const aboutLocation = document.getElementById("about-location");
    const avatar = document.getElementById("avatar");
    const aboutText = document.getElementById("about-text");
    const footerYear = document.getElementById("footer-year");

    if (heroName && p.name) heroName.textContent = p.name;
    if (heroRole && p.title) heroRole.textContent = p.title;
    if (heroTagline && p.tagline) heroTagline.textContent = p.tagline;
    if (heroLocation && p.location) heroLocation.textContent = p.location;
    if (aboutLocation && p.location) aboutLocation.textContent = p.location;
    if (avatar && p.initials) avatar.textContent = p.initials;
    if (aboutText && p.about) aboutText.textContent = p.about;
    if (footerYear) footerYear.textContent = new Date().getFullYear();

    if (p.name && p.title) {
      document.title = `${p.name} — ${p.title}`;
    }

    const links = p.links || {};

    // Wire all standard navigation & profile links
    const linkMap = [
      ["github-link", links.github, "GitHub"],
      ["linkedin-link", links.linkedin, "LinkedIn"],
      ["resume-link", links.resume, "Resume"],
      ["mobile-github-link", links.github, "GitHub"],
      ["mobile-linkedin-link", links.linkedin, "LinkedIn"],
      ["mobile-resume-link", links.resume, "Resume"],
      ["hero-github-link", links.github, "GitHub"],
      ["hero-linkedin-link", links.linkedin, "LinkedIn"],
      ["hero-resume-link", links.resume, "Resume"],
      ["contact-github-link", links.github, "GitHub"],
      ["contact-linkedin-link", links.linkedin, "LinkedIn"],
      ["footer-github-link", links.github, "GitHub"],
      ["footer-linkedin-link", links.linkedin, "LinkedIn"]
    ];

    linkMap.forEach(function (item) {
      wireLink(item[0], item[1], item[2]);
    });

    const emailNode = document.getElementById("contact-email-link");
    if (emailNode) {
      if (isPlaceholder(p.email)) {
        emailNode.setAttribute("href", "#");
        emailNode.title = "Email not yet configured";
        emailNode.style.opacity = "0.5";
        emailNode.style.cursor = "not-allowed";
        emailNode.addEventListener("click", function (e) { e.preventDefault(); });
      } else {
        emailNode.setAttribute("href", `mailto:${p.email}`);
      }
    }
  }

  /* ---------------------------------------------------------
     5. FEATURED REPOSITORIES / PROJECTS
     --------------------------------------------------------- */
  const repoIconSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></svg>';

  function renderProjects() {
    const grid = document.getElementById("repo-grid");
    if (!grid || !Array.isArray(data.projects)) return;
    grid.innerHTML = "";

    data.projects.forEach(function (project) {
      const card = el("article", "repo-card");
      card.setAttribute("tabindex", "0");

      const top = el("div", "repo-card-top");
      const icon = el("div", "repo-icon", repoIconSVG);
      const status = el("span", "repo-status", project.status || "Project");
      top.append(icon, status);

      const name = el("h3", "repo-name", project.name);
      const desc = el("p", "repo-desc", project.description);

      const tags = el("div", "repo-tags");
      if (Array.isArray(project.tech)) {
        project.tech.forEach(function (t) {
          tags.appendChild(el("span", "tag", t));
        });
      }

      const footer = el("div", "repo-footer");

      const detailsBtn = el("button", "btn btn-sm", "Details & Architecture");
      detailsBtn.type = "button";
      detailsBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        openProjectModal(project, detailsBtn);
      });
      footer.appendChild(detailsBtn);

      if (!isPlaceholder(project.demo)) {
        const demoLink = el("a", "btn btn-sm btn-primary", "Live Demo");
        demoLink.href = project.demo;
        demoLink.target = "_blank";
        demoLink.rel = "noopener noreferrer";
        demoLink.addEventListener("click", function (e) { e.stopPropagation(); });
        footer.appendChild(demoLink);
      }

      const ghLink = el("a", "btn btn-sm", "GitHub");
      if (isPlaceholder(project.github)) {
        ghLink.href = "#";
        ghLink.style.opacity = "0.5";
        ghLink.style.cursor = "not-allowed";
        ghLink.title = "GitHub repository not yet published";
        ghLink.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
        });
      } else {
        ghLink.href = project.github;
        ghLink.target = "_blank";
        ghLink.rel = "noopener noreferrer";
        ghLink.addEventListener("click", function (e) { e.stopPropagation(); });
      }
      footer.appendChild(ghLink);

      card.append(top, name, desc, tags, footer);

      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && e.target === card) {
          openProjectModal(project, card);
        }
      });

      grid.appendChild(card);
    });
  }

  /* ---------------------------------------------------------
     6. PROJECT MODAL DIALOG
     --------------------------------------------------------- */
  let previousActiveElement = null;

  function openProjectModal(project, triggerElement) {
    previousActiveElement = triggerElement || document.activeElement;

    const modalTitle = document.getElementById("modal-title");
    const modalStatus = document.getElementById("modal-status");
    const modalOverview = document.getElementById("modal-overview");
    const techWrap = document.getElementById("modal-tech");
    const builtList = document.getElementById("modal-built");
    const learnedList = document.getElementById("modal-learned");
    const linksWrap = document.getElementById("modal-links");

    if (modalTitle) modalTitle.textContent = project.name;
    if (modalStatus) modalStatus.textContent = `Status: ${project.status || "In Progress"}`;
    if (modalOverview) modalOverview.textContent = project.overview || project.description;

    if (techWrap) {
      techWrap.innerHTML = "";
      if (Array.isArray(project.tech)) {
        project.tech.forEach(function (t) {
          techWrap.appendChild(el("span", "tag", t));
        });
      }
    }

    if (builtList) {
      builtList.innerHTML = "";
      if (Array.isArray(project.built)) {
        project.built.forEach(function (item) {
          builtList.appendChild(el("li", null, item));
        });
      }
    }

    if (learnedList) {
      learnedList.innerHTML = "";
      if (Array.isArray(project.learned)) {
        project.learned.forEach(function (item) {
          learnedList.appendChild(el("li", null, item));
        });
      }
    }

    if (linksWrap) {
      linksWrap.innerHTML = "";
      if (!isPlaceholder(project.github)) {
        const gh = el("a", "btn btn-sm", "View on GitHub");
        gh.href = project.github;
        gh.target = "_blank";
        gh.rel = "noopener noreferrer";
        linksWrap.appendChild(gh);
      }
      if (!isPlaceholder(project.demo)) {
        const demo = el("a", "btn btn-sm btn-primary", "Live Deployment");
        demo.href = project.demo;
        demo.target = "_blank";
        demo.rel = "noopener noreferrer";
        linksWrap.appendChild(demo);
      }
    }

    const overlay = document.getElementById("project-modal");
    if (overlay) {
      overlay.hidden = false;
      document.body.style.overflow = "hidden";
      const closeBtn = document.getElementById("modal-close-btn");
      if (closeBtn) {
        setTimeout(function () { closeBtn.focus(); }, 30);
      }
    }
  }

  function closeProjectModal() {
    const overlay = document.getElementById("project-modal");
    if (overlay) {
      overlay.hidden = true;
      document.body.style.overflow = "";
      if (previousActiveElement && typeof previousActiveElement.focus === "function") {
        previousActiveElement.focus();
      }
    }
  }

  function initModal() {
    const closeBtn = document.getElementById("modal-close-btn");
    const overlay = document.getElementById("project-modal");
    if (closeBtn) closeBtn.addEventListener("click", closeProjectModal);
    if (overlay) {
      overlay.addEventListener("click", function (e) {
        if (e.target === overlay) closeProjectModal();
      });
    }

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && overlay && !overlay.hidden) {
        closeProjectModal();
      }
    });
  }

  /* ---------------------------------------------------------
     7. DEV LOG (Learning Stream)
     --------------------------------------------------------- */
  function renderActivity() {
    const list = document.getElementById("devlog-list");
    if (!list || !Array.isArray(data.activity)) return;
    list.innerHTML = "";

    const profile = data.profile || {};

    data.activity.forEach(function (post) {
      const item = el("article", "devlog-item");

      const avatar = el("div", "devlog-avatar", profile.initials || "VN");

      const body = el("div");
      const head = el("div", "devlog-head");
      head.appendChild(el("span", "devlog-name", profile.name || "Vedh Naik"));
      head.appendChild(el("span", "devlog-handle", profile.handle || "@vedhdev"));
      head.appendChild(el("span", "devlog-date", formatDate(post.date)));

      const content = el("p", "devlog-content", post.content);

      body.append(head, content);

      if (Array.isArray(post.tags) && post.tags.length > 0) {
        const tagsWrap = el("div", "devlog-tags");
        post.tags.forEach(function (t) {
          tagsWrap.appendChild(el("span", null, `#${t}`));
        });
        body.appendChild(tagsWrap);
      }

      item.append(avatar, body);
      list.appendChild(item);
    });
  }

  /* ---------------------------------------------------------
     8. SKILLS & TECH STACK
     --------------------------------------------------------- */
  function renderSkills() {
    const grid = document.getElementById("skills-grid");
    if (!grid || !Array.isArray(data.skills)) return;
    grid.innerHTML = "";

    data.skills.forEach(function (group) {
      const card = el("div", "skill-card");
      card.appendChild(el("h3", null, group.category));

      const tagsWrap = el("div", "skill-tags");
      if (Array.isArray(group.items)) {
        group.items.forEach(function (item) {
          tagsWrap.appendChild(el("span", "tag", item));
        });
      }

      card.appendChild(tagsWrap);
      grid.appendChild(card);
    });
  }

  /* ---------------------------------------------------------
     9. CURRENTLY LEARNING
     --------------------------------------------------------- */
  function renderLearning() {
    const grid = document.getElementById("learning-grid");
    if (!grid || !Array.isArray(data.learning)) return;
    grid.innerHTML = "";

    data.learning.forEach(function (item) {
      const card = el("div", "learning-card");
      const top = el("div", "learning-card-top");
      top.appendChild(el("span", "pulse-dot"));
      top.appendChild(el("h3", null, item.area));
      card.appendChild(top);
      card.appendChild(el("p", null, item.detail));
      grid.appendChild(card);
    });
  }

  /* ---------------------------------------------------------
     10. JOURNEY / EDUCATION TIMELINE
     --------------------------------------------------------- */
  function renderJourney() {
    const list = document.getElementById("journey-list");
    if (!list || !Array.isArray(data.journey)) return;
    list.innerHTML = "";

    data.journey.forEach(function (step) {
      const item = el("div", "journey-item");
      item.appendChild(el("div", "journey-year", step.year));
      item.appendChild(el("div", "journey-title", step.title));
      item.appendChild(el("div", "journey-place", step.place));
      if (step.detail) {
        item.appendChild(el("div", "journey-detail", step.detail));
      }
      list.appendChild(item);
    });
  }

  /* ---------------------------------------------------------
     11. DEVELOPMENT ACTIVITY HEATMAP (Illustrative)
     --------------------------------------------------------- */
  function renderActivityGraph() {
    const graph = document.getElementById("activity-graph");
    const note = document.getElementById("activity-note");
    if (!graph) return;
    graph.innerHTML = "";

    const weeks = 20;
    const days = 7;
    let seed = 42;
    function deterministicRandom() {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    }

    for (let w = 0; w < weeks; w++) {
      for (let d = 0; d < days; d++) {
        const intensity = deterministicRandom();
        const cell = el("div", "activity-cell");
        if (intensity > 0.82) {
          cell.style.background = "var(--accent)";
          cell.style.opacity = "1";
          cell.title = `Active coding session (${intensity.toFixed(2)})`;
        } else if (intensity > 0.60) {
          cell.style.background = "var(--accent)";
          cell.style.opacity = "0.65";
          cell.title = `Technical reading / lab work`;
        } else if (intensity > 0.38) {
          cell.style.background = "var(--accent)";
          cell.style.opacity = "0.32";
          cell.title = `Study & exploration`;
        } else {
          cell.title = `Rest / planning`;
        }
        graph.appendChild(cell);
      }
    }

    if (note && data.activityNote) {
      note.textContent = data.activityNote;
    }
  }

  /* ---------------------------------------------------------
     12. TERMINAL EASTER EGG
     --------------------------------------------------------- */
  function initTerminal() {
    const overlay = document.getElementById("terminal-overlay");
    const body = document.getElementById("terminal-body");
    const input = document.getElementById("terminal-input");
    const openBtn = document.getElementById("terminal-open-btn");
    const closeBtn = document.getElementById("terminal-close-btn");
    const dotClose = document.getElementById("term-dot-close");
    const shortcutBadge = document.getElementById("hero-term-badge");

    if (!overlay || !body || !input) return;

    let terminalOpenedOnce = false;
    const history = [];
    let historyIndex = -1;

    function print(text, cls) {
      const line = el("div", "terminal-line" + (cls ? " " + cls : ""), text);
      body.appendChild(line);
      body.scrollTop = body.scrollHeight;
    }

    function printBlock(lines, cls) {
      lines.forEach(function (l) { print(l, cls); });
    }

    function welcome() {
      body.innerHTML = "";
      printBlock([
        "vedh@portfolio:~$ init --session",
        "Vedh Jayesh Naik — Developer Terminal v2.0",
        "Interactive environment. Type \"help\" to list available commands.",
        "--------------------------------------------------"
      ], "dim");
      print("");
    }

    const availableCommands = [
      "help", "about", "projects", "repo", "skills", "activity", 
      "learning", "journey", "contact", "whoami", "theme", "date", "clear", "exit"
    ];

    const commandHandlers = {
      help: function () {
        printBlock([
          "Available Commands:",
          "",
          "  about      — Display developer biography & identity",
          "  projects   — List verified featured projects",
          "  skills     — Display technical skills by category",
          "  activity   — Show recent Dev Log progress entries",
          "  learning   — List current active exploration areas",
          "  journey    — Display education & milestones",
          "  contact    — Display contact and professional profiles",
          "  theme      — Switch color theme (e.g. \"theme dark\" or \"theme light\")",
          "  whoami     — View terminal user role",
          "  date       — Show current local system time",
          "  clear      — Clear terminal screen",
          "  exit       — Close the terminal window"
        ]);
      },

      about: function () {
        const p = data.profile || {};
        printBlock([
          `Name:     ${p.fullName || p.name}`,
          `Role:     ${p.title}`,
          `Focus:    ${(p.focusAreas || []).join(" · ")}`,
          `Location: ${p.location}`,
          "",
          `Bio: ${p.about}`
        ]);
      },

      whoami: function () {
        print("guest@vedh.dev [Visitor — Recruiter / Engineer / Judge]");
      },

      date: function () {
        print(new Date().toString(), "highlight");
      },

      projects: function () {
        print("");
        if (Array.isArray(data.projects)) {
          data.projects.forEach(function (p, idx) {
            print(`[${idx + 1}] ${p.name} (${p.status})`, "cmd");
            print(`    Overview: ${p.description}`, "dim");
            print(`    Tech:     ${(p.tech || []).join(", ")}`, "dim");
            print("");
          });
        }
      },

      skills: function () {
        print("");
        if (Array.isArray(data.skills)) {
          data.skills.forEach(function (g) {
            print(`${g.category}:`, "highlight");
            print(`  ${(g.items || []).join(", ")}`, "dim");
          });
        }
      },

      activity: function () {
        print("");
        if (Array.isArray(data.activity)) {
          data.activity.forEach(function (post) {
            print(`[${formatDate(post.date)}]`, "highlight");
            print(`  ${post.content}`);
            if (post.tags) {
              print(`  tags: ${post.tags.map(t => '#' + t).join(" ")}`, "dim");
            }
            print("");
          });
        }
      },

      learning: function () {
        print("");
        if (Array.isArray(data.learning)) {
          data.learning.forEach(function (item) {
            print(`⚡ ${item.area}:`, "highlight");
            print(`   ${item.detail}`, "dim");
          });
        }
      },

      journey: function () {
        print("");
        if (Array.isArray(data.journey)) {
          data.journey.forEach(function (s) {
            print(`${s.year} — ${s.title}`, "cmd");
            print(`  ${s.place} (${s.detail})`, "dim");
          });
        }
      },

      contact: function () {
        const p = data.profile || {};
        const links = p.links || {};
        printBlock([
          `Email:    ${isPlaceholder(p.email) ? "Not added yet (TODO in content.js)" : p.email}`,
          `GitHub:   ${isPlaceholder(links.github) ? "Not configured yet" : links.github}`,
          `LinkedIn: ${isPlaceholder(links.linkedin) ? "Not configured yet" : links.linkedin}`,
          `Location: ${p.location}`
        ]);
      },

      theme: function (args) {
        const target = (args[0] || "").toLowerCase();
        if (target === "light") {
          setTheme("light");
          print("Theme set to LIGHT.", "cmd");
        } else if (target === "dark") {
          setTheme("dark");
          print("Theme set to DARK.", "cmd");
        } else {
          const current = document.documentElement.getAttribute("data-theme") || "dark";
          const next = current === "dark" ? "light" : "dark";
          setTheme(next);
          print(`Theme toggled to ${next.toUpperCase()}.`, "cmd");
        }
      },

      clear: function () {
        body.innerHTML = "";
      },

      exit: function () {
        closeTerminal();
      }
    };

    function runCommand(raw) {
      const trimmed = raw.trim();
      print(`vedh@portfolio:~$ ${raw}`, "cmd");
      if (!trimmed) {
        print("");
        return;
      }

      history.push(raw);
      historyIndex = history.length;

      const parts = trimmed.split(/\s+/);
      const cmd = parts[0].toLowerCase();
      const args = parts.slice(1);

      if (commandHandlers[cmd]) {
        commandHandlers[cmd](args);
      } else {
        print(`Command not found: "${cmd}". Type "help" to see available commands.`, "err");
      }
      print("");
    }

    function openTerminal() {
      overlay.hidden = false;
      document.body.style.overflow = "hidden";
      if (!terminalOpenedOnce) {
        welcome();
        terminalOpenedOnce = true;
      }
      input.value = "";
      setTimeout(function () { input.focus(); }, 30);
    }

    function closeTerminal() {
      overlay.hidden = true;
      document.body.style.overflow = "";
      if (openBtn) openBtn.focus();
    }

    if (openBtn) openBtn.addEventListener("click", openTerminal);
    if (closeBtn) closeBtn.addEventListener("click", closeTerminal);
    if (dotClose) dotClose.addEventListener("click", closeTerminal);
    if (shortcutBadge) {
      shortcutBadge.style.cursor = "pointer";
      shortcutBadge.addEventListener("click", openTerminal);
    }

    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) closeTerminal();
    });

    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        const val = input.value;
        input.value = "";
        runCommand(val);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (history.length > 0 && historyIndex > 0) {
          historyIndex--;
          input.value = history[historyIndex];
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (historyIndex < history.length - 1) {
          historyIndex++;
          input.value = history[historyIndex];
        } else {
          historyIndex = history.length;
          input.value = "";
        }
      } else if (e.key === "Tab") {
        e.preventDefault();
        const current = input.value.trim().toLowerCase();
        if (current) {
          const match = availableCommands.find(c => c.startsWith(current));
          if (match) {
            input.value = match;
          }
        }
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !overlay.hidden) {
        closeTerminal();
      }
      // Global shortcut: ` (backtick) or ~ opens terminal when not editing form fields
      if ((e.key === "`" || e.key === "~") && overlay.hidden) {
        const active = document.activeElement;
        const isInput = active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA");
        if (!isInput) {
          e.preventDefault();
          openTerminal();
        }
      }
    });
  }

  /* ---------------------------------------------------------
     13. INITIALIZATION
     --------------------------------------------------------- */
  function init() {
    initTheme();
    initMobileNav();
    renderProfile();
    renderProjects();
    initModal();
    renderActivity();
    renderSkills();
    renderLearning();
    renderJourney();
    renderActivityGraph();
    initTerminal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
