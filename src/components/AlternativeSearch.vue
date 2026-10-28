<template>
  <section class="alloha">
    <ButtonBlue type="button" :disabled="allohaLoading" @click="searchAlloha">
      Искать в Alloha
    </ButtonBlue>
    <p v-if="allohaLoading" class="alloha-status">Ищем в Alloha…</p>
    <p v-else-if="allohaError" class="alloha-status">{{ allohaError }}</p>
    <p v-else-if="allohaDone && allohaItems.length === 0" class="alloha-status">
      В Alloha ничего не найдено
    </p>
  </section>
  <FilmList v-if="allohaItems.length" :items="allohaItems" :isRating="false" />
</template>

<script setup lang="ts">
  import { computed, ref, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import { useFilmStore } from '@/stores/filmStore';
  import ButtonBlue from '@/components/ButtonBlue.vue';
  import FilmList from '@/components/FilmList.vue';
  import { searchAllohaByName } from '@/components/allohaSearch';
  import type { IFilmEntity } from '@/types';

  const route = useRoute();
  const filmStore = useFilmStore();
  const query = computed(() => {
    const raw = route.query.q;
    const value = Array.isArray(raw) ? raw[0] : raw;
    return typeof value === 'string' ? value.trim() : '';
  });
  const allohaItems = ref<IFilmEntity[]>([]);
  const allohaLoading = ref(false);
  const allohaError = ref('');
  const allohaDone = ref(false);
  const allohaQuery = ref('');

  watch(
    () => query.value,
    () => {
      allohaItems.value = [];
      allohaError.value = '';
      allohaDone.value = false;
      allohaQuery.value = '';
    },
  );

  const searchAlloha = async () => {
    const name = query.value;
    if (!name || allohaLoading.value) return;
    if (allohaQuery.value === name && allohaDone.value && !allohaError.value) {
      return;
    }

    allohaLoading.value = true;
    allohaError.value = '';
    allohaDone.value = false;
    allohaItems.value = [];

    try {
      if (!filmStore.apiAloha) {
        throw new Error('Ключ Alloha не задан');
      }
      allohaItems.value = await searchAllohaByName(name, filmStore.apiAloha);
      allohaQuery.value = name;
    } catch (error) {
      allohaItems.value = [];
      allohaError.value =
        error instanceof Error ? error.message : 'Не удалось связаться с Alloha';
    } finally {
      allohaDone.value = true;
      allohaLoading.value = false;
    }
  };
</script>

<style scoped lang="scss">
  .alloha {
    margin: 0 15px 20px;
    color: #fff;

    @media all and (max-width: 500px) {
      margin-left: 5px;
      margin-right: 5px;
    }
  }

  .alloha-status {
    margin-top: 12px;
    color: #a6d6f7;
  }
</style>
