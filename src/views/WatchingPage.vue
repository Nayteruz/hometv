<template>
  <h1>{{ pagesTitle.WATCHING }}</h1>
  <FilmList :items="list" :showPreload="showPreload" />
  <h3 v-if="list.length === 0">Список пуст</h3>
</template>

<script setup>
  import { useFilmStore } from '@/stores/filmStore';
  import { computed, ref } from 'vue';
  import FilmList from '@/components/FilmList.vue';
  import { pagesTitle } from '@/components/const';
  import { getFilmEntityList } from '@/stores/utils';

  const filmStore = useFilmStore();
  const list = computed(() => getFilmEntityList(filmStore.watchingList));
  const showPreload = ref(false);
</script>

<style scoped lang="scss">
  h3 {
    color: #fff;
    margin: 30px 15px;
  }
</style>
