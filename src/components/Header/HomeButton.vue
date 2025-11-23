<template>
  <ButtonBlue @click="click" :size="18"><IconHome />Home</ButtonBlue>
</template>

<script setup>
  import { useFilmStore } from '@/stores/filmStore';
  import { useRouter } from 'vue-router';
  import IconHome from '@/components/icons/IconHome.vue';
  import ButtonBlue from '@/components/ButtonBlue.vue';

  const router = useRouter();
  const filmStore = useFilmStore();

  const click = () => {
    filmStore.pageNum = 1;
    filmStore.genreIdStore = null;
    router.push({ name: 'home' });
  };
</script>
