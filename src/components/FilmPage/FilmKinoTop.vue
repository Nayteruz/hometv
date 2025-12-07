<template>
  <div>
    <div class="film__init" ref="player_init_item"></div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const player_init_item = ref(null);

  function kinoTopPlayer(el) {
    el.value.innerHTML = '';
    let filmElem = document.createElement('div');
    filmElem.setAttribute('data-kinopoisk', route.params.id);
    filmElem.setAttribute('id', 'kinoplayertop');

    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//kinoplayer.top/top.js';

    el.value.appendChild(filmElem);
    el.value.appendChild(script);
  }

  onMounted(() => {
    kinoTopPlayer(player_init_item);
  });
</script>
