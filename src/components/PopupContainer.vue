<template>
  <div class="popup-container" ref="containerRef">
    <ButtonBlue
      @click="togglePopup"
      :size="30"
      :class="['trigger', buttonClass]"
      :isOpen="isOpen"
    >
      <slot name="icon"></slot>
    </ButtonBlue>
    <Transition name="popup">
      <div
        v-if="isOpen"
        :class="['popup-content', `position-${position}`]"
        :style="popupStyle"
      >
        <slot name="content"></slot>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  interface IPopupContainerProps {
    width?: string;
    position?: 'left' | 'right' | 'center';
    maxWidth?: string;
    buttonClass?: string | string[] | Record<string, boolean>;
  }

  import { ref, computed, onMounted, onUnmounted } from 'vue';
  import ButtonBlue from '@/components/ButtonBlue.vue';

  const props = withDefaults(defineProps<IPopupContainerProps>(), {
    width: 'auto',
    position: 'left',
    maxWidth: '400px',
    buttonClass: () => '',
  });

  const emit = defineEmits(['open', 'close', 'toggle']);

  const isOpen = ref(false);
  const containerRef = ref<HTMLElement | null>(null);

  const popupStyle = computed(() => ({
    width: props.width,
    maxWidth: props.maxWidth,
  }));

  const togglePopup = () => {
    isOpen.value = !isOpen.value;
    emit('toggle', isOpen.value);

    if (isOpen.value) {
      emit('open');
    } else {
      emit('close');
    }
  };

  const closePopup = () => {
    if (isOpen.value) {
      isOpen.value = false;
      emit('close');
    }
  };

  const handleClickOutside = (event: MouseEvent): void => {
    if (
      isOpen.value &&
      containerRef.value &&
      event.target instanceof Node &&
      !containerRef.value.contains(event.target)
    ) {
      closePopup();
    }
  };

  const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && isOpen.value) {
      closePopup();
    }
  };

  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
  });

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
    document.removeEventListener('keydown', handleEscapeKey);
  });

  // Экспортируем методы для использования извне
  defineExpose({
    open: () => {
      isOpen.value = true;
      emit('open');
    },
    close: closePopup,
    toggle: togglePopup,
  });
</script>

<style scoped>
  .popup-container {
    position: relative;
    display: inline-block;
  }

  .trigger {
    padding-left: 5px;
    padding-right: 5px;
    width: 100%;
  }

  .popup-content {
    position: absolute;
    top: 100%;
    background: #b4ceff;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    border: 2px solid #3a6891;
    z-index: 100;
    margin-top: 4px;
    overflow: hidden;

    &.position-left {
      left: 0;
    }

    &.position-right {
      right: 0;
    }

    &.position-center {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  /* Анимации */
  .popup-enter-active,
  .popup-leave-active {
    transition: all 0.2s ease;
  }

  .popup-enter-from {
    opacity: 0;
    transform: translateY(-8px);
  }

  .popup-leave-to {
    opacity: 0;
    transform: translateY(-8px);
  }
</style>
