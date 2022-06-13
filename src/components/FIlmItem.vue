<template>
  <div class="films__wrap">
    <ul class="films__list">
      <FilmItemItem :itemFilm="film" v-for="(film) in items" :key="film"/>
      <PreloadCards v-if="showPreload"/>
    </ul>
  </div>
</template>

<script>
import FilmItemItem from "@/components/FilmItemItem.vue";
import PreloadCards from "@/components/PreloadCards.vue";
export default {
  components: {PreloadCards, FilmItemItem},
  props: ['items', 'showPreload'],
}
</script>

<style scoped lang="scss">

.films__list {
  padding: 5px 0;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;

  @media all and (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media all and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media all and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
}


</style>