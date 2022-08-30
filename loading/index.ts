
import {App,createVNode,VNode,render} from 'vue'

import Loading from './index.vue'

export default{
	install(app:App){
		//创建虚拟DOM
		const vnode:VNode = createVNode(Loading)
		//创建真实DOM
		render(vnode,document.body)
		app.config.globalProperties.$loading={
			show:vnode.component?.exposed?.show,
			hide:vnode.component?.exposed?.hide
		}
	}
}


