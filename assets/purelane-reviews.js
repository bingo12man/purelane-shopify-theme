(() => {
  const initializeReviews = (section) => {
    if (!section || section.dataset.reviewsInitialized === 'true') {
      return;
    }

    const rail = section.querySelector('[data-review-rail]');
    const previous = section.querySelector('[data-review-prev]');
    const next = section.querySelector('[data-review-next]');

    if (!rail) return;

    section.dataset.reviewsInitialized = 'true';

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const autoScroll =
      section.dataset.autoScroll === 'true' && !reduceMotion;

    const interval =
      (Number(section.dataset.scrollSpeed) || 4) * 1000;

    let timer = null;

    const getScrollAmount = () => {
      const firstCard = rail.querySelector(
        '.purelane-reviews__item'
      );

      if (!firstCard) {
        return rail.clientWidth * 0.8;
      }

      const styles = window.getComputedStyle(rail);
      const gap = Number.parseFloat(styles.columnGap) || 14;

      return firstCard.offsetWidth + gap;
    };

    const move = (direction) => {
      const amount = getScrollAmount();

      rail.scrollBy({
        left: amount * direction,
        behavior: reduceMotion ? 'auto' : 'smooth'
      });
    };

    previous?.addEventListener('click', () => {
      stop();
      move(-1);
      start();
    });

    next?.addEventListener('click', () => {
      stop();
      move(1);
      start();
    });

    const stop = () => {
      if (!timer) return;

      clearInterval(timer);
      timer = null;
    };

    const start = () => {
      if (!autoScroll || timer) return;

      timer = setInterval(() => {
        const maxScroll =
          rail.scrollWidth - rail.clientWidth;

        if (rail.scrollLeft >= maxScroll - 20) {
          rail.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
        } else {
          move(1);
        }
      }, interval);
    };

    rail.addEventListener('mouseenter', stop);
    rail.addEventListener('mouseleave', start);

    rail.addEventListener('focusin', stop);
    rail.addEventListener('focusout', start);

    document.addEventListener(
      'visibilitychange',
      () => {
        if (document.hidden) {
          stop();
        } else {
          start();
        }
      }
    );

    start();
  };

  const initializeAll = () => {
    document
      .querySelectorAll('[data-purelane-reviews]')
      .forEach(initializeReviews);
  };

  if (document.readyState === 'loading') {
    document.addEventListener(
      'DOMContentLoaded',
      initializeAll
    );
  } else {
    initializeAll();
  }

  document.addEventListener(
    'shopify:section:load',
    (event) => {
      const section =
        event.target.querySelector?.(
          '[data-purelane-reviews]'
        ) ||
        (
          event.target.matches?.(
            '[data-purelane-reviews]'
          )
            ? event.target
            : null
        );

      initializeReviews(section);
    }
  );
})();