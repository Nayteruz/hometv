<template>
	<header>
		<HomeButton />
		<LastViewButton />
		<FavoriteButton />
		<form
			action="#"
			:class="{
				'show': isSearchVisible,
				'search-form': true,
			}"
			@submit.prevent="searchSubmit"
		>
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
				<span @click.prevent="clearInput" :class="{ 'clear-input': true, 'show': filmStore.searchQueryStore }">×</span>
			</div>
			<button type="submit">Найти</button>
			<div
				:class="{ 'search-popup': true, 'opened': filmStore.isShowLastSearchList }"
				v-if="filmStore.lastSearchList.length"
			>
				<button type="button" class="close-list" @click="hideLastList">×</button>
				<ul>
					<li v-for="item in filmStore.lastSearchList" :key="item.id">
						<span @click="clickLastSearch(item.value)">{{ item.value }}</span>
					</li>
				</ul>
			</div>
		</form>
		<RegistrationWrap />
		<ReloadButton />
		<button
			type="button"
			@click="toggleSearch"
			:class="{
				'search-popup-btn': true,
				'opened': isSearchVisible,
			}"
		></button>
	</header>
</template>

<script>
import { useFilmStore } from "@/stores/filmStore";
import RegistrationWrap from "@/components/registration/RegistrationWrap.vue";
import { useRouter, useRoute } from "vue-router";
import { computed, onMounted, ref } from "vue";
import HomeButton from "./HomeButton.vue";
import LastViewButton from "./LastViewButton.vue";
import FavoriteButton from "./FavoriteButton.vue";
import ReloadButton from "./ReloadButton.vue";

export default {
	components: { RegistrationWrap, HomeButton, LastViewButton, FavoriteButton, ReloadButton },
	setup() {
		const route = useRoute();
		const router = useRouter();
		const filmStore = useFilmStore();
		const searchQueryRoute = computed(() => route.query.q);
		const isSearchVisible = ref(searchQueryRoute.value | (route.name === "searchPage") ? true : false);
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

		function clearInput() {
			filmStore.searchQueryStore = "";
			searchInput.value.focus();
		}

		onMounted(() => {
			filmStore.searchQueryStore = searchQueryRoute.value;
		});

		const toggleSearch = () => {
			isSearchVisible.value = !isSearchVisible.value;
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

		const showLastList = () => {
			filmStore.setShowLastSearchList(true);
		};

		const hideLastList = () => {
			filmStore.setShowLastSearchList(false);
		};

		return {
			searchSubmit,
			filmStore,
			clearInput,
			toggleSearch,
			isSearchVisible,
			searchInput,
			clickLastSearch,
			showLastList,
			hideLastList,
		};
	},
};
</script>

<style scoped lang="scss">
header {
	display: grid;
	grid-template-columns: auto auto auto 1fr 45px 45px;
	align-items: center;
	gap: 5px;
	position: sticky;
	z-index: 999;
	top: -9px;
	padding: 10px 15px 5px;

	@media all and (max-width: 768px) {
		padding: 5px;
		background-color: #163060;
		top: 0;
	}

	@media all and (max-width: 500px) {
		grid-template-columns: 1fr auto auto auto 35px 35px;
	}
}

.search-popup-btn {
	border: none;
	border-radius: 5px;
	background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="%23032746" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM184 296c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64 64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0 0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 64-64 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0 0 64z"/></svg>')
		50% 50% no-repeat #80b0d9;
	font-size: 0;
	line-height: 0;
	width: 35px;
	height: 100%;
	background-size: 60%;
	display: none;

	@media all and (max-width: 500px) {
		display: block;
	}

	&.opened {
		background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="%23032746" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM136 184c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"/></svg>');
	}
}

form {
	display: grid;
	grid-template-columns: 1fr auto;
	align-items: center;
	gap: 5px;
	width: 100%;
	position: relative;

	@media all and (max-width: 500px) {
		grid-column: 1 / 6;
		order: 5;
		display: none;
	}

	&.show {
		display: grid;
	}

	input,
	button {
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
	}

	input {
		padding-right: 27px;
	}

	input:focus {
		background: #96c3e2;
	}

	button {
		width: 80px;
		background: #80b0d9;
		cursor: pointer;

		&:hover {
			background: #5998cd;
		}

		@media all and (max-width: 500px) {
			background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 512 512'%3E%3Cpath d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z'/%3E%3C/svg%3E")
				50% 50% no-repeat #80b0d9;
			font-size: 0;
			line-height: 0;
			width: 35px;
			height: 100%;
		}
	}
}

.input-wrap {
	position: relative;
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
	display: flex;
	justify-content: center;
	align-items: center;
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
</style>
