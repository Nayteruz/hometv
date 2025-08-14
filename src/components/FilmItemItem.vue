<template>
	<li
		:class="{ films__item: true, focused: isFocused | isFocusedOnHover }"
		@mouseover="onOver"
		@mouseleave="onLeave"
		tabindex="0"
		ref="itemRef"
	>
		<a :href="`/film/${filmId}`" class="item__link" @click.prevent="goToPageFilm"></a>
		<FavoriteBtn class="favorite" :filmId="filmId" />
		<div class="item__image">
			<svg xmlns="http://www.w3.org/2000/svg" width="360" height="540"></svg>
			<img :src="itemFilm.posterUrlPreview" :alt="props.itemFilm.nameRu" />
		</div>
		<FilmRating :filmInfo="props.itemFilm" :isRating="props.isRating" />
		<div class="item__options">
			<ul>
				<li class="name">{{ filmName }}</li>
				<li v-if="itemFilm.year" class="year">{{ itemFilm.year }} г.</li>
			</ul>
		</div>
	</li>
</template>

<script setup>
import { useFilmStore } from "@/stores/filmStore";
import FavoriteBtn from "@/components/FavoriteBtn.vue";
import { computed, defineProps, ref, watch } from "vue";
import { useRouter } from "vue-router";
import FilmRating from "./FilmRating.vue";
import { getFilmPageTitle } from "./utils";

const props = defineProps({
	itemFilm: Object,
	currentIndex: Number,
	isRating: {
		type: Boolean,
		default: true,
	},
});
const router = useRouter();
const filmStore = useFilmStore();
const itemRef = ref(null);
const isFocused = computed(() => props.currentIndex === filmStore.currentFocusIndex);
const filmName = computed(() => getFilmPageTitle(props.itemFilm));
const isFocusedOnHover = ref(false);

const filmId = props.itemFilm.filmId || props.itemFilm.kinopoiskId;

const goToPageFilm = () => {
	router.push(`/film/${filmId}`);
};

const onOver = () => {
	isFocusedOnHover.value = true;
};

const onLeave = () => {
	isFocusedOnHover.value = false;
};

watch(isFocused, () => {
	if (isFocused.value && itemRef.value) {
		const offsets = itemRef.value.getBoundingClientRect();
		const scrollTop = document.documentElement.scrollTop;
		const scrollBottom = scrollTop + window.innerHeight;
		const elementDocumentBottom = offsets.bottom + scrollTop;

		if (offsets.top < 0 || elementDocumentBottom > scrollBottom) {
			window.scrollTo(0, scrollTop + offsets.top - 80);
		}
	}
});
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

	&.focused {
		box-shadow: 0 0 10px 6px #5077bf;

		a.item__link {
			box-shadow: inset 0 0 1px 3px #c4d9ff;
			border-radius: 8px;
		}
	}
}

.item__image {
	font-size: 0;
	line-height: 0;
	overflow: hidden;
	border-radius: 10px;
	flex: 1 1 auto;
	min-height: 300px;
	max-height: min(400px, 45vh);
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
		content: "";
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
