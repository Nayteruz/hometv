<template>
  <PopupContainer
    class="popup"
    position="right"
    maxWidth="auto"
    buttonClass="buttonTrigger"
  >
    <template #icon>
      <IconFavorite class="icon" />
    </template>
    <template #content>
      <ul class="list">
        <li>
          <ActionFavorite :id="id" :film="allohaFilm" class="item" />
        </li>
        <li>
          <ActionWatching :id="id" class="item" />
        </li>
        <li>
          <ActionWatchList :id="id" class="item" />
        </li>
        <li>
          <ActionWaitingList :id="id" class="item" />
        </li>
      </ul>
    </template>
  </PopupContainer>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import ActionFavorite from './FilmActionButtons/ActionFavorite.vue';
  import ActionWatching from './FilmActionButtons/ActionWatching.vue';
  import ActionWatchList from './FilmActionButtons/ActionWatchList.vue';
  import ActionWaitingList from './FilmActionButtons/ActionWaitingList.vue';
  import PopupContainer from '@/components/PopupContainer.vue';
  import IconFavorite from '@/components/icons/IconFavorite.vue';
  import {
    ALLOHA_SOURCE,
    allohaFilmKey,
    findAllohaFilm,
    isAllohaFilm,
  } from '@/components/allohaSearch';
  import { useUserListsStore } from '@/stores/userListsStore';

  const route = useRoute();
  const filmLists = useUserListsStore();
  const routeParam = (value: unknown) => {
    const raw = Array.isArray(value) ? value[0] : value;
    return typeof raw === 'string' ? raw : '';
  };
  const rawId = computed(() => routeParam(route.params.id));
  const id = computed(() => Number(rawId.value) || 0);
  const allohaFilm = computed(() => {
    if (routeParam(route.query.source) !== ALLOHA_SOURCE) return undefined;
    const token = rawId.value;
    return (
      findAllohaFilm(token) ??
      filmLists.favorites.find(
        (film) => isAllohaFilm(film) && allohaFilmKey(film) === token,
      )
    );
  });
</script>

<style scoped>
  .list {
    display: flex;
    flex-direction: column;
    gap: 2px 5px;
    flex-wrap: wrap;
  }

  .item {
    width: 100%;
    justify-content: flex-start;
    white-space: nowrap;
    min-width: 200px;
  }

  .popup {
    height: 100%;
  }

  .selected svg {
    color: #cf0000;
  }

  :deep(.buttonTrigger) {
    height: 100%;
    min-width: 50px;
  }
</style>
