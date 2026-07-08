document.addEventListener('DOMContentLoaded', function () {
  var header = document.getElementById('site-header');
  var toggle = document.getElementById('menu-toggle');
  var menu = document.getElementById('mobile-menu');
  var close = document.getElementById('menu-close');
  var form = document.getElementById('contact-form');

  if (menu && menu.parentElement !== document.body) {
    document.body.appendChild(menu);
  }

  if (window.lucide) window.lucide.createIcons();

  function setScrolled() {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 20);
  }
  setScrolled();
  window.addEventListener('scroll', setScrolled, { passive: true });

  function openMenu() {
    if (!menu || !toggle) return;
    menu.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (!menu || !toggle) return;
    menu.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (toggle) toggle.addEventListener('click', openMenu);
  if (close) close.addEventListener('click', closeMenu);
  if (menu) {
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeMenu();
  });

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (event) {
      var target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var data = new FormData(form);
      var subject = data.get('topic') || 'Richiesta dal sito Artik Lab';
      var lines = [
        'Nome e ruolo: ' + (data.get('name') || ''),
        'Email: ' + (data.get('email') || ''),
        'Tema: ' + (data.get('topic') || ''),
        '',
        data.get('message') || ''
      ];
      window.location.href = 'mailto:dtr@ar-tik.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));
    });
  }

  var atlasCards = Array.prototype.slice.call(document.querySelectorAll('[data-atlas-card]'));
  var areaFilter = document.querySelector('[data-atlas-area-filter]');
  var atlasSearch = document.querySelector('[data-atlas-search]');
  var areaLinks = Array.prototype.slice.call(document.querySelectorAll('[data-atlas-area-link]'));
  var atlasEmpty = document.querySelector('[data-atlas-empty]');

  function filterAtlas() {
    if (!atlasCards.length) return;
    var area = areaFilter ? areaFilter.value : '';
    var query = atlasSearch ? atlasSearch.value.trim().toLowerCase() : '';
    var visibleCount = 0;
    atlasCards.forEach(function (card) {
      var matchesArea = !area || card.getAttribute('data-area') === area;
      var text = card.getAttribute('data-search') || '';
      var matchesQuery = !query || text.indexOf(query) !== -1;
      var isVisible = matchesArea && matchesQuery;
      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });
    if (atlasEmpty) atlasEmpty.hidden = visibleCount > 0;
  }

  if (areaFilter) {
    areaFilter.addEventListener('change', filterAtlas);
    areaFilter.addEventListener('input', filterAtlas);
  }
  if (atlasSearch) atlasSearch.addEventListener('input', filterAtlas);
  areaLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (!areaFilter) return;
      areaFilter.value = link.getAttribute('data-atlas-area-link') || '';
      filterAtlas();
    });
  });

  function gridColumnCount(grid) {
    var columns = window.getComputedStyle(grid).gridTemplateColumns;
    if (!columns || columns === 'none') return 1;
    return columns.split(' ').filter(Boolean).length || 1;
  }

  function detailForItem(item) {
    return item.matches('details') ? item : item.querySelector('details');
  }

  function visibleGridItems(items) {
    return items.filter(function (item) {
      return !item.hidden && item.offsetParent !== null;
    });
  }

  function syncDetailRow(grid, items, changedDetail, isOpen) {
    var columns = gridColumnCount(grid);
    if (columns < 2) return;
    var owner = changedDetail.matches('.use-case-card') ? changedDetail : changedDetail.closest('.faq-card');
    if (!owner) return;
    var visibleItems = visibleGridItems(items);
    var index = visibleItems.indexOf(owner);
    if (index < 0) return;
    var rowStart = Math.floor(index / columns) * columns;
    visibleItems.slice(rowStart, rowStart + columns).forEach(function (item) {
      var details = detailForItem(item);
      if (details && details.open !== isOpen) details.open = isOpen;
    });
  }

  function setupPairedDetailGrid(gridSelector, itemSelector) {
    document.querySelectorAll(gridSelector).forEach(function (grid) {
      var items = Array.prototype.slice.call(grid.querySelectorAll(itemSelector));
      var syncing = false;

      function sync(details, isOpen) {
        if (syncing) return;
        syncing = true;
        syncDetailRow(grid, items, details, isOpen);
        syncing = false;
      }

      items.forEach(function (item) {
        var details = detailForItem(item);
        if (!details) return;
        details.addEventListener('toggle', function () {
          sync(details, details.open);
        });
      });

      requestAnimationFrame(function () {
        items.forEach(function (item) {
          var details = detailForItem(item);
          if (details && details.open) sync(details, true);
        });
      });

      window.addEventListener('resize', function () {
        items.forEach(function (item) {
          var details = detailForItem(item);
          if (details && details.open) sync(details, true);
        });
      });
    });
  }

  setupPairedDetailGrid('.use-case-grid', '.use-case-card');

  var faqCards = Array.prototype.slice.call(document.querySelectorAll('[data-faq-card]'));
  var faqCategoryFilter = document.querySelector('[data-faq-category-filter]');
  var faqSearch = document.querySelector('[data-faq-search]');
  var faqCategoryLinks = Array.prototype.slice.call(document.querySelectorAll('[data-faq-category-link]'));
  var faqEmpty = document.querySelector('[data-faq-empty]');

  function filterFaq() {
    if (!faqCards.length) return;
    var category = faqCategoryFilter ? faqCategoryFilter.value : '';
    var query = faqSearch ? faqSearch.value.trim().toLowerCase() : '';
    var visibleCount = 0;
    faqCards.forEach(function (card) {
      var matchesCategory = !category || card.getAttribute('data-category') === category;
      var text = card.getAttribute('data-search') || '';
      var matchesQuery = !query || text.indexOf(query) !== -1;
      var isVisible = matchesCategory && matchesQuery;
      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });
    if (faqEmpty) faqEmpty.hidden = visibleCount > 0;
    faqCards.forEach(function (card) {
      var details = detailForItem(card);
      if (details && details.open) syncDetailRow(card.parentElement, faqCards, details, true);
    });
  }

  if (faqCategoryFilter) {
    faqCategoryFilter.addEventListener('change', filterFaq);
    faqCategoryFilter.addEventListener('input', filterFaq);
  }
  if (faqSearch) faqSearch.addEventListener('input', filterFaq);
  faqCategoryLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (!faqCategoryFilter) return;
      faqCategoryFilter.value = link.getAttribute('data-faq-category-link') || '';
      filterFaq();
    });
  });
  setupPairedDetailGrid('.faq-repertoire-grid', '.faq-card');

  document.querySelectorAll('[data-value-calculator]').forEach(function (calc) {
    var locale = calc.getAttribute('data-locale') || 'it-IT';
    var currency = calc.getAttribute('data-currency') || 'EUR';
    var weeks = parseFloat(calc.getAttribute('data-weeks')) || 45;
    var costOut = calc.querySelector('[data-calc-cost]');
    var saveOut = calc.querySelector('[data-calc-save]');
    var fields = Array.prototype.slice.call(calc.querySelectorAll('input, select'));
    var formatter;
    try {
      formatter = new Intl.NumberFormat(locale, { style: 'currency', currency: currency, maximumFractionDigits: 0, useGrouping: 'always' });
    } catch (error) {
      formatter = new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0, useGrouping: 'always' });
    }

    function value(name) {
      var field = calc.querySelector('[name="' + name + '"]');
      var parsed = field ? parseFloat(field.value) : 0;
      return isNaN(parsed) || parsed < 0 ? 0 : parsed;
    }

    function update() {
      var annualCost = value('people') * value('hours') * weeks * value('rate');
      var recoverable = annualCost * value('share');
      if (costOut) costOut.textContent = formatter.format(Math.round(annualCost));
      if (saveOut) saveOut.textContent = formatter.format(Math.round(recoverable));
    }

    fields.forEach(function (field) {
      field.addEventListener('input', update);
      field.addEventListener('change', update);
    });
    update();
  });
});
