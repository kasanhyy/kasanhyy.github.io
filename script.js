const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      navLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${visible.target.id}`;
        link.toggleAttribute("aria-current", active);
      });
    },
    { rootMargin: "-20% 0px -65%", threshold: [0, 0.2, 0.6] },
  );

  sections.forEach((section) => observer.observe(section));
}
