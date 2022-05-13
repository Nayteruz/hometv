<template>
  <h1>Избранные фильмы/мультики и тд</h1>
  <FIlmItem :items="favorites" :showPreload="showPreload"/>
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

</style>