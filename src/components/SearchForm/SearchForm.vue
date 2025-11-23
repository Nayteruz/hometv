<template>
  <form
    action="#"
    :class="['search-form', { show: props.visibleSearch }]"
    @submit.prevent="searchSubmit"
  >
    <div class="input-wrap">
      <input
        ref="searchInput"
        autocomplete="off"
        type="text"
        @keyup.enter="searchSubmit"
        @focus="showLastList"
        placeholder="Название фильма / ID КиноПоиск"
        v-model.trim="filmStore.searchQueryStore"
        name="keyword"
      />
      <ButtonBlue
        :class="['clear-input', { show: filmStore.searchQueryStore }]"
        @click="clearInput"
        >×</ButtonBlue
      >
    </div>
    <ButtonBlue type="submit" :border="true">Найти</ButtonBlue>
    <SearchPopup />
  </form>
</template>

<script setup>
  import { useFilmStore } from '@/stores/filmStore';
  import { computed, onMounted, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import ButtonBlue from '../ButtonBlue.vue';
  import SearchPopup from './SearchPopup.vue';

  const props = defineProps({
    visibleSearch: {
      type: Boolean,
      default: false,
    },
  });

  const route = useRoute();
  const router = useRouter();
  const filmStore = useFilmStore();

  onMounted(() => {
    filmStore.searchQueryStore = searchQueryRoute.value;
  });

  const searchQueryRoute = computed(() => route.query.q);
  const searchInput = ref(null);

  const searchSubmit = async () => {
    filmStore.addLastSearchList(filmStore.searchQueryStore);
    filmStore.pageNum = 1;
    router.push({
      name: 'searchPage',
      query: filmStore.searchQueryWithGenre(),
    });
    filmStore.setShowLastSearchList(false);
  };

  const showLastList = () => {
    filmStore.setShowLastSearchList(true);
  };

  const clearInput = () => {
    filmStore.searchQueryStore = '';
    searchInput.value.focus();
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
    right: 5px;
    top: 50%;
    margin-top: -8px;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    display: none;
    align-items: center;
    justify-content: center;
    background: rgba(82, 135, 183, 0.5);
    cursor: pointer;
    z-index: 99;

    &.show {
      display: flex;
    }
  }

  .input-wrap {
    position: relative;
  }
</style>
