<template>
  <PopupContainer class="popup" position="right">
    <template #icon>
      <IconDots />
    </template>
    <template #content>
      <ul class="list">
        <li>
          <router-link :to="ROUTER_PAGES.WATCHING.path" class="item"
            ><IconPlay />Смотрю сейчас</router-link
          >
        </li>
        <li>
          <router-link :to="ROUTER_PAGES.WATCH_LIST.path" class="item"
            ><IconWillWatch />Буду смотреть</router-link
          >
        </li>
        <li>
          <router-link :to="ROUTER_PAGES.WAITING_LIST.path" class="item"
            ><IconClock />Жду продолжения</router-link
          >
        </li>
        <li>
          <router-link :to="ROUTER_PAGES.LAST_VIEWS.path" class="item"
            ><IconFilm />Просмотренное</router-link
          >
        </li>
        <li>
          <div class="item" @click="reloadPage">
            <IconReload />Перезагрузить
          </div>
        </li>
      </ul>
    </template>
  </PopupContainer>
</template>

<script setup lang="ts">
  import IconDots from '@/components/icons/IconDots.vue';
  import PopupContainer from '@/components/PopupContainer.vue';
  import IconFilm from '@/components/icons/IconFilm.vue';
  import IconReload from '@/components/icons/IconReload.vue';
  import IconPlay from '@/components/icons/IconCirclePlay.vue';
  import IconClock from '@/components/icons/IconClock.vue';
  import IconWillWatch from '@/components/icons/IconVolumeHigh.vue';
  import { ROUTER_PAGES } from '../const';

  const reloadPage = () => {
    document.location.reload();
  };
</script>

<style scoped lang="scss">
  .popup {
    order: 4;
  }

  .list {
    padding: 3px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    user-select: none;
  }

  .item {
    display: flex;
    align-items: center;
    gap: 5px;
    white-space: nowrap;
    text-decoration: none;
    background-color: #2c4f91;
    padding: 7px 15px 7px 5px;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;

    svg {
      width: 18px;
      color: #80b0d9;
    }

    &:hover {
      background-color: #4371c6;
    }
  }
</style>
