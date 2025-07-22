<template>
	<div class="list">
		<h1 v-title>Список последних новинок</h1>
		<PaginationList :total="totalPages" />
		<FilmList :items="films" :showPreload="showPreload" />
		<PaginationList :total="totalPages" />
		<div v-if="filmStore.pageNum < totalPages" v-intersection="{ getMoreFilms }" ref="observer" class="observer"></div>
	</div>
</template>

<script>
import { onMounted, ref, watch, inject } from "vue";
import { useRouter } from "vue-router";
import { useFilmStore } from "@/stores/filmStore";
import FilmList from "@/components/FilmList.vue";
import PaginationList from "@/components/PaginationList.vue";

export default {
	name: "MainList",
	components: { PaginationList, FilmList },
	setup() {
		const filmStore = useFilmStore();
		const emitter = inject("emitter");
		const router = useRouter();
		const films = ref([]);
		const default_type = ref("TOP_POPULAR_ALL");
		const totalPages = ref(0);
		const showPreload = ref(false);

		async function getRequest() {
			try {
				const url =
					"https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=" +
					default_type.value +
					"&page=" +
					filmStore.pageNum;
				const response = await fetch(url, {
					headers: {
						"X-API-KEY": filmStore.apiKey,
						"Content-Type": "application/json",
					},
				});
				return response.json();
			} catch (error) {
				console.error("Error load films", error);
			}
		}

		async function getListFilms(page, more = "") {
			if (more === "loading") {
				emitter.emit("isLoading", true);
			}
			showPreload.value = more === "preload";
			filmStore.pageNum = page || filmStore.pageNum;
			const response = await getRequest();
			totalPages.value = response.totalPages;
			if (more === "preload") {
				films.value = [...films.value, ...response.items];
			} else {
				films.value = [];
				films.value = response.items;
			}
			showPreload.value = false;
			if (more === "loading" && (await response.items)) {
				emitter.emit("isLoading", false);
			}
		}

		function getMoreFilms() {
			getListFilms(filmStore.pageNum + 1, "preload");
		}

		function setNextPage() {
			getListFilms(filmStore.pageNum, "loading");
		}

		emitter.on("clickPage", setNextPage);

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

<style scoped lang="scss">
h1 {
	color: #fff;
	font-size: 28px;
	text-align: center;
	margin: 20px 0;
}

.list {
	padding: 0 15px 30px;

	@media all and (max-width: 768px) {
		padding: 0 5px 10px;
	}
}
</style>
