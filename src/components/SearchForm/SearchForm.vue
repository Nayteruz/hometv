<script setup lang="ts">
  import { useFilmStore } from '@/stores/filmStore';
  import { useUserListsStore } from '@/stores/userListsStore';
  import { onMounted, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import ButtonBlue from '../ButtonBlue.vue';
  import SearchPopup from './SearchPopup.vue';

  const props = withDefaults(defineProps<{ visibleSearch?: boolean }>(), {
    visibleSearch: false,
  });

  const route = useRoute();
  const router = useRouter();
  const filmStore = useFilmStore();
  const filmLists = useUserListsStore();

  const localSearchText = ref('');
  const searchInput = ref<HTMLInputElement | null>(null);

  onMounted(() => {
    localSearchText.value = String(route.query.q || '');
    filmStore.setSearchInputText(localSearchText.value);
  });

  const searchSubmit = () => {
    const value = searchInput.value?.value ?? localSearchText.value;
    const trimmed = value.trim();

    filmStore.setSearchInputText(trimmed);
    filmLists.addLastSearchList(trimmed);
    filmStore.pageNum = 1;
    filmStore.setShowLastSearchList(false);

    router.push({
      name: 'searchPage',
      query: filmStore.searchQuery,
    });
  };

  const showLastList = () => {
    filmStore.setShowLastSearchList(true);
    searchInput.value?.focus();
  };

  const clearInput = () => {
    localSearchText.value = '';
    searchInput.value?.focus();
  };

  const onHistoryClick = (value: string) => {
    localSearchText.value = value;
    searchSubmit();
  };
</script>

<style scoped lang="scss">
  .search-form {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 5px;
    width: 100%;
    position: relative;

    @media all and (max-width: 500px) {
      grid-column: 1 / 7;
      order: 5;
      display: none;
    }

    &.show {
      display: grid;
    }

    input {
      display: block;
      width: 100%;
      outline: none;
      background: #bedaed;
      color: #333;
      border: 2px #3a6891 solid;
      border-radius: 5px;
      padding: 5px;
      margin: 0;
      font-size: 16px;
      padding-right: 27px;

      &:focus {
        background: #96c3e2;
      }
    }
  }

  .clear-input {
    position: absolute;
    right: 2px;
    top: 2px;
    bottom: 2px;
    width: 30px;
    height: auto;
    border-radius: 0 2px 2px 0;
    display: none;
    align-items: center;
    justify-content: center;
    background: rgba(82, 135, 183, 0.5);
    cursor: pointer;
    padding: 0;
    z-index: 99;

    &.show {
      display: flex;
    }
  }

  .input-wrap {
    position: relative;
  }
</style>

<template>
  <form
    action="#"
    :class="['search-form', { show: props.visibleSearch }]"
    @submit.prevent="searchSubmit"
  >
    <div class="input-wrap">
      <input
        ref="searchInput"
        v-model="localSearchText"
        autocomplete="off"
        type="text"
        @keydown.enter.prevent="searchSubmit"
        @focus="showLastList"
        placeholder="Название фильма / ID КиноПоиск"
        name="keyword"
      />
      <ButtonBlue
        :class="['clear-input', { show: localSearchText }]"
        @click="clearInput"
        >×</ButtonBlue
      >
    </div>
    <ButtonBlue type="submit" :border="true">Найти</ButtonBlue>
    <SearchPopup @click-last-search="onHistoryClick" />
  </form>
</template>
