<template>
	<header>
		<a class="home" @click="goHome" href="#">Home</a>
		<a href="#" :class="['favorites', { disabled: isUser === false }]" @click="$router.push({ name: 'favorite' })">{{
			filmStore.favorites.length
		}}</a>
		<form action="#" :class="{ show: isSearchVisible }" @submit.prevent="searchSubmit">
			<div class="input-wrap">
				<input
					ref="searchInput"
					autocomplete="off"
					type="text"
					@keyup.enter="searchSubmit"
					placeholder="Название фильма / ID КиноПоиск"
					v-model.trim="filmStore.searchQueryStore"
					name="keyword"
				/>
				<span v-if="filmStore.searchQueryStore" @click="clearInput" class="clear-input">×</span>
			</div>
			<button type="submit">Найти</button>
		</form>
		<RegistrationWrap />
		<button
			type="button"
			@click="toggleSearch"
			:class="{ 'search-popup-btn': true, 'opened': isSearchVisible }"
		></button>
	</header>
</template>

<script>
import { useFilmStore } from '@/stores/filmStore';
import RegistrationWrap from '@/components/registration/RegistrationWrap.vue';
import { useRouter, useRoute } from 'vue-router';
import { computed, onMounted, ref } from 'vue';

export default {
	components: { RegistrationWrap },
	setup() {
		const route = useRoute();
		const router = useRouter();
		const filmStore = useFilmStore();
		const isUser = computed(() => (filmStore.user !== null ? true : false));
		const searchQueryRoute = computed(() => route.query.q);
		const isSearchVisible = ref(false);
		const searchInput = ref(null);

		function searchSubmit() {
			filmStore.pageNum = 1;
			router.push({ name: 'searchPage', query: filmStore.searchQueryWithGenre() });
		}

		function clearInput() {
			filmStore.searchQueryStore = '';
			searchInput.value.focus();
		}

		function goHome() {
			filmStore.pageNum = 1;
			filmStore.genreIdStore = null;
			router.push({ name: 'home' });
		}

		onMounted(() => {
			filmStore.searchQueryStore = searchQueryRoute.value;
		});

		function toggleSearch() {
			isSearchVisible.value = !isSearchVisible.value;
		}

		return {
			searchSubmit,
			goHome,
			filmStore,
			isUser,
			clearInput,
			toggleSearch,
			isSearchVisible,
			searchInput,
		};
	},
};
</script>

<style scoped lang="scss">
header {
	display: grid;
	grid-template-columns: auto auto 1fr 45px;
	align-items: center;
	gap: 5px;

	@media all and (max-width: 500px) {
		grid-template-columns: 1fr auto auto 35px;
		position: sticky;
		top: 1px;
		z-index: 999;
	}
}

a.home,
a.favorites {
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

	&:before {
		content: '';
		display: block;
		width: 16px;
		height: 16px;
		background-image: url("data:image/svg+xml;utf8,<svg fill='%23333' height='512' viewBox='0 0 576 512' width='576' xmlns='http://www.w3.org/2000/svg'><path d='M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z'/></svg>");
		background-repeat: no-repeat;
		background-size: 100%;
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

	@media all and (max-width: 500px) {
		grid-column: 1 / 5;
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
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(82, 135, 183, 0.5);
	cursor: pointer;
	z-index: 99;
}

a.favorites {
	user-select: none;
	&.disabled {
		opacity: 0.5;
		pointer-events: none;
	}
	&:before {
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23183153' d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z'/%3E%3C/svg%3E");
	}

	&:hover {
		&:before {
			background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23cd0000' d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z'/%3E%3C/svg%3E");
		}
	}
}
</style>
