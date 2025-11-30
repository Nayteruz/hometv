<template>
  <h1>{{ pagesTitle.WATCHING }}</h1>
  <FilmList :items="filmStore.watchingList" :showPreload="showPreload" />
  <h3 v-if="filmStore.watchingList.length === 0">Список пуст</h3>
</template>

<script setup>
  import { useFilmStore } from '@/stores/filmStore';
  import { ref } from 'vue';
  import FilmList from '@/components/FilmList.vue';
  import { pagesTitle } from '@/components/const';

  const filmStore = useFilmStore();
  const showPreload = ref(false);
</script>

<style scoped lang="scss">
  h3 {
    color: #fff;
    margin: 30px 15px;
  }
</style>
