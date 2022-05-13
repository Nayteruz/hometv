<template>
  <h1>Избранные фильмы/мультики и тд</h1>
  <FIlmItem :items="favorites" :showPreload="showPreload"/>
  <h3 v-if="favorites.length == 0">Список пуст</h3>
</template>

<script>
import {mapState} from "pinia/dist/pinia";
import {useFilmStore} from "@/stores/filmStore";
import FIlmItem from "@/components/FIlmItem";

export default {
  name: "FavoritePage",
  components:{
    FIlmItem
  },
  computed: {
    ...mapState(useFilmStore, ['favorites']),
  },
}
</script>

<style scoped>
  h3 {
    color: #fff;
    margin-bottom: 20px;
  }
</style>