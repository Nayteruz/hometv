<template>
	<div class="wrapper" ref="wrapperRef">
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
import { useRouter } from 'vue-router';
import { onBeforeUnmount, onMounted, ref } from 'vue';

const wrapperRef = ref(null);
const filmStore = useFilmStore();
const router = useRouter();

const keys = {
	ArrowDown: 'ArrowDown',
	ArrowUp: 'ArrowUp',
	ArrowRight: 'ArrowRight',
	ArrowLeft: 'ArrowLeft',
	Enter: 'Enter',
	NumpadEnter: 'Enter',
};

const breakpoints = {
	desktop: 1024,
	tablet: 768,
	mobile: 480,
};

const onDown = () => {
	if (filmStore.currentFocusIndex === -1) {
		filmStore.currentFocusIndex = 0;
	} else {
		filmStore.currentFocusIndex += filmStore.countByLine;
	}
};
const onUp = () => {
	filmStore.currentFocusIndex = Math.max(0, filmStore.currentFocusIndex - filmStore.countByLine);
};
const onRight = () => {
	filmStore.currentFocusIndex += 1;
};
const onLeft = () => {
	filmStore.currentFocusIndex = Math.max(0, filmStore.currentFocusIndex - 1);
};

const onEnter = () => {
	const index = filmStore.currentFocusIndex;
	if (index === -1) {
		return;
	}

	const filmId = filmStore.films[index].filmId || filmStore.films[index].kinopoiskId;

	router.push(`/film/${filmId}`);
};

const handleKeyDown = (e) => {
	const keyDown = keys[e.key];

	if (keyDown) {
		e.preventDefault();
	}

	switch (e.key) {
		case keys.ArrowDown:
			onDown();
			break;
		case keys.ArrowUp:
			onUp();
			break;
		case keys.ArrowRight:
			onRight();
			break;
		case keys.ArrowLeft:
			onLeft();
			break;
		case keys.Enter:
		case keys.NumpadEnter:
			onEnter();
			break;
	}
};

const setCountByLine = () => {
	if (window.innerWidth > breakpoints.desktop) {
		filmStore.countByLine = 5;
	} else if (window.innerWidth > breakpoints.tablet) {
		filmStore.countByLine = 4;
	} else if (window.innerWidth > breakpoints.mobile) {
		filmStore.countByLine = 3;
	} else {
		filmStore.countByLine = 2;
	}
};

onMounted(() => {
	window.addEventListener('keydown', handleKeyDown);
	filmStore.currentFocusIndex = -1;
	setCountByLine();
});

onBeforeUnmount(() => {
	window.removeEventListener('keydown', handleKeyDown);
	filmStore.currentFocusIndex = -1;
});
</script>

<style lang="scss">
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
