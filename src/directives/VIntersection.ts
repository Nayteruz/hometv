import type { Directive } from 'vue';

interface IntersectionDirectiveValue {
  getMoreFilms: () => void;
  options?: IntersectionObserverInit;
}

type IntersectionDirective = Directive<HTMLElement, IntersectionDirectiveValue>;

const intersection: IntersectionDirective = {
  mounted(el, bindings) {
    const { getMoreFilms } = bindings.value;

    const observerOptions = {
      rootMargin: '0px',
      threshold: 1.0,
    };
    const callback: IntersectionObserverCallback = (entries) => {
      const firstEntry = entries[0];
      if (firstEntry?.isIntersecting) {
        getMoreFilms();
      }
    };
    const observer = new IntersectionObserver(callback, observerOptions);
    observer.observe(el);
  },
};

export default intersection;
