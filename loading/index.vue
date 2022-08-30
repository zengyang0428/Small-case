<template>
	<div v-if="isShow" class="loading">
		<div class="loading-content">loading....</div>
	</div>
</template>

<script setup lang="ts">
let isShow = ref<boolean>(false)

const show = () => {
	isShow.value = true
}
const hide = () => {
	isShow.value = false
}
defineExpose({
	isShow,
	show,
	hide
})

</script>

<style scoped lang="less">
.loading {
	position: fixed;
	inset: 0;
	background: black;
	display: flex;
	justify-content: center;
	align-items: center;

	&-content {
		font-size: 30px;
		color: #fff;
	}
}
</style>