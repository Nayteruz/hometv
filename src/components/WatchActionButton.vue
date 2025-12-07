<template>
  <span class="icon-wrapper">
    <IconEyeSlash
      v-if="isUnwatch"
      class="unwatch"
      @click.prevent="toggleWatch"
    />
    <IconEye v-else @click.prevent="toggleWatch" />
  </span>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import IconEye from './icons/IconEye.vue';
  import IconEyeSlash from './icons/IconEyeSlash.vue';
  import { useFilmStore } from '@/stores/filmStore.ts';

  const props = defineProps({
    id: Number,
  });

  const filmStore = useFilmStore();
  const isUnwatch = computed(() => filmStore.isSkipped(props.id));

  const toggleWatch = () => {
    if (isUnwatch.value) {
      filmStore.removeSkip(props.id);
    } else {
      filmStore.addSkip(props.id);
    }
  };
</script>

<style lang="scss" scoped>
  .icon-wrapper {
    width: 28px;
    height: 28px;
    display: block;
    cursor: pointer;
    position: relative;
    color: #80b0d9;
    line-height: 0;

    svg {
      width: 100%;
      height: 100%;
    }

    &:hover {
      svg {
        color: #2c4f91;

        &.unwatch {
          color: #999;
        }
      }
    }
  }

  .unwatch {
    color: #666;
  }
</style>
