<template>
  <ButtonBlue @click="reloadPage" :size="20" class="reload"
    ><IconReload
  /></ButtonBlue>
</template>

<script setup>
  import ButtonBlue from '../ButtonBlue.vue';
  import IconReload from '../icons/IconReload.vue';

  const reloadPage = () => {
    document.location.reload();
  };
</script>

<style lang="scss" scoped>
  .reload {
    order: 4;
  }
</style>
