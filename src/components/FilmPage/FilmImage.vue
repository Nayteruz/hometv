<template>
  <div class="image">
    <div class="icon-actions">
      <FavoriteActionButton class="favorite" :id="filmInfo?.id" />
      <WatchActionButton class="watch" :id="filmInfo?.id || 0" />
      <FilmRating :rating="filmInfo?.rating || 0" class="rating" />
    </div>
    <img v-if="filmInfo?.image" :src="filmInfo?.image" alt="filmTitle" />
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import FavoriteActionButton from '../FavoriteActionButton.vue';
  import FilmRating from '../FilmRating.vue';
  import WatchActionButton from '../WatchActionButton.vue';
  import type { IFilmEntity } from '@/types';

  interface IFIlmImageProps {
    filmInfo: IFilmEntity | undefined;
  }

  const props = defineProps<IFIlmImageProps>();

  const filmInfo = computed(() => props.filmInfo);
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
