<template>
  <div>
    <div class="film__init" ref="player_init_item"></div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref, type Ref } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const player_init_item = ref<HTMLElement | null>(null);

  function kinoTopPlayer(el: Ref<HTMLElement | null>) {
    if (!el.value) return;

    el.value.innerHTML = '';
    let filmElem = document.createElement('div');
    filmElem.setAttribute('data-kinopoisk', String(route.params.id));
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
