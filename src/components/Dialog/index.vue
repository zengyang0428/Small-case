<template>
	<div>
		<header class="header">
			<slot name="header"> </slot>
		</header>
		<main class="main">
			<div v-for="(item, index) in data">
				<slot :data="item" :index="index"></slot>
			</div>
		</main>
		<footer class="footer">
			<slot name="footer"></slot>
		</footer>
	</div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

type names = {
	name: string,
	age: number
}
const data = reactive<names[]>([
	{
		name: "dd1",
		age: 2021
	}, {
		name: "dd2",
		age: 2022
	}, {
		name: "dd3",
		age: 2023
	}, {
		name: "dd4",
		age: 2024
	}, {
		name: "dd5",
		age: 20215
	}
])



</script>

<style scoped lang="less">
.header {
	height: 100px;
	background: red;
	color: #fff;
}

.main {
	height: 200px;
	background: rgb(77, 30, 230);
	color: #fff;
}

.footer {
	height: 100px;
	background: rgb(213, 29, 204);
	color: #fff;
}
</style>