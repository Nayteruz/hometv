<template>
	<h1 v-title>{{ titlePage }}</h1>
	<PaginationList :total="totalPages" @clickPage="getListFilms" />
	<FIlmItem :items="films" :showPreload="showPreload" />
	<PaginationList :total="totalPages" @clickPage="getListFilms" />
	<NavigationByKeys />
	<div v-if="filmStore.pageNum < totalPages" v-intersection="{ getMoreFilms }" ref="observer" class="observer"></div>
</template>

<script>
import { useFilmStore } from '@/stores/filmStore';
import axios from 'axios';
import FIlmItem from '@/components/FIlmItem.vue';
import PaginationList from '@/components/PaginationList.vue';
import NavigationByKeys from '@/components/NavigationByKeys.vue';
import { onMounted, ref, computed, inject } from 'vue';
import { useRoute } from 'vue-router';

export default {
	components: {
		FIlmItem,
		PaginationList,
		NavigationByKeys,
	},
	setup() {
		const route = useRoute();
		const films = ref([]);
		const emitter = inject('emitter');
		const filmStore = useFilmStore();
		const totalPages = ref(0);
		const titlePage = ref('');
		const showPreload = ref(false);
		const searchQueryRoute = computed(() => route.query.q);
		const genreIdRoute = computed(() => route.query.genres);

		async function getRequest() {
			return await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
				headers: {
					'X-API-KEY': filmStore.apiKey,
					'Content-Type': 'application/json',
				},
				params: {
					keyword: filmStore.searchQueryStore,
					genres: filmStore.genreIdStore,
					page: filmStore.pageNum,
				},
			});
		}

		async function getListFilms(more = false, page) {
			await setPageTitle();
			filmStore.pageNum = page || filmStore.pageNum;
			if (filmStore.genreIdStore || filmStore.searchQueryStore || more) {
				showPreload.value = true;
				const response = await getRequest();
				totalPages.value = response.data?.totalPages;
				if (more) {
					films.value = [...films.value, ...response.data?.items];
				} else {
					films.value = [];
					films.value = response.data?.items;
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
				titlePage.value = 'Ничего не указано для поиска';
			}
		}

		emitter.on('clickPage', setNextPage);

		onMounted(async () => {
			filmStore.searchQueryStore = searchQueryRoute.value;
			filmStore.genreIdStore = genreIdRoute.value;
			await getListFilms(false, 1);
			emitter.on('searchSubmit', () => {
				getListFilms(false, 1);
			});

			filmStore.currentFocusIndex = -1;
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

<style scoped></style>
