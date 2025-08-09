<template>
	<div class="list">
		<h1>Недавно просмотренные</h1>
		<FilmList :items="filmStore.lastViews" :showPreload="showPreload" />
		<h3 v-if="filmStore.lastViews.length === 0">Список пуст</h3>
	</div>
</template>

<script>
import { useFilmStore } from "@/stores/filmStore";
import { ref } from "vue";
import FilmList from "@/components/FilmList.vue";

export default {
	name: "LastViewsPage",
	components: { FilmList },
	setup() {
		const filmStore = useFilmStore();
		const showPreload = ref(false);

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
