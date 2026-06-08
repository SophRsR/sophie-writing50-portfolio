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

    // Close nav when clicking a link (mobile) — skip dropdown toggles
    navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function(e) {
        if (link.parentElement.classList.contains('nav-dropdown') && window.innerWidth <= 768) {
          return; // Let the dropdown toggle handle this
        }
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

  /* ---- Build dropdown/popout menus for Archives & Assignments ---- */
  (function() {
    var navLinks = document.querySelectorAll('.nav-links > li > a');
    navLinks.forEach(function(link) {
      var text = link.textContent.trim();
      var parentHref = link.getAttribute('href');
      if (!parentHref) return;

      var items = null;

      if (text === 'Archives') {
        var base = parentHref.replace(/index\.html$/, '');
        items = [
          { label: 'Analyzing Technology', href: base + 'analyzing-technology.html' },
          { label: 'Understanding Genre', href: base + 'understanding-genre.html' }
        ];
      } else if (text === 'Assignments') {
        var base = parentHref.replace(/index\.html$/, '');
        var crossPrefix = parentHref.match(/^\.\.\//) ? '../' : (parentHref === 'index.html' ? '../' : '');
        items = [
          { label: 'Genre Analysis', href: base + 'genre-analysis.html' },
          { label: 'Imitation Project', href: 'https://sophrsr.github.io/linda-chen-diary/', external: true },
          { label: 'Craft Essay', href: crossPrefix + 'imitation-project/craft-essay.html' }
        ];
      }

      if (items) {
        var li = link.parentElement;
        li.classList.add('nav-dropdown');

        var dropdown = document.createElement('div');
        dropdown.className = 'nav-dropdown-content';

        items.forEach(function(item) {
          var a = document.createElement('a');
          a.textContent = item.label;
          a.href = item.href;
          if (item.external) {
            a.target = '_blank';
            a.rel = 'noopener';
          }
          dropdown.appendChild(a);
        });

        li.appendChild(dropdown);

        // Click toggle for mobile (touch devices)
        link.addEventListener('click', function(e) {
          if (window.innerWidth <= 768) {
            e.preventDefault();
            li.classList.toggle('open');
          }
        });
      }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        var dropdowns = document.querySelectorAll('.nav-dropdown');
        dropdowns.forEach(function(dd) {
          if (!dd.contains(e.target)) {
            dd.classList.remove('open');
          }
        });
      }
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
