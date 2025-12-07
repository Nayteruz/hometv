<template>
  <h1>{{ pagesTitle.LAST_VIEWS }}</h1>
  <FilmList :items="list" :showPreload="showPreload" />
  <h3 v-if="list.length === 0">Список пуст</h3>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { useFilmStore } from '@/stores/filmStore';
  import FilmList from '@/components/FilmList.vue';
  import { pagesTitle } from '@/components/const';

  const filmStore = useFilmStore();
  const list = computed(() => filmStore.lastViews);
  const showPreload = ref(false);
</script>

<style scoped lang="scss">
  h3 {
    color: #fff;
    margin-bottom: 20px;
  }
</style>
