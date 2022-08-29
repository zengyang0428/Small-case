<template>
	<div style="margin-left:10px">
		<div @click.stop="clickItem(item)" v-for="(item, index) in data" :key="index">
			{{ item.name }}
			<TreeItem @on-click="clickItem" v-if="item?.children?.length" :data="item.children"></TreeItem>
		</div>
	</div>
</template>

<script setup lang="ts">
import TreeItem from './index.vue'
type TreeList = {
	name: string, 
	icon?: string,
	children?: TreeList[] | []
}
const emit = defineEmits(["on-click"])
const clickItem = (item: TreeList) => {
	emit('on-click',item)
}
type Props = {
	data?: TreeList[]
}
defineProps<Props>()


</script>

<style scoped>
</style>