<template>
  <span class="favorite-icon">
    <span class="loading-round" v-if="isLoading"></span>
    <IconFavorite
      :class="{ active: isFavorite }"
      @click.prevent="toggleFavorite"
    />
  </span>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';
  import IconFavorite from '@/components/icons/IconFavorite.vue';
  import { useAuthStore } from '@/stores/authStore';
  import { useUserListsStore } from '@/stores/userListsStore';
  import { api } from '@/components/api';
  import { hasId } from '@/components/utils';
  import {
    allohaFilmKey,
    filmForStorage,
    isAllohaFilm,
  } from '@/components/allohaSearch';
  import type { IFilmEntity } from '@/types';

  const props = withDefaults(
    defineProps<{ id: number; film?: IFilmEntity }>(),
    { id: 0 },
  );

  const isLoading = ref(false);
  const authStore = useAuthStore();
  const filmLists = useUserListsStore();
  const allohaFilm = computed(() =>
    isAllohaFilm(props.film) ? props.film : undefined,
  );
  const isFavorite = computed(() => {
    const film = allohaFilm.value;
    if (!film) return hasId(filmLists.favorites, props.id);

    const key = allohaFilmKey(film);
    return filmLists.favorites.some(
      (item) => isAllohaFilm(item) && allohaFilmKey(item) === key,
    );
  });

  async function toggleFavorite() {
    if (!authStore.firebaseUser) {
      alert('Необходима авторизация');
      return;
    }
    isLoading.value = true;
    try {
      const film = allohaFilm.value;
      if (!isFavorite.value) {
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

<style scoped lang="scss">
  .favorite-icon {
    width: 24px;
    height: 24px;
    display: block;
    cursor: pointer;
    position: relative;
    color: #80b0d9;
  }

  .loading-round {
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 30px;
    height: 30px;
    margin: -15px 0 0 -15px;
    border-radius: 50%;
    border: 3px solid #c77e7e;
    border-top-color: transparent;
    animation: spinner-border 0.75s linear infinite;
  }

  .favorite-icon svg {
    width: 100%;
    height: 100%;
  }

  .favorite-icon:hover {
    color: #2c4f91;
  }

  .favorite-icon svg.active {
    color: #cf0000;
  }

  @keyframes spinner-border {
    to {
      transform: rotate(360deg);
    }
  }
</style>
