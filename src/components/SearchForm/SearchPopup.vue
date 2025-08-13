<template>
	<div :class="['search-popup', { opened: filmStore.isShowLastSearchList }]" v-if="filmStore.lastSearchList.length">
		<button type="button" class="close-list" @click="hideLastList">×</button>
		<ul>
			<li v-for="item in filmStore.lastSearchList" :key="item.id">
				<ButtonBlue @click="clickLastSearch(item.value)">{{ item.value }}</ButtonBlue>
			</li>
		</ul>
	</div>
</template>

<script setup>
import { useFilmStore } from "@/stores/filmStore";
import { useRouter } from "vue-router";
import ButtonBlue from "../ButtonBlue.vue";

const filmStore = useFilmStore();
const router = useRouter();

const clickLastSearch = (value) => {
	filmStore.pageNum = 1;
	filmStore.searchQueryStore = value;
	router.push({
		name: "searchPage",
		query: { q: filmStore.searchQueryStore },
	});
	filmStore.setShowLastSearchList(false);
};

const hideLastList = () => {
	filmStore.setShowLastSearchList(false);
};
</script>

<style lang="scss" scoped>
.close-list {
	cursor: pointer;
	position: sticky;
	left: calc(100% - 20px);
	top: 1px;
	width: 25px;
	height: 25px;
	background: rgba(255, 0, 0, 0.2);
	border: none;
	font-size: 20px;
	color: #fff;
	border-radius: 50%;
}

.search-popup {
	position: absolute;
	top: 100%;
	left: 0;
	transform: translate(0, 5px);
	z-index: 99;
	width: 100%;
	max-height: calc(100vh - 80px);
	overflow: auto;
	background: rgba(22, 48, 97, 0.9);
	border-radius: 5px;
	display: none;

	&.opened {
		display: block;
	}

	ul {
		padding: 0;
		margin: 0;
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 3px 5px;
		margin-top: -20px;

		li {
			button {
				display: block;
				cursor: pointer;
				padding: 5px 10px;
				color: #fff;
				font-size: 18px;
				user-select: none;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				background: none;
				width: 100%;
				text-align: left;

				&:hover {
					background: #2c4f91;
				}
			}
		}
	}
}
</style>
