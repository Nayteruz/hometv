<template>
  <ButtonBlue @click="click" :customClass="isDisabled" :size="18"
    ><IconFavorite />{{ favoriteCount }}
  </ButtonBlue>
</template>

<script setup lang="ts">
  import { useFilmStore } from '@/stores/filmStore';
  import { useAuthStore } from '@/stores/authStore';
  import { useUserListsStore } from '@/stores/userListsStore';
  import { useRouter } from 'vue-router';
  import IconFavorite from '../icons/IconFavorite.vue';
  import { computed } from 'vue';
  import ButtonBlue from '../ButtonBlue.vue';

  const router = useRouter();
  const filmStore = useFilmStore();
  const authStore = useAuthStore();
  const filmLists = useUserListsStore();

  const favoriteCount = computed(() => filmLists.favorites.length);
  const isDisabled = computed(() =>
    authStore.user === null ? 'disabled' : ''
  );

  const click = () => {
    filmStore.pageNum = 1;
    filmStore.genreId = null;
    router.push({ name: 'favorite' });
  };
</script>

<style scoped>
  .disabled {
    pointer-events: none;
    opacity: 0.5;
  }
</style>
