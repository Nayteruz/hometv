<template>
  <div class="wrapper">
    <HeaderFilm :key="$route.fullPath" />
    <GenreList />
    <main class="content">
      <RouterView v-slot="{ Component }">
        <KeepAlive include="MainList">
          <component :is="Component" :key="$route.fullPath"></component>
        </KeepAlive>
      </RouterView>
    </main>
    <ToTop />
    <NavigationByKeys :key="$route.fullPath" />
  </div>
</template>

<script setup>
  import { useFilmStore } from '@/stores/filmStore';
  import HeaderFilm from '@/components/Header/HeaderFilm.vue';
  import GenreList from '@/components/GenreList.vue';
  import ToTop from '@/components/ToTop.vue';
  import NavigationByKeys from './components/NavigationByKeys.vue';
  import { onBeforeUnmount, onMounted } from 'vue';
  const filmStore = useFilmStore();

  const clickOutside = (e) => {
    if (e.target.closest('.search-form')) {
      return;
    }
    filmStore.setShowLastSearchList(false);
  };

  onMounted(() => {
    document.addEventListener('click', clickOutside);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('click', clickOutside);
  });
</script>

<style lang="scss">
  @use '@/variables' as *;
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  #app {
    padding: 20px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    @media all and (max-width: 1024px) {
      padding: 0;
    }
  }

  body,
  html {
    height: 100%;
    min-height: 100%;
  }
  body {
    background: #101421;
  }

  h1 {
    color: #fff;
    font-size: 30px;
    margin: 30px 15px 30px;

    @media all and (max-width: 500px) {
      margin-left: 5px;
      margin-right: 5px;
    }
  }

  h3 {
    font-size: 20px;
    color: #fff;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .wrapper {
    background: var(--color-main-dark);
    border-radius: 10px;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    margin: 0 auto 0;
    max-width: var(--wrapper-width);
    position: relative;
    flex: 1;

    @media all and (max-width: 1024px) {
      border-radius: 0;
    }
  }

  .content {
    padding: 0 15px 30px;

    @media all and (max-width: 768px) {
      padding: 0 5px 10px;
    }
  }

  .film__init > div {
    min-height: 450px !important;
    max-width: 100% !important;
    width: 100% !important;
  }

  .icon {
    height: 32px;
    width: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .icon svg {
    max-height: 80%;
    max-width: 80%;
  }
</style>
