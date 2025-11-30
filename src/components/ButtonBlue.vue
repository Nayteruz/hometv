<template>
  <button
    :style="svgSize"
    :type="props.type"
    :class="[
      'button',
      props.class,
      { border: props.border, isOpen: props.isOpen },
    ]"
  >
    <slot></slot>
  </button>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    type: {
      type: String,
      default: 'button',
    },
    class: {
      type: String,
      default: '',
    },
    size: {
      type: Number,
      default: 16,
    },
    border: {
      type: Boolean,
      default: false,
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
  });

  const svgSize = computed(() => ({
    '--svg-size': `${props.size}px`,
  }));
</script>

<style lang="scss" scoped>
  @use 'sass:color';
  @use '@/variables' as *;

  .button {
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 0 8px 0;
    height: 32px;
    color: var(--color-gray);
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    line-height: 1;
    background: var(--color-main);
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;

    &.border {
      border: 2px var(--color-border) solid;

      &:hover {
        background-color: color-mix(in srgb, var(--color-main) 90%, black);
      }
    }

    :deep(svg) {
      transition: all 0.3s ease;
      width: var(--svg-size);
      height: var(--svg-size);
      color: var(--color-svg);
    }

    &:hover,
    &.isOpen {
      transition: all 0.3s ease;
      color: var(--color-svg-hover);
      :deep(svg) {
        color: var(--color-svg-hover);
      }
    }

    &:disabled {
      pointer-events: none;
      opacity: 0.8;
    }
  }
</style>
