<template>
	<div class="list">
		<h1 v-title>{{ titlePage }}</h1>
		<PaginationList :total="totalPages" @clickPage="getListFilms" />
		<FilmList :items="films" :showPreload="showPreload" />
		<PaginationList :total="totalPages" @clickPage="getListFilms" />
		<div v-if="filmStore.pageNum < totalPages" v-intersection="{ getMoreFilms }" ref="observer" class="observer"></div>
	</div>
</template>

<script>
import { useFilmStore } from "@/stores/filmStore";
import FilmList from "@/components/FilmList.vue";
import PaginationList from "@/components/PaginationList.vue";
import { onMounted, ref, computed, inject } from "vue";
import { useRoute } from "vue-router";
import { getSearchFilms } from "@/components/api";

export default {
	components: {
		FilmList,
		PaginationList,
	},
	setup() {
		const route = useRoute();
		const films = ref([]);
		const emitter = inject("emitter");
		const filmStore = useFilmStore();
		const totalPages = ref(0);
		const titlePage = ref("");
		const showPreload = ref(false);
		const searchQueryRoute = computed(() => route.query.q);
		const genreIdRoute = computed(() => route.query.genres);

		async function getRequest() {
			const params = {};

			if (filmStore.searchQueryStore) {
				params.keyword = filmStore.searchQueryStore;
			}
			if (filmStore.genreIdStore) {
				params.genres = filmStore.genreIdStore;
			}
			if (filmStore.pageNum) {
				params.page = filmStore.pageNum;
			}

			try {
				return getSearchFilms(params);
			} catch (error) {
				console.error("Error load films", error);
			}
		}

		async function getListFilms(more = false, page) {
			await setPageTitle();
			filmStore.pageNum = page || filmStore.pageNum;
			if (filmStore.genreIdStore || filmStore.searchQueryStore || more) {
				showPreload.value = true;
				const response = await getRequest();
				totalPages.value = response.totalPages;
				if (more) {
					films.value = [...films.value, ...response.items];
				} else {
					films.value = [];
					films.value = response.items;
				}
				showPreload.value = false;
			}
		}

		function getMoreFilms() {
			getListFilms(true, filmStore.pageNum + 1);
		}

		function setNextPage() {
			getListFilms(false, filmStore.pageNum);
		}

		async function setPageTitle() {
			let genre_name = filmStore.genreIdStore
				? await filmStore.genreListStore.filter((x) => +x.id === +filmStore.genreIdStore)[0].genre
				: null;
			if (filmStore.searchQueryStore && filmStore.genreIdStore) {
				titlePage.value = `Поиск по слову "${filmStore.searchQueryStore}", жанр "${genre_name}"`;
			} else if (filmStore.searchQueryStore && !filmStore.genreIdStore) {
				titlePage.value = `Поиск по слову "${filmStore.searchQueryStore}"`;
			} else if (filmStore.genreIdStore && !filmStore.searchQueryStore) {
				titlePage.value = `Поиск по жанру "${genre_name}"`;
			} else {
				titlePage.value = "Ничего не указано для поиска";
			}
		}

		emitter.on("clickPage", setNextPage);

		onMounted(async () => {
			filmStore.searchQueryStore = searchQueryRoute.value;
			filmStore.genreIdStore = genreIdRoute.value;
			await getListFilms(false, 1);
			emitter.on("searchSubmit", () => {
				getListFilms(false, 1);
			});
		});

		return {
			films,
			titlePage,
			filmStore,
			totalPages,
			showPreload,
			getListFilms,
			getMoreFilms,
		};
	},
};
</script>

<style scoped lang="scss">
.list {
	padding: 0 15px 30px;

	@media all and (max-width: 768px) {
		padding: 0 5px 10px;
	}
}
</style>
