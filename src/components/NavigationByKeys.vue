<template>
	<div></div>
</template>

<script setup>
import { useFilmStore } from '@/stores/filmStore';
import { onBeforeMount, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { breakpoints, keyboardKeyList } from './const';
const router = useRouter();
const filmStore = useFilmStore();
const countByLine = ref(0);

const onDown = () => {
	if (filmStore.currentFocusIndex === -1) {
		filmStore.currentFocusIndex = 0;
	} else {
		filmStore.currentFocusIndex += countByLine.value;
	}
};
const onUp = () => {
	filmStore.currentFocusIndex = Math.max(0, filmStore.currentFocusIndex - countByLine.value);
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
	switch (e.key) {
		case keyboardKeyList.ArrowDown:
			onDown();
			break;
		case keyboardKeyList.ArrowUp:
			onUp();
			break;
		case keyboardKeyList.ArrowRight:
			onRight();
			break;
		case keyboardKeyList.ArrowLeft:
			onLeft();
			break;
		case keyboardKeyList.Enter:
		case keyboardKeyList.NumpadEnter:
			onEnter();
			break;
	}
};

const setCountByLine = () => {
	if (window.innerWidth > breakpoints.desktop) {
		countByLine.value = 5;
	} else if (window.innerWidth > breakpoints.tablet) {
		countByLine.value = 4;
	} else if (window.innerWidth > breakpoints.mobile) {
		countByLine.value = 3;
	} else {
		countByLine.value = 2;
	}
};

onMounted(() => {
	window.removeEventListener('keydown', handleKeyDown);
	window.addEventListener('keydown', handleKeyDown);
	filmStore.currentFocusIndex = -1;
	setCountByLine();
	console.log('navigation mounted');
});

onBeforeMount(() => {
	window.removeEventListener('keydown', handleKeyDown);
	filmStore.currentFocusIndex = -1;

	console.log('navigation before mount');
});
</script>
