<template>
  <div class="list">
    <h1>{{ pagesTitle.FAVORITE }}</h1>
    <FilmList :items="filmStore.favoriteList" :showPreload="showPreload" />
    <h3 v-if="filmStore.favorites.length === 0">Список пуст</h3>
  </div>
</template>

<script setup>
  import { pagesTitle } from '@/components/const'
  import { useFilmStore } from '@/stores/filmStore'
  import { ref, watch } from 'vue'
  import FilmList from '@/components/FilmList.vue'

  const filmStore = useFilmStore()
  const showPreload = ref(false)

  watch(
    () => filmStore.favorites,
    () => {
      filmStore.films = filmStore.favorites
    }
  )
</script>

<style scoped lang="scss">
  h3 {
    color: #fff;
    margin-bottom: 20px;
  }

  .list {
    padding: 0 15px 30px;

    @media all and (max-width: 768px) {
      padding: 0 5px 10px;
    }
  }
</style>
