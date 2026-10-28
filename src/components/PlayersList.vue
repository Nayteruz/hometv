<template>
  <div>
    <div class="player-container">
      <div class="player-select">
        <div class="player-name-list">
          <AlternativePlayer
            v-if="alternative"
            :active="selectedPlayer === LEAD_PLAYER"
            @select="selectLead"
            @kinopoisk-id="kpFromAlternative = $event"
          />
          <button
            v-if="!alternative"
            v-for="name of PLAYER_NAMES"
            :key="name"
            :class="{
              'select-button': true,
              active: name === selectedPlayer,
              loading: loadingPlayers[name],
            }"
            @click="selectPlayer(name)"
          >
            {{ name }}
          </button>
        </div>
      </div>
      <div ref="playerList" class="player-list">
        <div
          v-for="item of playersData"
          :key="item.name"
          :class="{ 'player-item': true, active: item.name === selectedPlayer }"
        >
          <div v-if="item.name === selectedPlayer">
            <iframe
              v-if="item.iframeSrc"
              :src="item.iframeSrc"
              allowfullscreen
              loading="lazy"
              :title="`Плеер ${item.name} для КиноПоиск ID ${filmId}`"
            ></iframe>
            <div v-else-if="item.loading">Загрузка плеера...</div>
            <div v-else>Плеер не доступен</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, onMounted, provide, ref, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import { useFilmStore } from '@/stores/filmStore';
  import AlternativePlayer, {
    playersFrameKey,
  } from '@/components/FilmPage/AlternativePlayer.vue';
  import { players, API_PLAYERS, API_KEY_MAP, PLAYER_NAMES } from './const';
  import { extractIframeSrc } from './utils';
  import type { IPlayerData, IPlayerLabel } from '@/types';

  const LEAD_PLAYER = 'alloha-direct';

  const props = defineProps<{
    alternative?: boolean;
  }>();

  const filmStore = useFilmStore();
  const route = useRoute();
  const playerList = ref<HTMLElement | null>(null);
  const kpFromAlternative = ref(0);
  provide(playersFrameKey, playerList);
  const filmId = computed(
    () => kpFromAlternative.value || Number(route.params.id) || 0,
  );

  const playersData = ref<IPlayerData[]>([]);
  const loadingPlayers = ref<Record<IPlayerLabel, boolean>>(
    {} as Record<IPlayerLabel, boolean>,
  );
  const selectedPlayer = ref<IPlayerLabel | typeof LEAD_PLAYER | null>(null);

  const getPlayerByName = (name: IPlayerLabel) =>
    playersData.value.find((p) => p.name === name);

  const selectLead = () => {
    selectedPlayer.value = LEAD_PLAYER;
  };

  const selectPlayer = async (name: IPlayerLabel) => {
    selectedPlayer.value = name;
    const playerData = getPlayerByName(name);

    if (!playerData || playerData.loaded || playerData.loading) {
      return;
    }

    await loadPlayer(name);
  };

  const getApiKey = (name: IPlayerLabel): string | undefined => {
    const key = API_KEY_MAP[name];

    if (!key) {
      return undefined;
    }

    const value = filmStore[key];
    return typeof value === 'string' ? value : undefined;
  };

  const loadPlayer = async (name: IPlayerLabel | undefined) => {
    if (!name) {
      return;
    }

    loadingPlayers.value[name] = true;

    const playerByName = getPlayerByName(name);
    if (playerByName) {
      playerByName.loading = true;
    }

    try {
      const getSrc = players[name] as (id: number, api?: string) => string;
      const api = getApiKey(name);
      const url = getSrc(filmId.value, api);

      let iframeSrc: string | null = null;
      if (API_PLAYERS.has(name)) {
        const res = await fetch(url);
        const data = await res.json();
        iframeSrc = extractIframeSrc(name, data);
      } else {
        iframeSrc = url || null;
      }

      if (playerByName) {
        playerByName.iframeSrc = iframeSrc;
        playerByName.loading = false;
        playerByName.loaded = true;
        playerByName.error = !iframeSrc;
      }
    } catch (error) {
      console.error(`Ошибка загрузки плеера ${name}:`, error);

      if (playerByName) {
        playerByName.loading = false;
        playerByName.loaded = true;
        playerByName.error = true;
      }
    } finally {
      loadingPlayers.value[name] = false;
    }
  };

  const initializePlayersData = () => {
    playersData.value = PLAYER_NAMES.map((name) => ({
      name,
      iframeSrc: null,
      loading: false,
      loaded: false,
      error: false,
    }));
  };

  const preloadFirstPlayer = async () => {
    if (props.alternative) {
      selectedPlayer.value = LEAD_PLAYER;
      return;
    }
    selectedPlayer.value = PLAYER_NAMES[0] || null;
    await loadPlayer(PLAYER_NAMES[0]);
  };

  watch(filmId, (id) => filmStore.setFilmPageId(id));

  onMounted(() => {
    filmStore.setFilmPageId(filmId.value);
    initializePlayersData();
    preloadFirstPlayer();
  });
</script>

<style scoped lang="scss">
  @use 'sass:color';

  .player-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .player-select {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .player-name-list {
    display: flex;
    flex-wrap: wrap;
    gap: 3px 5px;
  }

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
    cursor: pointer;

    &:hover {
      background: color.adjust(#5077bf, $lightness: -10%);
    }

    &.active {
      background-color: #071f3a;
    }
  }

  .player-item {
    display: none;
    flex-direction: column;

    iframe {
      width: 100%;
      height: 60vh;
      min-height: 450px;
      border: none;
      border-radius: 14px;
      display: block;
      opacity: 1 !important;
    }

    &.active {
      display: flex;
    }
  }

  .loading {
    background: rgba(#fff, 0.1);
    background: linear-gradient(
      110deg,
      rgba(#fff, 0.04) 8%,
      rgba(#fff, 0.15) 18%,
      rgba(#fff, 0.04) 33%
    );
    background-size: 400% 600%;
    animation: 0.5s shine linear infinite;
  }

  @keyframes shine {
    to {
      background-position-x: -250%;
    }
  }
</style>
