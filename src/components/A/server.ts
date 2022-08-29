
type NameList ={
	name:string
}
export const axios = (url:string):Promise<NameList[]>=>{
	return new Promise((resolve)=>{
		//XMLHttpRequest发送请求的接口
		let xhr:XMLHttpRequest = new XMLHttpRequest()
		xhr.open('get',url)


		xhr.onreadystatechange=()=>{
			if(xhr.readyState === 4 && xhr.status==200) {
				setTimeout(()=>{
					resolve(JSON.parse(xhr.responseText))
				},2000)
				
			}
		}
		xhr.send(null)
	})
}