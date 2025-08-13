<template>
	<div class="image">
		<FavoriteBtn class="favorite" :itemFilm="props.filmInfo" />
		<img v-if="filmInfo?.posterUrl" :src="filmInfo?.posterUrl" alt="filmTitle" />
		<span v-if="filmRating" class="rating">{{ filmRating }}</span>
	</div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import FavoriteBtn from "../FavoriteBtn.vue";

const props = defineProps({
	filmInfo: Object,
});

const filmInfo = computed(() => props.filmInfo);

const filmRating = computed(() => {
	const rating = filmInfo.value.rating || filmInfo.value.ratingKinopoisk || filmInfo.value.ratingImdb;

	if (rating) {
		return rating.toFixed(1);
	}

	return null;
});
</script>

<style lang="scss" scoped>
.image {
	display: flex;
	align-items: flex-start;
	justify-content: center;
	position: relative;
	min-width: 0;

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

.favorite {
	position: absolute;
	left: 10px;
	top: 10px;
	z-index: 10;
	width: 30px;
	height: 30px;
}

.rating {
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
</style>
