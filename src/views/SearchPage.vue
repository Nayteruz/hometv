<template>
  <h1 v-title>{{ titlePage }}</h1>
  <PaginationList :total="totalPages" @clickPage="getListFilms"/>
  <FIlmItem :items="films" :showPreload="showPreload"/>
  <PaginationList :total="totalPages" @clickPage="getListFilms"/>
  <div v-if="filmStore.pageNum < totalPages" v-intersection="{getMoreFilms}" ref="observer" class="observer"></div>
</template>

<script>
import {useFilmStore} from '@/stores/filmStore'
import axios from "axios";
import FIlmItem from "@/components/FIlmItem.vue";
import PaginationList from "@/components/PaginationList.vue";
import {onMounted, ref, computed, watch, inject} from "vue";
import {useRoute} from "vue-router";

export default {
  components: {
    FIlmItem,
    PaginationList
  },
  setup() {
    const route = useRoute();
    const films = ref([]);
    const emitter = inject('emitter');
    const filmStore = useFilmStore();
    const totalPages = ref(0);
    const titlePage = ref('');
    const showPreload = ref(false);
    const routeSearchQuery = computed(() => route.query.q);
    const routeGenreId = computed(() => route.query.genres);

    watch(routeGenreId, newRouteGenreId => {
      filmStore.genreIdStore = newRouteGenreId
    })
    watch(routeSearchQuery, newRouteSearchQuery => {
      filmStore.searchQueryStore = newRouteSearchQuery
    })

    async function getRequest() {
      return await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
        headers: {
          'X-API-KEY': filmStore.apiKey,
          'Content-Type': 'application/json',
        },
        params: {
          keyword: routeSearchQuery.value,
          genres: routeGenreId.value,
          page: filmStore.pageNum,
        }
      });
    }

    async function getListFilms(more = false, page) {
      setPageTitle();
      filmStore.setPageNum(page || filmStore.pageNum);
      if (routeGenreId.value || routeSearchQuery.value || more) {
        showPreload.value = true;
        const response = await getRequest();
        totalPages.value = response.data?.totalPages;
        if (more) {
          films.value = [...films.value, ...response.data?.items];
        } else {
          films.value = [];
          films.value = response.data?.items;
        }
        showPreload.value = false;
      }
    }

    function getMoreFilms() {
      getListFilms(true, filmStore.pageNum + 1);
    }

    function setNextPage() {
      getListFilms(false, filmStore.pageNum);
    }

    async function setPageTitle() {
      let genre_name = routeGenreId.value ? await filmStore.genreListStore.filter(x=>+x.id === +routeGenreId.value)[0].genre : null;
      if (routeSearchQuery.value && routeGenreId.value) {
        titlePage.value = `Поиск по слову "${routeSearchQuery.value}", жанр "${genre_name}"`;
      } else if (routeSearchQuery.value && !routeGenreId.value) {
        titlePage.value = `Поиск по слову "${routeSearchQuery.value}"`;
      } else if (routeGenreId.value && !routeSearchQuery.value) {
        titlePage.value = `Поиск по жанру "${genre_name}"`;
      } else {
        titlePage.value = 'Ничего не указано для поиска'
      }
    }

    emitter.on('clickPage', setNextPage)

    onMounted(async () => {
      await getListFilms(false, 1);
      emitter.on("searchSubmit", () => {
        getListFilms(false, 1);
      });
    })

    return {
      films,
      titlePage,
      filmStore,
      totalPages,
      showPreload,
      getListFilms,
      getMoreFilms
    }
  }
}

// export default {
//   components: {
//     FIlmItem,
//     PaginationList
//   },
//   data() {
//     return {
//       films: [],
//       searchQuery: this.$route.query.q,
//       searchGenre: this.$route.query.genres,
//       totalPages: 0,
//       titlePage: '',
//       showPreload:false,
//     }
//   },
//   methods: {
//     ...mapActions(useFilmStore, ['setPageNum']),
//     getListFilms: async function (page = 1) {
//       this.setPageTitle();
//       if(this.searchQuery || this.searchGenre) {
//         this.showPreload = true;
//         this.films = [];
//         const response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
//           headers: {
//             'X-API-KEY': this.apiKey,
//             'Content-Type': 'application/json',
//           },
//           params: {
//             keyword: this.searchQuery,
//             genres: this.searchGenre,
//             page: page,
//           }
//         });
//         this.totalPages = response.data?.totalPages;
//         this.films = response.data?.items;
//         this.showPreload = false;
//       }
//     },
//     getMoreFilms: async function () {
//       this.showPreload = true;
//       this.setPageNum(this.pageNum + 1);
//       const response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films/top', {
//         headers: {
//           'X-API-KEY': this.apiKey,
//           'Content-Type': 'application/json',
//         },
//         params: {
//           type: this.default_type,
//           page: this.pageNum,
//         }
//       });
//       this.films = [...this.films, ...response.data?.films];
//       this.showPreload = false;
//     },
//     setPageTitle() {
//       let genres = JSON.parse(localStorage.getItem('filters')).genres;
//       if (this.searchQuery && this.searchGenre) {
//           let genre_name = genres.filter(x=>x.id == this.searchGenre)[0].genre;
//           this.titlePage = `Поиск по слову "${this.searchQuery}", жанр "${genre_name}"` ;
//       } else if (this.searchQuery && !this.searchGenre) {
//           this.titlePage = `Поиск по слову "${this.searchQuery}"` ;
//       } else if (this.searchGenre && !this.searchQuery) {
//           let genre_name = genres.filter(x=>x.id == this.searchGenre)[0].genre;
//           this.titlePage = `Поиск по жанру "${genre_name}"` ;
//       } else {
//           this.titlePage = 'Ничего не указано для поиска'
//       }
//     }
//   },
//   computed: {
//     ...mapState(useFilmStore, ['apiKey', 'pageNum']),
//   },
//   mounted() {
//     this.emitter.emit("search-query", this.searchQuery);
//     this.emitter.on("searchSubmit", () => {
//       this.getListFilms(1);
//     });
//   },
//   created() {
//     this.getListFilms(1);
//   },
// }
</script>

<style scoped>

</style>