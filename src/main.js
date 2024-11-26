import "@/styles/common.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { useIntersectionObserver } from "@vueuse/core";

import { getCategory } from "@/apis/testAPI";
getCategory()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {});

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

//定义全局指令
app.directive("img-lazy", {
  mounted(el, binding) {
    //el 指令绑定元素
    //binding 指令对象 binding.value 指令等于号后面绑定的表达式的值
    console.log(el, binding.value);
    useIntersectionObserver(el, ([{ isIntersecting }]) => {
      if (isIntersecting) {
        el.src = binding.value;
      }
    });
  },
});
