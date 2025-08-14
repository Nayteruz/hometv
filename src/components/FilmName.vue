<template>{{ filmName }}</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  filmInfo: Object,
});

const filmName = computed(() => {
  const name =
    props.filmInfo?.nameRu ||
    props.filmInfo?.nameEn ||
    props.filmInfo?.nameOriginal ||
    "Без названия";
  const year = props.filmInfo?.year || "";
  return `${name} ${year ? `(${year})` : ""}`;
});
</script>
