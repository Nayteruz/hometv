<template>
  <div>
    <div class="kinobox_player film__init" ref="player_init_item"></div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { useFilmStore } from '@/stores/filmStore';

  const filmStore = useFilmStore();
  const route = useRoute();
  const player_init_item = ref<HTMLElement | null>(null);

  const kinoBoxPlayer = (el) => {
    filmStore.setFilmPageId(Number(route.params.id) || 0);
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//kinobox.tv/kinobox.min.js';
    el.value.appendChild(script);

    /* eslint-disable */
    setTimeout(() => {
      new Kinobox('.kinobox_player', {
        search: { kinopoisk: route.params.id },
      }).init();
    }, 1000);
  };

  onMounted(() => {
    kinoBoxPlayer(player_init_item);
  });
</script>

<style lang="scss">
  .kinobox_player .kinobox_wrapper {
    aspect-ratio: auto;

    .kinobox_iframe {
      min-height: 300vh;
    }
  }
</style>
