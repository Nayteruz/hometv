<template>
  <h1 v-title>{{ pageTitle }}</h1>
  <PaginationList :total="totalPages" @clickPage="getListFilms" />
  <FilmList :items="films" :showPreload="showPreload" />
  <PaginationList :total="totalPages" @clickPage="getListFilms" />
  <div
    v-if="filmStore.pageNum < totalPages"
    v-intersection="{ getMoreFilms }"
    ref="observer"
    class="observer"
  ></div>
</template>

<script setup>
  import { onMounted, ref, computed, inject } from 'vue';
  import { useFilmStore } from '@/stores/filmStore';
  import { useRoute } from 'vue-router';
  import FilmList from '@/components/FilmList.vue';
  import PaginationList from '@/components/PaginationList.vue';
  import { getSearchFilms } from '@/components/api';

  const route = useRoute();
  const films = ref([]);
  const emitter = inject('emitter');
  const filmStore = useFilmStore();
  const totalPages = ref(0);
  const showPreload = ref(false);
  const searchQueryRoute = computed(() => route.query.q);
  const genreIdRoute = computed(() => Number(route.query.genres));
  const pageTitle = ref('');

  const getRequest = async () => {
    const params = {};

    if (filmStore.searchQueryStore) {
      params.keyword = filmStore.searchQueryStore;
    }
    if (filmStore.genreIdStore) {
      params.genres = filmStore.genreIdStore;
    }
    if (filmStore.pageNum) {
      params.page = filmStore.pageNum;
    }

    try {
      return getSearchFilms(params);
    } catch (error) {
      console.error('Error load films', error);
    }
  };

  const getListFilms = async (more = false, page) => {
    filmStore.pageNum = page || filmStore.pageNum;
    if (filmStore.genreIdStore || filmStore.searchQueryStore || more) {
      showPreload.value = true;
      const response = await getRequest();
      totalPages.value = response.totalPages;
      if (more) {
        films.value = [...films.value, ...response.items];
      } else {
        films.value = [];
        films.value = response.items;
      }
      showPreload.value = false;
    }
  };

  const getMoreFilms = () => {
    getListFilms(true, filmStore.pageNum + 1);
  };

  const setNextPage = () => {
    getListFilms(false, filmStore.pageNum);
  };

  emitter.on('clickPage', setNextPage);

  onMounted(async () => {
    filmStore.searchQueryStore = searchQueryRoute.value;
    filmStore.genreIdStore = genreIdRoute.value;
    await getListFilms(false, 1);
    emitter.on('searchSubmit', () => {
      getListFilms(false, 1);
    });
    pageTitle.value = await filmStore.searchPageTitle();
  });
</script>
