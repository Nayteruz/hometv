<template>
  <div class="genres-wrap">
    <ul class="genres">
      <li
          :class="{active: +genre.id === +filmStore.genreIdStore, }"
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

<script>
import {useFilmStore} from '@/stores/filmStore'
import {onMounted, computed} from "vue";
import {useRoute, useRouter} from "vue-router";

export default {
  name: 'GenreList',
  setup() {
    const route = useRoute();
    const router = useRouter();
    const filmStore = useFilmStore();
    const routeGenre = computed(() => route.query.genres);

    const setGenre = (genreId) => {
      if(+filmStore.genreIdStore === +genreId) {
        filmStore.genreIdStore = null;
      } else {
        filmStore.genreIdStore = genreId;
      }
      filmStore.pageNum = 1;
      router.push({name: 'searchPage', query: filmStore.searchQueryWithGenre()});
    }

    async function getGenreList() {
      await filmStore.getGenreList();
    }

    onMounted(async () => {
      filmStore.genreIdStore = routeGenre.value
      await getGenreList();
    })

    return {
      filmStore,
      setGenre,
      routeGenre
    }
  }
}

</script>

<style scoped lang="scss">
.genres-wrap {
  margin: 5px 0;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
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
        background: lighten(#2c4f91, 15%);
      }
    }

    li.active {
      span {
        background: lighten(#2c4f91, 15%);
      }
    }
  }
}
</style>