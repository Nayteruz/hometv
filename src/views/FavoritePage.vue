<template>
  <h1>{{ pagesTitle.FAVORITE }}</h1>
  <FilmList :items="filmStore.favorites" :showPreload="showPreload" />
  <h3 v-if="filmStore.favorites.length === 0">Список пуст</h3>
</template>

<script setup>
  import { ref, watch } from 'vue';
  import { useFilmStore } from '@/stores/filmStore';
  import { pagesTitle } from '@/components/const';
  import FilmList from '@/components/FilmList.vue';

  const filmStore = useFilmStore();
  const showPreload = ref(false);

  watch(
    () => filmStore.favorites,
    () => {
      filmStore.films = filmStore.favorites;
    }
  );
</script>

<style scoped lang="scss">
  h3 {
    color: #fff;
    margin-bottom: 20px;
  }
</style>
