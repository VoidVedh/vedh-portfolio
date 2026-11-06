/**
 * script.js
 * --------------------------------------------------------------------------
 * Editorial Portfolio Engine — Vedh Jayesh Naik
 * - View Transitions API Integration
 * - Web Audio API Interactive Sound Player ("Current song on repeat")
 * - Project Filter & Dynamic Rendering
 * - Theme Switcher & Accessibility Focus Management
 * --------------------------------------------------------------------------
 */

(function () {
  'use strict';

  // State
  const currentProfileId = 'vedh';
  let currentFilter = 'all';
  let isPlayingAudio = false;
  let audioCtx = null;
  let masterGain = null;
  let audioTimer = null;
  let currentStep = 0;

  // DOM Elements Cache
  const themeToggleBtn = document.getElementById('theme-toggle');
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const navLinksList = document.getElementById('nav-links');
  const brandNameEl = document.getElementById('brand-name');
  const brandMonogramEl = document.getElementById('brand-monogram');
  const heroTaglineEl = document.getElementById('hero-tagline');
  const introContainerEl = document.getElementById('intro-paragraphs');
  const portraitImgEl = document.getElementById('portrait-img');
  const portraitNameEl = document.getElementById('portrait-name');
  const portraitLocationEl = document.getElementById('portrait-location');
  const statusBadgeEl = document.getElementById('status-badge-text');
  const socialLinksRowEl = document.getElementById('social-links-row');
  const quotesGridEl = document.getElementById('quotes-grid');
  const projectsGridEl = document.getElementById('projects-grid');
  const resumeDownloadBtn = document.getElementById('resume-download-btn');
  const experienceTimelineEl = document.getElementById('experience-timeline');
  const educationGridEl = document.getElementById('education-grid');
  const mediaGridEl = document.getElementById('media-grid');
  const contactLeadEl = document.getElementById('contact-lead');
  const contactEmailDisplay = document.getElementById('contact-email-display');
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const contactForm = document.getElementById('contact-form');
  const contactFormStatus = document.getElementById('form-status');
  const toastNotice = document.getElementById('toast-notice');

  // Music Widget Elements
  const songTitleEl = document.getElementById('song-title');
  const songArtistEl = document.getElementById('song-artist');
  const spotifyLinkEl = document.getElementById('spotify-link');
  const playPauseBtn = document.getElementById('play-pause-btn');
  const playIcon = document.getElementById('play-icon');
  const pauseIcon = document.getElementById('pause-icon');
  const vinylRecord = document.getElementById('vinyl-record');
  const equalizerWave = document.getElementById('equalizer-wave');

  // =========================================================================
  // Theme Management
  // =========================================================================
  function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    applyTheme(initialTheme);

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
      });
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const themeIcon = document.getElementById('theme-toggle-icon');
    if (themeIcon) {
      themeIcon.innerHTML = theme === 'dark'
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    }
  }

  // =========================================================================
  // Profile Rendering (Vedh only — no switching)
  // =========================================================================
  function setProfile(profileId, skipTransition = false) {
    if (!PORTFOLIO_PROFILES[profileId]) return;

    if (!document.startViewTransition || skipTransition) {
      applyProfileData(profileId);
      return;
    }

    const transition = document.startViewTransition(() => {
      applyProfileData(profileId);
    });

    transition.finished.finally(() => {
      document.getElementById('main-content')?.focus();
    });
  }

  function applyProfileData(profileId) {
    const profile = PORTFOLIO_PROFILES[profileId];

    // Update Brand & Monogram
    if (brandNameEl) brandNameEl.textContent = profile.name;
    if (brandMonogramEl) brandMonogramEl.textContent = profile.initials;
    document.title = `${profile.name} — Personal Portfolio`;

    // Hero Tagline
    if (heroTaglineEl) heroTaglineEl.textContent = profile.tagline;

    // Intro Paragraphs
    if (introContainerEl) {
      introContainerEl.innerHTML = profile.intro.paragraphs
        .map(p => `<p class="intro-paragraph">${p}</p>`)
        .join('');
    }

    // Portrait & Meta
    if (portraitImgEl) {
      portraitImgEl.src = profile.avatar;
      portraitImgEl.alt = `${profile.name} portrait`;
      portraitImgEl.onerror = () => {
        portraitImgEl.src = profile.avatarFallback;
      };
    }
    if (portraitNameEl) portraitNameEl.textContent = profile.name;
    if (portraitLocationEl) {
      portraitLocationEl.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        <span>${profile.location}</span>
      `;
    }
    if (statusBadgeEl) statusBadgeEl.textContent = profile.statusBadge;

    // Socials
    if (socialLinksRowEl) {
      socialLinksRowEl.innerHTML = profile.socials
        .map(soc => `
          <a href="${soc.url}" class="social-link-btn" target="_blank" rel="noopener noreferrer" aria-label="${soc.name}">
            <span>${soc.name}</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </a>
        `).join('');
    }

    // Quotes
    if (quotesGridEl) {
      quotesGridEl.innerHTML = profile.quotes.map(q => `
        <div class="quote-card">
          <div class="quote-mark">“</div>
          <p class="quote-text">${q.text}</p>
          <div class="quote-author">${q.author}</div>
        </div>
      `).join('');
    }

    // Projects
    renderProjects(profile.projects, currentFilter);

    // Resume
    if (resumeDownloadBtn) {
      resumeDownloadBtn.href = profile.resumeUrl;
      resumeDownloadBtn.textContent = profile.id === 'vedh' ? 'Download Full Resume (PDF)' : 'View Full Curriculum Vitae';
      if (profile.id === 'vedh') {
        resumeDownloadBtn.setAttribute('download', 'Vedh_Naik_Resume.pdf');
      } else {
        resumeDownloadBtn.removeAttribute('download');
      }
    }

    // Technical Skills (rendered in the left resume column)
    if (experienceTimelineEl) {
      experienceTimelineEl.innerHTML = profile.skills.map(group => `
        <article class="timeline-item">
          <div class="timeline-header">
            <h3 class="timeline-role">${group.title}</h3>
          </div>
          <div class="project-tech-row" style="margin-top: 0.5rem;">
            ${group.items.map(item => `<span class="tech-tag">${item}</span>`).join('')}
          </div>
        </article>
      `).join('');
    }

    if (educationGridEl) {
      educationGridEl.innerHTML = profile.education.map(edu => `
        <div class="education-card">
          <h3 class="edu-degree">${edu.degree}</h3>
          <div class="edu-school">${edu.institution}</div>
          <div class="edu-period">${edu.period}</div>
          <p class="edu-notes">${edu.notes}</p>
        </div>
      `).join('');
    }

    // Currently Learning
    if (mediaGridEl) {
      mediaGridEl.innerHTML = profile.learning.map(item => `
        <article class="media-card">
          <div class="media-meta-row">
            <span class="media-tag">${item.tag}</span>
          </div>
          <h3 class="media-title">${item.title}</h3>
          <p class="media-summary">${item.summary}</p>
        </article>
      `).join('');
    }

    // Contact
    if (contactLeadEl) {
      contactLeadEl.textContent = "Hiring for an internship, working on something interesting, or want to talk about a project? Reach out directly.";
    }
    if (contactEmailDisplay) contactEmailDisplay.textContent = profile.email;

    // Music Player Info
    updateSongDisplay(profile.song);
    // If playing, adjust melody for new profile
    if (isPlayingAudio) {
      stopAudioSynthesizer();
      startAudioSynthesizer();
    }
  }

  // =========================================================================
  // Projects Filtering & Rendering
  // =========================================================================
  function renderProjects(projects, filter) {
    if (!projectsGridEl) return;

    const filtered = filter === 'all'
      ? projects
      : projects.filter(p => p.category === filter);

    projectsGridEl.innerHTML = filtered.map(p => `
      <article class="project-card">
        <div>
          <div class="project-card-header">
            <span class="project-role-badge">${p.role}</span>
            <span class="project-badge">${p.badge}</span>
          </div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.description}</p>
          <ul class="project-highlights">
            ${p.highlights.map(h => `<li>${h}</li>`).join('')}
          </ul>
        </div>
        <div>
          <div class="project-tech-row">
            ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
          <div class="project-footer">
            ${p.links.map(l => `
              <a href="${l.url}" class="project-action-link" target="_blank" rel="noopener noreferrer">
                <span>${l.label}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
              </a>
            `).join('')}
          </div>
        </div>
      </article>
    `).join('');
  }

  // =========================================================================
  // Web Audio Synthesizer ("Current song on repeat" Interactive Audio Player)
  // Zero external MP3 dependencies; plays pleasant ambient/acoustic melodies
  // =========================================================================
  function updateSongDisplay(song) {
    if (songTitleEl) songTitleEl.textContent = song.title;
    if (songArtistEl) songArtistEl.textContent = `— ${song.artist}`;
    if (spotifyLinkEl) spotifyLinkEl.href = song.spotifyUrl;
  }

  function toggleAudio() {
    if (isPlayingAudio) {
      stopAudioSynthesizer();
    } else {
      startAudioSynthesizer();
    }
  }

  function startAudioSynthesizer() {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!audioCtx) {
        audioCtx = new AudioContextClass();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      masterGain.connect(audioCtx.destination);

      isPlayingAudio = true;
      if (playIcon) playIcon.style.display = 'none';
      if (pauseIcon) pauseIcon.style.display = 'block';
      if (vinylRecord) vinylRecord.classList.add('playing');
      if (equalizerWave) equalizerWave.classList.add('active');

      const profile = PORTFOLIO_PROFILES[currentProfileId];
      const notes = profile.song.frequencyNotes || [220, 261.63, 329.63, 392];
      const stepInterval = (60 / profile.song.bpm) * 1000;

      currentStep = 0;
      playSynthNote(notes);
      audioTimer = setInterval(() => {
        currentStep = (currentStep + 1) % notes.length;
        playSynthNote(notes);
      }, stepInterval);
    } catch (e) {
      console.warn('Web Audio playback error:', e);
    }
  }

  function playSynthNote(notes) {
    if (!audioCtx || !isPlayingAudio) return;
    const freq = notes[currentStep];

    const osc = audioCtx.createOscillator();
    const noteGain = audioCtx.createGain();

    // Use warm sine wave for soothing lofi ambience
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    const now = audioCtx.currentTime;
    noteGain.gain.setValueAtTime(0.001, now);
    noteGain.gain.exponentialRampToValueAtTime(0.12, now + 0.08);
    noteGain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

    osc.connect(noteGain);
    noteGain.connect(masterGain);

    osc.start(now);
    osc.stop(now + 1.25);
  }

  function stopAudioSynthesizer() {
    isPlayingAudio = false;
    if (audioTimer) {
      clearInterval(audioTimer);
      audioTimer = null;
    }
    if (playIcon) playIcon.style.display = 'block';
    if (pauseIcon) pauseIcon.style.display = 'none';
    if (vinylRecord) vinylRecord.classList.remove('playing');
    if (equalizerWave) equalizerWave.classList.remove('active');
  }

  // =========================================================================
  // Contact Form & Toast Notification
  // =========================================================================
  function initContactForm() {
    if (copyEmailBtn) {
      copyEmailBtn.addEventListener('click', () => {
        const email = PORTFOLIO_PROFILES[currentProfileId].email;
        navigator.clipboard.writeText(email).then(() => {
          showToast(`Copied ${email} to clipboard!`);
        }).catch(() => {
          showToast(`Email: ${email}`);
        });
      });
    }

    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email-input').value;
        const message = document.getElementById('contact-message').value;

        if (contactFormStatus) {
          contactFormStatus.textContent = `Thank you, ${name}! Opening your email client to dispatch to ${PORTFOLIO_PROFILES[currentProfileId].email}...`;
          contactFormStatus.className = 'form-status success';
        }

        setTimeout(() => {
          const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
          const body = encodeURIComponent(`Hi ${PORTFOLIO_PROFILES[currentProfileId].shortName},\n\n${message}\n\nFrom: ${name} (${email})`);
          window.location.href = `mailto:${PORTFOLIO_PROFILES[currentProfileId].email}?subject=${subject}&body=${body}`;
        }, 800);
      });
    }
  }

  function showToast(msg) {
    if (!toastNotice) return;
    toastNotice.textContent = msg;
    toastNotice.classList.add('show');
    setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 3000);
  }

  // =========================================================================
  // Navigation & Scrollspy
  // =========================================================================
  function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
      let currentSection = '';
      const scrollPos = window.scrollY + 200;

      sections.forEach(section => {
        if (scrollPos >= section.offsetTop) {
          currentSection = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    }, { passive: true });

    if (mobileMenuToggle && navLinksList) {
      mobileMenuToggle.addEventListener('click', () => {
        const isOpen = navLinksList.classList.toggle('mobile-open');
        mobileMenuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });

      // Close mobile menu when link clicked
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          navLinksList.classList.remove('mobile-open');
          mobileMenuToggle.setAttribute('aria-expanded', 'false');
        });
      });
    }
  }

  // =========================================================================
  // Initialization
  // =========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();

    // Attach project filter chips
    const filterChips = document.querySelectorAll('[data-filter]');
    filterChips.forEach(chip => {
      chip.addEventListener('click', () => {
        filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        currentFilter = chip.getAttribute('data-filter');
        const profile = PORTFOLIO_PROFILES[currentProfileId];
        renderProjects(profile.projects, currentFilter);
      });
    });

    // Audio Play/Pause Button
    if (playPauseBtn) {
      playPauseBtn.addEventListener('click', toggleAudio);
    }

    initContactForm();
    initNavigation();

    // Load initial profile data
    setProfile(currentProfileId, true);
  });
})();
