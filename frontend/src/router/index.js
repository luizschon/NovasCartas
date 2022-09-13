import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import News from "../views/News.vue";

const routes = [
  {
    path: "/",
    name: "News",
    component: News,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = createRouter({
  //   history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: routes,
});

export default router;