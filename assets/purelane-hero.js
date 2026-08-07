document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-purelane-hero]').forEach((hero) => {
    const slides = [...hero.querySelectorAll('[data-hero-slide]')];
    const dots = [...hero.querySelectorAll('[data-hero-dot]')];

    if (slides.length === 0) return;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let current = 0;
    let timer = null;

    const speed =
      Number(hero.dataset.rotationSpeed) || 4000;

    const showSlide = (index) => {
      current = (index + slides.length) % slides.length;

      slides.forEach((slide, slideIndex) => {
        const active = slideIndex === current;

        slide.classList.toggle('is-active', active);
        slide.setAttribute(
          'aria-hidden',
          active ? 'false' : 'true'
        );
      });

      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle(
          'is-active',
          dotIndex === current
        );
      });
    };

    const stop = () => {
      if (!timer) return;

      clearInterval(timer);
      timer = null;
    };

    const start = () => {
      if (reducedMotion || timer) return;

      timer = setInterval(() => {
        showSlide(current + 1);
      }, speed);
    };

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        stop();
        showSlide(index);
        start();
      });
    });

    hero.addEventListener('mouseenter', stop);
    hero.addEventListener('mouseleave', start);

    hero.addEventListener('focusin', stop);
    hero.addEventListener('focusout', start);

    showSlide(0);
    start();
  });
});