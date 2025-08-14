<template>
  <ButtonBlue @click="click" :size="26"><IconFilm /></ButtonBlue>
</template>

<script setup>
  import { useFilmStore } from '@/stores/filmStore';
  import { useRouter } from 'vue-router';
  import IconFilm from '@/components/icons/IconFilm.vue';
  import ButtonBlue from '../ButtonBlue.vue';

  const router = useRouter();
  const filmStore = useFilmStore();

  const click = () => {
    filmStore.pageNum = 1;
    filmStore.genreIdStore = null;
    router.push({ name: 'lastViews' });
  };
</script>
