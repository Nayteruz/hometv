<template>
	<div>
		<iframe
			:src="`//496622434375553.svetacdn.in/fcvcbl7auqJG?kp_id=${filmId}`"
			width="100%"
			height="495"
			allowfullscreen
		></iframe>
	</div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
	name: "FilmPlayerClub",
	setup() {
		const route = useRoute();
		const filmId = route.params.id;

		return {
			filmId,
		};
	},
};
</script>

<style scoped lang="scss">
iframe {
	width: 100%;
	height: 495px;
	border: none;
}
</style>
