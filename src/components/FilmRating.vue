<template>
  <span class="rating" v-if="isRating"
    ><IconStar class="star" />{{ filmRating }}</span
  >
</template>

<script setup>
import { defineProps, computed } from "vue";
import IconStar from "@/components/icons/IconStar.vue";

const props = defineProps({
  filmInfo: Object,
  isRating: {
    type: Boolean,
    default: true,
  },
});

const filmRating = computed(() => {
  const rating =
    props.filmInfo?.rating ||
    props.filmInfo?.ratingKinopoisk ||
    props.filmInfo?.ratingImdb;

  if (typeof rating === "number") {
    return rating.toFixed(1);
  }

  return "∞";
});
</script>

<style lang="scss" scoped>
.rating {
  position: absolute;
  right: 5px;
  top: 5px;
  z-index: 10;
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
