/**
 * script.js
 * ---------------------------------------------------------------
 * Vedh Naik — Personal Developer Profile & Portfolio
 * Agency-Grade Engineering Portfolio & Case Study Showcase:
 * - Dynamic data population from data/content.js (Single Source of Truth)
 * - Large editorial case study blocks for Proof of Work
 * - Smooth category filter transitions & inline collapsible breakdowns
 * - Interactive Engineering Blueprint with 60fps Particle Topology Canvas
 * - Retro-OS Boot Energy Terminal Easter Egg (boot sequence, CRT styling, history, tab-completion)
 * - Scrollspy & Top Reading Progress Bar
 * - IntersectionObserver scroll-reveal animations
 * - Accessible focus management (WCAG AA) & Dark/Light theme engine
 * ---------------------------------------------------------------
 */

(function () {
  "use strict";

  /* ---------------------------------------------------------
     1. DATA ACCESS & UTILITIES
     --------------------------------------------------------- */
  const data = (typeof window !== "undefined" && window.SITE_DATA) ? window.SITE_DATA : {};

  /** Helper: Create element with class and text/HTML */
  function el(tag, className, content) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content !== undefined && content !== null) {
      if (typeof content === "string" && (content.includes("<") || content.includes("&"))) {
        element.innerHTML = content;
      } else {
        element.textContent = content;
      }
    }
    return element;
  }

  /** Helper: Check for placeholder URL */
  function isPlaceholder(url) {
    if (!url || typeof url !== "string") return true;
    const clean = url.trim();
    return clean === "" ||
      clean === "#" ||
      clean.startsWith("TODO_") ||
      clean.includes("example.com") ||
      clean === "null";
  }

  /** Category SVG Icons */
  function getCategorySVG(categorySlug) {
    switch (categorySlug) {
      case "cloud-devops":
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>';
      case "machine-learning":
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>';
      case "systems-security":
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>';
      case "web-development":
      default:
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>';
    }
  }

  /* ---------------------------------------------------------
     2. THEME ENGINE (DARK / LIGHT WITH SMOOTH CROSS-FADE)
     --------------------------------------------------------- */
  function initTheme() {
    const root = document.documentElement;
    const toggleBtn = document.getElementById("theme-toggle");
    const iconDark = document.getElementById("theme-icon-dark");
    const iconLight = document.getElementById("theme-icon-light");

    const savedTheme = localStorage.getItem("vedh_theme");
    const systemPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

    applyTheme(initialTheme);

    if (toggleBtn) {
      toggleBtn.addEventListener("click", function () {
        const currentTheme = root.getAttribute("data-theme") || "dark";
        const nextTheme = currentTheme === "dark" ? "light" : "dark";
        applyTheme(nextTheme);
        localStorage.setItem("vedh_theme", nextTheme);
      });
    }

    function applyTheme(theme) {
      root.setAttribute("data-theme", theme);
      if (iconDark && iconLight) {
        if (theme === "dark") {
          iconDark.style.display = "block";
          iconLight.style.display = "none";
        } else {
          iconDark.style.display = "none";
          iconLight.style.display = "block";
        }
      }
    }

    // Expose for terminal command
    window.setSiteTheme = applyTheme;
  }

  /* ---------------------------------------------------------
     3. SCROLL PROGRESS & SCROLLSPY
     --------------------------------------------------------- */
  function initScrollTracking() {
    const progressBar = document.getElementById("scroll-progress");
    const navLinks = document.querySelectorAll("#primary-nav .nav-link");
    const sectionIds = ["about", "proof", "blueprint", "why-i-build", "currently-building", "activity", "skills", "journey", "contact"];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

    // 1. Reading Progress Bar
    window.addEventListener("scroll", function () {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (scrollY / totalHeight) * 100 : 0;
      if (progressBar) {
        progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
      }
    }, { passive: true });

    // 2. Nav Scrollspy via IntersectionObserver
    if ("IntersectionObserver" in window && sections.length > 0) {
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute("id");
            navLinks.forEach(function (link) {
              const href = link.getAttribute("href");
              if (href === `#${currentId}`) {
                link.classList.add("active");
                link.setAttribute("aria-current", "location");
              } else {
                link.classList.remove("active");
                link.removeAttribute("aria-current");
              }
            });
          }
        });
      }, {
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0.05
      });

      sections.forEach(function (sec) {
        observer.observe(sec);
      });
    }
  }

  /* ---------------------------------------------------------
     4. NAVIGATION DRAWER (MOBILE)
     --------------------------------------------------------- */
  function initNavigation() {
    const toggleBtn = document.getElementById("nav-toggle");
    const drawer = document.getElementById("mobile-drawer");
    if (!toggleBtn || !drawer) return;

    toggleBtn.addEventListener("click", function () {
      const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
      toggleBtn.setAttribute("aria-expanded", String(!isExpanded));
      drawer.hidden = isExpanded;
    });

    const links = drawer.querySelectorAll("a");
    links.forEach(function (link) {
      link.addEventListener("click", function () {
        toggleBtn.setAttribute("aria-expanded", "false");
        drawer.hidden = true;
      });
    });
  }

  /* ---------------------------------------------------------
     5. PROFILE & IDENTITY POPULATION
     --------------------------------------------------------- */
  function renderProfile() {
    const p = data.profile || {};

    const nameNode = document.getElementById("hero-name");
    const roleNode = document.getElementById("hero-role");
    const taglineNode = document.getElementById("hero-tagline");
    const locNode = document.getElementById("hero-location");
    const aboutLocNode = document.getElementById("about-location");
    const aboutTextNode = document.getElementById("about-text");

    if (nameNode && p.name) nameNode.textContent = p.name;
    if (roleNode && p.title) roleNode.textContent = p.title;
    if (taglineNode && p.tagline) taglineNode.textContent = p.tagline;
    if (locNode && p.location) locNode.textContent = p.location;
    if (aboutLocNode && p.location) aboutLocNode.textContent = p.location;
    if (aboutTextNode && p.about) aboutTextNode.textContent = p.about;

    // Contact Links
    const emailLink = document.getElementById("contact-email-link");
    const heroEmailLink = document.getElementById("hero-email-link");
    if (p.email) {
      const mailto = `mailto:${p.email}`;
      if (emailLink) emailLink.href = mailto;
      if (heroEmailLink) heroEmailLink.href = mailto;
    }

    const ghLink = document.getElementById("github-link");
    const heroGh = document.getElementById("hero-github-link");
    const contactGh = document.getElementById("contact-github-link");
    const footerGh = document.getElementById("footer-github-link");
    const mobileGh = document.getElementById("mobile-github-link");

    if (p.links && p.links.github) {
      [ghLink, heroGh, contactGh, footerGh, mobileGh].forEach(function (node) {
        if (node) node.href = p.links.github;
      });
    }

    const lnLinks = [
      document.getElementById("linkedin-link"),
      document.getElementById("contact-linkedin-link"),
      document.getElementById("footer-linkedin-link"),
      document.getElementById("mobile-linkedin-link")
    ];

    if (p.links && !isPlaceholder(p.links.linkedin)) {
      lnLinks.forEach(function (node) {
        if (node) node.href = p.links.linkedin;
      });
    } else {
      lnLinks.forEach(function (node) {
        if (node) {
          node.setAttribute("aria-disabled", "true");
          node.title = "LinkedIn profile pending";
          node.addEventListener("click", function (e) { e.preventDefault(); });
        }
      });
    }

    const resLinks = [
      document.getElementById("resume-link"),
      document.getElementById("hero-resume-link"),
      document.getElementById("mobile-resume-link")
    ];

    if (p.links && !isPlaceholder(p.links.resume)) {
      resLinks.forEach(function (node) {
        if (node) node.href = p.links.resume;
      });
    }
  }

  /* ---------------------------------------------------------
     6. PROOF OF WORK (LARGE EDITORIAL CASE STUDY BLOCKS)
     --------------------------------------------------------- */
  let activeProofCategory = "all";

  function renderProofOfWork(categoryFilter) {
    const grid = document.getElementById("proof-grid");
    if (!grid || !Array.isArray(data.projects)) return;

    activeProofCategory = categoryFilter || activeProofCategory || "all";
    grid.innerHTML = "";

    const filtered = activeProofCategory === "all"
      ? data.projects
      : data.projects.filter(p => p.categorySlug === activeProofCategory);

    filtered.forEach(function (project, index) {
      const card = el("article", "project-case-study reveal-item");
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "region");
      card.setAttribute("aria-label", `${project.title || project.name} Case Study`);
      card.dataset.projectId = project.id;

      // --------------------------------------------------
      // A. TECHNICAL VISUAL PREVIEW PANE (Left Column)
      // --------------------------------------------------
      const visualPane = el("div", "project-visual-pane");
      const gridTexture = el("div", "visual-grid-texture");
      const radialGlow = el("div", "visual-radial-glow");

      // Top Tag Bar
      const topBar = el("div", "visual-top-bar");
      const systemTag = el("span", "visual-system-tag", (project.underTheHood && project.underTheHood.systemType) || project.category || "Technical Case Study");
      const statusTag = el("span", "visual-status-tag", `<span class="status-dot-emerald"></span>${project.status || "Verified Project"}`);
      topBar.append(systemTag, statusTag);

      // Center Diagram Box
      const diagramBox = el("div", "visual-diagram-box");
      const iconOrb = el("div", "diagram-icon-orb", getCategorySVG(project.categorySlug));
      const flowHint = el("span", "diagram-flow-hint", `${(project.tech || []).slice(0, 3).join(" · ")} Architecture`);
      diagramBox.append(iconOrb, flowHint);

      // Bottom Bar
      const bottomBar = el("div", "visual-bottom-bar");
      bottomBar.innerHTML = `<span>VERIFIED SYSTEM FLOW</span><span>0${index + 1} / 0${filtered.length}</span>`;

      visualPane.append(gridTexture, radialGlow, topBar, diagramBox, bottomBar);

      // --------------------------------------------------
      // B. EDITORIAL CASE STUDY CONTENT PANE (Right Column)
      // --------------------------------------------------
      const contentPane = el("div", "project-content-pane");

      const eyebrow = el("div", "case-study-eyebrow", `${project.category} · CASE STUDY 0${index + 1}`);
      const title = el("h3", "case-study-title", project.title || project.name);

      // Problem Statement / Impact Quote
      const problemText = project.explanation && project.explanation.problem
        ? project.explanation.problem
        : (project.description || project.overview);
      const problemQuote = el("blockquote", "case-study-problem-quote", `"${problemText}"`);

      // Proof / Verification Tags
      const proofTagsWrap = el("div", "proof-tags-list");
      const tagsToDisplay = Array.isArray(project.proofTags) && project.proofTags.length > 0
        ? project.proofTags
        : (Array.isArray(project.tech) ? project.tech.slice(0, 4) : []);

      tagsToDisplay.forEach(function (t) {
        proofTagsWrap.appendChild(el("span", "proof-tag-chip", t));
      });

      // Tech Stack Badges
      const techBadgesWrap = el("div", "tech-badges-list");
      if (Array.isArray(project.tech)) {
        project.tech.slice(0, 6).forEach(function (t) {
          techBadgesWrap.appendChild(el("span", "tech-badge-item", t));
        });
      }

      // Action Buttons
      const actions = el("div", "case-study-actions");

      const explainBtn = el("button", "btn btn-primary", '<span>Explain Project</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>');
      explainBtn.type = "button";
      explainBtn.setAttribute("aria-label", `Explain ${project.title || project.name} architecture`);
      explainBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        openProjectModal(project, explainBtn, "explain");
      });

      const hoodBtn = el("button", "btn btn-hood", '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 8 6 4-6 4"/></svg><span>Under the Hood</span>');
      hoodBtn.type = "button";
      hoodBtn.setAttribute("aria-label", `View Under the Hood flow for ${project.title || project.name}`);
      hoodBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        openProjectModal(project, hoodBtn, "hood");
      });

      actions.append(explainBtn, hoodBtn);

      if (!isPlaceholder(project.github || project.sourceUrl)) {
        const ghLink = el("a", "btn btn-sm", '<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg><span>Source</span>');
        ghLink.href = project.github || project.sourceUrl;
        ghLink.target = "_blank";
        ghLink.rel = "noopener noreferrer";
        ghLink.addEventListener("click", function (e) { e.stopPropagation(); });
        actions.appendChild(ghLink);
      }

      if (!isPlaceholder(project.demo || project.liveUrl)) {
        const demoLink = el("a", "btn btn-sm btn-blueprint-cta", '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg><span>Live Demo</span>');
        demoLink.href = project.demo || project.liveUrl;
        demoLink.target = "_blank";
        demoLink.rel = "noopener noreferrer";
        demoLink.addEventListener("click", function (e) { e.stopPropagation(); });
        actions.appendChild(demoLink);
      }

      // Inline Collapsible Breakdown
      const expandToggle = el("button", "inline-expand-toggle", '<span>Quick Architecture Breakdown</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>');
      expandToggle.setAttribute("aria-expanded", "false");

      const breakdownDrawer = el("div", "inline-breakdown-drawer");
      breakdownDrawer.hidden = true;

      // Built
      if (Array.isArray(project.built) && project.built.length > 0) {
        const bTitle = el("div", "breakdown-section-title", "What I Built");
        const bList = el("ul", "breakdown-list");
        project.built.slice(0, 2).forEach(item => bList.appendChild(el("li", null, item)));
        breakdownDrawer.append(bTitle, bList);
      }

      // Learned
      if (Array.isArray(project.learned) && project.learned.length > 0) {
        const lTitle = el("div", "breakdown-section-title", "Technical Takeaway");
        const lList = el("ul", "breakdown-list");
        project.learned.slice(0, 2).forEach(item => lList.appendChild(el("li", null, item)));
        breakdownDrawer.append(lTitle, lList);
      }

      expandToggle.addEventListener("click", function (e) {
        e.stopPropagation();
        const isOpen = expandToggle.getAttribute("aria-expanded") === "true";
        expandToggle.setAttribute("aria-expanded", String(!isOpen));
        breakdownDrawer.hidden = isOpen;
      });

      contentPane.append(eyebrow, title, problemQuote, proofTagsWrap, techBadgesWrap, actions, expandToggle, breakdownDrawer);

      card.append(visualPane, contentPane);
      grid.appendChild(card);

      // Trigger scroll reveal
      setTimeout(() => card.classList.add("is-revealed"), 50 * index);
    });
  }

  function initProofFilters() {
    const buttons = document.querySelectorAll(".proof-filter-btn");
    if (!buttons || buttons.length === 0) return;

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const category = btn.dataset.category || "all";
        buttons.forEach(function (b) {
          b.classList.toggle("active", b === btn);
          b.setAttribute("aria-selected", String(b === btn));
        });

        // Smooth transition
        const grid = document.getElementById("proof-grid");
        if (grid) {
          grid.style.opacity = "0";
          grid.style.transform = "translateY(8px)";
          setTimeout(function () {
            renderProofOfWork(category);
            grid.style.transition = "opacity 240ms ease, transform 240ms ease";
            grid.style.opacity = "1";
            grid.style.transform = "translateY(0)";
          }, 140);
        }
      });
    });
  }

  /* ---------------------------------------------------------
     7. MODAL LOGIC (EXPLAIN & UNDER THE HOOD)
     --------------------------------------------------------- */
  let lastFocusedElement = null;

  function switchModalTab(tabName) {
    const tabExplain = document.getElementById("modal-tab-explain");
    const tabHood = document.getElementById("modal-tab-hood");
    const tabOverview = document.getElementById("modal-tab-overview");

    const paneExplain = document.getElementById("pane-explain");
    const paneHood = document.getElementById("pane-hood");
    const paneOverview = document.getElementById("pane-overview");

    const tabs = [
      { name: "explain", btn: tabExplain, pane: paneExplain },
      { name: "hood", btn: tabHood, pane: paneHood },
      { name: "overview", btn: tabOverview, pane: paneOverview }
    ];

    tabs.forEach(function (item) {
      if (!item.btn || !item.pane) return;
      const isActive = item.name === tabName;
      item.btn.classList.toggle("active", isActive);
      item.btn.setAttribute("aria-selected", String(isActive));
      item.pane.hidden = !isActive;
      item.pane.classList.toggle("active", isActive);
    });
  }

  function openProjectModal(project, triggerElement, initialTab) {
    if (!project) return;
    lastFocusedElement = triggerElement || document.activeElement;

    const overlay = document.getElementById("project-modal");
    if (!overlay) return;

    // Header Info
    const titleNode = document.getElementById("modal-title");
    const sysTypeNode = document.getElementById("modal-system-type");
    const statusNode = document.getElementById("modal-status");

    if (titleNode) titleNode.textContent = project.title || project.name;
    if (sysTypeNode) sysTypeNode.textContent = (project.underTheHood && project.underTheHood.systemType) || project.category || "Engineering Project";
    if (statusNode) statusNode.textContent = `· ${project.status || "Personal Project"}`;

    // 1. Tab Explain (6-part breakdown)
    const explainGrid = document.getElementById("modal-explain-grid");
    if (explainGrid) {
      explainGrid.innerHTML = "";
      const exp = project.explanation || {};
      const explainSections = [
        { label: "01 · The Problem", title: "Problem Statement", text: exp.problem || project.description },
        { label: "02 · The Approach", title: "Architecture Strategy", text: exp.approach || "Structured around declarative system models." },
        { label: "03 · Implementation", title: "Core Execution", text: exp.implementation || project.overview },
        { label: "04 · Technology Choices", title: "Why These Tools", text: exp.technology || (project.tech ? `Utilized ${project.tech.join(", ")} for robust modularity.` : "") },
        { label: "05 · Edge Case / Challenge", title: "Engineering Hurdle", text: exp.challenge || "Debugging inter-service latency and boundary constraints." },
        { label: "06 · Key Learning", title: "Technical Takeaway", text: exp.learning || (Array.isArray(project.learned) ? project.learned.join(" ") : "System architecture principles.") }
      ];

      explainSections.forEach(function (sec) {
        if (!sec.text) return;
        const item = el("div", "explain-item-card");
        item.appendChild(el("span", "explain-step-label", sec.label));
        item.appendChild(el("h4", "explain-item-title", sec.title));
        item.appendChild(el("p", "explain-item-body", sec.text));
        explainGrid.appendChild(item);
      });
    }

    // 2. Tab Under The Hood
    const archFlow = document.getElementById("modal-arch-flow");
    const hoodSummary = document.getElementById("modal-hood-summary");
    const hoodTakeaways = document.getElementById("modal-hood-takeaways");
    const hood = project.underTheHood || {};

    if (archFlow) {
      archFlow.innerHTML = "";
      if (Array.isArray(hood.architectureFlow) && hood.architectureFlow.length > 0) {
        hood.architectureFlow.forEach(function (step, sIdx) {
          const row = el("div", "arch-step-row");
          const num = el("span", "arch-step-num", step.step || `0${sIdx + 1}`);
          const content = el("div");
          content.appendChild(el("div", "arch-step-label", step.label));
          if (step.sub) content.appendChild(el("div", "arch-step-sub", step.sub));
          if (step.desc) content.appendChild(el("p", "arch-step-desc", step.desc));
          row.append(num, content);
          archFlow.appendChild(row);
        });
      } else {
        archFlow.innerHTML = '<p class="text-secondary" style="font-size: 13px;">Architecture flow verified via primary source repository.</p>';
      }
    }

    if (hoodSummary) hoodSummary.textContent = hood.whatBuiltSummary || project.description || "";

    if (hoodTakeaways) {
      hoodTakeaways.innerHTML = "";
      const takeaways = Array.isArray(hood.keyTakeaways) ? hood.keyTakeaways : (project.learned || []);
      takeaways.forEach(function (t) {
        hoodTakeaways.appendChild(el("li", null, t));
      });
    }

    // 3. Tab Overview
    const overviewText = document.getElementById("modal-overview");
    const techTags = document.getElementById("modal-tech");
    const builtList = document.getElementById("modal-built");
    const workedList = document.getElementById("modal-worked");
    const learnedList = document.getElementById("modal-learned");

    if (overviewText) overviewText.textContent = project.overview || project.description || "";

    if (techTags) {
      techTags.innerHTML = "";
      if (Array.isArray(project.tech)) {
        project.tech.forEach(t => techTags.appendChild(el("span", "tech-badge-item", t)));
      }
    }

    if (builtList) {
      builtList.innerHTML = "";
      if (Array.isArray(project.built)) {
        project.built.forEach(item => builtList.appendChild(el("li", null, item)));
      }
    }

    if (workedList) {
      workedList.innerHTML = "";
      if (Array.isArray(project.workedWith)) {
        project.workedWith.forEach(item => workedList.appendChild(el("li", null, item)));
      }
    }

    if (learnedList) {
      learnedList.innerHTML = "";
      if (Array.isArray(project.learned)) {
        project.learned.forEach(item => learnedList.appendChild(el("li", null, item)));
      }
    }

    // Action Links Footer
    const linksContainer = document.getElementById("modal-links");
    if (linksContainer) {
      linksContainer.innerHTML = "";
      if (!isPlaceholder(project.github || project.sourceUrl)) {
        const ghA = el("a", "btn btn-sm", '<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg><span>GitHub Source</span>');
        ghA.href = project.github || project.sourceUrl;
        ghA.target = "_blank";
        ghA.rel = "noopener noreferrer";
        linksContainer.appendChild(ghA);
      }
      if (!isPlaceholder(project.demo || project.liveUrl)) {
        const demoA = el("a", "btn btn-sm btn-primary", '<span>Live Demo</span>');
        demoA.href = project.demo || project.liveUrl;
        demoA.target = "_blank";
        demoA.rel = "noopener noreferrer";
        linksContainer.appendChild(demoA);
      }
    }

    switchModalTab(initialTab || "explain");
    overlay.hidden = false;
    document.body.style.overflow = "hidden";

    const closeBtn = document.getElementById("modal-close-btn");
    if (closeBtn) {
      setTimeout(() => closeBtn.focus(), 40);
    }
  }

  function closeProjectModal() {
    const overlay = document.getElementById("project-modal");
    if (!overlay || overlay.hidden) return;
    overlay.hidden = true;
    document.body.style.overflow = "";
    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  }

  function initModal() {
    const overlay = document.getElementById("project-modal");
    const closeBtn = document.getElementById("modal-close-btn");
    const tabExplain = document.getElementById("modal-tab-explain");
    const tabHood = document.getElementById("modal-tab-hood");
    const tabOverview = document.getElementById("modal-tab-overview");

    if (closeBtn) closeBtn.addEventListener("click", closeProjectModal);
    if (overlay) {
      overlay.addEventListener("click", function (e) {
        if (e.target === overlay) closeProjectModal();
      });
    }
    if (tabExplain) tabExplain.addEventListener("click", () => switchModalTab("explain"));
    if (tabHood) tabHood.addEventListener("click", () => switchModalTab("hood"));
    if (tabOverview) tabOverview.addEventListener("click", () => switchModalTab("overview"));

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && overlay && !overlay.hidden) {
        closeProjectModal();
      }
    });
  }

  /* ---------------------------------------------------------
     8. ENGINEERING BLUEPRINT & TOPOLOGY PARTICLES
     --------------------------------------------------------- */
  let activeDomainKey = "all";
  let isTraceMode = false;
  let activeTraceId = null;

  const domainIconSVGs = {
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>',
    cpu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>'
  };

  /** Lightweight 60fps Particle Topology Canvas */
  function initBlueprintParticles() {
    const canvas = document.getElementById("blueprint-particle-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles = [];
    const count = Math.min(32, Math.floor((width * height) / 18000));

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1.2
      });
    }

    function resize() {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    }

    window.addEventListener("resize", resize, { passive: true });

    let animationId;
    function render() {
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.getAttribute("data-theme") !== "light";
      const nodeColor = isDark ? "rgba(16, 185, 129, 0.4)" : "rgba(5, 150, 105, 0.35)";
      const lineColor = isDark ? "rgba(6, 182, 212, 0.12)" : "rgba(2, 132, 199, 0.08)";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 1 - dist / 130;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(render);
    }

    // Only run when in viewport to conserve battery
    if ("IntersectionObserver" in window) {
      const obs = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          if (!animationId) render();
        } else {
          if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
          }
        }
      });
      obs.observe(canvas);
    } else {
      render();
    }
  }

  function renderBlueprint() {
    const bp = data.blueprint;
    if (!bp || !bp.domains) return;

    const domainsGrid = document.getElementById("blueprint-domains-grid");
    if (!domainsGrid) return;
    domainsGrid.innerHTML = "";

    const domainKeys = Object.keys(bp.domains);

    domainKeys.forEach(function (key) {
      const domain = bp.domains[key];
      const card = el("div", `domain-node-card ${domain.learningStatus ? 'learning-domain' : ''}`);
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `${domain.name} domain details`);
      card.dataset.domainKey = key;

      if (activeDomainKey === key) card.classList.add("active");

      const head = el("div", "domain-node-head");
      const titleWrap = el("div", "domain-node-title-wrap");
      const icon = el("div", "domain-node-icon", domainIconSVGs[domain.icon] || domainIconSVGs.code);
      const title = el("h3", "domain-node-title", domain.name);
      titleWrap.append(icon, title);

      const badge = el("span", `domain-badge ${domain.learningStatus ? 'learning' : ''}`, domain.badge);
      head.append(titleWrap, badge);

      const summary = el("p", "domain-node-summary", domain.summary);

      const chipsWrap = el("div", "domain-tech-chips");
      if (Array.isArray(domain.technologies)) {
        domain.technologies.slice(0, 5).forEach(function (t) {
          chipsWrap.appendChild(el("span", "tech-node-chip", `${t.name} (${t.state})`));
        });
        if (domain.technologies.length > 5) {
          chipsWrap.appendChild(el("span", "tech-node-chip", `+${domain.technologies.length - 5} more`));
        }
      }

      const footer = el("div", "domain-connection-footer");
      footer.innerHTML = `<span>Inspect Branch Details</span><span>→</span>`;

      card.append(head, summary, chipsWrap, footer);

      card.addEventListener("click", () => selectBlueprintDomain(key));
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          selectBlueprintDomain(key);
        }
      });

      domainsGrid.appendChild(card);
    });

    renderInspector();
  }

  function selectBlueprintDomain(domainKey) {
    activeDomainKey = domainKey;

    const tabs = document.querySelectorAll(".domain-tab");
    tabs.forEach(function (tab) {
      const match = tab.dataset.domain === domainKey;
      tab.classList.toggle("active", match);
      tab.setAttribute("aria-selected", String(match));
    });

    const cards = document.querySelectorAll(".domain-node-card");
    cards.forEach(function (card) {
      if (domainKey === "all" || card.dataset.domainKey === domainKey) {
        card.classList.toggle("active", domainKey !== "all");
      } else {
        card.classList.remove("active");
      }
    });

    renderInspector();
  }

  function renderInspector() {
    const inspector = document.getElementById("blueprint-inspector");
    if (!inspector) return;

    const bp = data.blueprint;
    if (!bp || !bp.domains) return;

    if (activeDomainKey === "all") {
      inspector.innerHTML = `
        <div class="inspector-header">
          <div>
            <h4 class="inspector-title">Full Engineering Topology Overview</h4>
            <p class="inspector-sub">Select any branch above to inspect authentic technologies, verified relationship pipelines, and connected projects.</p>
          </div>
          <button class="btn btn-sm btn-primary" id="btn-explore-featured" type="button">View Proof of Work ↓</button>
        </div>
        <div class="inspector-body-grid">
          <div class="inspector-block">
            <span class="inspector-block-title">4 CORE TECHNICAL DOMAINS</span>
            <div class="flow-diagram-container">
              <div class="flow-step-item">
                <span class="flow-node-badge">DEVELOPMENT</span>
                <span class="flow-rel-badge"><span class="flow-arrow-icon">→</span> HTML5, CSS3, JavaScript → Personal Developer Portfolio</span>
              </div>
              <div class="flow-step-item">
                <span class="flow-node-badge">CYBERSECURITY</span>
                <span class="flow-rel-badge"><span class="flow-arrow-icon">→</span> Linux, Wireshark, Nmap → Networks &amp; Systems Lab</span>
              </div>
              <div class="flow-step-item">
                <span class="flow-node-badge">CLOUD / DEVOPS</span>
                <span class="flow-rel-badge"><span class="flow-arrow-icon">→</span> AWS, Terraform, Docker, K3s → TwinCore Platform</span>
              </div>
              <div class="flow-step-item">
                <span class="flow-node-badge">MACHINE LEARNING</span>
                <span class="flow-rel-badge"><span class="flow-arrow-icon">→</span> Python, scikit-learn, Trees → ML Experiments</span>
              </div>
            </div>
          </div>
          <div class="inspector-block">
            <span class="inspector-block-title">AUTHENTIC ARCHITECTURE PRINCIPLE</span>
            <p style="font-size: 14px; color: var(--text-secondary); line-height: 1.65;">
              Every domain in this blueprint traces verified hands-on work from foundational primitives to running deployments. Rather than treating libraries as black boxes, the blueprint captures how systems are constructed from the ground up.
            </p>
          </div>
        </div>
      `;

      const expBtn = document.getElementById("btn-explore-featured");
      if (expBtn) {
        expBtn.addEventListener("click", function () {
          const pSec = document.getElementById("proof");
          if (pSec) pSec.scrollIntoView({ behavior: "smooth" });
        });
      }
      return;
    }

    const domain = bp.domains[activeDomainKey];
    if (!domain) return;

    inspector.innerHTML = "";

    const header = el("div", "inspector-header");
    const titleCol = el("div");
    const title = el("h4", "inspector-title", `<span>${domain.name} Branch</span> <span class="domain-badge ${domain.learningStatus ? 'learning' : ''}">${domain.badge}</span>`);
    const sub = el("p", "inspector-sub", domain.summary);
    titleCol.append(title, sub);
    header.appendChild(titleCol);

    const grid = el("div", "inspector-body-grid");

    // Tech Block
    const techBlock = el("div", "inspector-block");
    techBlock.appendChild(el("span", "inspector-block-title", `VERIFIED TECHNOLOGIES (${domain.technologies.length})`));
    const techList = el("div", "inspector-tech-list");

    domain.technologies.forEach(function (tech) {
      const card = el("div", "tech-detail-card");
      const head = el("div", "tech-detail-head");
      head.appendChild(el("strong", "tech-detail-name", tech.name));
      head.appendChild(el("span", `state-badge state-${tech.state.toLowerCase()}`, tech.state));
      card.append(head, el("p", "tech-detail-role", tech.role));
      techList.appendChild(card);
    });
    techBlock.appendChild(techList);

    // Flow & Connected Projects Block
    const flowBlock = el("div", "inspector-block");
    flowBlock.appendChild(el("span", "inspector-block-title", "VERIFIED RELATIONSHIP FLOW"));

    const flowContainer = el("div", "flow-diagram-container");
    if (Array.isArray(domain.connections)) {
      domain.connections.forEach(function (conn) {
        const item = el("div", "flow-step-item");
        item.innerHTML = `
          <span class="flow-node-badge">${conn.from}</span>
          <span class="flow-rel-badge"><span class="flow-arrow-icon">→</span> ${conn.relation}</span>
          <span class="flow-node-badge" style="color: var(--accent); margin-left: auto;">${conn.to}</span>
        `;
        flowContainer.appendChild(item);
      });
    }
    flowBlock.appendChild(flowContainer);

    if (Array.isArray(domain.projectIds) && domain.projectIds.length > 0) {
      flowBlock.appendChild(el("span", "inspector-block-title", "CONNECTED IMPLEMENTATION"));
      domain.projectIds.forEach(function (projId) {
        const targetProj = (data.projects || []).find(p => p.id === projId);
        if (targetProj) {
          const projCard = el("div", "inspector-project-link-card");
          const info = el("div");
          info.appendChild(el("div", "project-link-name", targetProj.title || targetProj.name));
          info.appendChild(el("div", "project-link-sub", targetProj.description));

          const actionsWrap = el("div", "project-link-actions");
          const explainAction = el("button", "btn btn-sm btn-explain", 'Explain Project →');
          explainAction.type = "button";
          explainAction.addEventListener("click", () => openProjectModal(targetProj, explainAction, "explain"));

          const hoodAction = el("button", "btn btn-sm btn-hood", 'Under the Hood ⚡');
          hoodAction.type = "button";
          hoodAction.addEventListener("click", () => openProjectModal(targetProj, hoodAction, "hood"));

          actionsWrap.append(explainAction, hoodAction);
          projCard.append(info, actionsWrap);
          flowBlock.appendChild(projCard);
        }
      });
    }

    grid.append(techBlock, flowBlock);
    inspector.append(header, grid);
  }

  function initTraceMyStack() {
    const traceBtn = document.getElementById("btn-trace-toggle");
    const tracePathsBar = document.getElementById("trace-paths-bar");
    const tracePresets = document.getElementById("trace-presets");
    const traceView = document.getElementById("blueprint-trace-view");
    const resetBtn = document.getElementById("btn-reset-blueprint");

    if (!traceBtn || !tracePathsBar || !tracePresets || !traceView) return;

    const bp = data.blueprint;
    if (!bp || !Array.isArray(bp.stackTraces)) return;

    tracePresets.innerHTML = "";
    bp.stackTraces.forEach(function (trace, idx) {
      const pill = el("button", `trace-pill ${idx === 0 ? 'active' : ''}`, trace.name);
      pill.type = "button";
      pill.dataset.traceId = trace.id;
      pill.addEventListener("click", () => selectTracePath(trace.id));
      tracePresets.appendChild(pill);
    });

    activeTraceId = bp.stackTraces[0].id;

    function toggleTraceMode(forceState) {
      isTraceMode = forceState !== undefined ? forceState : !isTraceMode;
      traceBtn.classList.toggle("active", isTraceMode);
      traceBtn.setAttribute("aria-expanded", String(isTraceMode));
      tracePathsBar.hidden = !isTraceMode;
      traceView.hidden = !isTraceMode;

      if (isTraceMode) {
        renderActiveTrace();
        traceView.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }

    traceBtn.addEventListener("click", () => toggleTraceMode());

    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        selectBlueprintDomain("all");
        toggleTraceMode(false);
      });
    }

    const domainTabs = document.querySelectorAll(".domain-tab");
    domainTabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        selectBlueprintDomain(tab.dataset.domain);
      });
    });
  }

  function selectTracePath(traceId) {
    activeTraceId = traceId;
    const pills = document.querySelectorAll(".trace-pill");
    pills.forEach(pill => pill.classList.toggle("active", pill.dataset.traceId === traceId));
    renderActiveTrace();
  }

  function renderActiveTrace() {
    const traceView = document.getElementById("blueprint-trace-view");
    if (!traceView) return;

    const bp = data.blueprint;
    if (!bp || !Array.isArray(bp.stackTraces)) return;

    const trace = bp.stackTraces.find(t => t.id === activeTraceId) || bp.stackTraces[0];
    if (!trace) return;

    traceView.innerHTML = "";

    const head = el("div", "trace-view-head");
    head.appendChild(el("h4", "trace-view-title", `Stack Trace: ${trace.name}`));
    head.appendChild(el("p", "trace-view-summary", trace.summary));
    traceView.appendChild(head);

    const stepperList = el("div", "trace-stepper-list");
    if (Array.isArray(trace.steps)) {
      trace.steps.forEach(function (step, index) {
        const isLast = index === trace.steps.length - 1;
        const card = el("div", `trace-step-node-card ${isLast ? 'final-step' : ''}`);
        card.append(
          el("span", "trace-step-seq", `STEP 0${index + 1}`),
          el("strong", "trace-step-name", step.node),
          el("span", "trace-step-role", step.role),
          el("p", "trace-step-note", step.note)
        );
        stepperList.appendChild(card);
      });
    }
    traceView.appendChild(stepperList);
  }

  /* ---------------------------------------------------------
     9. WHY I BUILD, FOCUS, DEV LOG, WHAT I WORK WITH, JOURNEY
     --------------------------------------------------------- */
  function renderWhyIBuild() {
    const quoteNode = document.getElementById("why-build-quote");
    const detailNode = document.getElementById("why-build-detail");
    const w = data.whyIBuild || {};
    if (quoteNode && w.quote) quoteNode.textContent = `"${w.quote.replace(/^"|"$/g, '')}"`;
    if (detailNode && w.detail) detailNode.textContent = w.detail;
  }

  function renderCurrentlyBuilding() {
    const grid = document.getElementById("currently-building-grid");
    if (!grid || !Array.isArray(data.currentlyBuilding)) return;
    grid.innerHTML = "";

    data.currentlyBuilding.forEach(function (track) {
      const card = el("div", "track-card reveal-item");
      const head = el("div", "track-head");
      const numWrap = el("div", "track-num-wrap");
      numWrap.append(el("span", "track-num", track.track), el("h3", "track-area", track.area));
      head.append(numWrap, el("span", "track-year-badge", track.year));
      card.append(head, el("p", "track-summary", track.summary), el("p", "track-detail", track.detail));
      grid.appendChild(card);
    });
  }

  function renderDevLog() {
    const list = document.getElementById("devlog-list");
    if (!list || !Array.isArray(data.activity)) return;
    list.innerHTML = "";

    data.activity.forEach(function (item) {
      const card = el("div", "devlog-item reveal-item");
      const avatar = el("div", "devlog-avatar", "VN");
      const body = el("div", "devlog-body");
      const head = el("div", "devlog-head");
      head.append(
        el("strong", "devlog-name", "Vedh Naik"),
        el("span", "devlog-handle", "@vedhdev"),
        el("span", "devlog-date", item.date)
      );

      const content = el("p", "devlog-content", item.content);
      const tags = el("div", "devlog-tags");
      if (Array.isArray(item.tags)) {
        item.tags.forEach(t => tags.appendChild(el("span", null, `#${t}`)));
      }

      body.append(head, content, tags);
      card.append(avatar, body);
      list.appendChild(card);
    });
  }

  function renderTechBreadth() {
    const grid = document.getElementById("tech-breadth-grid");
    if (!grid || !Array.isArray(data.whatIWorkWith)) return;
    grid.innerHTML = "";

    data.whatIWorkWith.forEach(function (cat) {
      const card = el("div", "tech-category-card reveal-item");
      const label = el("div", "tech-category-label", cat.category);
      const itemsWrap = el("div", "tech-category-items");
      if (Array.isArray(cat.items)) {
        cat.items.forEach(item => itemsWrap.appendChild(el("span", "tech-item-chip", item)));
      }
      card.append(label, itemsWrap);
      grid.appendChild(card);
    });
  }

  function renderJourney() {
    const list = document.getElementById("journey-list");
    if (!list || !Array.isArray(data.journey)) return;
    list.innerHTML = "";

    data.journey.forEach(function (item) {
      const card = el("div", "journey-item reveal-item");
      card.append(
        el("div", "journey-year", item.year),
        el("div", "journey-title", item.title),
        el("div", "journey-place", item.place),
        el("div", "journey-detail", item.detail)
      );
      list.appendChild(card);
    });
  }

  function renderHowIBuild() {
    const seq = document.getElementById("how-build-sequence");
    const stmt = document.getElementById("how-build-statement");
    const h = data.howIBuild || {};

    if (seq && Array.isArray(h.steps)) {
      seq.innerHTML = "";
      h.steps.forEach(function (step) {
        const card = el("div", "how-step-card reveal-item");
        card.append(
          el("span", "how-step-num", step.num),
          el("strong", "how-step-name", step.name),
          el("p", "how-step-desc", step.desc)
        );
        seq.appendChild(card);
      });
    }

    if (stmt && h.statement) {
      stmt.textContent = `"${h.statement.replace(/^"|"$/g, '')}"`;
    }
  }

  /* ---------------------------------------------------------
     10. RETRO-OS INTERACTIVE TERMINAL EASTER EGG
     --------------------------------------------------------- */
  function initTerminalEasterEgg() {
    const modal = document.getElementById("terminal-modal");
    const output = document.getElementById("terminal-output");
    const input = document.getElementById("terminal-input");
    const form = document.getElementById("terminal-form");
    const closeBtn = document.getElementById("terminal-close-btn");
    const navBtn = document.getElementById("terminal-toggle");
    const floatBtn = document.getElementById("terminal-float-btn");
    const mobileBtn = document.getElementById("mobile-terminal-btn");

    if (!modal || !output || !input || !form) return;

    let history = [];
    let historyIndex = -1;
    let hasBooted = false;

    const availableCommands = [
      "help", "about", "neofetch", "specs", "proof", "projects", "blueprint", "stack",
      "tracks", "focus", "devlog", "skills", "journey", "theme",
      "whoami", "contact", "clear", "exit", "matrix", "sudo", "quote", "uname"
    ];

    function printLine(text, cssClass) {
      const line = el("div", `terminal-line ${cssClass || ''}`, text);
      output.appendChild(line);
      const body = document.getElementById("terminal-body");
      if (body) body.scrollTop = body.scrollHeight;
    }

    function runBootSequence(callback) {
      output.innerHTML = "";
      input.disabled = true;

      const bootLines = [
        { text: "[INIT] Initializing VEDH-OS shell v2.6.4 (x86_64-apple-darwin)...", class: "term-boot" },
        { text: "[LOAD] Mounting core modules: proof, blueprint, stack, telemetry...", class: "term-muted" },
        { text: "[NET] Establishing loopback socket 127.0.0.1:8080 (TLS 1.3)...", class: "term-muted" },
        { text: "[OK] Core environment loaded. Ready.", class: "term-success" },
        { text: "Type 'help' to see available commands or 'projects' to inspect code.", class: "term-highlight" }
      ];

      let i = 0;
      function next() {
        if (i < bootLines.length) {
          printLine(bootLines[i].text, bootLines[i].class);
          i++;
          setTimeout(next, 120);
        } else {
          input.disabled = false;
          input.focus();
          hasBooted = true;
          if (callback) callback();
        }
      }
      next();
    }

    function openTerminal() {
      modal.hidden = false;
      document.body.style.overflow = "hidden";

      if (!hasBooted) {
        runBootSequence();
      } else {
        input.focus();
      }
    }

    function closeTerminal() {
      modal.hidden = true;
      document.body.style.overflow = "";
    }

    // Toggle triggers
    if (navBtn) navBtn.addEventListener("click", openTerminal);
    if (floatBtn) floatBtn.addEventListener("click", openTerminal);
    if (mobileBtn) mobileBtn.addEventListener("click", openTerminal);
    if (closeBtn) closeBtn.addEventListener("click", closeTerminal);

    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeTerminal();
    });

    // Keyboard Shortcuts: ` or ~ or Ctrl+` or Alt+T
    document.addEventListener("keydown", function (e) {
      if (e.key === "~" || e.key === "`" || (e.ctrlKey && e.key === "`") || (e.altKey && e.key.toLowerCase() === "t")) {
        // Prevent typing backtick into regular textareas if terminal is closed
        if (modal.hidden && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
          e.preventDefault();
          openTerminal();
        }
      } else if (e.key === "Escape" && !modal.hidden) {
        closeTerminal();
      }
    });

    // Form Submit (Command Evaluation)
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const rawCmd = input.value.trim();
      if (!rawCmd) return;

      history.push(rawCmd);
      historyIndex = history.length;
      printLine(`vedh@portfolio:~$ ${rawCmd}`, "term-cmd-echo");
      input.value = "";

      executeCommand(rawCmd.toLowerCase());
    });

    // Up/Down History & Tab Completion
    input.addEventListener("keydown", function (e) {
      if (e.key === "ArrowUp") {
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
        const current = input.value.toLowerCase().trim();
        if (current) {
          const match = availableCommands.find(c => c.startsWith(current));
          if (match) input.value = match;
        }
      }
    });

    function executeCommand(cmd) {
      const parts = cmd.split(" ");
      const root = parts[0];
      const arg = parts[1];

      switch (root) {
        case "help":
          printLine("Available commands:", "term-highlight");
          printLine("  about         - Background, profile & academic pursuit");
          printLine("  neofetch      - System specs, toolchain & architecture summary");
          printLine("  projects      - List authentic personal projects & coursework");
          printLine("  proof [id]    - Open deep-dive modal for a project (e.g. proof twincore)");
          printLine("  blueprint     - View interactive 4-domain technical architecture");
          printLine("  stack         - View categorized languages, systems & tools");
          printLine("  tracks        - 2026 active development tracks (Currently Building)");
          printLine("  devlog        - Chronological technical journal stream");
          printLine("  journey       - Academic journey & milestone timeline");
          printLine("  theme [mode]  - Switch theme ('theme dark', 'theme light', or 'theme')");
          printLine("  whoami        - CS candidate identity & system credentials");
          printLine("  contact       - Direct contact email & verified profiles");
          printLine("  clear         - Clear terminal display buffer");
          printLine("  exit          - Close interactive shell");
          break;

        case "neofetch":
        case "specs":
          printLine("       /\\        vedh@portfolio-v2", "term-highlight");
          printLine("      /  \\       -----------------", "term-muted");
          printLine("     / /\\ \\      OS      : VEDH-OS v2.6.4 x86_64", "term-success");
          printLine("    / /__\\ \\     Host    : ITM CSE / Poly Foundation", "term-primary");
          printLine("   / /____\\ \\    Kernel  : Linux 6.8.0-generic / POSIX", "term-muted");
          printLine("  /_/      \\_\\   Uptime  : 2022 - 2026 (Active)", "term-muted");
          printLine("                 Shell   : bash 5.2.26", "term-muted");
          printLine("                 Stack   : AWS, Terraform, Docker, Python, JS ES6+", "term-highlight");
          printLine("                 Terminal: CRT Phosphor VT100", "term-muted");
          printLine("                 Theme   : Obsidian Zinc [dark] / Studio Paper [light]", "term-muted");
          break;

        case "uname":
          printLine("Linux vedh-workstation 6.8.0-40-generic #40-Ubuntu SMP x86_64 GNU/Linux", "term-success");
          break;

        case "journey":
          printLine("Academic Journey & Progression:", "term-highlight");
          (data.journey || []).forEach(j => {
            printLine(`  [${j.year}] ${j.title} @ ${j.place} (${j.detail})`);
          });
          break;

        case "about":
          printLine(`Name: ${data.profile.fullName || data.profile.name}`, "term-highlight");
          printLine(`Focus: ${data.profile.title}`);
          printLine(`Location: ${data.profile.location}`);
          printLine(`Bio: ${data.profile.about}`);
          break;

        case "projects":
        case "proof":
          if (arg) {
            const match = (data.projects || []).find(p => p.id.toLowerCase() === arg.toLowerCase());
            if (match) {
              printLine(`Opening architecture modal for ${match.title || match.name}...`, "term-success");
              openProjectModal(match, null, "explain");
              closeTerminal();
            } else {
              printLine(`Project '${arg}' not found. Valid IDs: twincore, facilityops, ml-experiments, networks-lab, vedh-portfolio`, "term-warn");
            }
          } else {
            printLine("Verified Projects & Case Studies:", "term-highlight");
            (data.projects || []).forEach(p => {
              printLine(`  [${p.id}] ${p.title} (${p.category}) - ${p.status}`);
            });
            printLine("Tip: Type 'proof <id>' (e.g. 'proof twincore') to open its deep-dive modal.", "term-muted");
          }
          break;

        case "blueprint":
        case "stack":
          printLine("Engineering Blueprint Domains:", "term-highlight");
          printLine("  1. Cloud / DevOps    : AWS (EC2, VPC, RDS), Terraform HCL, Docker, K3s, Jenkins");
          printLine("  2. Development       : JavaScript ES6+, HTML5/CSS3, Python FastAPI, C++, React");
          printLine("  3. Cybersecurity     : Linux/WSL, TCP/IP, Sockets, Nmap, Wireshark");
          printLine("  4. Machine Learning  : Python, NumPy, Pandas, scikit-learn, Decision Trees");
          break;

        case "tracks":
        case "focus":
          printLine("2026 Technical Progression Focus:", "term-highlight");
          (data.currentlyBuilding || []).forEach(t => {
            printLine(`  Track ${t.track}: ${t.area} (${t.year}) - ${t.summary}`);
          });
          break;

        case "devlog":
          printLine("Recent Dev Log Entries:", "term-highlight");
          (data.activity || []).forEach(a => {
            printLine(`  * [${a.date}] ${a.content}`);
          });
          break;

        case "skills":
          printLine("What I Work With:", "term-highlight");
          (data.whatIWorkWith || []).forEach(w => {
            printLine(`  ${w.category}: ${w.items.join(", ")}`);
          });
          break;

        case "theme":
          const current = document.documentElement.getAttribute("data-theme") || "dark";
          let target = arg;
          if (!target) target = current === "dark" ? "light" : "dark";
          if (target === "dark" || target === "light") {
            if (window.setSiteTheme) window.setSiteTheme(target);
            localStorage.setItem("vedh_theme", target);
            printLine(`Theme switched to '${target}' mode.`, "term-success");
          } else {
            printLine("Usage: theme [dark | light]", "term-warn");
          }
          break;

        case "whoami":
          printLine("vedh@kernel-v2.6: Computer Science Student & Hands-on Developer", "term-highlight");
          printLine("Clearance: Intern Candidate / Lvl-1 Systems Builder");
          printLine("Core Motto: 'Understand how things work beneath the surface.'");
          break;

        case "contact":
          printLine(`Email   : ${data.profile.email}`, "term-highlight");
          printLine(`GitHub  : ${data.profile.links.github}`);
          printLine(`LinkedIn: ${data.profile.links.linkedin}`);
          break;

        case "clear":
          output.innerHTML = "";
          break;

        case "exit":
          printLine("Terminating session...", "term-muted");
          setTimeout(closeTerminal, 250);
          break;

        case "quote":
        case "quote.txt":
          printLine(`"${data.whyIBuild.quote}"`, "term-highlight");
          break;

        case "matrix":
          printLine("Wake up, Neo... Follow the green prompt.", "term-success");
          break;

        case "sudo":
          printLine("User 'vedh' is not in the sudoers file. This incident will be reported.", "term-error");
          break;

        default:
          printLine(`Command not recognized: '${root}'. Type 'help' for available commands.`, "term-error");
          break;
      }
    }
  }

  /* ---------------------------------------------------------
     11. SCROLL REVEAL OBSERVER
     --------------------------------------------------------- */
  function initScrollReveals() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal-item").forEach(el => el.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: "0px 0px -40px 0px",
      threshold: 0.05
    });

    document.querySelectorAll(".reveal-item").forEach(el => observer.observe(el));
  }

  /* ---------------------------------------------------------
     12. INITIALIZATION & LIFECYCLE
     --------------------------------------------------------- */
  function init() {
    initTheme();
    initScrollTracking();
    initNavigation();
    initModal();

    renderProfile();
    renderProofOfWork("all");
    initProofFilters();
    renderBlueprint();
    initBlueprintParticles();
    initTraceMyStack();
    renderWhyIBuild();
    renderCurrentlyBuilding();
    renderDevLog();
    renderTechBreadth();
    renderJourney();
    renderHowIBuild();
    initTerminalEasterEgg();
    initScrollReveals();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
