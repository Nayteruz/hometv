<template>
  <div
    class="skeleton-card"
    :style="{ width: props.width, height: props.height }"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="props.width"
      :height="props.height"
    ></svg>
  </div>
</template>

<script setup lang="ts">
  const props = withDefaults(
    defineProps<{ width?: number | string; height?: number | string }>(),
    {
      width: 360,
      height: 540,
    },
  );
</script>

<style scoped lang="scss">
  .skeleton-card {
    font-size: 0;
    line-height: 0;
    overflow: hidden;
    border-radius: 10px;
    svg {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .skeleton-card {
    background: rgba(#fff, 0.1);
    background: linear-gradient(
      110deg,
      rgba(#fff, 0.04) 8%,
      rgba(#fff, 0.15) 18%,
      rgba(#fff, 0.04) 33%
    );
    background-size: 400% 600%;
    animation: 2s shine linear infinite;
  }

  @keyframes shine {
    to {
      background-position-x: -250%;
    }
  }
</style>
