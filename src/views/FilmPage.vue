<template>
	<button class="back-to-list" @click.prevent="goToList"><IconLeftArrow />Назад</button>
	<h1 v-title>{{ filmTitle }}</h1>
	<div class="film__wrap">
		<div class="film__image">
			<FavoriteBtn class="favorite" :itemFilm="filmInfo" />
			<img v-if="filmInfo?.posterUrl" :src="filmInfo?.posterUrl" alt="filmTitle" />
			<span v-if="filmRating" class="film__rating">{{ filmRating }}</span>
		</div>
		<div class="film__note">
			<div class="film__btns">
				<FilmPageDialog :itemFilm="filmInfo" />
			</div>
			<div class="film__description">
				<h3>Описание:</h3>
				{{ filmInfo.description }}
			</div>
			<div class="film__genres">
				<h3>Жанры</h3>
				<ul>
					<li v-for="g in filmInfo.genres" :key="g">
						<span @click="setGenre(g.genre)">{{ g.genre }}</span>
					</li>
				</ul>
			</div>
			<div class="film__similar" v-if="similars.length > 0">
				<h3>Похожие фильмы</h3>
				<FilmList :items="similars" />
			</div>
		</div>
	</div>
</template>

<script>
import IconLeftArrow from "@/components/icons/IconLeftArrow.vue";
import { useFilmStore } from "@/stores/filmStore";
import FilmPageDialog from "@/components/FilmPageDialog.vue";
import FilmList from "@/components/FilmList.vue";
import FavoriteBtn from "@/components/FavoriteBtn.vue";
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
	name: "FilmPage",
	components: { FilmList, FilmPageDialog, FavoriteBtn, IconLeftArrow },
	setup() {
		const filmStore = useFilmStore();
		const route = useRoute();
		const router = useRouter();
		const filmInfo = ref([]);
		const filmTitle = ref("");
		const similars = ref([]);
		const title = ref(filmTitle.value);

		const filmRating = computed(() => {
			const rating = filmInfo.value?.rating || filmInfo.value?.ratingKinopoisk || filmInfo.value?.ratingImdb || null;

			if (rating) {
				return rating.toFixed(1);
			}

			return rating;
		});

		async function getFilmInfo() {
			try {
				const response = await fetch("https://kinopoiskapiunofficial.tech/api/v2.2/films/" + route.params.id, {
					headers: {
						"X-API-KEY": filmStore.apiKey,
						"Content-Type": "application/json",
					},
				});

				const data = response.json();
				filmInfo.value = await data;
				getNameFilm();
			} catch (error) {
				console.error("Error load film info", error);
				filmInfo.value = [];
			}
		}

		async function getSimilars() {
			try {
				const response = await fetch(
					"https://kinopoiskapiunofficial.tech/api/v2.2/films/" + route.params.id + "/similars",
					{
						headers: {
							"X-API-KEY": filmStore.apiKey,
							"Content-Type": "application/json",
						},
					}
				);

				const data = await response.json();
				const items = data.items || [];
				similars.value = items;
			} catch (error) {
				console.error("Error load similars", error);
				similars.value = [];
			}
		}

		async function getSequels_and_prequels() {
			try {
				const response = await fetch(
					"https://kinopoiskapiunofficial.tech/api/v2.1/films/" + route.params.id + "/sequels_and_prequels",
					{
						headers: {
							"X-API-KEY": filmStore.apiKey,
							"Content-Type": "application/json",
						},
					}
				);

				const data = await response.json();
				similars.value = [...data, ...similars.value];
			} catch (error) {
				console.error("Error load sequels and prequels", error);
			}
		}

		function getNameFilm() {
			filmTitle.value =
				filmInfo.value?.nameRu || filmInfo.value?.nameEn || filmInfo.value?.nameOriginal || "Без названия";
			filmTitle.value += ` (${filmInfo.value.year})`;
		}

		function setGenre(genre_name) {
			let genres = JSON.parse(localStorage.getItem("genres"));
			let genre_id = genres.filter((g) => g.genre === genre_name)[0].id;
			window.scrollTo(0, 0);
			router.push({ name: "searchPage", query: { genres: genre_id } });
		}

		const goToList = () => {
			router.go(-1);
		};

		onMounted(() => {
			getFilmInfo();
			getSimilars();
			getSequels_and_prequels();
		});

		return {
			filmTitle,
			filmInfo,
			similars,
			setGenre,
			title,
			goToList,
			IconLeftArrow,
			filmRating,
		};
	},
};
</script>

<style scoped lang="scss">
.film__wrap {
	display: grid;
	grid-template-columns: minmax(250px, 350px) 1fr;
	gap: 20px;
	margin: 0 15px;
	@media all and (max-width: 1024px) {
		grid-template-columns: 1fr;
	}

	@media all and (max-width: 500px) {
		margin: 0 5px;
	}
}

.film__image {
	display: flex;
	align-items: flex-start;
	justify-content: center;
	position: relative;
	min-width: 0;

	.favorite {
		position: absolute;
		left: 10px;
		top: 10px;
		z-index: 10;
		width: 30px;
		height: 30px;
	}

	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
		min-height: 170px;
		max-height: 500px;
		border-radius: 10px;
		border: 2px solid #5077bf;
		@media all and (max-width: 768px) {
			height: auto;
			max-height: 100%;
		}
	}
}

.film__rating {
	position: absolute;
	right: 5px;
	top: 5px;
	z-index: 10;
	background: #ffa800;
	border-radius: 5px;
	font-size: 13px;
	padding: 2px 4px;
	font-weight: bold;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2px;
	color: #2c5e95;
	@media all and (max-width: 768px) {
		font-size: 11px;
		top: 0;
		right: 0;
	}

	&:before {
		content: "";
		display: block;
		width: 13px;
		height: 15px;
		background-image: url("data:image/svg+xml;utf8,<svg fill='%232c5e95' height='16' viewBox='0 0 16 16' width='16' xmlns='http://www.w3.org/2000/svg'><path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' class='star' /></svg>");
		background-size: 100%;
		background-repeat: no-repeat;
	}
}

h3 {
	font-size: 20px;
	margin-bottom: 15px;
}

.film__note {
	padding: 0;
	color: #fff;
	min-width: 0;
}

.film__btns {
	margin-bottom: 20px;
	max-width: 100%;
}

.film__description {
	font-size: 15px;
	line-height: 1.5;
}

.film__similar {
	margin-top: 20px;

	:global(.film__list) {
		padding: 0;
	}
}

.film__genres {
	margin: 20px 0;

	ul {
		padding: 0;
		margin: 0;
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		gap: 3px 5px;

		span {
			display: block;
			cursor: pointer;
			background: #2c4f91;
			padding: 3px 5px;
			color: #fff;
			border-radius: 5px;
			font-size: 16px;
			user-select: none;

			&:hover {
				background: #4371c6;
			}
		}
	}
}

.back-to-list {
	& + h1 {
		margin-top: 10px;
	}

	svg {
		max-height: 20px;
	}

	display: grid;
	grid-template-columns: 20px auto;
	align-items: center;
	gap: 4px;

	margin-top: 30px;
	border: none;
	outline: none;
	cursor: pointer;
	background: #3363bd;
	padding: 10px 15px;
	color: #fff;
	border-radius: 5px;
	user-select: none;
	margin-left: 15px;

	@media all and (max-width: 500px) {
		margin-left: 5px;
	}

	&:hover {
		background: darken(#3363bd, 10%);
	}
}
</style>
