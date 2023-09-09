<template>
  <div>
    <div class="kinobox_player film__init" ref="player_init_item"></div>
  </div>
</template>

<script>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";

export default {
  name: 'FilmKinoBoxTab',
  setup() {
    const route = useRoute();
    const player_init_item = ref(null);

    function kinoBoxPlayer(el) {
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '//kinobox.tv/kinobox.min.js';
      el.value.appendChild(script)

      /* eslint-disable */
      setTimeout(() => {
        new Kinobox('.kinobox_player', {search: {kinopoisk: route.params.id}}).init();
      }, 500)

    }

    onMounted(() => {
        kinoBoxPlayer(player_init_item);
    })

    return {
      player_init_item
    }
  }
}
</script>