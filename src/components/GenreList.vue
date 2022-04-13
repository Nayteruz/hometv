<template>
  <div class="genres-wrap">
    <ul class="genres">
      <li :class="{active: +genre.id === +activeGenreId, }" v-for="genre in genresFiltered" :key="genre.id"><span @click="setGenre(genre)">{{ genre.genre }}</span></li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useFilmStore } from '@/stores/filmStore'
import axios from "axios";
export default {
  data(){
    return{
      filters: [],
      genresFiltered: [],
      activeGenreId: undefined,
    }
  },
  methods:{
    ...mapActions(useFilmStore, ['setPageNum']),
    setGenre(genre){
      let qr = {};
      if(this.$route.query.q){
        qr.q = this.$route.query.q;
      }
      if(!this.$route.query.genres || +this.$route.query.genres !== +genre.id){
        qr.genres = genre.id;
      }
      this.setPageNum(1);
      this.$router.push({path:"/film-search", query:qr});
    },
    getGenreList : async function(){
      if(localStorage.getItem('filters')) {
        this.filters = JSON.parse(localStorage.getItem('filters'));
      } else {
        const response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films/filters', {
          headers: {
            'X-API-KEY': this.apiKey,
            'Content-Type': 'application/json',
          }
        });
        this.filters = response.data;
        localStorage.setItem('filters', JSON.stringify(this.filters))
      }
      this.filterGenres();
    },
    filterGenres(){
      this.genresFiltered = this.filters.genres.filter(x=> {
        if (
            x.genre !== ''
            && x.genre !== 'для взрослых'
            && x.genre !== 'мюзикл'
            && x.genre !== 'спорт'
            && x.genre !== 'церемония'
            && x.genre !== 'фильм-нуар'
            && x.genre !== 'биография'
            && x.genre !== 'вестерн'
            && x.genre !== 'короткометражка'
            && x.genre !== 'документальный'
            && x.genre !== 'реальное ТВ'
            && x.genre !== 'ток-шоу'
            && x.genre !== 'концерт'
            && x.genre !== 'игра'
            && x.genre !== 'новости'
        ){
          return x;
        }
      })
    }
  },
  computed:{
    ...mapState(useFilmStore, ['apiKey']),
  },
  created() {
    this.getGenreList();
  },
  updated() {
    this.activeGenreId = this.$route.query.genres;
  },
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