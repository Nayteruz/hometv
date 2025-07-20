<template>
	<li class="films__item preload-card" v-for="pre in 20" :key="pre">
		<div class="item__image">
			<svg xmlns="http://www.w3.org/2000/svg" width="360" height="540"></svg>
		</div>
	</li>
</template>

<style scoped lang="scss">
.films__item {
	display: flex;
	flex-direction: column;
	position: relative;
	border-radius: 10px;
}
.item__image {
	font-size: 0;
	line-height: 0;
	overflow: hidden;
	border-radius: 10px;
	flex: 1 1 auto;
	max-height: 400px;
	svg {
		object-fit: cover;
		width: 100%;
		height: 100%;
		min-height: 170px;
	}
}
.preload-card {
	background: rgba(#fff, 0.1);
	background: linear-gradient(110deg, rgba(#fff, 0.04) 8%, rgba(#fff, 0.15) 18%, rgba(#fff, 0.04) 33%);
	background-size: 400% 600%;
	animation: 2s shine linear infinite;
}

@keyframes shine {
	to {
		background-position-x: -250%;
	}
}
</style>
