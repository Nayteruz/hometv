<template>
  <button class="back-to-list" @click.prevent="goToList"><IconLeftArrow/>Вернуться к списку</button>
  <h1 v-title>{{ filmTitle }}</h1>
  <div class="film__wrap">
    <div class="film__image">
      <FavoriteBtn class="favorite" :itemFilm="filmInfo" />
      <img v-if="filmInfo?.posterUrl" :src="filmInfo?.posterUrl" alt="filmTitle">
    </div>
    <div class="film__note">
      <div class="film__btns">
        <FilmPageDialog :itemFilm="filmInfo"/>
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
        <FIlmItem :items="similars"/>
      </div>
    </div>
  </div>
</template>

<script>
import IconLeftArrow from '@/components/icons/IconLeftArrow.vue'
import {useFilmStore} from '@/stores/filmStore'
import axios from "axios";
import FilmPageDialog from "@/components/FilmPageDialog.vue";
import FIlmItem from "@/components/FIlmItem.vue";
import FavoriteBtn from "@/components/FavoriteBtn.vue";
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";

export default {
  name: 'FilmPage',
  components: {FIlmItem, FilmPageDialog, FavoriteBtn, IconLeftArrow},
  setup() {
    const filmStore = useFilmStore();
    const route = useRoute();
    const router = useRouter();
    const filmInfo = ref([]);
    const filmTitle = ref('');
    const similars = ref([]);
    const title = ref(filmTitle.value);

    function getFilmInfo() {
      axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films/' + route.params.id, {
        headers: {
          'X-API-KEY': filmStore.apiKey,
          'Content-Type': 'application/json',
        }
      })
        .then((req)=>{
          filmInfo.value = req.data;
          getNameFilm();
        })
        .catch(() => {
          return {data: []};
        })
    }

    function getSimilars() {
      axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films/' + route.params.id + '/similars', {
        headers: {
          'X-API-KEY': filmStore.apiKey,
          'Content-Type': 'application/json',
        }
      })
        .then(req => {
          similars.value = req.data?.items
        })
        .catch(() => {
          return {data: []};
        })
    }

    function getSequels_and_prequels() {
      axios.get('https://kinopoiskapiunofficial.tech/api/v2.1/films/' + route.params.id + '/sequels_and_prequels', {
        headers: {
          'X-API-KEY': filmStore.apiKey,
          'Content-Type': 'application/json',
        }
      })
        .then(req => {
          similars.value = [...req?.data, ...similars.value]
        })
        .catch(() => {
          return {data: []};
        })
    }

    function getNameFilm() {
      filmTitle.value = filmInfo.value?.nameRu || filmInfo.value?.nameEn || filmInfo.value?.nameOriginal || 'Без названия';
      filmTitle.value += ` (${filmInfo.value.year})`;
    }

    function setGenre(genre_name) {
      let genres = JSON.parse(localStorage.getItem('genres'));
      let genre_id = genres.filter(g => g.genre === genre_name)[0].id;
      window.scrollTo(0, 0);
      router.push({name: 'searchPage', query: {'genres': genre_id}});
    }

    const goToList = () => {
      router.go(-1);
    }

    onMounted(() => {
      getFilmInfo();
      getSimilars();
      getSequels_and_prequels()
    })

    return {
      filmTitle,
      filmInfo,
      similars,
      setGenre,
      title,
      goToList,
      IconLeftArrow
    }
  }
}
</script>

<style scoped lang="scss">

.film__wrap {
  display: grid;
  grid-template-columns: minmax(250px, 350px) 1fr;
  gap: 20px;
  @media all and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

}

.film__image {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  min-width: 0;

  .favorite {
    position: absolute;
    left: 10px;
    top: 10px;
    z-index: 10;
    width: 30px;
    height: 30px;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    min-height: 170px;
    max-height: 500px;
    border-radius: 10px;
    border: 2px solid #5077bf;
    @media all and (max-width: 768px) {
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
  padding: 0;
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
  margin: 20px 0;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 3px 5px;

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

.back-to-list {
  & + h1 {
    margin-top: 10px;
  }

  svg {
    max-height: 20px;
  }

  display: grid;
  grid-template-columns: 20px auto;
  align-items: center;
  gap: 4px;

  margin-top: 30px;
  border:none;
  outline: none;
  cursor: pointer;
  background: #2c4f91;
  padding: 10px 15px;
  color: #fff;
  border-radius: 5px;
  user-select: none;
}

</style>