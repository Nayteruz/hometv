<template>
	<button class="button" @click="click" href="#"><IconFilm /></button>
</template>

<script setup>
import { useFilmStore } from "@/stores/filmStore";
import { useRouter } from "vue-router";
import IconFilm from "@/components/icons/IconFilm.vue";

const router = useRouter();
const filmStore = useFilmStore();

const click = () => {
	filmStore.pageNum = 1;
	filmStore.genreIdStore = null;
	router.push({ name: "lastViews" });
};
</script>

<style scoped lang="scss">
.button {
	user-select: none;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;
	padding: 0 8px 0;
	height: 32px;
	color: #333;
	text-decoration: none;
	font-size: 16px;
	font-weight: bold;
	line-height: 1;
	background: #80b0d9;
	border-radius: 5px;
	border: none;
	cursor: pointer;

	svg {
		width: 26px;
		height: 26px;
		color: #183153;
	}

	&:hover {
		svg {
			color: #cd0000;
		}
	}
}
</style>
