<template>
  <li class="films__item">
    <a href="#" class="item__link" @click="$router.push(`/film/${itemFilm.filmId || itemFilm.kinopoiskId}`)"></a>
    <a href="#" class="favorites" :class="{'active':isFavorite}" @click.prevent="toggleFavorite(itemFilm)"></a>
    <div class="item__image">
      <svg xmlns="http://www.w3.org/2000/svg" width="360" height="540"/>
      <img :src="itemFilm.posterUrlPreview" :alt="itemFilm.nameRu">
    </div>
    <span v-if="itemFilm.rating !=='null' && itemFilm.rating !== undefined"
          class="item__rating">{{ itemFilm.rating === 'null' ? 'нет' : itemFilm.rating }}</span>
    <div class="item__options">
      <ul>
        <li class="name">{{ itemFilm?.nameRu || itemFilm?.nameEn || itemFilm?.nameOriginal || 'Без названия' }}</li>
        <li v-if="itemFilm.year" class="year">{{ itemFilm.year }} г.</li>
      </ul>
    </div>
  </li>
</template>

<script>
import {useFilmStore} from "@/stores/filmStore";
import {onMounted, ref} from "vue";
import {inject} from "vue";

export default {
  name: "FilmItemItem",
  props: ['itemFilm'],
  setup(props){
    const isFavorite = ref(false);
    const filmStore = useFilmStore();
    const emitter = inject('emitter');

    function checkFavorite(){
      isFavorite.value = filmStore.checkFavoriteStore(props.itemFilm);
    }

    async function toggleFavorite(item) {
      if(!isFavorite.value){
        await filmStore.addFavorite(item)
        isFavorite.value = true;
      } else {
        await filmStore.removeFavorite(item)
        isFavorite.value = false;
      }
    }

    onMounted(()=>{
      checkFavorite();
    })
    emitter.on('setUserData', checkFavorite);

    return {
      isFavorite,
      toggleFavorite
    }
  }
}
</script>

<style scoped lang="scss">
.films__item {
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 10px;

  &:hover {
    box-shadow: 0 0 10px 6px #5077bf;

    .item__options {
      display: flex;
    }
  }
}

.item__image {
  font-size: 0;
  line-height: 0;
  overflow: hidden;
  border-radius: 10px;
  flex: 1 1 auto;
  max-height: 400px;
  position: relative;

  img, svg {
    object-fit: cover;
    width: 100%;
    height: 100%;
    min-height: 170px;
  }

  img {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
}

.item__rating {
  position: absolute;
  right: 5px;
  top: 5px;
  z-index: 10;
  background: #ffa800;
  border-radius: 5px;
  font-size: 13px;
  padding: 2px 4px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  color: #2c5e95;
  @media all and (max-width: 768px) {
    font-size: 11px;
    top: 0;
    right: 0;
  }

  &:before {
    content: "";
    display: block;
    width: 13px;
    height: 15px;
    background-image: url("data:image/svg+xml;utf8,<svg fill='%232c5e95' height='16' viewBox='0 0 16 16' width='16' xmlns='http://www.w3.org/2000/svg'><path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' class='star' /></svg>");
    background-size: 100%;
    background-repeat: no-repeat;
  }
}

.item__options {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  align-items: flex-end;
  display: none;
  @media all and (max-width: 1024px) {
    background: transparent;
    display: flex;
  }

  ul {
    background: rgba(0, 0, 0, 0.6);
    border-radius: 0 0 10px 10px;
    width: 100%;
    padding: 10px;
    margin: 0;
    list-style: none;

    li {
      color: #fff;
      display: flex;
      flex-direction: column;
      position: relative;
      border-radius: 10px;

      &.name {
        font-size: 1rem;
        font-weight: bold;
        @media all and (max-width: 1024px) {
          font-size: 0.9rem;
          line-height: 1;
        }
        @media all and (max-width: 768px) {
          font-size: 0.8rem;
        }
      }

      &.year {
        font-size: 0.8rem;
        @media all and (max-width: 768px) {
          font-size: 0.7rem;
        }
      }
    }
  }
}

a.item__link {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 2;
}

a.favorites {
  position: absolute;
  left: 5px;
  top: 5px;
  z-index: 10;
  display: block;
  width: 24px;
  height: 24px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%234371c6' d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z'/%3E%3C/svg%3E");
  background-size: 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat;

  &:hover, &.active {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23cd0000' d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z'/%3E%3C/svg%3E");
  }
}
</style>