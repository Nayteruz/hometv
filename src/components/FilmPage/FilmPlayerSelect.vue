<template>
  <ul class="tab-titles">
    <li :class="{ selected: playerNum === 1 }" @click="playerNum = 1">
      Плееры
    </li>
    <!-- <li :class="{ selected: playerNum === 2 }" @click="playerNum = 2">Kinotop</li> -->
    <!-- <li :class="{ selected: playerNum === 3 }" @click="playerNum = 3">KinoBD</li> -->
    <!-- <li :class="{ selected: playerNum === 4 }" @click="playerNum = 4">KinoBox</li> -->
    <li :class="{ selected: playerNum === 5 }" @click="playerNum = 5">Lumex</li>
    <li class="actions"><FilmActionList /></li>
  </ul>
  <PlayersList v-if="playerNum === 1" />
  <!-- <FilmKinoTop v-if="playerNum === 2" /> -->
  <!-- <FilmKinoBD v-if="playerNum === 3" /> -->
  <!-- <FilmKinoBoxTab v-if="playerNum === 4" /> -->
  <FilmPlayerClub v-if="playerNum === 5" />
</template>

<script setup>
  import { ref } from 'vue';
  import FilmPlayerClub from '@/components/FilmPage/FilmPlayerClub.vue';
  import PlayersList from '@/components/PlayersList.vue';
  import FilmActionList from './FilmActionList.vue';
  // написано что теперь платно только можно
  // import FilmKinoBoxTab from '@/components/FilmPage/FilmKinoboxTab.vue';
  // заблочили их походу
  // import FilmKinoTop from '@/components/FilmPage/FilmKinoTop.vue';
  // import FilmKinoBD from '@/components/FilmPage/FilmKinoBD.vue';

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
