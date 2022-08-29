<template>
	<div class="menu">
		菜单
		<Tree @on-click="getitem" :data="data"></Tree>
	</div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import Tree from '../../components/Tree/index.vue'
type TreeList = {
	name: string,
	icon?: string,
	children?: TreeList[] | []
}
const getitem=(item:TreeList)=>{
	console.log(item,"父组件");
	
}

const data = reactive<TreeList[]>([
	{
		name: "no.1",
		children: [
			{
				name: "no.1-1",
				children: [
					{
						name: "no.1-1-1",
					}
				]
			}
		]
	},
	{
		name: "no.2",
		children: [
			{
				name: "no.2-1",
			}
		]
	},
	{
		name: "no.3",
	},
])
</script>

<style lang="less" scoped>
.menu {
	width: 200px;
	border-right: 1px solid #ccc;
}
</style>