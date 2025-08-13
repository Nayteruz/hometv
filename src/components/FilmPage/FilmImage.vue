<template>
	<div class="image">
		<FavoriteBtn class="favorite" :itemFilm="props.filmInfo" />
		<img v-if="filmInfo?.posterUrl" :src="filmInfo?.posterUrl" alt="filmTitle" />
		<span v-if="filmRating" class="rating"><IconStar />{{ filmRating }}</span>
	</div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import FavoriteBtn from "../FavoriteBtn.vue";
import IconStar from "../icons/IconStar.vue";

const props = defineProps({
	filmInfo: Object,
});

const filmInfo = computed(() => props.filmInfo);

const filmRating = computed(() => {
	const rating = filmInfo.value.rating || filmInfo.value.ratingKinopoisk || filmInfo.value.ratingImdb;

	if (rating) {
		return rating.toFixed(1);
	}

	return "∞";
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
	line-height: 0;
	user-select: none;

	@media all and (max-width: 768px) {
		font-size: 11px;
		top: 0;
		right: 0;
	}
}
</style>
