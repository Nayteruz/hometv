<template>
  <h1 v-title>{{ pagesTitle.FAVORITE }}</h1>
  <FilmList :items="list" />
  <h3 v-if="list.length === 0">Список пуст</h3>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useUserListsStore } from '@/stores/userListsStore';
  import { pagesTitle } from '@/components/const';
  import FilmList from '@/components/FilmList.vue';

  const filmLists = useUserListsStore();
  const list = computed(() => filmLists.favorites);
</script>

<style scoped lang="scss">
  h3 {
    color: #fff;
    margin-bottom: 20px;
  }
</style>
