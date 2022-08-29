<template>
	<div>
		<button @click="reandom">reandom</button>
		<transition-group move-class="mmm" tag="div" class="wraps">
			<div class="items" :key="item.id" v-for="item in list">
			{{item.number}}</div>
		</transition-group>
	</div>
</template>

<script setup lang="ts">
import _ from 'lodash'
import { ref } from 'vue';


let list = ref(Array.apply(null, {
	length: 81
} as number[]).map((_,index)=>{
	return{
		id:index,
		number:(index % 9) + 1
	}
}))
 
console.log(list.value);
const reandom =()=>{
	list.value = _.shuffle(list.value)
}


</script>

<style scoped lang="less">
.mmm{
	transition: all 2s;
}
.wraps{
	display: flex;
	flex-wrap: wrap;
	width: calc(25px *10 + 9px);
	.items{
		width:25px;
		height:25px;
		border: 1px solid #ccc;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>