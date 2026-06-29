(function () {
  var workUrl = 'index.html#work';
  var homeUrl = 'index.html#home';
  var toolsUrl = 'index.html#resources';
  var isTool = /(^|\/)tool-[^/]+\.html$/i.test(window.location.pathname);
  var topDestination = isTool ? toolsUrl : workUrl;
  var topLabel = isTool ? 'See other tools' : 'Work samples';

  document.querySelectorAll('a.back-btn, a.home, a.back, nav a[href*="index.html"]').forEach(function (link) {
    if (link.closest('.sample-footer-nav')) return;
    if (/back|home/i.test(link.textContent) || link.classList.contains('back-btn')) {
      link.href = topDestination;
      link.setAttribute('aria-label', topLabel);
      link.innerHTML = '&lsaquo;&nbsp; ' + topLabel;
      if (isTool && !link.parentElement.querySelector('.tool-home-link')) {
        var homeLink = document.createElement('a');
        homeLink.className = 'tool-home-link';
        homeLink.href = homeUrl;
        homeLink.textContent = 'Home';
        homeLink.setAttribute('aria-label', 'Go to home page');
        link.insertAdjacentElement('afterend', homeLink);
      }
    }
  });

  if (document.querySelector('.sample-footer-nav')) return;

  var footer = document.createElement('nav');
  footer.className = 'sample-footer-nav';
  footer.setAttribute('aria-label', 'Page navigation');
  footer.innerHTML = isTool
    ? '<a class="sample-footer-primary" href="' + toolsUrl + '">&larr; See other tools</a>' +
      '<a class="sample-footer-secondary" href="' + homeUrl + '">Home page</a>'
    : '<a class="sample-footer-primary" href="' + workUrl + '">&larr; Back to work samples</a>' +
      '<a class="sample-footer-secondary" href="' + homeUrl + '">Back to home page</a>';
  document.body.appendChild(footer);

  var style = document.createElement('style');
  style.textContent =
    '.sample-footer-nav{max-width:760px;margin:2.5rem auto 1.5rem;padding:1.5rem;display:flex;justify-content:center;gap:.8rem;flex-wrap:wrap;border-top:1px solid #e7e9ed;font-family:Inter,Arial,sans-serif}' +
    '.sample-footer-nav a{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:.75rem 1.2rem;border-radius:999px;font-size:.88rem;font-weight:700;text-decoration:none;transition:transform .2s,box-shadow .2s,background .2s}' +
    '.sample-footer-primary{background:#171719;color:#fff;box-shadow:0 8px 22px rgba(7,16,20,.12)}' +
    '.sample-footer-secondary{background:#f3f4f5;color:#171719;border:1px solid #dfe2e7}' +
    '.sample-footer-nav a:hover{transform:translateY(-2px);box-shadow:0 10px 24px rgba(7,16,20,.14)}' +
    '.sample-footer-nav a:focus-visible{outline:3px solid rgba(66,133,244,.35);outline-offset:3px}' +
    '.tool-home-link{display:inline-flex;align-items:center;margin-left:.85rem;padding:.35rem .7rem;border-radius:999px;background:#f3f4f5;border:1px solid #e1e5ea;color:#171719!important;text-decoration:none!important;font:700 .78rem Inter,Arial,sans-serif}' +
    '.tool-home-link:hover{background:#e9f6f5}';
  document.head.appendChild(style);
})();
