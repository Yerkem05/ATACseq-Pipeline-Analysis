(function () {
  'use strict';

  var bar = document.querySelector('.scroll-progress-bar');
  if (bar) {
    window.addEventListener('scroll', function () {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      bar.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + '%';
    });
  }

  var tocLinks = Array.from(document.querySelectorAll('.toc-list a[href^="#"]'));
  if (!tocLinks.length) return;

  var sectionIds = tocLinks.map(function (a) { return a.getAttribute('href').slice(1); });
  var sections = sectionIds.map(function (id) { return document.getElementById(id); }).filter(Boolean);

  function updateToc() {
    var scrollY = window.scrollY + 120;
    var current = '';

    for (var i = 0; i < sections.length; i++) {
      if (sections[i].offsetTop <= scrollY) {
        current = sections[i].id;
      }
    }

    tocLinks.forEach(function (link) {
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('toc-active');
      } else {
        link.classList.remove('toc-active');
      }
    });
  }

  window.addEventListener('scroll', updateToc);
  updateToc();

  document.querySelectorAll('.code-cell .copy-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var code = btn.closest('.code-cell').querySelector('code');
      if (!code) return;
      var text = code.textContent;
      navigator.clipboard.writeText(text).then(function () {
        btn.classList.add('copied');
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
        setTimeout(function () {
          btn.classList.remove('copied');
          btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
        }, 1500);
      });
    });
  });
})();
