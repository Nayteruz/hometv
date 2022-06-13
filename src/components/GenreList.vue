<template>
  <div class="genres-wrap">
    <ul class="genres">
      <li :class="{active: +genre.id === +routeGenreId, }" v-for="genre in filmStore.genreListStore" :key="genre.id"><span @click="setGenre(genre)">{{ genre.genre }}</span></li>
    </ul>
  </div>
</template>

<script>
import { useFilmStore } from '@/stores/filmStore'
import {onMounted, computed, watch} from "vue";
import {useRoute, useRouter} from "vue-router";

export default {
  name:'GenreList',
  setup(){
    const filmStore = useFilmStore();
    const route = useRoute();
    const router = useRouter();
    const routeGenreId = computed(() => route.query.genres);

    watch(routeGenreId, newRouteGenreId => {
      filmStore.genreIdStore = newRouteGenreId
    })

    function setGenre(genre){
      let qr = {};
      if(filmStore.searchQueryStore){
        qr.q = filmStore.searchQueryStore;
      }
      if(!filmStore.genreIdStore || +filmStore.genreIdStore !== +genre.id){
        qr.genres = genre.id;
      }
      filmStore.setPageNum(1);
      filmStore.genreIdStore = qr.genres;
      router.push({name:'searchPage', query:qr});
    }

    async function getGenreList(){
      await filmStore.getGenreList();
    }

    onMounted(async ()=>{
      await getGenreList();
    })

    return {
      filmStore,
      routeGenreId,
      setGenre
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
      gap:2px 4px;
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
          background:lighten(#2c4f91, 15%);
        }
      }
      li.active {
        span {
          background:lighten(#2c4f91, 15%);
        }
      }
    }
  }
</style>