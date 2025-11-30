<template>
  <ButtonBlue @click="goBack" :size="18" class="back"
    ><IconLeftArrow />Назад</ButtonBlue
  >
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import ButtonBlue from './ButtonBlue.vue';
  import IconLeftArrow from '@/components/icons/IconLeftArrow.vue';

  const router = useRouter();

  const goBack = () => {
    router.go(-1);
  };
</script>

<style lang="scss" scoped>
  @use 'sass:color';

  .back {
    margin-top: 30px;
    background: #3363bd;
    padding: 10px 15px 10px 10px;
    color: #fff;
    border-radius: 5px;
    user-select: none;
    margin-left: 15px;
    height: auto;
    font-size: 14px;

    @media all and (max-width: 500px) {
      margin-left: 5px;
    }

    svg {
      color: #fff;
    }

    &:hover {
      background: color.adjust(#3363bd, $lightness: -10%);
      color: #fff;

      svg {
        color: #fff;
      }
    }

    & + h1 {
      margin-top: 10px;
    }
  }
</style>
