// Minimal site-wide JS.
// 1) Highlights the current nav link using aria-current="page".
// No tracking, no external deps.

(function () {
  const path = window.location.pathname.replace(/\/+$/, "") + "/"; // normalize trailing slash
  const navLinks = document.querySelectorAll(".nav a[href]");

  navLinks.forEach(a => {
    const href = a.getAttribute("href");
    if (!href) return;

    // Normalize href the same way
    const normalized = href.replace(/\/+$/, "") + "/";

    // Mark current page
    if (normalized === path) {
      a.setAttribute("aria-current", "page");
    }
  });
})();
