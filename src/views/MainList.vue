<template>
	<h1 v-title>Список последних новинок</h1>
	<PaginationList :total="totalPages" />
	<FIlmItem :items="films" :showPreload="showPreload" />
	<PaginationList :total="totalPages" />
	<div v-if="filmStore.pageNum < totalPages" v-intersection="{ getMoreFilms }" ref="observer" class="observer"></div>
</template>

<script>
import { onMounted, ref, watch, inject } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useFilmStore } from '@/stores/filmStore';
import FIlmItem from '@/components/FIlmItem.vue';
import PaginationList from '@/components/PaginationList.vue';

export default {
	name: 'MainList',
	components: { PaginationList, FIlmItem },
	setup() {
		const filmStore = useFilmStore();
		const emitter = inject('emitter');
		const router = useRouter();
		const films = ref([]);
		const default_type = ref('TOP_100_POPULAR_FILMS');
		const totalPages = ref(0);
		const showPreload = ref(false);

		async function getRequest() {
			return await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films/top', {
				headers: {
					'X-API-KEY': filmStore.apiKey,
					'Content-Type': 'application/json',
				},
				params: {
					type: default_type.value,
					page: filmStore.pageNum,
				},
			});
		}

		async function getListFilms(page, more = '') {
			if (more === 'loading') {
				emitter.emit('isLoading', true);
			}
			showPreload.value = more === 'preload';
			filmStore.pageNum = page || filmStore.pageNum;
			const response = await getRequest();
			totalPages.value = response.data?.pagesCount;
			if (more === 'preload') {
				films.value = [...films.value, ...response.data?.films];
			} else {
				films.value = [];
				films.value = response.data?.films;
			}
			showPreload.value = false;
			if (more === 'loading' && (await response.data?.films)) {
				emitter.emit('isLoading', false);
			}
		}

		function getMoreFilms() {
			getListFilms(filmStore.pageNum + 1, 'preload');
		}

		function setNextPage() {
			getListFilms(filmStore.pageNum, 'loading');
		}

		emitter.on('clickPage', setNextPage);

		watch(
			() => films.value,
			() => {
				filmStore.films = films.value;
			}
		);

		watch(
			() => router.currentRoute.value.href,
			() => {
				filmStore.films = films.value;
			}
		);

		onMounted(() => {
			getListFilms();
		});

		return {
			films,
			showPreload,
			totalPages,
			filmStore,
			getListFilms,
			getMoreFilms,
		};
	},
};
</script>

<style scoped>
h1 {
	color: #fff;
	font-size: 28px;
	text-align: center;
	margin: 20px 0;
}
</style>
