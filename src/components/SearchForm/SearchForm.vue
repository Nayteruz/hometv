<template>
	<form action="#" :class="['search-form', { show: props.visibleSearch }]" @submit.prevent="searchSubmit">
		<div class="input-wrap">
			<input
				ref="searchInput"
				autocomplete="off"
				type="text"
				@keyup.enter="searchSubmit"
				@focus="showLastList"
				placeholder="Название фильма / ID КиноПоиск"
				v-model.trim="filmStore.searchQueryStore"
				name="keyword"
			/>
			<span @click.prevent="clearInput" :class="['clear-input', { show: filmStore.searchQueryStore }]">×</span>
		</div>
		<ButtonBlue type="submit" :border="true">Найти</ButtonBlue>
		<div :class="['search-popup', { opened: filmStore.isShowLastSearchList }]" v-if="filmStore.lastSearchList.length">
			<button type="button" class="close-list" @click="hideLastList">×</button>
			<ul>
				<li v-for="item in filmStore.lastSearchList" :key="item.id">
					<span @click="clickLastSearch(item.value)">{{ item.value }}</span>
				</li>
			</ul>
		</div>
	</form>
</template>

<script setup>
import { useFilmStore } from "@/stores/filmStore";
import { computed, onMounted, ref, defineProps } from "vue";
import { useRoute, useRouter } from "vue-router";
import ButtonBlue from "../ButtonBlue.vue";

const props = defineProps({
	visibleSearch: {
		type: Boolean,
		default: false,
	},
});

const route = useRoute();
const router = useRouter();
const filmStore = useFilmStore();

onMounted(() => {
	filmStore.searchQueryStore = searchQueryRoute.value;
});

const searchQueryRoute = computed(() => route.query.q);
const searchInput = ref(null);

const searchSubmit = async () => {
	filmStore.addLastSearchList(filmStore.searchQueryStore);
	filmStore.pageNum = 1;
	router.push({
		name: "searchPage",
		query: filmStore.searchQueryWithGenre(),
	});
	filmStore.setShowLastSearchList(false);
};

const showLastList = () => {
	filmStore.setShowLastSearchList(true);
};

const hideLastList = () => {
	filmStore.setShowLastSearchList(false);
};

const clearInput = () => {
	filmStore.searchQueryStore = "";
	searchInput.value.focus();
};

const clickLastSearch = (value) => {
	filmStore.pageNum = 1;
	filmStore.searchQueryStore = value;
	router.push({
		name: "searchPage",
		query: { q: filmStore.searchQueryStore },
	});
	filmStore.setShowLastSearchList(false);
};
</script>

<style scoped lang="scss">
form.search-form {
	display: grid;
	grid-template-columns: 1fr auto;
	align-items: center;
	gap: 5px;
	width: 100%;
	position: relative;

	@media all and (max-width: 500px) {
		grid-column: 1 / 7;
		order: 5;
		display: none;
	}

	&.show {
		display: grid;
	}

	input {
		display: block;
		width: 100%;
		outline: none;
		background: #bedaed;
		color: #333;
		border: 2px #3a6891 solid;
		border-radius: 5px;
		padding: 5px;
		margin: 0;
		font-size: 16px;
		padding-right: 27px;

		&:focus {
			background: #96c3e2;
		}
	}
}

button.close-list {
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
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
}

.clear-input {
	position: absolute;
	right: 5px;
	top: 50%;
	margin-top: -8px;
	height: 16px;
	width: 16px;
	border-radius: 50%;
	display: none;
	align-items: center;
	justify-content: center;
	background: rgba(82, 135, 183, 0.5);
	cursor: pointer;
	z-index: 99;

	&.show {
		display: flex;
	}
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
			span {
				display: block;
				cursor: pointer;
				padding: 5px 10px;
				color: #fff;
				border-radius: 5px;
				font-size: 18px;
				user-select: none;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;

				&:hover {
					background: #2c4f91;
				}
			}
		}
	}
}

.input-wrap {
	position: relative;
}
</style>
