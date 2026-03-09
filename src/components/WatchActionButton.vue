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
  import { useUserListsStore } from '@/stores/userListsStore';

  const props = withDefaults(defineProps<{ id: number }>(), { id: 0 });

  const filmLists = useUserListsStore();
  const isUnwatch = computed(() => filmLists.isSkipped(props.id));

  const toggleWatch = () => {
    if (isUnwatch.value) {
      filmLists.removeSkip(props.id);
    } else {
      filmLists.addSkip(props.id);
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
