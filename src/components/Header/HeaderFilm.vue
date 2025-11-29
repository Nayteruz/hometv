<template>
  <header>
    <HomeButton />
    <LastViewButton />
    <FavoriteButton />
    <SearchForm :visibleSearch="isSearchVisible" />
    <RegistrationWrap />
    <MenuPopup />
    <ButtonBlue
      @click="toggleSearch"
      :size="20"
      :class="['search-popup-btn', { opened: isSearchVisible }]"
    >
      <IconSearchMinus v-if="isSearchVisible" />
      <IconSearchPlus v-else />
    </ButtonBlue>
  </header>
</template>

<script setup>
  import { useRoute } from 'vue-router';
  import { computed, ref } from 'vue';
  import HomeButton from './HomeButton.vue';
  import RegistrationWrap from '@/components/registration/RegistrationWrap.vue';
  import LastViewButton from './LastViewButton.vue';
  import FavoriteButton from './FavoriteButton.vue';
  import SearchForm from '../SearchForm/SearchForm.vue';
  import ButtonBlue from '../ButtonBlue.vue';
  import IconSearchPlus from '../icons/IconSearchPlus.vue';
  import IconSearchMinus from '../icons/IconSearchMinus.vue';
  import MenuPopup from './MenuPopup.vue';

  const route = useRoute();
  const searchQueryRoute = computed(() => route.query.q);
  const isSearchVisible = ref(
    searchQueryRoute.value | (route.name === 'searchPage') ? true : false
  );

  const toggleSearch = () => {
    isSearchVisible.value = !isSearchVisible.value;
  };
</script>

<style scoped lang="scss">
  header {
    display: grid;
    grid-template-columns: auto auto auto 1fr 45px 45px;
    align-items: center;
    gap: 5px;
    position: sticky;
    z-index: 999;
    top: -9px;
    padding: 10px 15px 5px;

    @media all and (max-width: 768px) {
      padding: 5px;
      background-color: #163060;
      top: 0;
    }

    @media all and (max-width: 500px) {
      grid-template-columns: 1fr auto auto auto 35px 35px;
    }
  }

  .search-popup-btn {
    font-size: 0;
    line-height: 0;
    display: none;

    @media all and (max-width: 500px) {
      display: block;
    }

    &:hover {
      svg {
        color: inherit;
      }
    }
  }
</style>
