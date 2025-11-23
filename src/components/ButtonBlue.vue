<template>
  <button
    :style="svgSize"
    :type="props.type"
    :class="['button', props.class, { border: props.border }]"
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
  });

  const svgSize = computed(() => ({
    '--svg-size': `${props.size}px`,
  }));
</script>

<style lang="scss" scoped>
  @use 'sass:color';

  .button {
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 0 8px 0;
    height: 32px;
    color: #333;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    line-height: 1;
    background: #80b0d9;
    border-radius: 5px;
    border: none;
    cursor: pointer;

    &.border {
      border: 2px #3a6891 solid;

      &:hover {
        background-color: color.adjust(#80b0d9, $lightness: -10%);
      }
    }

    :deep(svg) {
      width: var(--svg-size);
      height: var(--svg-size);
      color: #1e396c;
    }

    &:hover {
      :deep(svg) {
        color: #071f3a;
      }
    }
  }
</style>
