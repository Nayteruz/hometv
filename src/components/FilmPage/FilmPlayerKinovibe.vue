<template>
  <div class="kinovibe">
    <p v-if="isLoading">Загрузка...</p>
    <p v-else-if="!data">Серии не найдены</p>
    <div v-else-if="currentFile" class="kinovibe__player">
      <video ref="videoEl" playsinline></video>
      <div
        v-if="data.type === 'tv'"
        class="kinovibe__chrome-top"
        :class="{ 'kinovibe__chrome-top--hidden': !chromeVisible }"
      >
        <SelectDropdown
          :model-value="seasonIndex"
          :options="seasonOptions"
          @update:model-value="onSeasonChange"
        />
        <SelectDropdown v-model="episodeIndex" :options="episodeOptions" />
      </div>
    </div>
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
  const SINGLE_CLICK_DELAY_MS = 220;

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
  const chromeVisible = ref(true);
  let player: Plyr | null = null;
  let prevEpBtn: HTMLButtonElement | null = null;
  let nextEpBtn: HTMLButtonElement | null = null;

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

  const syncEpisodeControls = () => {
    if (prevEpBtn) prevEpBtn.disabled = !canPrevEpisode.value;
    if (nextEpBtn) nextEpBtn.disabled = !canNextEpisode.value;
  };

  const bindZoneAction = (button: HTMLButtonElement, action: () => void) => {
    let clickTimer: ReturnType<typeof setTimeout> | undefined;

    button.addEventListener('click', (event) => {
      event.stopPropagation();
      if (clickTimer) clearTimeout(clickTimer);
      clickTimer = setTimeout(() => {
        action();
        clickTimer = undefined;
      }, SINGLE_CLICK_DELAY_MS);
    });

    button.addEventListener('dblclick', (event) => {
      event.stopPropagation();
      event.preventDefault();
      if (clickTimer) {
        clearTimeout(clickTimer);
        clickTimer = undefined;
      }
      action();
    });
  };

  const mountTapZones = (plyr: Plyr) => {
    const wrapper = plyr.elements.container?.querySelector(
      '.plyr__video-wrapper'
    );
    if (!wrapper || wrapper.querySelector('.kinovibe__tap-zones')) return;

    const stopFullscreenDblClick = (event: Event) => {
      event.stopPropagation();
      event.preventDefault();
    };

    wrapper.addEventListener('dblclick', stopFullscreenDblClick, true);
    plyr.media.addEventListener('dblclick', stopFullscreenDblClick, true);

    const zones = document.createElement('div');
    zones.className = 'kinovibe__tap-zones';

    const createZone = (part: 'back' | 'center' | 'forward', label: string) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `kinovibe__tap-zone kinovibe__tap-zone--${part}`;
      btn.setAttribute('aria-label', label);
      return btn;
    };

    const back = createZone('back', `Назад ${SEEK_SECONDS} сек`);
    const center = createZone('center', 'Пауза');
    const forward = createZone('forward', `Вперёд ${SEEK_SECONDS} сек`);

    bindZoneAction(back, () => plyr.rewind(SEEK_SECONDS));
    bindZoneAction(center, () => plyr.togglePlay());
    bindZoneAction(forward, () => plyr.forward(SEEK_SECONDS));

    zones.append(back, center, forward);
    wrapper.appendChild(zones);
  };

  const mountEpisodeControls = (plyr: Plyr) => {
    if (data.value?.type !== 'tv') return;

    const controls = plyr.elements.controls;
    const playBtn = controls?.querySelector(
      'button[data-plyr="play"]'
    ) as HTMLButtonElement | null;
    if (!controls || !playBtn || controls.querySelector('[data-kinovibe-ep]')) {
      return;
    }

    const makeEpButton = (id: 'prev' | 'next', label: string, icon: string) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'plyr__controls__item plyr__control kinovibe__ep-ctrl';
      btn.setAttribute('data-kinovibe-ep', id);
      btn.setAttribute('aria-label', label);
      btn.innerHTML = `<span class="kinovibe__ep-ctrl-icon" aria-hidden="true">${icon}</span>`;
      return btn;
    };

    prevEpBtn = makeEpButton('prev', 'Предыдущая серия', '‹');
    nextEpBtn = makeEpButton('next', 'Следующая серия', '›');

    prevEpBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      prevEpisode();
    });
    nextEpBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      nextEpisode();
    });

    playBtn.insertAdjacentElement('beforebegin', prevEpBtn);
    playBtn.insertAdjacentElement('afterend', nextEpBtn);
    syncEpisodeControls();
  };

  const bindChromeVisibility = (plyr: Plyr) => {
    chromeVisible.value = true;
    plyr.on('pause', () => {
      chromeVisible.value = true;
    });
    plyr.on('controlsshown', () => {
      chromeVisible.value = true;
    });
    plyr.on('controlshidden', () => {
      chromeVisible.value = false;
    });
  };

  watch([canPrevEpisode, canNextEpisode], syncEpisodeControls);

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
            'play',
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
          if (!player) return;
          mountTapZones(player);
          mountEpisodeControls(player);
          bindChromeVisibility(player);
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
    prevEpBtn = null;
    nextEpBtn = null;
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

    :deep(.kinovibe__ep-ctrl) {
      padding-left: 10px;
      padding-right: 10px;
    }

    :deep(.kinovibe__ep-ctrl:disabled) {
      opacity: 0.35;
    }

    :deep(.kinovibe__ep-ctrl-icon) {
      font-size: 18px;
      line-height: 1;
    }
  }

  .kinovibe__player {
    position: relative;
    width: 100%;
  }

  .kinovibe__chrome-top {
    position: absolute;
    top: 12px;
    left: 12px;
    z-index: 4;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    max-width: calc(100% - 24px);
    opacity: 1;
    transition: opacity 0.3s ease;
    pointer-events: auto;

    &--hidden {
      opacity: 0;
      pointer-events: none;
    }

    :deep(.select) {
      min-width: 88px;
      max-width: min(148px, 36vw);
    }

    :deep(.select__item) {
      padding: 4px 8px;
      font-size: 12px;
      line-height: 1.2;
      border-radius: 6px;
      background: rgba(44, 79, 145, 0.45);
      backdrop-filter: blur(6px);

      svg {
        width: 14px;
        height: 14px;
      }

      &:hover {
        background: rgba(7, 31, 58, 0.62);
      }
    }

    :deep(.select__drop) {
      z-index: 30;
      max-height: 200px;
      background: rgba(19, 40, 77, 0.88);
      backdrop-filter: blur(8px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
    }

    :deep(.select__drop-item) {
      padding: 6px 8px;
      font-size: 12px;
    }
  }
</style>