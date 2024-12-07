<template>
	<h1>Избранные фильмы/мультики и тд</h1>
	<FIlmItem :items="filmStore.favorites" :showPreload="showPreload" />
	<NavigationByKeys />
	<h3 v-if="filmStore.favorites.length === 0">Список пуст</h3>
</template>

<script>
import { useFilmStore } from '@/stores/filmStore';
import FIlmItem from '@/components/FIlmItem';
import NavigationByKeys from '@/components/NavigationByKeys.vue';
import { onMounted, ref } from 'vue';

export default {
	name: 'FavoritePage',
	components: { FIlmItem, NavigationByKeys },
	setup() {
		const filmStore = useFilmStore();
		const showPreload = ref(false);

		onMounted(() => {
			filmStore.currentFocusIndex = -1;
			filmStore.isKeyboardNavigation = true;
			filmStore.films = filmStore.favorites;
		});

		return {
			filmStore,
			showPreload,
		};
	},
};
</script>

<style scoped>
h3 {
	color: #fff;
	margin-bottom: 20px;
}
</style>
