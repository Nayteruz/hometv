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
		<NavigationByKeys :key="$route.fullPath" />
	</div>
</template>

<script setup>
import HeaderFilm from "@/components/HeaderFilm.vue";
import GenreList from "@/components/GenreList.vue";
import ToTop from "@/components/ToTop.vue";
import NavigationByKeys from "./components/NavigationByKeys.vue";
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

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
	margin: 30px 15px 30px;

	@media all and (max-width: 500px) {
		margin-left: 5px;
		margin-right: 5px;
	}
}

.wrapper {
	background: #163060;
	border-radius: 10px;
	padding: 0;
	font-family: "Roboto", sans-serif;
	margin: 0 auto 0;
	max-width: 1280px;
	position: relative;

	@media all and (max-width: 1024px) {
		border-radius: 0;
	}
}

.film__init > div {
	min-height: 450px !important;
	max-width: 100% !important;
	width: 100% !important;
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
