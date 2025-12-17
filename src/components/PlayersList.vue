<template>
  <div>
    <div class="player-container">
      <div class="player-select">
        <div class="player-name-list">
          <button
            v-for="name of playerNames"
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
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { useFilmStore } from '@/stores/filmStore';
  import { players } from './const';

  const filmStore = useFilmStore();
  const route = useRoute();
  const filmId = Number(route.params.id) || 0;

  const playerNames: string[] = Object.keys(players);
  const playersData = ref<Record<string, any>>({});
  const loadingPlayers = ref<Record<string, boolean>>({});
  const selectedPlayer = ref<string | null>(null);
  const playerList = ref(null);

  const selectPlayer = async (name: string) => {
    selectedPlayer.value = name;
    const playerData = playersData.value[name];

    if (playerData.loaded || playerData.loading) {
      return;
    }

    await loadPlayer(name);
  };

  const getApiKey = (name: string) => {
    if (name === 'Alloha') return filmStore.apiAloha;
    if (name === 'HDVB') return filmStore.apiHDBV;
    return undefined;
  };

  const loadPlayer = async (name: string) => {
    loadingPlayers.value[name] = true;

    const playerByName = playersData.value[name];
    if (playerByName) {
      playerByName.loading = true;
    }

    try {
      const getSrc = players[name as keyof typeof players];
      const api = getApiKey(name);

      let iframeSrc =
        typeof getSrc === 'function' ? await getSrc(filmId, api || '') : null;

      if (playerByName) {
        playersData.value[name] = {
          ...playerByName,
          iframeSrc,
          loading: false,
          loaded: true,
          error: !iframeSrc,
        };
      }
    } catch (error) {
      console.error(`Ошибка загрузки плеера ${name}:`, error);

      if (playerByName) {
        playersData.value[name] = {
          ...playerByName,
          loading: false,
          loaded: true,
          error: true,
        };
      }
    } finally {
      loadingPlayers.value[name] = false;
    }
  };

  const initializePlayersData = () => {
    for (const name of playerNames) {
      playersData.value[name] = {
        name,
        iframeSrc: null,
        loading: false,
        loaded: false,
        error: false,
      };
    }
  };

  const preloadFirstPlayer = async () => {
    if (playerNames.length > 0) {
      selectedPlayer.value = playerNames[0] || '';
      await loadPlayer(playerNames[0] || '');
    }
  };

  onMounted(() => {
    if (playerList.value) {
      filmStore.setFilmPageId(filmId);
      initializePlayersData();
      preloadFirstPlayer();
    }
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
