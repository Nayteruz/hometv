<template>
	<li :class="{ films__item: true }" tabindex="0">
		<a :href="`/film/${itemFilm.filmId || itemFilm.kinopoiskId}`" class="item__link" @click.prevent="goToPageFilm"></a>
		<FavoriteBtn class="favorite" :itemFilm="itemFilm" />
		<div class="item__image">
			<svg xmlns="http://www.w3.org/2000/svg" width="360" height="540"></svg>
			<img :src="itemFilm.posterUrlPreview" :alt="props.itemFilm.nameRu" />
		</div>
		<span v-if="filmRating" class="item__rating">{{ filmRating }}</span>
		<div class="item__options">
			<ul>
				<li class="name">{{ filmName }}</li>
				<li v-if="itemFilm.year" class="year">{{ itemFilm.year }} г.</li>
			</ul>
		</div>
	</li>
</template>

<script setup>
import FavoriteBtn from '@/components/FavoriteBtn.vue';
import { computed, defineProps } from 'vue';
import { useRouter } from 'vue-router';
const props = defineProps(['itemFilm']);
const router = useRouter();

const filmRating = computed(() => {
	return props.itemFilm?.rating || props.itemFilm?.ratingImdb || null;
});

const filmName = computed(() => {
	return props.itemFilm?.nameRu || props.itemFilm?.nameEn || props.itemFilm?.nameOriginal || 'Без названия';
});

const goToPageFilm = () => {
	router.push(`/film/${props.itemFilm.filmId || props.itemFilm.kinopoiskId}`);
};
</script>

<style scoped lang="scss">
.films__item {
	display: flex;
	flex-direction: column;
	position: relative;
	border-radius: 10px;

	&:hover {
		box-shadow: 0 0 10px 6px #5077bf;

		.item__options {
			display: flex;
		}
	}
}

.item__image {
	font-size: 0;
	line-height: 0;
	overflow: hidden;
	border-radius: 10px;
	flex: 1 1 auto;
	max-height: 400px;
	position: relative;

	img,
	svg {
		object-fit: cover;
		width: 100%;
		height: 100%;
		min-height: 170px;
	}

	img {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}
}

.item__rating {
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
		content: '';
		display: block;
		width: 13px;
		height: 15px;
		background-image: url("data:image/svg+xml;utf8,<svg fill='%232c5e95' height='16' viewBox='0 0 16 16' width='16' xmlns='http://www.w3.org/2000/svg'><path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' class='star' /></svg>");
		background-size: 100%;
		background-repeat: no-repeat;
	}
}

.item__options {
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.4);
	border-radius: 10px;
	align-items: flex-end;
	display: none;
	@media all and (max-width: 1024px) {
		background: transparent;
		display: flex;
	}

	ul {
		background: rgba(0, 0, 0, 0.6);
		border-radius: 0 0 10px 10px;
		width: 100%;
		padding: 10px;
		margin: 0;
		list-style: none;

		li {
			color: #fff;
			display: flex;
			flex-direction: column;
			position: relative;
			border-radius: 10px;

			&.name {
				font-size: 1rem;
				font-weight: bold;
				@media all and (max-width: 1024px) {
					font-size: 0.9rem;
					line-height: 1;
				}
				@media all and (max-width: 768px) {
					font-size: 0.8rem;
				}
			}

			&.year {
				font-size: 0.8rem;
				@media all and (max-width: 768px) {
					font-size: 0.7rem;
				}
			}
		}
	}
}

a.item__link {
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	z-index: 2;
}
.favorite {
	position: absolute;
	left: 5px;
	top: 5px;
	z-index: 10;
}

.films__item.loading {
	&:after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 10;
		background: rgba(#fff, 0.1);
		background: linear-gradient(110deg, rgba(#80b0d9, 0.6) 8%, rgba(#80b0d9, 0.9) 18%, rgba(#80b0d9, 0.6) 33%);
		background-size: 400% 600%;
		animation: 2s shine linear infinite;
		border-radius: 10px;
	}
}

@keyframes shine {
	to {
		background-position-x: -250%;
	}
}
</style>
