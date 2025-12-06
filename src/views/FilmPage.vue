<template>
  <ButtonBack />
  <h1 v-title>{{ filmName }}</h1>
  <div class="film__wrap">
    <FilmImage :filmInfo="filmInfo" :class="{ unwatch: isUnwatch }" />
    <div class="film__note">
      <div class="film__btns">
        <FilmPlayerSelect />
      </div>
      <div class="film__description">
        <h3>Описание:</h3>
        {{ filmInfo.description }}
      </div>
      <FilmGenres :genres="filmInfo.genres || []" title="Жанры" />
      <div class="film__similar" v-if="similars.length > 0">
        <h3>Похожие фильмы</h3>
        <FilmList :items="similars" :isRating="false" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useFilmStore } from '@/stores/filmStore';
  import FilmPlayerSelect from '@/components/FilmPage/FilmPlayerSelect.vue';
  import FilmList from '@/components/FilmList.vue';
  import { computed, onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import {
    getFilmInfo,
    getSequelsAndPrequels,
    getSimilars,
  } from '@/components/api';
  import ButtonBack from '@/components/ButtonBack.vue';
  import FilmImage from '@/components/FilmPage/FilmImage.vue';
  import FilmGenres from '@/components/FilmPage/FilmGenres.vue';
  import { getFilmPageTitle } from '@/components/utils';

  const filmStore = useFilmStore();
  const route = useRoute();
  const filmInfo = ref([]);
  const similars = ref([]);

  const filmName = computed(() => getFilmPageTitle(filmInfo.value));

  const loadFilm = async () => {
    try {
      const data = getFilmInfo(route.params.id);
      filmInfo.value = await data;
      filmStore.authChange().then(() => {
        filmStore.addLastViews(filmInfo.value);
      });
    } catch (error) {
      console.error('Error load film info', error);
      filmInfo.value = [];
    }
  };

  const loadSimilars = async () => {
    try {
      similars.value = await getSimilars(route.params.id);
    } catch (error) {
      console.error('Error load similars', error);
      similars.value = [];
    }
  };

  const loadSequelsAndPrequels = async () => {
    try {
      const data = await getSequelsAndPrequels(route.params.id);
      const sequels = data.items || [];
      similars.value = [...sequels, ...similars.value];
    } catch (error) {
      console.error('Error load sequels and prequels', error);
    }
  };

  const isUnwatch = computed(() =>
    filmStore.isSkipped(
      filmInfo.value?.kinopoiskId ||
        filmInfo.value?.filmId ||
        filmInfo.value?.id
    )
  );

  onMounted(() => {
    loadFilm();
    loadSimilars();
    loadSequelsAndPrequels();
  });
</script>

<style scoped lang="scss">
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
</style>
