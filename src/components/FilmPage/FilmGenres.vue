<template>
  <div class="genres">
    <h3>{{ props.title }}</h3>
    <ul>
      <li v-for="genre in props.genres" :key="genre">
        <span @click="changeGenre(genre)">{{ genre }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const props = defineProps({
    genres: Array,
    title: String,
  });

  const changeGenre = (name) => {
    const genres = JSON.parse(localStorage.getItem('genres'));
    const id = genres.filter((g) => g.genre === name)[0].id;
    window.scrollTo(0, 0);
    router.push({ name: 'searchPage', query: { genres: id } });
  };
</script>

<style lang="scss" scoped>
  .genres {
    margin: 20px 0;

    ul {
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

  h3 {
    font-size: 20px;
    margin-bottom: 15px;
  }
</style>
