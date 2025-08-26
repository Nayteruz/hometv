<template>
  <li
    :class="[
      'card',
      { focused: isFocused | isFocusedOnHover, unwatch: isUnwatch },
    ]"
    @mouseover="onOver"
    @mouseleave="onLeave"
    tabindex="0"
    ref="itemRef"
  >
    <a
      :href="`/film/${filmId}`"
      class="card-link"
      @click.prevent="goToPageFilm"
    ></a>
    <div class="icon-actions">
      <FavoriteActionButton class="favorite" :filmId="filmId" />
      <WatchActionButton class="watch" :filmId="filmId" />
      <FilmRating
        :filmInfo="props.itemFilm"
        :isRating="props.isRating"
        class="rating"
      />
    </div>
    <div class="image-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" width="360" height="540"></svg>
      <img :src="itemFilm.posterUrlPreview" :alt="props.itemFilm.nameRu" />
    </div>
    <div class="name-wrapper">
      <h3>{{ filmName }}</h3>
    </div>
  </li>
</template>

<script setup>
  import { useFilmStore } from '@/stores/filmStore';
  import FavoriteActionButton from '@/components/FavoriteActionButton.vue';
  import WatchActionButton from '@/components/WatchActionButton.vue';
  import { computed, defineProps, ref, watch } from 'vue';
  import { useRouter } from 'vue-router';
  import FilmRating from '@/components/FilmRating.vue';
  import { getFilmPageTitle } from '@/components/utils';

  const props = defineProps({
    itemFilm: Object,
    currentIndex: Number,
    isRating: {
      type: Boolean,
      default: true,
    },
  });
  const router = useRouter();
  const filmStore = useFilmStore();
  const itemRef = ref(null);
  const isFocused = computed(
    () => props.currentIndex === filmStore.currentFocusIndex
  );
  const filmName = computed(() => getFilmPageTitle(props.itemFilm));
  const isFocusedOnHover = ref(false);

  const filmId = props.itemFilm.filmId || props.itemFilm.kinopoiskId;

  const isUnwatch = computed(() => filmStore.isSkipped(filmId));

  const goToPageFilm = () => {
    router.push(`/film/${filmId}`);
  };

  const onOver = () => {
    isFocusedOnHover.value = true;
  };

  const onLeave = () => {
    isFocusedOnHover.value = false;
  };

  watch(isFocused, () => {
    if (isFocused.value && itemRef.value) {
      const offsets = itemRef.value.getBoundingClientRect();
      const scrollTop = document.documentElement.scrollTop;
      const scrollBottom = scrollTop + window.innerHeight;
      const elementDocumentBottom = offsets.bottom + scrollTop;

      if (offsets.top < 0 || elementDocumentBottom > scrollBottom) {
        window.scrollTo(0, scrollTop + offsets.top - 80);
      }
    }
  });
</script>

<style scoped lang="scss">
  .card {
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 10px;

    &:hover {
      box-shadow: 0 0 10px 6px #5077bf;

      .name-wrapper {
        display: flex;
      }
    }

    &.focused {
      box-shadow: 0 0 10px 6px #5077bf;

      a.card-link {
        box-shadow: 0 0 1px 3px #c4d9ff;
        border-radius: 8px;
      }
    }

    &.unwatch {
      filter: grayscale(100%) brightness(0.2);
    }
  }

  .image-wrapper {
    font-size: 0;
    line-height: 0;
    overflow: hidden;
    border-radius: 10px;
    flex: 1 1 auto;
    min-height: 300px;
    max-height: min(400px, 45vh);
    position: relative;

    img,
    svg {
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

  .name-wrapper {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    align-items: flex-end;
    display: none;

    @media all and (max-width: 1024px) {
      background: transparent;
      display: flex;
    }

    h3 {
      color: #fff;
      font-size: 1rem;
      font-weight: bold;
      background: rgba(0, 0, 0, 0.6);
      border-radius: 0 0 10px 10px;
      padding: 10px 10px 20px;
      width: 100%;
      margin: 0;

      @media all and (max-width: 1024px) {
        font-size: 0.9rem;
        line-height: 1;
      }
      @media all and (max-width: 768px) {
        font-size: 0.8rem;
      }
    }
  }

  a.card-link {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
  }

  .card.loading {
    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 10;
      background: rgba(#fff, 0.1);
      background: linear-gradient(
        110deg,
        rgba(#80b0d9, 0.6) 8%,
        rgba(#80b0d9, 0.9) 18%,
        rgba(#80b0d9, 0.6) 33%
      );
      background-size: 400% 600%;
      animation: 2s shine linear infinite;
      border-radius: 10px;
    }
  }

  .icon-actions {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 8px 8px 0 0;
    padding: 5px;
  }

  .rating {
    margin-left: auto;
  }

  @keyframes shine {
    to {
      background-position-x: -250%;
    }
  }
</style>
