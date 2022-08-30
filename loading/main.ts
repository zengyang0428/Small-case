import { createApp } from "vue";
import App from "./App.vue";
import Loading from './components/loading'
app.use(Loading)

//TypeScript注册
// 由于必须要拓展ComponentCustomProperties类型才能获得类型提示
declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $loading:{
      show:()=>void,
      hide:()=>void
    }
  }
}

//Vue3挂载全局API
app.config.globalProperties.$filters = {
  format<T>(str: T): string {
    return `真${str}`;
  },
};

app.mount("#app");
