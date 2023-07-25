import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoginView from "../views/LoginView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "main",
    component: () => import("../views/MainView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/:notFound",
    name: "notFound",
    component: () => import("../views/NotFoundView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//before each
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("culqiToken");
  const user = localStorage.getItem("culqiUser");
  const isAuth = token && user;
  if (to.name !== "login" && !isAuth) next({ name: "login" });
  else next();
});

export default router;
