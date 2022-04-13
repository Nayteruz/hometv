<template>
  <div class="pagination">
    <ul>
      <li v-for="num in total" :key="num">
        <span :class="{'active':pageNum === num}" @click="emitPage(num)">{{ num }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapActions} from 'pinia'
import {useFilmStore} from '@/stores/filmStore'
export default {
  props:['total'],
  methods:{
    ...mapActions(useFilmStore, ['setPageNum']),
    emitPage(num){
      this.$emit('clickPage', num);
      this.setPageNum(num);
    }
  },
  computed:{
    ...mapState(useFilmStore, ['pageNum']),
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