/**
 * Vedh Jayesh Naik — Personal Developer Portfolio
 * Vanilla JavaScript (ES6+) for theme toggling, mobile navigation, and year auto-sync.
 * Zero external libraries, zero bloat, high performance.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileNav();
  initYear();
  initActiveNav();
});

/**
 * Theme Management: System preference support with manual override in localStorage
 */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  const metaColorScheme = document.querySelector('meta[name="color-scheme"]');

  function getActiveTheme() {
    return document.documentElement.getAttribute('data-theme') || 'dark';
  }

  function setTheme(newTheme, persist = true) {
    document.documentElement.setAttribute('data-theme', newTheme);
    if (metaColorScheme) {
      metaColorScheme.content = newTheme;
    }
    if (persist) {
      try {
        localStorage.setItem('theme', newTheme);
      } catch (e) {}
    }
    themeToggle.setAttribute('aria-label', 'Switch to ' + (newTheme === 'dark' ? 'light' : 'dark') + ' theme');
  }

  themeToggle.addEventListener('click', () => {
    const current = getActiveTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next, true);
  });

  // Listen to OS scheme changes if user hasn't set an explicit override
  try {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
      const stored = localStorage.getItem('theme');
      if (!stored) {
        setTheme(e.matches ? 'dark' : 'light', false);
      }
    });
  } catch (e) {}
}

/**
 * Mobile Navigation Drawer Toggle with accessibility & keyboard handling
 */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  if (!toggleBtn || !drawer) return;

  function openMenu() {
    toggleBtn.setAttribute('aria-expanded', 'true');
    toggleBtn.setAttribute('aria-label', 'Close navigation menu');
    drawer.removeAttribute('hidden');
  }

  function closeMenu() {
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.setAttribute('aria-label', 'Open navigation menu');
    drawer.setAttribute('hidden', '');
  }

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close when clicking any nav link inside mobile drawer
  const links = drawer.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close drawer on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggleBtn.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggleBtn.focus();
    }
  });
}

/**
 * Auto-sync current year in footer
 */
function initYear() {
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/**
 * Active navigation highlight using IntersectionObserver
 */
function initActiveNav() {
  const sections = document.querySelectorAll('main > section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -70% 0px'
  });

  sections.forEach(section => observer.observe(section));
}
