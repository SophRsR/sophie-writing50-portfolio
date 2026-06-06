/**
 * Writing 50 ePortfolio — Navigation & UI
 * Sophie Ren | Dr. Margaret Speer | Spring 2026
 */
(function() {
  'use strict';

  /* ---- Hamburger nav toggle ---- */
  var toggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function() {
      var isOpen = navLinks.classList.toggle('open');
      toggle.classList.toggle('open');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close nav when clicking a link (mobile)
    navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.classList.remove('open');
        toggle.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Close nav when clicking outside
    document.addEventListener('click', function(e) {
      if (!navLinks.classList.contains('open')) return;
      if (!navLinks.contains(e.target) && !toggle.contains(e.target)) {
        navLinks.classList.remove('open');
        toggle.classList.remove('open');
        document.body.style.overflow = '';
      }
    });

    // Close on Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        toggle.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  /* ---- Scroll reveal: fade up into view (NYT style) ---- */
  (function() {
    var reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    var observer = new IntersectionObserver(function(entries, obs) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px'
    });

    reveals.forEach(function(el) {
      observer.observe(el);
    });
  })();

  /* ---- Active nav link highlighting ---- */
  (function() {
    var currentPath = window.location.pathname;
    var links = document.querySelectorAll('.nav-links a');

    links.forEach(function(link) {
      var href = link.getAttribute('href');
      if (!href) return;

      // Archives section: archives/* pages match the Archives link
      if (href.includes('archives/index.html') &&
          currentPath.includes('/archives/')) {
        link.classList.add('active');
      }
      // Assignments section: assignments/* and imitation-project/* pages
      else if (href.includes('assignments/index.html') &&
          (currentPath.includes('/assignments/') ||
           currentPath.includes('/imitation-project/'))) {
        link.classList.add('active');
      }
      // Exact match for other pages
      else if (currentPath.endsWith(href) || currentPath.endsWith(href.replace('./', ''))) {
        link.classList.add('active');
      }
    });
  })();

})();
