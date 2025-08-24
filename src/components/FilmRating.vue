<template>
  <span class="rating" v-if="isRating"
    ><IconStar class="star" />{{ filmRating }}</span
  >
</template>

<script setup>
  import { defineProps, computed } from 'vue';
  import IconStar from '@/components/icons/IconStar.vue';
  import { getFilmRating } from './utils';

  const props = defineProps({
    filmInfo: Object,
    isRating: {
      type: Boolean,
      default: true,
    },
  });

  const filmRating = computed(() => getFilmRating(props.filmInfo));
</script>

<style lang="scss" scoped>
  .rating {
    background: #ffa800;
    border-radius: 5px;
    font-size: 13px;
    padding: 2px 4px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    color: #2c5e95;
    line-height: 0;
    user-select: none;

    @media all and (max-width: 768px) {
      font-size: 11px;
      top: 0;
      right: 0;
    }

    .star {
      width: 12px;
    }
  }
</style>
