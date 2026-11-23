<template>
  <div class="kinovibe">
    <p v-if="isLoading">Загрузка...</p>
    <p v-else-if="!data">Серии не найдены</p>
    <template v-else>
      <div v-if="data.type === 'tv'" class="kinovibe__selects">
        <SelectDropdown
          :model-value="seasonIndex"
          :options="seasonOptions"
          @update:model-value="onSeasonChange"
        />
        <SelectDropdown v-model="episodeIndex" :options="episodeOptions" />
      </div>
      <video v-if="currentFile" ref="videoEl" playsinline></video>
    </template>
  </div>
</template>

<script setup lang="ts">
  import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import { useQuery } from '@tanstack/vue-query';
  import Plyr from 'plyr';
  import 'plyr/dist/plyr.css';
  import SelectDropdown from '@/components/FilmPage/SelectDropdown.vue';
  import { episodeTitle, fetchKinovibe } from '@/components/kinovibeApi';
  import { getLastWatched, setLastWatched } from '@/components/kinovibeStorage';

  const route = useRoute();
  const filmId = Number(route.params.id) || 0;

  const { data, isLoading } = useQuery({
    queryKey: ['kinovibe', filmId],
    queryFn: () => fetchKinovibe(filmId),
    enabled: filmId > 0,
  });

  const seasonIndex = ref(0);
  const episodeIndex = ref(0);
  const videoEl = ref<HTMLVideoElement | null>(null);
  let player: Plyr | null = null;

  const seasonOptions = computed(() => {
    const result = data.value;
    if (!result || result.type !== 'tv') return [];
    return result.seasons.map((item, index) => ({
      value: index,
      label: `Сезон ${item.season}`,
    }));
  });

  const episodes = computed(() => {
    const result = data.value;
    if (!result || result.type !== 'tv') return [];
    return result.seasons[seasonIndex.value]?.episodes ?? [];
  });

  const episodeOptions = computed(() =>
    episodes.value.map((episode, index) => ({
      value: index,
      label: episodeTitle(episode.comment),
    }))
  );

  const currentFile = computed(() => {
    const result = data.value;
    if (!result) return '';
    if (result.type === 'movie') return result.file;
    return episodes.value[episodeIndex.value]?.file ?? '';
  });

  const onSeasonChange = (index: number) => {
    seasonIndex.value = index;
    episodeIndex.value = 0;
  };

  watch(
    data,
    (result) => {
      if (result?.type !== 'tv') return;
      const saved = getLastWatched(filmId);
      if (!saved) return;

      const index = result.seasons.findIndex(
        (item) => item.season === saved.season
      );
      if (index < 0) return;

      seasonIndex.value = index;
      const count = result.seasons[index]?.episodes.length ?? 0;
      episodeIndex.value = saved.episode < count ? saved.episode : 0;
    },
    { immediate: true }
  );

  watch([seasonIndex, episodeIndex], ([season, episode]) => {
    const result = data.value;
    if (result?.type !== 'tv') return;
    const seasonNumber = result.seasons[season]?.season;
    if (seasonNumber === undefined) return;
    setLastWatched(filmId, { season: seasonNumber, episode });
  });

  watch(
    currentFile,
    async (file) => {
      if (!file) return;
      await nextTick();
      if (!videoEl.value) return;

      if (!player) {
        player = new Plyr(videoEl.value, {
          i18n: {
            play: 'Воспроизвести',
            pause: 'Пауза',
            mute: 'Выключить звук',
            unmute: 'Включить звук',
            enterFullscreen: 'Полноэкранный режим',
            exitFullscreen: 'Выйти из полноэкранного режима',
            settings: 'Настройки',
            speed: 'Скорость',
            normal: 'Обычная',
            pip: 'Картинка в картинке',
            volume: 'Громкость',
            currentTime: 'Текущее время',
            duration: 'Длительность',
          },
        });
      }

      player.source = {
        type: 'video',
        sources: [{ src: file, type: 'video/mp4' }],
      };
    },
    { immediate: true }
  );

  onBeforeUnmount(() => {
    player?.destroy();
    player = null;
  });
</script>

<style scoped lang="scss">
  .kinovibe {
    display: flex;
    flex-direction: column;
    gap: 10px;

    :deep(.plyr) {
      --plyr-color-main: #5077bf;
      aspect-ratio: 16 / 9;
      border-radius: 14px;
      overflow: hidden;
    }

    :deep(.plyr video) {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .kinovibe__selects {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
</style>
