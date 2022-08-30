
type Options={
	el:string
}

export default function(options:Options):Promise<{baserUrl:string}>{
	//reactive成功
	return new Promise((reactive)=>{
		onMounted(()=>{
			//获取节点
			let img:HTMLImageElement = document.querySelector(options.el) as HTMLImageElement
			console.log(img,'-->');
			//页面全部元素加载完毕之后才会发生
			img.onload =()=>{
				reactive({
					baserUrl:base64(img)
				})
			}
		
		})
		const base64=(el:HTMLImageElement)=>{
			//绘图任务
			const canves = document.createElement('canvas')
			//绘图的方法和属性
			const ctx = canves.getContext('2d')
			canves.width = el.width
			canves.height = el.height
			//图片对象, 图像裁剪的x位置, 图像裁剪的y位置, 裁剪的宽度, 裁剪的高度, x位置, y位置, 宽度, 高度
			ctx?.drawImage(el,0,0,canves.width,canves.height )
			//指定转换为base64编码后图片的格式
			return canves.toDataURL('/image/png')
		}
	})
	
}
