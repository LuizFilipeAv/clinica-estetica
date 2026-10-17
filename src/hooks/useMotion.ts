import { useEffect } from 'react';

export function useMotion() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let stop = () => {};
    const configure = () => {
      stop();
      if (preference.matches) {
        document.querySelectorAll('[data-reveal]').forEach((node) => node.classList.add('is-visible'));
        document.documentElement.style.setProperty('--hero-drift', '0px');
        return;
      }
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      document.querySelectorAll('[data-reveal]').forEach((node) => observer.observe(node));
      let frame = 0;
      const update = () => {
        if (frame) return;
        frame = requestAnimationFrame(() => {
          document.documentElement.style.setProperty('--hero-drift', `${Math.min(window.scrollY, 900) * 0.1}px`);
          frame = 0;
        });
      };
      window.addEventListener('scroll', update, { passive: true });
      update();
      stop = () => {
        observer.disconnect();
        window.removeEventListener('scroll', update);
        cancelAnimationFrame(frame);
      };
    };
    configure();
    preference.addEventListener('change', configure);
    return () => { stop(); preference.removeEventListener('change', configure); };
  }, []);
}
