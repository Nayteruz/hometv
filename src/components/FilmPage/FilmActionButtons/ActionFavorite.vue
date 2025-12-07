<template>
  <ButtonBlue
    :class="['button', { selected: isSelected }]"
    :size="20"
    @click="toggleFavorite"
    :disabled="isLoading"
  >
    <span class="loading-round" v-if="isLoading"></span>
    <IconFavorite /> Избранное
  </ButtonBlue>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { getFilmInfo } from '@/components/api.ts';
  import ButtonBlue from '@/components/ButtonBlue.vue';
  import IconFavorite from '@/components/icons/IconFavorite.vue';
  import { hasId } from '@/components/utils.ts';
  import { useFilmStore } from '@/stores/filmStore.ts';

  interface IActionFavoriteProps {
    id: number;
  }

  const props = defineProps<IActionFavoriteProps>();

  const filmStore = useFilmStore();
  const isSelected = computed(() => hasId(filmStore.favorites, props.id));
  const isLoading = ref(false);

  async function toggleFavorite() {
    if (!filmStore.user) {
      alert('Необходима авторизация');
      return;
    }
    isLoading.value = true;
    if (!isSelected.value) {
      const data = await getFilmInfo(props.id);
      await filmStore.addFavorite(await data);
    } else {
      await filmStore.removeFavorite(props.id);
    }
    isLoading.value = false;
  }
</script>

<style scoped>
  .button {
    position: relative;
  }

  .selected {
    svg {
      color: #cf0000;
    }

    &:hover {
      svg {
        color: #cf0000;
      }
    }
  }

  .loading-round {
    display: block;
    position: absolute;
    left: 18px;
    top: 50%;
    width: 30px;
    height: 30px;
    margin: -15px 0 0 -15px;
    border-radius: 50%;
    border: 3px solid #c77e7e;
    border-top-color: transparent;
    animation: spinner-border 0.75s linear infinite;
  }

  @keyframes spinner-border {
    to {
      transform: rotate(360deg);
    }
  }
</style>
