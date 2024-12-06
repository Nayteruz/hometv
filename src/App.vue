<template>
	<div class="wrapper">
		<HeaderFilm :key="$route.fullPath" />
		<GenreList />
		<RouterView v-slot="{ Component }">
			<KeepAlive include="MainList">
				<component :is="Component" :key="$route.fullPath"></component>
			</KeepAlive>
		</RouterView>
		<ToTop />
	</div>
</template>

<script setup>
import { useFilmStore } from '@/stores/filmStore';
import HeaderFilm from '@/components/HeaderFilm.vue';
import GenreList from '@/components/GenreList.vue';
import ToTop from '@/components/ToTop.vue';
import { onBeforeUnmount, onMounted } from 'vue';

const filmStore = useFilmStore();

const handleKeyDown = (e) => {
	switch (e.key) {
		case 'ArrowDown':
			filmStore.currentFocus += 1;
			e.preventDefault();
			break;
		case 'ArrowUp':
			filmStore.currentFocus -= 1;
			e.preventDefault();
			break;
		case 'ArrowRight':
			filmStore.currentFocus += 1;
			e.preventDefault();
			break;
		case 'ArrowLeft':
			filmStore.currentFocus -= 1;
			e.preventDefault();
			break;
	}
};

onMounted(() => {
	window.addEventListener('keydown', handleKeyDown);
});

onBeforeUnmount(() => {
	window.removeEventListener('keydown', handleKeyDown);
});
</script>

<style lang="scss">
//https://gist.github.com/Nayteruz/ea417352f3e21e923f38645a4a4ceffd коммит на отдельную ветку для базового пути
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

#app {
	padding: 20px;
	@media all and (max-width: 1024px) {
		padding: 0;
	}
}

body,
html {
	height: 100%;
	min-height: 100%;
}
body {
	background: #101421;
}

h1 {
	color: #fff;
	font-size: 30px;
	margin: 30px 0 30px;
}

.wrapper {
	background: rgba(#5077bf, 0.3);
	border-radius: 10px;
	padding: 10px 15px;
	font-family: 'Roboto', sans-serif;
	margin: 0 auto 0;
	max-width: 1280px;
	position: relative;
	@media all and (max-width: 768px) {
		padding: 10px 5px;
	}
}

.film__init > div {
	min-height: 450px !important;
	max-width: 100% !important;
	width: 100% !important;
	#yohoho-iframe {
		width: 100% !important;
		height: 100% !important;
	}
}

.icon {
	height: 32px;
	width: 45px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
}
.icon svg {
	max-height: 80%;
	max-width: 80%;
}
</style>
