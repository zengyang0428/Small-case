<template>
	<div v-move class="box">
		<div class="header"></div>
		<div>内容</div>
	</div>
</template>

<script setup lang="ts">
import { Directive, DirectiveBinding } from 'vue';
const vMove: Directive<any, void> = (el: HTMLElement) => {
	//获取节点
	let moveElement: HTMLDivElement = el.firstElementChild as HTMLDivElement
	console.log(moveElement);
	//接口指用户与指针设备( 如鼠标 )交互时发生的事件
	const mouseDown = (e: MouseEvent) => {
		//获取当前的位置
		let X = e.clientX - el.offsetLeft
		let Y = e.clientY - el.offsetTop
		//接口指用户与指针设备( 如鼠标 )交互时发生的事件
		const move = (e: MouseEvent) => {
			console.log(e);
			//获取移动的位置 - 获取当前的位置
			el.style.left = e.clientX - X + 'px'
			el.style.top = e.clientY - Y + 'px'

		}
		//鼠标移动
		document.addEventListener('mousemove', move)
		//当我们在元素上松开鼠标时，mouseup 会触发。
		document.addEventListener('mouseup', () => {
			document.removeEventListener('mousemove', move)
		})
	}
	//当我们在元素上按下鼠标时，mousedown 会触发
	moveElement.addEventListener('mousedown', mouseDown)

}


</script>

<style scoped lang="less">
.box {
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 200px;
	height: 200px;
	border: 3px solid black;

	.header {
		height: 20px;
		background: black;
	}


}
</style>
