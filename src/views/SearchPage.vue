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

<script setup lang="ts">
  import { onMounted, ref, inject, onBeforeUnmount } from 'vue';
  import { useFilmStore } from '@/stores/filmStore';
  import { useRoute } from 'vue-router';
  import FilmList from '@/components/FilmList.vue';
  import PaginationList from '@/components/PaginationList.vue';
  import { api } from '@/components/api';
  import type { IFilmEntity } from '@/types';

  const route = useRoute();
  const films = ref<IFilmEntity[]>([]);
  const emitter = inject('emitter') as any;
  const filmStore = useFilmStore();
  const totalPages = ref(0);
  const showPreload = ref(false);
  const pageTitle = ref('');

  const getRequest = async () => {
    const params: Record<string, string> = {};

    if (filmStore.searchInputText) {
      params.keyword = filmStore.searchInputText;
    }
    if (filmStore.genreId) {
      params.genres = String(filmStore.genreId);
    }
    if (filmStore.pageNum) {
      params.page = String(filmStore.pageNum);
    }

    try {
      return api.getSearchFilms<{
        total: number;
        items: IFilmEntity[];
        totalPages: number;
      }>(params);
    } catch (error) {
      console.error('Error load films', error);
    }
  };

  const getListFilms = async (more: boolean = false, page: number) => {
    filmStore.pageNum = page || filmStore.pageNum;
    if (filmStore.genreId || filmStore.searchInputText || more) {
      showPreload.value = true;
      const response = await getRequest();
      totalPages.value = response?.totalPages || 0;
      if (more) {
        films.value = [...films.value, ...(response?.items || [])];
      } else {
        films.value = response?.items || [];
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

  const onSearchSubmit = () => {
    getListFilms(false, 1);
  };

  emitter.on('clickPage', setNextPage);

  onBeforeUnmount(() => {
    emitter.off('clickPage', setNextPage);
    emitter.off('searchSubmit', onSearchSubmit);
  });

  onMounted(async () => {
    filmStore.setSearchInputText(String(route.query.q || ''));
    filmStore.setGenreId(Number(route.query.genres));
    await getListFilms(false, 1);
    emitter.on('searchSubmit', onSearchSubmit);
    pageTitle.value = filmStore.searchHeading;
  });
</script>
