<template>
	<ul class="tab-titles">
		<li :class="{ selected: playerNum === 1 }" @click="playerNum = 1">Multiple</li>
		<li :class="{ selected: playerNum === 2 }" @click="playerNum = 2">Kinotop</li>
		<!-- <li :class="{ selected: playerNum === 3 }" @click="playerNum = 3">KinoBD</li> -->
		<li :class="{ selected: playerNum === 4 }" @click="playerNum = 4">KinoBox</li>
		<li :class="{ selected: playerNum === 5 }" @click="playerNum = 5">Lumex</li>
	</ul>
	<PlayersList v-if="playerNum === 1" />
	<FilmKinoTop v-if="playerNum === 2" />
	<FilmKinoBD v-if="playerNum === 3" />
	<FilmKinoBoxTab v-if="playerNum === 4" />
	<FilmPlayerClub v-if="playerNum === 5" />
</template>

<script>
import FilmKinoBoxTab from "@/components/FilmKinoboxTab.vue";
import FilmPlayerClub from "@/components/FilmPlayerClub.vue";
import FilmKinoTop from "@/components/FilmKinoTop.vue";
import FilmKinoBD from "@/components/FilmKinoBD.vue";
import PlayersList from "@/components/PlayersList.vue";
import { useFilmStore } from "@/stores/filmStore";
import { ref } from "vue";

export default {
	name: "FilmPageDialog",
	props: ["itemFilm"],
	components: { FilmKinoTop, FilmKinoBoxTab, FilmPlayerClub, FilmKinoBD, PlayersList },
	setup() {
		const filmStore = useFilmStore();
		const playerNum = ref(0);
		return {
			filmStore,
			playerNum,
		};
	},
};
</script>

<style scoped lang="scss">
.film__show {
	background: #5077bf;
	outline: none;
	padding: 20px 40px;
	color: #fff;
	border-radius: 10px;
	border: none;
	font-size: 18px;
	font-weight: bold;
	cursor: pointer;

	&:hover {
		background: darken(#5077bf, 10%);
	}
}
.tab-titles {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 5px;
	padding: 0;
	margin: 0 0 10px 0;
	list-style: none;
	li {
		padding: 10px 20px;
		cursor: pointer;
		background: #2c4f91;
		border-radius: 5px;
		user-select: none;
		&.selected,
		&:hover {
			background: #071f3a;
		}
		&.favorite-btn {
			margin-left: auto;
			background: none;
			padding: 0;
			position: relative;
		}
	}
}

.favorite {
	z-index: 10;
	height: 32px;
	width: 32px;
}
</style>
