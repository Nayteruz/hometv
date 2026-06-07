<template>
  <h1 v-title>{{ pagesTitle.MAIN }}</h1>
  <PaginationList :total="totalPages" />
  <FilmList :items="films" :showPreload="isFetching" :isRating="true" />
  <PaginationList :total="totalPages" />
  <div
    v-if="hasNextPage"
    v-intersection="{ getMoreFilms }"
    class="observer"
  ></div>
</template>

<script setup lang="ts">
  import { computed, inject, watch, onBeforeUnmount } from 'vue';
  import { useRouter } from 'vue-router';
  import { useInfiniteQuery } from '@tanstack/vue-query';
  import { useFilmStore } from '@/stores/filmStore';
  import FilmList from '@/components/FilmList.vue';
  import PaginationList from '@/components/PaginationList.vue';
  import { pagesTitle } from '@/components/const';
  import { api } from '@/components/api';

  const filmStore = useFilmStore();
  const emitter = inject('emitter') as any;
  const router = useRouter();

  const { data, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['collections'],
    queryFn: ({ pageParam = 1 }) => api.getCollections(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return nextPage <= lastPage.totalPages ? nextPage : undefined;
    },
    initialPageParam: 1,
  });

  // Плоский список из всех накопленных страниц
  const films = computed(
    () => data.value?.pages.flatMap((page) => page.items) ?? [],
  );

  const totalPages = computed(() => data.value?.pages[0]?.totalPages ?? 0);

  // Инфинит-скролл
  function getMoreFilms() {
    if (hasNextPage.value && !isFetching.value) {
      fetchNextPage();
    }
  }

  // Клик по пагинации — переходим на конкретную страницу
  // useInfiniteQuery накапливает до нужной страницы
  async function setNextPage() {
    const targetPage = filmStore.pageNum;
    const loadedPages = data.value?.pages.length ?? 0;
    for (let i = loadedPages; i < targetPage; i++) {
      await fetchNextPage();
    }
  }

  emitter.on('clickPage', setNextPage);

  onBeforeUnmount(() => {
    emitter.off('clickPage', setNextPage);
  });

  // Синхронизируем стор
  watch(films, (val) => {
    filmStore.films = val;
  });

  watch(
    () => router.currentRoute.value.fullPath,
    () => {
      filmStore.films = films.value;
    },
  );
</script>

<style scoped lang="scss">
  h1 {
    color: #fff;
    font-size: 28px;
    text-align: center;
    margin: 20px 0;
  }
</style>
