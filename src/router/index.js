import Categories from "@/views/Categories/Categories.vue";
import Home from "@/views/Home/Home.vue";
import Layout from "@/views/Layout/Layout.vue";
import Login from "@/views/Login/Login.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Layout",
      component: Layout,
      children: [
        {
          path: "",
          name: "Home",
          component: Home,
        },
        {
          path: "categories",
          name: "Categories",
          component: Categories,
        },
      ],
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
  ],
});

export default router;
