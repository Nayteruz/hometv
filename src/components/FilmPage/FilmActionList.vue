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
          <ActionFavorite :id="id" class="item" />
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
  import { useRoute } from 'vue-router';
  import ActionFavorite from './FilmActionButtons/ActionFavorite.vue';
  import ActionWatching from './FilmActionButtons/ActionWatching.vue';
  import ActionWatchList from './FilmActionButtons/ActionWatchList.vue';
  import ActionWaitingList from './FilmActionButtons/ActionWaitingList.vue';
  import PopupContainer from '@/components/PopupContainer.vue';
  import IconFavorite from '@/components/icons/IconFavorite.vue';

  const route = useRoute();
  const id = Number(route.params.id);
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
