<template>
	<div>
		<div class="player-container">
			<div class="player-select">
				<div class="player-name-list">
					<button
						v-for="(name, index) in playerNames"
						:key="name"
						:class="{ 'select-button': true, 'active': index === selectedIndex }"
						@click="selectPlayer(index)"
					>
						{{ name }}
					</button>
				</div>
			</div>
			<div ref="playerList" class="player-list">
				<div
					v-for="(item, index) in playersData"
					:key="item.name"
					:class="{ 'player-item': true, 'active': index === selectedIndex }"
				>
					<div v-if="index === selectedIndex">
						<iframe
							v-if="item.iframeSrc"
							:src="item.iframeSrc"
							allowfullscreen
							loading="lazy"
							:title="`Плеер ${item.name} для КиноПоиск ID ${filmId}`"
						></iframe>
						<div v-else>Загрузка плеера...</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useFilmStore } from "@/stores/filmStore";
import { players } from "./const";

export default {
	name: "PlayersList",
	setup() {
		const filmStore = useFilmStore();
		const route = useRoute();
		const filmId = route.params.id;
		const playerList = ref(null);
		const selectedIndex = ref(-1);
		const playerNames = Object.keys(players);
		const playersData = ref([]);

		const selectPlayer = (index) => {
			selectedIndex.value = index;
		};

		async function initPlayer() {
			filmStore.setFilmPageId(filmId);

			const playersList = await Promise.all(
				Object.entries(players).map(async ([name, getSrc]) => {
					let api = filmStore.apiKey;
					if (name === "Alloha") {
						api = filmStore.apiAloha;
					}
					if (name === "HDVB") {
						api = filmStore.apiHDBV;
					}
					if (name !== "Alloha" && name !== "HDVB") {
						api = undefined;
					}

					let iframeSrc = typeof getSrc === "function" ? await getSrc(filmId, api) : null;
					return {
						name,
						iframeSrc,
					};
				})
			);

			playersData.value = playersList.filter((player) => player.iframeSrc);

			if (playersData.value.length > 0) {
				selectedIndex.value = 0;
			}
		}

		onMounted(() => {
			if (playerList.value) {
				initPlayer();
			}
		});

		return {
			filmId,
			playerNames,
			selectedIndex,
			selectPlayer,
			playerList,
			playersData,
		};
	},
};
</script>

<style scoped lang="scss">
.player-container {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.player-select {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.player-name-list {
	display: flex;
	flex-wrap: wrap;
	gap: 3px 5px;
}

.select-button {
	cursor: pointer;
	background: #5077bf;
	outline: none;
	padding: 10px;
	color: #fff;
	border-radius: 20px;
	border: none;
	font-size: 15px;
	font-weight: bold;
	cursor: pointer;

	&:hover {
		background: darken(#5077bf, 10%);
	}

	&.active {
		background: #071f3a;
	}
}

.player-item {
	display: none;
	flex-direction: column;

	iframe {
		width: 100%;
		height: 60vh;
		min-height: 450px;
		border: none;
		border-radius: 14px;
		display: block;
		opacity: 1 !important;
	}

	&.active {
		display: flex;
	}
}
</style>
