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
  import {
    ALLOHA_SOURCE,
    allohaFilmKey,
    findAllohaFilm,
    isAllohaFilm,
  } from '@/components/allohaSearch';

  const authStore = useAuthStore();
  const filmLists = useUserListsStore();
  const route = useRoute();

  const routeParam = (value: unknown) => {
    const raw = Array.isArray(value) ? value[0] : value;
    return typeof raw === 'string' ? raw : '';
  };

  const rawId = computed(() => routeParam(route.params.id));
  const isAlloha = computed(
    () => routeParam(route.query.source) === ALLOHA_SOURCE,
  );
  const cachedAlloha = computed(() => {
    if (!isAlloha.value) return undefined;
    const token = rawId.value;
    return (
      findAllohaFilm(token) ??
      filmLists.favorites.find(
        (film) => isAllohaFilm(film) && allohaFilmKey(film) === token,
      )
    );
  });
  const allohaName = computed(() => {
    if (!isAlloha.value) return '';
    return (
      routeParam(route.query.name).trim() || cachedAlloha.value?.name || ''
    );
  });
  const isKpId = computed(() => !isAlloha.value && /^\d+$/.test(rawId.value));
  const filmId = computed(() => (isKpId.value ? Number(rawId.value) : 0));

  const {
    data: filmInfo,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: computed(() => ['filmInfo', filmId.value]),
    queryFn: () => api.getFilmInfo(filmId.value),
    enabled: isKpId,
  });

  const { data: similars } = useQuery({
    queryKey: computed(() => ['filmExtras', filmId.value]),
    queryFn: () =>
      Promise.allSettled([
        api.getSimilars(filmId.value),
        api.getSequelsAndPrequels(filmId.value),
        api.getRelations(filmId.value),
      ]).then((results) => {
        const allFilms = results
          .filter((r) => r.status === 'fulfilled')
          .flatMap((r) => r.value);

        return Array.from(new Map(allFilms.map((f) => [f.id, f])).values());
      }),
    enabled: isKpId,
  });

  const pageFilm = computed(() => cachedAlloha.value ?? filmInfo.value);
  const showPreload = computed(() => !isAlloha.value && isLoading.value);
  const showError = computed(() => !isAlloha.value && isError.value);
  const showMissing = computed(
    () => !isAlloha.value && !showPreload.value && !showError.value && !pageFilm.value,
  );
  const filmName = computed(() =>
    pageFilm.value
      ? getFilmPageTitle(pageFilm.value)
      : allohaName.value || 'Фильм',
  );

  const isUnwatch = computed(() => {
    const rawId =
      pageFilm.value?.kinopoiskId ||
      pageFilm.value?.filmId ||
      pageFilm.value?.id ||
      0;
    return filmLists.isSkipped(typeof rawId === 'number' ? rawId : 0);
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
    v-if="showPreload"
    class="title-preload"
    :width="'50%'"
    :height="37"
  />
  <h1 v-else-if="showMissing" v-title>Фильм не найден</h1>
  <h1 v-else-if="showError" v-title>Ошибка загрузки фильма</h1>
  <h1 v-else v-title>{{ filmName }}</h1>
  <div class="film__wrap">
    <PreloadCard v-if="showPreload" />
    <div v-else-if="showMissing" class="film__error">
      Откройте фильм из результатов Alloha
    </div>
    <div v-else-if="showError" class="film__error">{{ errorMessage }}</div>
    <FilmImage
      v-else
      :filmInfo="pageFilm"
      :class="{ image: true, unwatch: isUnwatch }"
    />
    <div class="film__note" v-if="isAlloha || (pageFilm && !showError)">
      <div class="film__btns">
        <FilmPlayerSelect :alternative="isAlloha" />
      </div>
      <div class="film__description">
        <h3>Описание:</h3>
        {{ pageFilm?.description || '' }}
      </div>
      <FilmGenres :genres="pageFilm?.genres || []" title="Жанры" />
      <div class="film__similar" v-if="similars?.length">
        <h3>Похожие фильмы</h3>
        <FilmList :items="similars" :isRating="false" heightItemAuto />
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
