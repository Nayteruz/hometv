<template>
  <ul class="tab-titles">
    <li :class="{ selected: playerNum === 1 }" @click="playerNum = 1">
      Плееры
    </li>
    <li :class="{ selected: playerNum === 2 }" @click="playerNum = 2">Lumex</li>
    <li class="actions"><FilmActionList /></li>
  </ul>
  <PlayersList v-if="playerNum === 1" />
  <FilmPlayerClub v-if="playerNum === 2" />
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import FilmPlayerClub from '@/components/FilmPage/FilmPlayerClub.vue';
  import PlayersList from '@/components/PlayersList.vue';
  import FilmActionList from './FilmActionList.vue';
  // Намеренно 0, чтобы ни одна вкладка не была выбрана при загрузке —
  // плеер не загружается, пока пользователь явно не кликнет по вкладке.
  const playerNum = ref(0);
</script>

<style scoped lang="scss">
  @use 'sass:color';

  .tab-titles {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin: 0 0 10px 0;

    li {
      padding: 10px 20px;
      cursor: pointer;
      background: #2c4f91;
      border-radius: 5px;
      user-select: none;

      &.selected,
      &:hover {
        background: #071f3a;
      }

      &.favorite-btn {
        margin-left: auto;
        background: none;
        padding: 0;
        position: relative;
      }

      &.actions {
        padding: 0;
      }
    }
  }

  .favorite {
    z-index: 10;
    height: 32px;
    width: 32px;
  }
</style>
