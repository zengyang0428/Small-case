<template>
	<div class="layout">
		<Menu @on-click="getList" :data="list" title="我想打游戏"></Menu>
		<div class="layout-right">
			<Header></Header>
			<Content></Content>
		</div>
	</div>
</template>
<script setup lang="ts">
import Menu from './Menu/index.vue'
import Header from './Header/index.vue'
import Content from './Content/index.vue'
import { reactive } from 'vue';
const list=reactive<number[]>([1,2,3])
const getList =(list:number[])=>{
	console.log(list,"我是子组件传过来的值");
	
}

</script>

<style lang="less" scoped>
.layout {
	display: flex;
	height: 100%;
	overflow: hidden;

	&-right {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
}
</style>