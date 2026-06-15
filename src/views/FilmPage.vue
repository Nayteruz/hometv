<script setup lang="ts">
  import { useAuthStore } from '@/stores/authStore';
  import { useUserListsStore } from '@/stores/userListsStore';
  import FilmPlayerSelect from '@/components/FilmPage/FilmPlayerSelect.vue';
  import FilmList from '@/components/FilmList.vue';
  import { computed, watch, onBeforeUnmount } from 'vue';
  import { useRoute } from 'vue-router';
  import { useQuery } from '@tanstack/vue-query';
  import { api } from '@/components/api';
  import ButtonBack from '@/components/ButtonBack.vue';
  import FilmImage from '@/components/FilmPage/FilmImage.vue';
  import FilmGenres from '@/components/FilmPage/FilmGenres.vue';
  import { getFilmPageTitle } from '@/components/utils';
  import PreloadCard from '@/components/PreloadCard.vue';

  const authStore = useAuthStore();
  const filmLists = useUserListsStore();
  const route = useRoute();

  const filmId = Array.isArray(route.params.id)
    ? Number(route.params.id[0]) || 0
    : Number(route.params.id) || 0;

  const {
    data: filmInfo,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['filmInfo', filmId],
    queryFn: () => api.getFilmInfo(filmId),
    enabled: !!filmId,
  });

  const { data: similars } = useQuery({
    queryKey: ['filmExtras', filmId],
    queryFn: () =>
      Promise.allSettled([
        api.getSimilars(filmId),
        api.getSequelsAndPrequels(filmId),
        api.getRelations(filmId),
      ]).then((results) => {
        const allFilms = results
          .filter((r) => r.status === 'fulfilled')
          .flatMap((r) => r.value);

        return Array.from(new Map(allFilms.map((f) => [f.id, f])).values());
      }),
    enabled: !!filmId,
  });

  const filmName = computed(() => getFilmPageTitle(filmInfo.value));

  const isUnwatch = computed(() => {
    const skipValue =
      filmInfo.value?.kinopoiskId ||
      filmInfo.value?.filmId ||
      filmInfo.value?.id ||
      0;
    return filmLists.isSkipped(skipValue);
  });

  const errorMessage = computed(() => {
    if (!error.value) return '';
    const e = error.value as { status?: number; message?: string };
    if (e.status)
      return `Ошибка ${e.status}: ${e.message || 'Неизвестная ошибка'}`;
    return e.message || 'Ошибка загрузки фильма';
  });

  const unsubscribeAuth = authStore.authChange();

  watch(filmInfo, (film) => {
    if (film) filmLists.addLastViews(film);
  });

  onBeforeUnmount(() => {
    unsubscribeAuth();
  });
</script>

<template>
  <ButtonBack />
  <PreloadCard
    v-if="isLoading"
    class="title-preload"
    :width="'50%'"
    :height="37"
  />
  <h1 v-else-if="isError" v-title>Ошибка загрузки фильма</h1>
  <h1 v-else v-title>{{ filmName }}</h1>
  <div class="film__wrap">
    <PreloadCard v-if="isLoading" />
    <div v-else-if="isError" class="film__error">{{ errorMessage }}</div>
    <FilmImage
      v-else
      :filmInfo="filmInfo"
      :class="{ image: true, unwatch: isUnwatch }"
    />
    <div class="film__note" v-if="!isError">
      <div class="film__btns">
        <FilmPlayerSelect />
      </div>
      <div class="film__description">
        <h3>Описание:</h3>
        {{ filmInfo?.description || '' }}
      </div>
      <FilmGenres :genres="filmInfo?.genres || []" title="Жанры" />
      <div class="film__similar" v-if="similars?.length">
        <h3>Похожие фильмы</h3>
        <FilmList
          :items="similars"
          :isRating="false"
          :showPreload="false"
          heightItemAuto
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .title-preload {
    margin: 30px 15px 30px;
  }
  .film-list-similar {
    grid-auto-rows: auto;
  }
  .film__wrap {
    display: grid;
    grid-template-columns: minmax(250px, 350px) 1fr;
    gap: 20px;
    margin: 0 15px;
    @media all and (max-width: 1024px) {
      grid-template-columns: 1fr;
    }

    @media all and (max-width: 500px) {
      margin: 0 5px;
    }
  }

  .image {
    min-height: 450px;
  }

  .film__note {
    padding: 0;
    color: #fff;
    min-width: 0;
  }

  .film__btns {
    margin-bottom: 20px;
    max-width: 100%;
  }

  .film__description {
    font-size: 15px;
    line-height: 1.5;
  }

  .film__similar {
    margin-top: 20px;

    :global(.film__list) {
      padding: 0;
    }
  }

  .unwatch {
    filter: grayscale(100%) brightness(0.2);
  }

  .film__error {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 300px;
    color: #e74c3c;
    font-size: 18px;
    text-align: center;
    padding: 40px 20px;
    background: rgba(#e74c3c, 0.05);
    border: 1px solid rgba(#e74c3c, 0.2);
    border-radius: 10px;
  }
</style>
