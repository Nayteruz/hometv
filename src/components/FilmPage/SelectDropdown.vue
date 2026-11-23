<template>
  <div ref="root" class="select">
    <button type="button" class="select__item" @click="open = !open">
      <span class="select__item-text">{{ selectedLabel }}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
        ></path>
      </svg>
    </button>
    <div v-if="open" class="select__drop">
      <button
        v-for="option in options"
        :key="option.value"
        type="button"
        class="select__drop-item"
        :class="{ active: option.value === modelValue }"
        @click="choose(option.value)"
      >
        {{ option.label }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

  interface IOption {
    value: number;
    label: string;
  }

  const props = defineProps<{
    options: IOption[];
  }>();

  const modelValue = defineModel<number>({ required: true });

  const root = ref<HTMLElement | null>(null);
  const open = ref(false);

  const selectedLabel = computed(
    () =>
      props.options.find((option) => option.value === modelValue.value)
        ?.label ?? ''
  );

  const choose = (value: number) => {
    modelValue.value = value;
    open.value = false;
  };

  const onDocumentClick = (event: MouseEvent) => {
    if (open.value && !root.value?.contains(event.target as Node)) {
      open.value = false;
    }
  };

  onMounted(() => document.addEventListener('click', onDocumentClick));
  onBeforeUnmount(() => document.removeEventListener('click', onDocumentClick));
</script>

<style scoped lang="scss">
  .select {
    position: relative;
    display: inline-block;
    min-width: 200px;
    max-width: 100%;
  }

  .select__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    width: 100%;
    padding: 8px 12px;
    cursor: pointer;
    background: #2c4f91;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 15px;

    svg {
      fill: #fff;
      flex-shrink: 0;
    }

    &:hover {
      background: #071f3a;
    }
  }

  .select__item-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .select__drop {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    z-index: 20;
    display: flex;
    flex-direction: column;
    max-height: 260px;
    overflow-y: auto;
    background: #13284d;
    border-radius: 5px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
  }

  .select__drop-item {
    padding: 8px 12px;
    text-align: left;
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 14px;

    &:hover,
    &.active {
      background: #071f3a;
    }
  }
</style>
