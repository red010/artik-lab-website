/* ==========================================
   Artik Lab — Main JavaScript
   Menu, scroll, animations, language detection
   ========================================== */

/* --- Language Auto-Detection --- */
(function() {
  // Only redirect from the root page (Italian default)
  var path = window.location.pathname;
  if (path !== '/' && path !== '/index.html') return;

  // Don't redirect if user has manually chosen a language
  // (set when clicking any language link on the site)
  if (localStorage.getItem('artik_lang_manual')) return;

  var supportedLangs = {
    'en': '/en/',
    'es': '/es/',
    'fr': '/fr/',
    'pt': '/pt-br/'
  };

  var browserLangs = navigator.languages || [navigator.language || navigator.userLanguage];
  for (var i = 0; i < browserLangs.length; i++) {
    var primary = browserLangs[i].toLowerCase().split('-')[0];
    if (primary === 'it') return; // Italian → stay here
    if (supportedLangs[primary]) {
      window.location.replace(supportedLangs[primary]);
      return;
    }
  }

  // No supported language found → default to English
  window.location.replace('/en/');
})();

/* --- Mark manual language choice --- */
document.addEventListener('click', function(e) {
  var link = e.target.closest('a[href="/"], a[href="/en/"], a[href="/es/"], a[href="/fr/"], a[href="/pt-br/"]');
  if (link) localStorage.setItem('artik_lang_manual', '1');
});

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initStickyHeader();
  initSmoothScroll();
  initScrollAnimations();
});

/* --- Mobile Menu --- */
function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const close = document.getElementById('menu-close');
  const links = menu.querySelectorAll('.mobile-nav-link');

  function openMenu() {
    menu.classList.remove('hidden');
    requestAnimationFrame(() => menu.classList.add('open'));
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    setTimeout(() => menu.classList.add('hidden'), 300);
  }

  toggle.addEventListener('click', openMenu);
  close.addEventListener('click', closeMenu);
  links.forEach(link => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.classList.contains('hidden')) {
      closeMenu();
    }
  });
}

/* --- Sticky Header --- */
function initStickyHeader() {
  const header = document.getElementById('site-header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  }, { passive: true });
}

/* --- Smooth Scroll --- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* --- Scroll Animations --- */
function initScrollAnimations() {
  // Add fade-up class to animatable elements
  const selectors = [
    '.stat-card',
    '.pillar-card',
  ];

  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      el.classList.add('fade-up');
    });
  });

  const fadeEls = document.querySelectorAll('.fade-up');
  if (!fadeEls.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -20px 0px',
    });

    fadeEls.forEach(el => observer.observe(el));
  } else {
    fadeEls.forEach(el => el.classList.add('visible'));
  }
}
