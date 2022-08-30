<template>
	<div>
		<button @click="showLoading">切换</button>
	</div>
</template>

<script setup lang="ts">
import { ComponentInternalInstance } from 'vue'
const { appContext } = getCurrentInstance() as ComponentInternalInstance
const showLoading = () => {
	console.log(appContext);
	appContext.config.globalProperties.$loading.show()
	setTimeout(()=>{
		appContext.config.globalProperties.$loading.hide()
	},5000)
}
</script>

<style scoped >
</style>