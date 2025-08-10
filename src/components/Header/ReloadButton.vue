<template>
	<button class="button" @click="reloadPage"><IconReload /></button>
</template>

<script setup>
import IconReload from "../icons/IconReload.vue";

const reloadPage = () => {
	document.location.reload();
};
</script>

<style scoped lang="scss">
.button {
	user-select: none;
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
	border: none;
	cursor: pointer;

	svg {
		width: 20px;
		height: 20px;
		color: #183153;
	}

	&:hover {
		svg {
			color: #cd0000;
		}
	}
}
</style>
