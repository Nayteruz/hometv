<template>
	<div class="list">
		<h1>Избранные фильмы/мультики и тд</h1>
		<FilmList :items="filmStore.favorites" :showPreload="showPreload" />
		<h3 v-if="filmStore.favorites.length === 0">Список пуст</h3>
	</div>
</template>

<script>
import { useFilmStore } from "@/stores/filmStore";
import { ref, watch } from "vue";
import FilmList from "@/components/FilmList.vue";

export default {
	name: "FavoritePage",
	components: { FilmList },
	setup() {
		const filmStore = useFilmStore();
		const showPreload = ref(false);

		watch(
			() => filmStore.favorites,
			() => {
				filmStore.films = filmStore.favorites;
			}
		);

		return {
			filmStore,
			showPreload,
		};
	},
};
</script>

<style scoped lang="scss">
h3 {
	color: #fff;
	margin-bottom: 20px;
}

.list {
	padding: 0 15px 30px;

	@media all and (max-width: 768px) {
		padding: 0 5px 10px;
	}
}
</style>
