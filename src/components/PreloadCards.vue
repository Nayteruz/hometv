<script setup lang="ts">
  import PreloadCard from './PreloadCard.vue';
</script>

<template>
  <li class="films__item" v-for="pre in 20" :key="pre">
    <PreloadCard />
  </li>
</template>

<style scoped lang="scss">
  .films__item {
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 10px;
  }
</style>
