<template>
  <header>
    <a class="home" @click="redirectToMain" href="#">Home</a>
    <form action="" @submit.prevent="searchSubmit">
      <input type="text" @keyup.stop.enter="searchSubmit" @keydown.stop.enter="searchSubmit" @change.stop placeholder="Название фильма / ID КиноПоиск" v-model="searchQuery" name="keyword">
      <button type="submit">Найти</button>
    </form>
  </header>
</template>

<script>
import {mapState, mapActions} from 'pinia'
import {useFilmStore} from '@/stores/filmStore'
export default {
  data(){
    return{
      searchQuery: '',
    }
  },
  methods:{
    searchSubmit(){
      this.setPageNum(1);
      this.emitter.emit('searchSubmit');
      this.$router.push({path:"/film-search", query:{'q': this.searchQuery}});
    },
    ...mapActions(useFilmStore, ['setSearchQueryStore', 'setPageNum']),
    redirectToMain(){
      this.setPageNum(1);
      this.$router.push(`/`);
    }
  },
  mounted() {
    this.emitter.on("search-query", val=>{
      this.searchQuery = val;
    });
  },
  computed: {
    ...mapState(useFilmStore, ['searchQueryStore']),
  },

}
</script>

<style scoped lang="scss">
  header {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap:5px;
  }
  a.home {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 0 8px 0;
    height: 32px;
    color: #333;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    line-height: 1;
    background: #80b0d9;
    border-radius: 5px;
    &:before {
      content: "";
      display: block;
      width: 16px;
      height: 16px;
      background-image: url("data:image/svg+xml;utf8,<svg fill='%23333' height='512' viewBox='0 0 576 512' width='576' xmlns='http://www.w3.org/2000/svg'><path d='M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z'/></svg>");
      background-repeat: no-repeat;
      background-size: 100%;
    }
  }
  form {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap:5px;
    width: 100%;
    input, button {
      display: block;
      width: 100%;
      outline: none;
      background: #bedaed;
      color: #333;
      border: 2px #3a6891 solid;
      border-radius: 5px;
      padding: 5px;
      margin: 0;
      font-size: 16px;
    }
    input:focus {
      background:#96c3e2;
    }
    button {
      width: 80px;
      background: #80b0d9;
      cursor: pointer;
      &:hover {
        background:#5998cd;
      }
    }
  }
</style>