<template>
	<div v-for="item in list">
		{{ item.name }}
	</div>
</template>

<script setup lang="ts">
import { axios } from './server'
const list = await axios('./data.json')
console.log(list);



</script>

<style scoped>
</style>