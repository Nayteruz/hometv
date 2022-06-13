<template>
  <div class="pagination">
    <ul>
      <li v-for="num in total" :key="num">
        <span :class="{'active':filmStore.pageNum === num}" @click="emitPage(num)">{{ num }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import {useFilmStore} from '@/stores/filmStore'
import {inject} from "vue";

export default {
  props:['total'],
  setup(){
    const filmStore = useFilmStore();
    const emitter = inject('emitter');

    function emitPage(num){
      filmStore.setPageNum(num);
      emitter.emit('clickPage', num);
    }

    return {
      emitPage,
      filmStore
    }
  }
}
</script>

<style scoped lang="scss">
  .pagination {
    margin:0;
    ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      padding: 0;
      margin: 10px 0;
      list-style: none;
      gap: 3px 6px;
      font-family: "Roboto", sans-serif;
    }
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 30px;
      height: 30px;
      border-radius: 10px;
      background: #a6d6f7;
      color: #3a6891;
      cursor: pointer;
      border: 3px solid #3a6891;
      font-weight: bold;
      font-size: 17px;
      &:hover, &.active {
        background: #366a8f;
        color: #fff;
      }
    }
  }
</style>