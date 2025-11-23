<template>
  <h1 v-title>{{ pagesTitle.MAIN }}</h1>
  <PaginationList :total="totalPages" />
  <FilmList :items="films" :showPreload="showPreload" />
  <PaginationList :total="totalPages" />
  <div
    v-if="filmStore.pageNum < totalPages"
    v-intersection="{ getMoreFilms }"
    ref="observer"
    class="observer"
  ></div>
</template>

<script setup>
  import { onMounted, ref, watch, inject } from 'vue';
  import { useRouter } from 'vue-router';
  import { useFilmStore } from '@/stores/filmStore';
  import FilmList from '@/components/FilmList.vue';
  import PaginationList from '@/components/PaginationList.vue';
  import { getCollections } from '@/components/api';
  import { pagesTitle } from '@/components/const';

  const filmStore = useFilmStore();
  const emitter = inject('emitter');
  const router = useRouter();
  const films = ref([]);
  const totalPages = ref(0);
  const showPreload = ref(false);

  const getRequest = async () => {
    try {
      return getCollections(filmStore.pageNum);
    } catch (error) {
      console.error('Error load films', error);
    }
  };

  async function getListFilms(page, more = '') {
    if (more === 'loading') {
      emitter.emit('isLoading', true);
    }
    showPreload.value = more === 'preload';
    filmStore.pageNum = page || filmStore.pageNum;
    const response = await getRequest();
    totalPages.value = response.totalPages;
    if (more === 'preload') {
      films.value = [...films.value, ...response.items];
    } else {
      films.value = [];
      films.value = response.items;
    }
    showPreload.value = false;
    if (more === 'loading' && (await response.items)) {
      emitter.emit('isLoading', false);
    }
  }

  function getMoreFilms() {
    getListFilms(filmStore.pageNum + 1, 'preload');
  }

  function setNextPage() {
    getListFilms(filmStore.pageNum, 'loading');
  }

  emitter.on('clickPage', setNextPage);

  watch(
    () => films.value,
    () => {
      filmStore.films = films.value;
    }
  );

  watch(
    () => router.currentRoute.value.href,
    () => {
      filmStore.films = films.value;
    }
  );

  onMounted(() => {
    getListFilms();
  });
</script>

<style scoped lang="scss">
  h1 {
    color: #fff;
    font-size: 28px;
    text-align: center;
    margin: 20px 0;
  }
</style>
