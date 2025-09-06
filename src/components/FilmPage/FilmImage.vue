<template>
  <div class="image">
    <div class="icon-actions">
      <FavoriteActionButton class="favorite" :filmId="filmId" />
      <WatchActionButton class="watch" :filmId="filmId" />
      <FilmRating :filmInfo="props.filmInfo" class="rating" />
    </div>
    <img
      v-if="filmInfo?.posterUrl"
      :src="filmInfo?.posterUrl"
      alt="filmTitle"
    />
  </div>
</template>

<script setup>
  import { defineProps, computed } from 'vue';
  import FavoriteActionButton from '../FavoriteActionButton.vue';
  import FilmRating from '../FilmRating.vue';
  import WatchActionButton from '../WatchActionButton.vue';

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

  .icon-actions {
    position: absolute;
    left: 5px;
    right: 5px;
    top: 5px;
    z-index: 10;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .favorite {
    width: 30px;
    height: 30px;
    margin-right: auto;
  }

  .watch {
    width: 32px;
    height: 32px;
    color: #ccc;
  }
</style>
