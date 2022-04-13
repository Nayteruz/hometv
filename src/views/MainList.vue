<template>
  <h1 v-title>Список последних новинок</h1>
  <PaginationList :total="totalPages" @clickPage="getListFilms"/>
  <FIlmItem :items="films" :showPreload="showPreload"/>
  <PaginationList :total="totalPages" @clickPage="getListFilms"/>
  <div v-if="pageNum < totalPages" v-intersection="{getPosts: getMoreFilms}" ref="observer" class="observer"></div>
</template>

<script>
import FIlmItem from "@/components/FIlmItem.vue";
import {mapState, mapActions} from 'pinia'
import {useFilmStore} from '@/stores/filmStore'
import axios from "axios";
import PaginationList from "@/components/PaginationList.vue";
export default {
  components: {PaginationList, FIlmItem},
  data() {
    return {
      films: [],
      default_type: 'TOP_100_POPULAR_FILMS',
      totalPages: 0,
      showPreload:false,
    }
  },
  methods: {
    ...mapActions(useFilmStore, ['setPageNum']),
    getListFilms: async function (page = 1) {
      this.showPreload = true;
      this.films = [];
      const response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films/top', {
        headers: {
          'X-API-KEY': this.apiKey,
          'Content-Type': 'application/json',
        },
        params: {
          type: this.default_type,
          page: page,
        }
      });
      this.totalPages = response.data?.pagesCount;
      this.films = response.data?.films;
      this.showPreload = false;
    },
    getMoreFilms : async function(){
      this.showPreload = true;
      this.setPageNum(this.pageNum+1);
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
  },
  computed: {
    ...mapState(useFilmStore, ['apiKey', 'pageNum']),
  },
  created() {
    this.getListFilms();
  }
}
</script>

<style scoped>
h1 {
  color: #fff;
  font-size: 28px;
  text-align: center;
  margin: 20px 0;
}

</style>