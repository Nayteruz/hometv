<template>
  <div class="pagination">
    <ul>
      <li
        class="pg first"
        v-show="filmStore.pageNum > 1"
        @click="emitPage(null, 'prevAll')"
      >
        <span><IconArrowBig /></span>
      </li>
      <li
        class="pg prev"
        v-show="filmStore.pageNum > 1"
        @click="emitPage(null, 'prev')"
      >
        <span><IconArrowSmall /></span>
      </li>
      <li v-for="num in getList(total)" :key="num">
        <span
          :class="{ active: filmStore.pageNum === num }"
          @click="emitPage(num)"
          >{{ num }}</span
        >
      </li>
      <li
        class="pg next"
        v-show="filmStore.pageNum < props.total"
        @click="emitPage(null, 'next')"
      >
        <span><IconArrowSmall /></span>
      </li>
      <li
        class="pg last"
        v-show="filmStore.pageNum < props.total"
        @click="emitPage(null, 'nextAll')"
      >
        <span><IconArrowBig /></span>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { useFilmStore } from '@/stores/filmStore';
  import IconArrowSmall from '@/components/icons/IconArrowSmall.vue';
  import IconArrowBig from '@/components/icons/IconArrowBig.vue';
  import { inject, computed } from 'vue';

  const filmStore = useFilmStore();
  const emitter = inject('emitter');
  const page = computed(() => {
    return filmStore.pageNum;
  });

  const props = defineProps(['total']);

  const getList = (max) => {
    let list = [];

    if (props.total > 6) {
      if (page.value === 1) {
        return [1, 2, 3, '...', max];
      } else if (page.value > 1 && page.value < 3) {
        return [1, 2, 3, '...', max];
      } else if (page.value === 3) {
        return [1, 2, 3, 4, '...', max];
      } else if (page.value > 3 && page.value < max - 2) {
        return [
          1,
          '...',
          page.value - 1,
          page.value,
          page.value + 1,
          '...',
          max,
        ];
      } else if (page.value === max - 2) {
        return [1, '...', page.value - 1, page.value, page.value + 1, max];
      } else if (page.value === max - 1) {
        return [1, '...', page.value - 1, page.value, max];
      } else if (page.value === max) {
        return [1, '...', page.value - 2, page.value - 1, max];
      }
    } else {
      for (let i = 1; i <= max; i++) {
        list.push(i);
      }
    }
    return list;
  };

  const emitPage = (num, action = '') => {
    if (num === '...') return;
    let p;
    if (action === 'prev') {
      p = filmStore.pageNum - 1;
    } else if (action === 'next') {
      p = filmStore.pageNum + 1;
    } else if (action === 'prevAll') {
      p = 1;
    } else if (action === 'nextAll') {
      p = props.total;
    } else {
      p = num;
    }
    filmStore.pageNum = p;
    emitter.emit('clickPage', p);
  };
</script>

<style scoped lang="scss">
  .pagination {
    margin: 10px 0;

    ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 3px 6px;
      font-family: 'Roboto', sans-serif;
      user-select: none;
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

      &:hover,
      &.active {
        background: #366a8f;
        color: #fff;

        svg path {
          fill: #f00;
        }
      }
    }
  }
</style>
