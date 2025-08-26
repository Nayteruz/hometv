<template>
  <div>
    <div class="kinobox_player film__init" ref="player_init_item"></div>
  </div>
</template>

<script>
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { useFilmStore } from '@/stores/filmStore';

  export default {
    name: 'FilmKinoBoxTab',
    setup() {
      const filmStore = useFilmStore();
      const route = useRoute();
      const player_init_item = ref(null);

      function kinoBoxPlayer(el) {
        filmStore.setFilmPageId(route.params.id);
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
      }

      onMounted(() => {
        kinoBoxPlayer(player_init_item);
      });

      return {
        player_init_item,
      };
    },
  };
</script>

<style lang="scss">
  .kinobox_player .kinobox_wrapper {
    aspect-ratio: auto;

    .kinobox_iframe {
      min-height: 300vh;
    }
  }
</style>
