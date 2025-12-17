<template>
  <div class="genres-wrap">
    <ul class="genres">
      <li
        :class="{ active: isActive(genre.id) }"
        v-for="genre in filmStore.genreListStore"
        :key="genre.id"
      >
        <span @click="setGenre(genre.id)">
          {{ genre.genre }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { useFilmStore } from '@/stores/filmStore';
  import { onMounted, computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';

  const route = useRoute();
  const router = useRouter();
  const filmStore = useFilmStore();
  const routeGenre = computed(() => Number(route.query.genres));

  const isActive = (genreId: number) => {
    return Number(filmStore.genreIdStore) === Number(genreId);
  };

  const setGenre = (genreId: number) => {
    if (Number(filmStore.genreIdStore) === Number(genreId)) {
      filmStore.genreIdStore = null;
    } else {
      filmStore.genreIdStore = genreId;
    }
    filmStore.pageNum = 1;
    router.push({
      name: 'searchPage',
      query: filmStore.searchQueryWithGenre(),
    });
  };

  async function getGenreList() {
    await filmStore.getGenreList();
  }

  onMounted(async () => {
    filmStore.genreIdStore = routeGenre.value;
    await getGenreList();
  });
</script>

<style scoped lang="scss">
  @use 'sass:color';

  .genres-wrap {
    margin: 0px 15px 5px;

    @media all and (max-width: 768px) {
      margin: 5px 5px;
    }

    ul {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 2px 4px;

      span {
        display: block;
        cursor: pointer;
        background: #2c4f91;
        padding: 3px 5px;
        color: #fff;
        border-radius: 5px;
        font-size: 16px;
        user-select: none;

        &:hover {
          background: color.adjust(#2c4f91, $lightness: 15%);
        }
      }

      li.active {
        span {
          background: color.adjust(#2c4f91, $lightness: 15%);
        }
      }
    }
  }
</style>
