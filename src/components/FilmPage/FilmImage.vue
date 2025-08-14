<template>
  <div class="image">
    <FavoriteBtn class="favorite" :filmId="filmId" />
    <img
      v-if="filmInfo?.posterUrl"
      :src="filmInfo?.posterUrl"
      alt="filmTitle"
    />
    <FilmRating :filmInfo="props.filmInfo" />
  </div>
</template>

<script setup>
  import { defineProps, computed } from 'vue';
  import FavoriteBtn from '../FavoriteBtn.vue';
  import FilmRating from '../FilmRating.vue';

  const props = defineProps({
    filmInfo: Object,
  });

  const filmInfo = computed(() => props.filmInfo);
  const filmId = computed(
    () => props.filmInfo?.kinopoiskId ?? props.filmInfo?.filmId
  );
</script>

<style lang="scss" scoped>
  .image {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    min-width: 0;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      min-height: 170px;
      max-height: 500px;
      border-radius: 10px;
      border: 2px solid #5077bf;
      @media all and (max-width: 768px) {
        height: auto;
        max-height: 100%;
      }
    }
  }

  .favorite {
    position: absolute;
    left: 10px;
    top: 10px;
    z-index: 10;
    width: 30px;
    height: 30px;
  }
</style>
