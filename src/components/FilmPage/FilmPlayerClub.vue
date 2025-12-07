<template>
  <div>
    <iframe
      :src="`//496622434375553.svetacdn.in/fcvcbl7auqJG?kp_id=${filmId}`"
      width="100%"
      height="495"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const filmId = route.params.id;
</script>

<style scoped lang="scss">
  iframe {
    width: 100%;
    height: 495px;
    border: none;
  }
</style>
