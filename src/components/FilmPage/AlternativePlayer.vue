<template>
  <button
    type="button"
    class="select-button"
    :class="{ active, loading }"
    @click="emit('select')"
  >
    Плеер Alloha
  </button>
  <Teleport v-if="frameTarget" :to="frameTarget">
    <div v-if="active" class="player-item">
      <iframe
        v-if="src"
        :src="src"
        allowfullscreen
        loading="lazy"
        title="Плеер Alloha"
      ></iframe>
      <div v-else-if="loading">Загрузка плеера...</div>
      <div v-else>{{ message }}</div>
    </div>
  </Teleport>
</template>

<script lang="ts">
  import type { InjectionKey, Ref } from 'vue';

  export const playersFrameKey: InjectionKey<Ref<HTMLElement | null>> =
    Symbol('playersFrame');
</script>

<script setup lang="ts">
  import { inject, onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { useFilmStore } from '@/stores/filmStore';
  import { findAllohaFilm, loadAllohaFilmByToken } from '@/components/allohaSearch';

  defineProps<{
    active: boolean;
  }>();

  const emit = defineEmits<{
    select: [];
    kinopoiskId: [id: number];
  }>();

  const route = useRoute();
  const filmStore = useFilmStore();
  const frameTarget = inject(playersFrameKey, ref(null));
  const src = ref('');
  const loading = ref(false);
  const message = ref('Плеер не доступен');

  const routeParam = (value: unknown) => {
    const raw = Array.isArray(value) ? value[0] : value;
    return typeof raw === 'string' ? raw : '';
  };

  onMounted(async () => {
    const token = routeParam(route.params.id);
    const name =
      routeParam(route.query.name).trim() || findAllohaFilm(token)?.name || '';

    if (!filmStore.apiAloha) {
      message.value = 'Ключ Alloha не задан';
      return;
    }
    if (!name || !token) {
      message.value = 'Плеер не доступен';
      return;
    }

    loading.value = true;
    try {
      const film = await loadAllohaFilmByToken(name, token, filmStore.apiAloha);
      src.value = film.iframe || '';
      if (!src.value) message.value = 'Плеер не доступен';
      if (film.kinopoiskId) emit('kinopoiskId', film.kinopoiskId);
    } catch (error) {
      src.value = '';
      message.value =
        error instanceof Error ? error.message : 'Плеер не доступен';
    } finally {
      loading.value = false;
    }
  });
</script>

<style scoped lang="scss">
  @use 'sass:color';

  .select-button {
    cursor: pointer;
    background: #5077bf;
    outline: none;
    padding: 10px;
    color: #fff;
    border-radius: 20px;
    border: none;
    font-size: 15px;
    font-weight: bold;

    &:hover {
      background: color.adjust(#5077bf, $lightness: -10%);
    }

    &.active {
      background-color: #071f3a;
    }

    &.loading {
      background: linear-gradient(
        110deg,
        rgba(#fff, 0.04) 8%,
        rgba(#fff, 0.15) 18%,
        rgba(#fff, 0.04) 33%
      );
      background-size: 400% 600%;
      animation: 0.5s shine linear infinite;
    }
  }

  .player-item {
    display: flex;
    flex-direction: column;
    color: #fff;

    iframe {
      width: 100%;
      height: 60vh;
      min-height: 450px;
      border: none;
      border-radius: 14px;
      display: block;
    }
  }

  @keyframes shine {
    to {
      background-position-x: -250%;
    }
  }
</style>
