import { createApp } from "vue";
import App from "./App.vue";
import mitt from "mitt";
import Loading from './components/loading'
const Mit = mitt();

//TypeScript注册
// 由于必须要拓展ComponentCustomProperties类型才能获得类型提示
declare module "vue" {
  export interface ComponentCustomProperties {
    $Bus: typeof Mit;
  }
}

const app = createApp(App);
app.use(Loading)

type Filter = {
  format: <T>(srt: T) => string;
};
declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $filters:Filter,
    $loading:{
      show:()=>void,
      hide:()=>void
    }
  }
}

//Vue3挂载全局API
app.config.globalProperties.$Bus = Mit;
app.config.globalProperties.$filters = {
  format<T>(str: T): string {
    return `真${str}`;
  },
};

app.mount("#app");
