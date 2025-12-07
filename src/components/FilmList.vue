<template>
  <div :class="['films__wrap', { loading: loading }]">
    <ul class="films__list" v-if="props.items.length">
      <FilmItem
        v-for="(film, index) in props.items"
        :itemFilm="film"
        :key="film.id"
        :currentIndex="index"
        :isRating="props.isRating"
      />
      <PreloadCards v-if="props.showPreload" />
    </ul>
    <h2 v-else class="not-found">Ничего не найдено</h2>
  </div>
</template>

<script setup lang="ts">
  import { useFilmStore } from '@/stores/filmStore.ts';
  import FilmItem from '@/components/FilmPage/FilmItem.vue';
  import PreloadCards from '@/components/PreloadCards.vue';
  import { inject, ref, onMounted, onBeforeUnmount } from 'vue';
  import type { IFilmEntity } from '@/types';

  interface IFilmListProps {
    showPreload: boolean;
    items: IFilmEntity[];
    isRating: boolean;
  }

  const props = withDefaults(defineProps<IFilmListProps>(), {
    showPreload: false,
    items: () => [],
    isRating: true,
  });

  const filmStore = useFilmStore();
  const emitter = inject('emitter');
  const loading = ref(false);

  emitter.on('isLoading', (emit: boolean) => {
    loading.value = emit;
  });

  onMounted(() => {
    filmStore.hasFilmList = true;
  });

  onBeforeUnmount(() => {
    filmStore.hasFilmList = false;
  });
</script>

<style scoped lang="scss">
  .films__wrap {
    position: relative;

    &.loading {
      &:before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(#000, 0.5);
        z-index: 3;
        border-radius: 10px;
      }

      &:after {
        content: '';
        display: block;
        position: fixed;
        left: 50%;
        top: 50%;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 12px solid #5497e9;
        border-top-color: transparent;
        z-index: 4;
        animation: 0.5s rorateRound linear infinite;
      }
    }
  }

  .films__list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;

    @media all and (max-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media all and (max-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 4px;
    }
    @media all and (max-width: 480px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .not-found {
    margin: 0 15px;
    color: #fff;
    font-size: 25px;
  }

  @keyframes rorateRound {
    0% {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
