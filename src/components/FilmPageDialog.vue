<template>
  <ul class="tab-titles">
    <li :class="{selected:playerNum===1}" @click="playerNum = 1">Плеер 1</li>
    <li :class="{selected:playerNum===2}" @click="playerNum = 2">Плеер 2</li>
    <li class="favorite-btn"><a href="#" class="favorites" :class="{'active':isFavorite}" @click.prevent="toggleFavorite(itemFilm)">В избранное</a></li>
  </ul>
  <FilmYohohoTab v-if="playerNum===1" />
  <FilmKinoTop v-if="playerNum===2" />
</template>

<script>
import FilmYohohoTab from "@/components/FilmYohohoTab.vue";
import FilmKinoTop from "@/components/FilmKinoTop.vue";
import {mapActions, mapState} from "pinia";
import {useFilmStore} from "@/stores/filmStore";
export default {
  props:['itemFilm'],
  components: {FilmYohohoTab, FilmKinoTop},
  data(){
    return {
      playerNum:1,
      isFavorite: false,
    }
  },
  methods: {
    checkFavorite() {
      console.log(this.favorites)
      let check = this.favorites.filter(film => {
        let filterFilmId = film?.kinopoiskId ?? film?.filmId;
        let itemFilmId = this.itemFilm?.kinopoiskId ?? this.itemFilm?.filmId;
        if (filterFilmId === itemFilmId){
          return film;
        }
      })
      console.log(check)
      this.isFavorite = !!check.length;
      return this.isFavorite;
    },
    toggleFavorite(item) {
      if(!this.isFavorite){
        this.setFavorites([...this.favorites, item]);
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
        this.isFavorite = true;
      } else {
        let check = this.favorites.filter(film => {
          let filterFilmId = film?.kinopoiskId ?? film?.filmId;
          let itemFilmId = this.itemFilm?.kinopoiskId ?? this.itemFilm?.filmId;
          if (filterFilmId !== itemFilmId){
            return film;
          }
        })
        this.setFavorites([...check]);
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
        this.isFavorite = false;
      }

    },
    ...mapActions(useFilmStore, ['setFavorites']),
  },
  computed: {
    ...mapState(useFilmStore, ['favorites']),
  },
  mounted() {
    setTimeout(()=>{
      this.checkFavorite();
    },100)
  }
}
</script>

<style scoped lang="scss">

.film__show {
  background: #5077bf;
  outline: none;
  padding: 20px 40px;
  color: #fff;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: darken(#5077bf, 10%);
  }
}
.tab-titles {
  display: flex;
  align-items: center;
  gap:5px;
  padding: 0;
  margin:0 0 10px 0;
  list-style: none;
  li {
    padding: 10px 20px;
    cursor: pointer;
    background:#2c4f91;
    border-radius: 5px;
    &.selected, &:hover {
      background:#071f3a;
    }
    &.favorite-btn {
      margin-left: auto;
      background: none;
      padding: 0;
      position: relative;
    }
  }
}


a.favorites {
  z-index: 10;
  display: block;
  height: 32px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%234371c6' d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z'/%3E%3C/svg%3E");
  background-size: 28px;
  background-position: 0 50%;
  background-repeat: no-repeat;
  color: #fff;
  font-size: 14px;
  line-height: 32px;
  text-decoration: none;
  padding-left: 40px;
  &:hover, &.active {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23cd0000' d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z'/%3E%3C/svg%3E");
  }
}
</style>