<template>
	<span class="favorite-icon">
		<span class="loading-round" v-if="isShow"></span>
		<IconFavorite :class="{ active: isFavorite }" @click.prevent="toggleFavorite" />
	</span>
</template>

<script>
import IconFavorite from "@/components/icons/IconFavorite";
import { inject, onMounted, ref } from "vue";
import { useFilmStore } from "@/stores/filmStore";

export default {
	name: "FavoriteBtn",
	components: { IconFavorite },
	props: ["itemFilm"],
	setup(props) {
		const isFavorite = ref(false);
		const isShow = ref(false);
		const emitter = inject("emitter");
		const filmStore = useFilmStore();

		function checkFavorite() {
			isFavorite.value = filmStore.checkFavoriteStore(props.itemFilm);
		}

		async function toggleFavorite() {
			if (!filmStore.user) {
				alert("Необходима авторизация");
				return;
			}
			isShow.value = true;
			if (!isFavorite.value) {
				await filmStore.addFavorite(props.itemFilm);
				isFavorite.value = true;
			} else {
				await filmStore.removeFavorite(props.itemFilm);
				isFavorite.value = false;
			}
			isShow.value = false;
		}

		onMounted(() => {
			checkFavorite();
		});

		emitter.on("setUserData", checkFavorite);

		return {
			isFavorite,
			isShow,
			toggleFavorite,
		};
	},
};
</script>

<style scoped lang="scss">
.favorite-icon {
	width: 24px;
	height: 24px;
	display: block;
	cursor: pointer;
	position: relative;
	color: #80b0d9;
}

.loading-round {
	display: block;
	position: absolute;
	left: 50%;
	top: 50%;
	width: 30px;
	height: 30px;
	margin: -15px 0 0 -15px;
	border-radius: 50%;
	border: 3px solid #c77e7e;
	border-top-color: transparent;
	animation: spinner-border 0.75s linear infinite;
}

.favorite-icon svg {
	width: 100%;
	height: 100%;
}

.favorite-icon:hover {
	color: #2c4f91;
}

.favorite-icon svg.active {
	color: #cf0000;
}

@keyframes spinner-border {
	to {
		transform: rotate(360deg);
	}
}
</style>
