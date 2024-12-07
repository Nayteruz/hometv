<template>
	<div class="event__top" @click="onTop"></div>
</template>

<script>
export default {
	setup() {
		function onTop() {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
		return {
			onTop,
		};
	},
};
</script>

<style scoped lang="scss">
.event__top {
	position: fixed;
	right: 50%;
	margin-right: -690px;
	bottom: 20px;
	width: 40px;
	height: 40px;
	border-radius: 10px;
	background: rgba(#2c4f91, 0.8);
	cursor: pointer;
	z-index: 99;
	@media all and(max-width:1400px) {
		margin-right: 0;
		right: 10px;
	}

	&:before,
	&:after {
		content: '';
		position: absolute;
		left: 50%;
		top: 50%;
		height: 3px;
		width: 17px;
		background: #fff;
	}
	&:before {
		margin: -2px 0 0 -3px;
		transform: rotate(45deg);
	}
	&:after {
		margin: -2px 0 0 -14px;
		transform: rotate(-45deg);
	}
}
</style>
