(function () {
  const navToggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  const dropdowns = document.querySelectorAll('[data-dropdown]');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  dropdowns.forEach((drop) => {
    const trigger = drop.querySelector('[data-dropdown-trigger]');
    if (!trigger) return;
    trigger.addEventListener('click', (e) => {
      if (window.matchMedia('(max-width: 960px)').matches) {
        e.preventDefault();
        const opened = drop.classList.toggle('open');
        trigger.setAttribute('aria-expanded', String(opened));
      }
    });
  });

  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('[data-animate]').forEach((el, index) => {
    el.style.animationDelay = `${index * 70}ms`;
    observer.observe(el);
  });
})();
