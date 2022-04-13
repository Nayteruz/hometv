<template>
  <h1 v-title>{{ filmTitle }}</h1>
  <div class="film__wrap">
    <div class="film__image">
      <img v-if="filmInfo?.posterUrl" :src="filmInfo?.posterUrl" alt="filmTitle">
    </div>
    <div class="film__note">
      <div class="film__btns">
        <FilmPageDialog :film_id="filmInfo.kinopoiskId" />
      </div>
      <div class="film__description">
        <h3>Описание:</h3>
        {{ filmInfo.description }}
      </div>
      <div class="film__genres">
        <h3>Жанры</h3>
        <ul>
          <li v-for="g in filmInfo.genres" :key="g">
            <span @click="setGenre(g.genre)">{{ g.genre }}</span>
          </li>
        </ul>
      </div>
      <div class="film__similar" v-if="similars.length>0">
        <h3>Похожие фильмы</h3>
        <FIlmItem :items="similars" />
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'pinia'
import {useFilmStore} from '@/stores/filmStore'
import axios from "axios";
import FilmPageDialog from "@/components/FilmPageDialog.vue";
import FIlmItem from "@/components/FIlmItem.vue";
export default {
  components: {FIlmItem, FilmPageDialog},
  data(){
    return {
      filmInfo:[],
      filmTitle:'',
      similars: [],
      dialog:false,
      title: this.filmTitle,
    }
  },
  methods:{
    getFilmInfo : async function(){
      const response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films/' + this.$route.params.id, {
        headers: {
          'X-API-KEY': this.apiKey,
          'Content-Type': 'application/json',
        }
      });
      this.filmInfo = response.data;
      this.getNameFilm();
    },
    getSimilars: async function(){
      const response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films/' + this.$route.params.id + '/similars', {
        headers: {
          'X-API-KEY': this.apiKey,
          'Content-Type': 'application/json',
        }
      });
      this.similars = response.data?.items;
    },
    getNameFilm(){
      this.filmTitle = this.filmInfo?.nameRu || this.filmInfo?.nameEn || this.filmInfo?.nameOriginal || 'Без названия';
      this.filmTitle += ` (${this.filmInfo.year})`;
    },
    setGenre(genre_name){
      let genres = JSON.parse(localStorage.getItem('filters')).genres;
      let genre_id = genres.filter(g=>g.genre === genre_name)[0].id;
      window.scrollTo(0, 0);
      this.$router.push({path:"/film-search", query:{'genres':genre_id}});
    }
  },
  computed: {
    ...mapState(useFilmStore, ['apiKey']),
  },
  mounted() {
    this.getFilmInfo();
    this.getSimilars();
  },
}
</script>

<style scoped lang="scss">

.film__wrap {
  display: grid;
  grid-template-columns: minmax(250px, 350px) 1fr;
  gap:20px;
  @media all and (max-width:1024px){
    grid-template-columns: 1fr;
  }

}
.film__image {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    min-height: 170px;
    max-height: 500px;
    border-radius: 10px;
    border:2px solid #5077bf;
    @media all and (max-width:768px){
      height: auto;
      max-height: 100%;
    }

  }
}

h3 {
  font-size: 20px;
  margin-bottom: 15px;
}
.film__note {
  padding:0;
  color: #fff;
  min-width: 0;
}
.film__btns {
  margin-bottom: 20px;
  max-width: 100%;
}

.film__description {
  font-size: 15px;
  line-height: 1.5;
}
.film__similar {
  margin-top: 20px;
}
.film__genres {
  margin:20px 0;
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap:3px 5px;
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
        background: #4371c6;
      }
    }
  }
}
</style>