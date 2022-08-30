
type Options={
	el:string
}

export default function(options:Options):Promise<{baserUrl:string}>{
	return new Promise((reactive)=>{
		onMounted(()=>{
			let img:HTMLImageElement = document.querySelector(options.el) as HTMLImageElement
			console.log(img,'-->');
			img.onload =()=>{
				reactive({
					baserUrl:base64(img)
				})
			}
		
		})
		const base64=(el:HTMLImageElement)=>{
			const canves = document.createElement('canvas')
			const ctx = canves.getContext('2d')
			canves.width = el.width
			canves.height = el.height
			ctx?.drawImage(el,0,0,canves.width,canves.height )
			return canves.toDataURL('/image/png')
		}
	})
	
}