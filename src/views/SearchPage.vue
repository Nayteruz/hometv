<template>
  <h1 v-title>{{ titlePage }}</h1>
  <PaginationList :total="totalPages" @clickPage="getListFilms"/>
  <FIlmItem :items="films" :showPreload="showPreload"/>
  <PaginationList :total="totalPages" @clickPage="getListFilms"/>
  <div v-if="pageNum < totalPages" v-intersection="{getPosts: getMoreFilms}" ref="observer" class="observer"></div>
</template>

<script>
import {mapState, mapActions} from 'pinia'
import {useFilmStore} from '@/stores/filmStore'
import axios from "axios";
import FIlmItem from "@/components/FIlmItem.vue";
import PaginationList from "@/components/PaginationList.vue";

export default {
  components: {
    FIlmItem,
    PaginationList
  },
  data() {
    return {
      films: [],
      searchQuery: this.$route.query.q,
      searchGenre: this.$route.query.genres,
      totalPages: 0,
      titlePage: '',
      showPreload:false,
    }
  },
  methods: {
    ...mapActions(useFilmStore, ['setPageNum']),
    getListFilms: async function (page = 1) {
      this.setPageTitle();
      if(this.searchQuery || this.searchGenre) {
        this.showPreload = true;
        this.films = [];
        const response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
          headers: {
            'X-API-KEY': this.apiKey,
            'Content-Type': 'application/json',
          },
          params: {
            keyword: this.searchQuery,
            genres: this.searchGenre,
            page: page,
          }
        });
        this.totalPages = response.data?.totalPages;
        this.films = response.data?.items;
        this.showPreload = false;
      }
    },
    getMoreFilms: async function () {
      this.showPreload = true;
      this.setPageNum(this.pageNum + 1);
      const response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films/top', {
        headers: {
          'X-API-KEY': this.apiKey,
          'Content-Type': 'application/json',
        },
        params: {
          type: this.default_type,
          page: this.pageNum,
        }
      });
      this.films = [...this.films, ...response.data?.films];
      this.showPreload = false;
    },
    setPageTitle() {
      let genres = JSON.parse(localStorage.getItem('filters')).genres;
      if (this.searchQuery && this.searchGenre) {
          let genre_name = genres.filter(x=>x.id == this.searchGenre)[0].genre;
          this.titlePage = `Поиск по слову "${this.searchQuery}", жанр "${genre_name}"` ;
      } else if (this.searchQuery && !this.searchGenre) {
          this.titlePage = `Поиск по слову "${this.searchQuery}"` ;
      } else if (this.searchGenre && !this.searchQuery) {
          let genre_name = genres.filter(x=>x.id == this.searchGenre)[0].genre;
          this.titlePage = `Поиск по жанру "${genre_name}"` ;
      } else {
          this.titlePage = 'Ничего не указано для поиска'
      }
    }
  },
  computed: {
    ...mapState(useFilmStore, ['apiKey', 'pageNum']),
  },
  mounted() {
    this.emitter.emit("search-query", this.searchQuery);
    this.emitter.on("searchSubmit", () => {
      this.getListFilms(1);
    });
  },
  created() {
    this.getListFilms(1);
  },
}
</script>

<style scoped>

</style>