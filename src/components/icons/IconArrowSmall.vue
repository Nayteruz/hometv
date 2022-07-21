<template>
  <svg :class="{'wnext' : way === 'next', 'wprev' : way === 'prev'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
    <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"/>
  </svg>
</template>

<script setup>
  import {defineProps} from "vue";
  const props = defineProps(['way']);
  console.log(props.way);
</script>

<style scoped lang="scss">

  .pg {
    &.prev, &.next {
      &:hover {
        svg {
          fill:#fff;
        }
      }
    }
  }

  svg {
    max-width: 65%;
    max-height: 65%;
    fill:#1e445e;

    &.wnext {
      transform: rotate(180deg);
    }
  }
</style>