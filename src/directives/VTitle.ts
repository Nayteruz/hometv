import type { Directive } from 'vue';

type TitleDirectiveValue = string | undefined;

const updatePageTitle = (title: string) => {
  document.title = title;
};

const vTitle: Directive<HTMLElement, TitleDirectiveValue> = {
  mounted(el: HTMLElement, binding) {
    updatePageTitle(binding.value || el.innerText);
  },

  beforeUpdate(el: HTMLElement, binding) {
    updatePageTitle(binding.value || el.innerText);
  },

  updated(el: HTMLElement, binding) {
    updatePageTitle(binding.value || el.innerText);
  },
};

export default vTitle;
