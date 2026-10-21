/* ===== CONFIGURATION: replace these with your real profile links ===== */
const LINKS = {
  linkedin: "https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME",
  github: "https://github.com/YOUR-GITHUB-USERNAME"
};

// Apply the links. Placeholder links are disabled so nobody lands on a broken page.
[["linkedin", "linkedin"], ["github", "github"]].forEach(([id, key]) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (LINKS[key].includes("YOUR-")) {
    el.removeAttribute("href");
    el.setAttribute("aria-disabled", "true");
    el.title = "Add your profile link in script.js";
    el.style.opacity = ".5";
    el.style.cursor = "not-allowed";
  } else {
    el.href = LINKS[key];
  }
});

// Mobile menu
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
burger.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  menu.classList.remove("open");
  burger.setAttribute("aria-expanded", "false");
}));

// Reveal on scroll (shows everything at once if motion is reduced or unsupported)
const items = document.querySelectorAll(".reveal");
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reduce || !("IntersectionObserver" in window)) {
  items.forEach(el => el.classList.add("show"));
} else {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  items.forEach(el => io.observe(el));
}
