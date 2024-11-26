import { useIntersectionObserver } from "@vueuse/core";

export const lazyPlugin = {
  install(app) {
    //定义全局指令
    app.directive("img-lazy", {
      mounted(el, binding) {
        //el 指令绑定元素
        //binding 指令对象 binding.value 指令等于号后面绑定的表达式的值
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          console.log(el, binding.value);
          if (isIntersecting) {
            el.src = binding.value;
            stop(); //停止监听
          }
        });
      },
    });
  },
};
