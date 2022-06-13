<template>
  <h1 v-title>Список последних новинок</h1>
  <PaginationList :total="totalPages"/>
  <FIlmItem :items="films" :showPreload="showPreload"/>
  <PaginationList :total="totalPages"/>
  <div v-if="filmStore.pageNum < totalPages" v-intersection="{getMoreFilms}" ref="observer" class="observer"></div>
</template>

<script>
import FIlmItem from "@/components/FIlmItem.vue";
import {useFilmStore} from '@/stores/filmStore'
import axios from "axios";
import PaginationList from "@/components/PaginationList.vue";
import {onMounted, ref} from "vue";
import {inject} from "vue";

export default {
  name: 'MainList',
  components: {PaginationList, FIlmItem},
  setup() {
    const filmStore = useFilmStore();
    const emitter = inject('emitter');
    const films = ref([]);
    const default_type = ref('TOP_100_POPULAR_FILMS');
    const totalPages = ref(0);
    const showPreload = ref(false);

    async function getRequest() {
      return await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films/top', {
        headers: {
          'X-API-KEY': filmStore.apiKey,
          'Content-Type': 'application/json',
        },
        params: {
          type: default_type.value,
          page: filmStore.pageNum,
        }
      });
    }

    async function getListFilms(more = false, page) {
      showPreload.value = true;
      filmStore.setPageNum(page || filmStore.pageNum);
      const response = await getRequest();
      totalPages.value = response.data?.pagesCount;
      if (more) {
        films.value = [...films.value, ...response.data?.films];
      } else {
        films.value = [];
        films.value = response.data?.films;
      }
      showPreload.value = false;
    }

    function getMoreFilms() {
      getListFilms(true, filmStore.pageNum + 1);
    }

    function setNextPage() {
      getListFilms(false, filmStore.pageNum);
    }

    emitter.on('clickPage', setNextPage)

    onMounted(() => {
      getListFilms();
    })

    return {
      films,
      showPreload,
      totalPages,
      filmStore,
      getListFilms,
      getMoreFilms,
    }
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