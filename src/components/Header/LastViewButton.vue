<template>
  <ButtonBlue @click="click" :size="26"><IconFilm /></ButtonBlue>
</template>

<script setup lang="ts">
  import { useFilmStore } from '@/stores/filmStore';
  import { useRouter } from 'vue-router';
  import IconFilm from '@/components/icons/IconFilm.vue';
  import ButtonBlue from '@/components/ButtonBlue.vue';

  const router = useRouter();
  const filmStore = useFilmStore();

  const click = () => {
    filmStore.pageNum = 1;
    filmStore.genreId = null;
    router.push({ name: 'lastViews' });
  };
</script>
