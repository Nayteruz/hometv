<template>
  <div>
    <div ref="playerContainer"></div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref, onBeforeUnmount } from 'vue';
  import { useRoute } from 'vue-router';
  import { useFilmStore } from '@/stores/filmStore';
  // https://kinobd.net/dashboard

  const filmStore = useFilmStore();
  const route = useRoute();
  const filmId = Number(route.params.id) || 0;
  const playerContainer = ref<HTMLElement | null>(null);
  let script: HTMLScriptElement | null = null;

  function initPlayer() {
    filmStore.setFilmPageId(filmId);

    // Создаем необходимую структуру HTML
    playerContainer.value!.innerHTML = `
          <div data-kinopoisk="${filmId}" id="kinobd"></div>
        `;

    // Создаем и добавляем скрипт
    script = document.createElement('script');
    script.src = 'https://kinobd.net/js/player_.js';
    script.async = true;

    // Обработка ошибок
    script.onerror = () => console.error('Failed to load player script');

    document.body.appendChild(script);
  }

  function cleanup() {
    // Удаляем скрипт
    if (script && document.body.contains(script)) {
      document.body.removeChild(script);
    }

    // Очищаем контейнер
    if (playerContainer.value) {
      playerContainer.value.innerHTML = '';
    }
  }

  onMounted(() => {
    if (playerContainer.value) {
      initPlayer();
    }
  });

  onBeforeUnmount(() => {
    cleanup();
  });
</script>
