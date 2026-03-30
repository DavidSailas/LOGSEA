// src/utils/scrollToSection.js
// Smooth scroll helper with header offset and easing
export const scrollToSection = (id, duration = 600) => {
  const element = document.getElementById(id);
  if (!element) return;

  const header = document.querySelector("header");
  const headerHeight = header ? header.offsetHeight : 0;

  const targetY = Math.round(
    element.getBoundingClientRect().top + window.scrollY - headerHeight
  );

  const startY = window.scrollY;
  const distance = targetY - startY;
  if (distance === 0) return;

  const startTime = performance.now();

  // easeInOutQuad
  const ease = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  const step = (now) => {
    const elapsed = now - startTime;
    const progress = Math.min(1, elapsed / duration);
    const eased = ease(progress);
    window.scrollTo(0, Math.round(startY + distance * eased));
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};