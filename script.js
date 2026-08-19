/**
 * script.js
 * ---------------------------------------------------------------
 * Vanilla JavaScript (ES6+). Zero external libraries or frameworks.
 * Renders data from data/content.js and powers interactivity:
 * - Theme management (Dark/Light mode with persistence)
 * - Mobile responsive navigation
 * - Project details modal dialog with accessible focus management
 * - Proof of Work, Why I Build, How I Build, and Currently Building sections
 * - Categorized Tech Breadth ("What I Work With")
 * - Terminal Easter egg with command history, autocomplete & rich output
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
      node.removeAttribute("role");
      node.removeAttribute("title");
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
    if (avatar) {
      if (p.avatarImage && !isPlaceholder(p.avatarImage)) {
        avatar.innerHTML = `<img src="${p.avatarImage}" alt="${p.name || 'Vedh Naik'}" class="avatar-img" />`;
      } else if (p.initials) {
        avatar.textContent = p.initials;
      }
    }
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
      ["hero-resume-link", links.resume, "Resume"],
      ["contact-github-link", links.github, "GitHub"],
      ["contact-linkedin-link", links.linkedin, "LinkedIn"],
      ["footer-github-link", links.github, "GitHub"],
      ["footer-linkedin-link", links.linkedin, "LinkedIn"]
    ];

    linkMap.forEach(function (item) {
      wireLink(item[0], item[1], item[2]);
    });

    // Wire Hero & Contact Email Links
    const emailLinks = ["contact-email-link", "hero-email-link"];
    emailLinks.forEach(function (id) {
      const emailNode = document.getElementById(id);
      if (emailNode) {
        if (isPlaceholder(p.email)) {
          emailNode.setAttribute("href", "#");
          emailNode.title = "Email not yet configured";
          emailNode.style.opacity = "0.5";
          emailNode.style.cursor = "not-allowed";
          emailNode.addEventListener("click", function (e) { e.preventDefault(); });
        } else {
          emailNode.setAttribute("href", `mailto:${p.email}`);
          emailNode.removeAttribute("aria-disabled");
          emailNode.removeAttribute("title");
          emailNode.style.opacity = "";
          emailNode.style.cursor = "";
        }
      }
    });
  }

  /* ---------------------------------------------------------
     5. FEATURED REPOSITORIES / PROJECTS (TECHNICAL DEPTH)
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

      // Stack tags
      const stackBlock = el("div", "repo-tech-block");
      stackBlock.appendChild(el("span", "repo-tech-label", "STACK"));
      const tags = el("div", "repo-tags");
      if (Array.isArray(project.tech)) {
        project.tech.forEach(function (t) {
          tags.appendChild(el("span", "tag", t));
        });
      }
      stackBlock.appendChild(tags);

      // Technical Highlights (Built & Learned)
      const highlights = el("div", "repo-highlights");
      
      if (Array.isArray(project.built) && project.built.length > 0) {
        const builtBox = el("div", "highlight-box");
        builtBox.appendChild(el("span", "highlight-title", "WHAT I BUILT"));
        const ul = el("ul", "highlight-list");
        project.built.slice(0, 2).forEach(function (b) {
          ul.appendChild(el("li", null, b));
        });
        builtBox.appendChild(ul);
        highlights.appendChild(builtBox);
      }

      if (Array.isArray(project.learned) && project.learned.length > 0) {
        const learnedBox = el("div", "highlight-box");
        learnedBox.appendChild(el("span", "highlight-title", "WHAT I LEARNED"));
        const ul = el("ul", "highlight-list");
        project.learned.slice(0, 2).forEach(function (l) {
          ul.appendChild(el("li", null, l));
        });
        learnedBox.appendChild(ul);
        highlights.appendChild(learnedBox);
      }

      const footer = el("div", "repo-footer");

      const detailsBtn = el("button", "btn btn-sm", "Architecture & Details");
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

      if (!isPlaceholder(project.github)) {
        const ghLink = el("a", "btn btn-sm", "Source");
        ghLink.href = project.github;
        ghLink.target = "_blank";
        ghLink.rel = "noopener noreferrer";
        ghLink.addEventListener("click", function (e) { e.stopPropagation(); });
        footer.appendChild(ghLink);
      }

      card.append(top, name, desc, stackBlock, highlights, footer);

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
    const workedBlock = document.getElementById("modal-worked-block");
    const workedList = document.getElementById("modal-worked");
    const learnedList = document.getElementById("modal-learned");
    const linksWrap = document.getElementById("modal-links");

    if (modalTitle) modalTitle.textContent = project.name;
    if (modalStatus) modalStatus.textContent = `Status: ${project.status || "Verified Project"}`;
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

    if (workedList) {
      workedList.innerHTML = "";
      if (Array.isArray(project.workedWith) && project.workedWith.length > 0) {
        if (workedBlock) workedBlock.style.display = "block";
        project.workedWith.forEach(function (item) {
          workedList.appendChild(el("li", null, item));
        });
      } else {
        if (workedBlock) workedBlock.style.display = "none";
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
        const gh = el("a", "btn btn-sm", "View Source on GitHub");
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
     7. PROOF OF WORK (4 DOMAINS)
     --------------------------------------------------------- */
  function renderProofOfWork() {
    const grid = document.getElementById("proof-grid");
    if (!grid || !Array.isArray(data.proofOfWork)) return;
    grid.innerHTML = "";

    data.proofOfWork.forEach(function (cardData) {
      const card = el("article", "proof-card");

      const top = el("div", "proof-card-top");
      top.appendChild(el("span", "proof-domain", cardData.domain));
      if (cardData.badge) {
        top.appendChild(el("span", "proof-badge", cardData.badge));
      }

      const title = el("h3", "proof-title", cardData.title);
      const desc = el("p", "proof-desc", cardData.description);

      const techWrap = el("div", "proof-tech-wrap");
      if (Array.isArray(cardData.tech)) {
        cardData.tech.forEach(function (t) {
          techWrap.appendChild(el("span", "tag", t));
        });
      }

      card.append(top, title, desc, techWrap);
      grid.appendChild(card);
    });
  }

  /* ---------------------------------------------------------
     8. WHY I BUILD
     --------------------------------------------------------- */
  function renderWhyIBuild() {
    const quoteNode = document.getElementById("why-build-quote");
    const detailNode = document.getElementById("why-build-detail");
    const w = data.whyIBuild || {};

    if (quoteNode && w.quote) {
      quoteNode.textContent = `"${w.quote.replace(/^"|"$/g, '')}"`;
    }
    if (detailNode && w.detail) {
      detailNode.textContent = w.detail;
    }
  }

  /* ---------------------------------------------------------
     9. CURRENTLY BUILDING (2026 TRACKS)
     --------------------------------------------------------- */
  function renderCurrentlyBuilding() {
    const grid = document.getElementById("currently-building-grid");
    if (!grid || !Array.isArray(data.currentlyBuilding)) return;
    grid.innerHTML = "";

    data.currentlyBuilding.forEach(function (track) {
      const card = el("div", "track-card");

      const head = el("div", "track-head");
      const numWrap = el("div", "track-num-wrap");
      numWrap.appendChild(el("span", "track-num", track.track));
      numWrap.appendChild(el("h3", "track-area", track.area));
      head.appendChild(numWrap);

      head.appendChild(el("span", "track-year-badge", track.year || "2026"));

      const summary = el("p", "track-summary", track.summary);
      const detail = el("p", "track-detail", track.detail);

      card.append(head, summary, detail);
      grid.appendChild(card);
    });
  }

  /* ---------------------------------------------------------
     10. DEV LOG (Learning Stream)
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
     11. WHAT I WORK WITH (CLEAN TECHNICAL BREADTH)
     --------------------------------------------------------- */
  function renderTechBreadth() {
    const grid = document.getElementById("tech-breadth-grid");
    if (!grid || !Array.isArray(data.whatIWorkWith)) return;
    grid.innerHTML = "";

    data.whatIWorkWith.forEach(function (group) {
      const card = el("div", "tech-category-card");

      const label = el("h3", "tech-category-label", group.category);
      card.appendChild(label);

      const itemsWrap = el("div", "tech-category-items");
      if (Array.isArray(group.items)) {
        group.items.forEach(function (item) {
          itemsWrap.appendChild(el("span", "tech-item-chip", item));
        });
      }
      card.appendChild(itemsWrap);
      grid.appendChild(card);
    });
  }

  /* ---------------------------------------------------------
     12. JOURNEY / EDUCATION TIMELINE
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
     13. HOW I BUILD (WORKFLOW SEQUENCE)
     --------------------------------------------------------- */
  function renderHowIBuild() {
    const seqWrap = document.getElementById("how-build-sequence");
    const statementNode = document.getElementById("how-build-statement");
    const h = data.howIBuild || {};

    if (seqWrap && Array.isArray(h.steps)) {
      seqWrap.innerHTML = "";
      h.steps.forEach(function (step) {
        const stepCard = el("div", "how-step-card");
        stepCard.appendChild(el("span", "how-step-num", step.num));
        stepCard.appendChild(el("h4", "how-step-name", step.name));
        stepCard.appendChild(el("p", "how-step-desc", step.desc));
        seqWrap.appendChild(stepCard);
      });
    }

    if (statementNode && h.statement) {
      statementNode.textContent = `"${h.statement.replace(/^"|"$/g, '')}"`;
    }
  }

  /* ---------------------------------------------------------
     14. TERMINAL EASTER EGG
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
        "Vedh Jayesh Naik — Developer Terminal v3.0",
        "Interactive environment. Type \"help\" to list available commands.",
        "--------------------------------------------------"
      ], "dim");
      print("");
    }

    const availableCommands = [
      "help", "about", "proof", "projects", "stack", "skills", "learning", "currently",
      "why", "how", "activity", "journey", "contact", "whoami", "theme", "date", "clear", "exit"
    ];

    const commandHandlers = {
      help: function () {
        printBlock([
          "Available Commands:",
          "",
          "  about      — Display developer biography & identity",
          "  proof      — Show verified hands-on Proof of Work",
          "  projects   — List verified featured projects & architectures",
          "  stack      — Display technical breadth (What I Work With)",
          "  learning   — List active 2026 learning tracks",
          "  why        — Display core motivation & developer philosophy",
          "  how        — Display 6-step engineering learning sequence",
          "  activity   — Show recent Dev Log progress entries",
          "  journey    — Display education & academic milestones",
          "  contact    — Display direct contact links (Email, GitHub)",
          "  theme      — Switch theme (e.g. \"theme dark\" or \"theme light\")",
          "  whoami     — View terminal session role",
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
          `Status:   ${p.statusBadge || "Available for internships"}`,
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

      proof: function () {
        print("");
        if (Array.isArray(data.proofOfWork)) {
          data.proofOfWork.forEach(function (card) {
            print(`[${card.domain}] ${card.title} ${card.badge ? `(${card.badge})` : ''}`, "cmd");
            print(`  Tech: ${(card.tech || []).join(" · ")}`, "highlight");
            print(`  ${card.description}`);
            print("");
          });
        }
      },

      projects: function () {
        print("");
        if (Array.isArray(data.projects)) {
          data.projects.forEach(function (p, idx) {
            print(`[${idx + 1}] ${p.name} (${p.status})`, "cmd");
            print(`    Overview: ${p.description}`, "dim");
            print(`    Stack:    ${(p.tech || []).join(" · ")}`, "highlight");
            if (p.github) print(`    Source:   ${p.github}`, "dim");
            if (p.demo) print(`    Demo:     ${p.demo}`, "dim");
            print("");
          });
        }
      },

      stack: function () {
        print("");
        if (Array.isArray(data.whatIWorkWith)) {
          data.whatIWorkWith.forEach(function (g) {
            print(`${g.category}:`, "highlight");
            print(`  ${(g.items || []).join(" · ")}`, "dim");
          });
        }
      },

      skills: function () {
        commandHandlers.stack();
      },

      learning: function () {
        print("");
        if (Array.isArray(data.currentlyBuilding)) {
          data.currentlyBuilding.forEach(function (track) {
            print(`[Track ${track.track}] ${track.area} (${track.year})`, "highlight");
            print(`  Summary: ${track.summary}`);
            print(`  Detail:  ${track.detail}`, "dim");
            print("");
          });
        }
      },

      currently: function () {
        commandHandlers.learning();
      },

      why: function () {
        const w = data.whyIBuild || {};
        print("");
        print(`"${w.quote}"`, "highlight");
        print(`\n${w.detail}`);
      },

      how: function () {
        const h = data.howIBuild || {};
        print("");
        if (Array.isArray(h.steps)) {
          h.steps.forEach(function (s) {
            print(`${s.num} — ${s.name}: ${s.desc}`, "cmd");
          });
        }
        print(`\n"${h.statement}"`, "highlight");
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
          `Email:    ${p.email}`,
          `GitHub:   ${links.github}`,
          `LinkedIn: ${isPlaceholder(links.linkedin) ? "Pending configuration" : links.linkedin}`,
          `Location: ${p.location}`,
          `Status:   ${p.statusBadge}`
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
     15. INITIALIZATION
     --------------------------------------------------------- */
  function init() {
    initTheme();
    initMobileNav();
    renderProfile();
    renderProjects();
    initModal();
    renderProofOfWork();
    renderWhyIBuild();
    renderCurrentlyBuilding();
    renderActivity();
    renderTechBreadth();
    renderJourney();
    renderHowIBuild();
    initTerminal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
