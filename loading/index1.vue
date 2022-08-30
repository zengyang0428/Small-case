<template>
	<div>
		<button @click="showLoading">切换</button>
	</div>
</template>

<script setup lang="ts">
import { ComponentInternalInstance } from 'vue'
//考虑到在获取上下文和全局挂载实例的时候会用到这个getCurrentInstance  获取全局挂载实例
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
