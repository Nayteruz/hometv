<template>
  <ButtonBlue
    :class="['button', { selected: isSelected }]"
    :size="20"
    @click="toggleFavorite"
    :disabled="isLoading"
  >
    <span class="loading-round" v-if="isLoading"></span>
    <IconFavorite /> Избранное
  </ButtonBlue>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { api } from '@/components/api.ts';
  import ButtonBlue from '@/components/ButtonBlue.vue';
  import IconFavorite from '@/components/icons/IconFavorite.vue';
  import { hasId } from '@/components/utils.ts';
  import {
    allohaFilmKey,
    filmForStorage,
    isAllohaFilm,
  } from '@/components/allohaSearch';
  import { useAuthStore } from '@/stores/authStore';
  import { useUserListsStore } from '@/stores/userListsStore';
  import type { IFilmEntity } from '@/types';

  const props = defineProps<{ id: number; film?: IFilmEntity }>();

  const authStore = useAuthStore();
  const filmLists = useUserListsStore();
  const allohaFilm = computed(() =>
    isAllohaFilm(props.film) ? props.film : undefined,
  );
  const isSelected = computed(() => {
    const film = allohaFilm.value;
    if (!film) return hasId(filmLists.favorites, props.id);

    const key = allohaFilmKey(film);
    return filmLists.favorites.some(
      (item) => isAllohaFilm(item) && allohaFilmKey(item) === key,
    );
  });
  const isLoading = ref(false);

  async function toggleFavorite() {
    if (!authStore.firebaseUser) {
      alert('Необходима авторизация');
      return;
    }
    isLoading.value = true;
    try {
      const film = allohaFilm.value;
      if (!isSelected.value) {
        if (film) {
          await filmLists.addFavorite(filmForStorage(film));
        } else {
          const data = await api.getFilmInfo(props.id);
          await filmLists.addFavorite(await data);
        }
      } else if (film) {
        await filmLists.removeFavorite(allohaFilmKey(film));
      } else {
        await filmLists.removeFavorite(props.id);
      }
    } finally {
      isLoading.value = false;
    }
  }
</script>

<style scoped>
  .button {
    position: relative;
  }

  .selected {
    svg {
      color: #cf0000;
    }

    &:hover {
      svg {
        color: #cf0000;
      }
    }
  }

  .loading-round {
    display: block;
    position: absolute;
    left: 18px;
    top: 50%;
    width: 30px;
    height: 30px;
    margin: -15px 0 0 -15px;
    border-radius: 50%;
    border: 3px solid #c77e7e;
    border-top-color: transparent;
    animation: spinner-border 0.75s linear infinite;
  }

  @keyframes spinner-border {
    to {
      transform: rotate(360deg);
    }
  }
</style>
