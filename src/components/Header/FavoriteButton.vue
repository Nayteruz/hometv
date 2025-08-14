<template>
  <ButtonBlue @click="click" :class="isDisabled" :size="18"
    ><IconFavorite />{{ favoriteCount }}
  </ButtonBlue>
</template>

<script setup>
  import { useFilmStore } from '@/stores/filmStore'
  import { useRouter } from 'vue-router'
  import IconFavorite from '../icons/IconFavorite.vue'
  import { computed } from 'vue'
  import ButtonBlue from '../ButtonBlue.vue'

  const router = useRouter()
  const filmStore = useFilmStore()

  const favoriteCount = computed(() => filmStore.favoriteList.length)
  const isDisabled = computed(() => (filmStore.user === null ? 'disabled' : ''))

  const click = () => {
    filmStore.pageNum = 1
    filmStore.genreIdStore = null
    router.push({ name: 'favorite' })
  }
</script>

<style scoped>
  .disabled {
    pointer-events: none;
    opacity: 0.5;
  }
</style>
