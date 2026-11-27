<template>
  <div class="kinovibe">
    <p v-if="isLoading">Загрузка...</p>
    <p v-else-if="!data">Серии не найдены</p>
    <template v-else>
      <div v-if="data.type === 'tv'" class="kinovibe__selects">
        <button
          type="button"
          class="kinovibe__ep-nav"
          :disabled="!canPrevEpisode"
          aria-label="Предыдущая серия"
          @click="prevEpisode"
        >
          ‹
        </button>
        <SelectDropdown
          :model-value="seasonIndex"
          :options="seasonOptions"
          @update:model-value="onSeasonChange"
        />
        <SelectDropdown v-model="episodeIndex" :options="episodeOptions" />
        <button
          type="button"
          class="kinovibe__ep-nav"
          :disabled="!canNextEpisode"
          aria-label="Следующая серия"
          @click="nextEpisode"
        >
          ›
        </button>
      </div>
      <div v-if="currentFile" class="kinovibe__player">
        <video ref="videoEl" playsinline></video>
      </div>
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

  const SEEK_SECONDS = 10;

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

  const canPrevEpisode = computed(() => {
    const result = data.value;
    if (result?.type !== 'tv') return false;
    return seasonIndex.value > 0 || episodeIndex.value > 0;
  });

  const canNextEpisode = computed(() => {
    const result = data.value;
    if (result?.type !== 'tv') return false;
    const lastSeason = result.seasons.length - 1;
    if (lastSeason < 0) return false;
    const lastEpisode = result.seasons[lastSeason]?.episodes.length ?? 0;
    if (seasonIndex.value < lastSeason) return true;
    return episodeIndex.value < lastEpisode - 1;
  });

  const prevEpisode = () => {
    if (!canPrevEpisode.value) return;
    if (episodeIndex.value > 0) {
      episodeIndex.value -= 1;
      return;
    }
    const result = data.value;
    if (result?.type !== 'tv') return;
    seasonIndex.value -= 1;
    const count = result.seasons[seasonIndex.value]?.episodes.length ?? 0;
    episodeIndex.value = Math.max(0, count - 1);
  };

  const nextEpisode = () => {
    if (!canNextEpisode.value) return;
    const epsInSeason = episodes.value.length;
    if (episodeIndex.value < epsInSeason - 1) {
      episodeIndex.value += 1;
      return;
    }
    seasonIndex.value += 1;
    episodeIndex.value = 0;
  };

  const mountTapZones = (plyr: Plyr) => {
    const wrapper = plyr.elements.container?.querySelector(
      '.plyr__video-wrapper'
    );
    if (!wrapper || wrapper.querySelector('.kinovibe__tap-zones')) return;

    const zones = document.createElement('div');
    zones.className = 'kinovibe__tap-zones';

    const createZone = (part: 'back' | 'center' | 'forward', label: string) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `kinovibe__tap-zone kinovibe__tap-zone--${part}`;
      btn.setAttribute('aria-label', label);
      btn.addEventListener('click', (event) => {
        event.stopPropagation();
        if (part === 'back') plyr.rewind(SEEK_SECONDS);
        else if (part === 'forward') plyr.forward(SEEK_SECONDS);
        else plyr.togglePlay();
      });
      return btn;
    };

    zones.append(
      createZone('back', `Назад ${SEEK_SECONDS} сек`),
      createZone('center', 'Пауза'),
      createZone('forward', `Вперёд ${SEEK_SECONDS} сек`)
    );
    wrapper.appendChild(zones);
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
          seekTime: SEEK_SECONDS,
          controls: [
            'play-large',
            'rewind',
            'play',
            'fast-forward',
            'progress',
            'current-time',
            'mute',
            'volume',
            'settings',
            'pip',
            'fullscreen',
          ],
          i18n: {
            play: 'Воспроизвести',
            pause: 'Пауза',
            rewind: `Назад ${SEEK_SECONDS} сек`,
            fastForward: `Вперёд ${SEEK_SECONDS} сек`,
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
        player.on('ready', () => {
          if (player) mountTapZones(player);
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

    :deep(.kinovibe__tap-zones) {
      position: absolute;
      inset: 0;
      display: flex;
      z-index: 2;
      pointer-events: none;
    }

    :deep(.kinovibe__tap-zone) {
      flex: 1;
      margin: 0;
      padding: 0;
      border: 0;
      background: transparent;
      cursor: pointer;
      pointer-events: auto;
    }

    :deep(.kinovibe__tap-zone:active) {
      background: rgba(255, 255, 255, 0.06);
    }
  }

  .kinovibe__player {
    width: 100%;
  }

  .kinovibe__selects {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
  }

  .kinovibe__ep-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: 0;
    border-radius: 10px;
    background: var(--color-main-light, #2a4a7a);
    color: #fff;
    font-size: 22px;
    line-height: 1;
    cursor: pointer;

    &:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }
  }
</style>
