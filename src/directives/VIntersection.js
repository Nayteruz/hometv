export default {
  name: 'intersection',
  mounted(el, bindings) {
    const options = {
      rootMargin: '0px',
      threshold: 1.0,
    };
    const callback = (entries) => {
      if (entries[0].isIntersecting) {
        bindings.value.getMoreFilms();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(el);
  },
};
