import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/', 代表路径
  //   name: 'login',代表这个路径叫login,取个别名
  //   component:核心!当用户访问path路径的时候我跳转到这个组件上去
  //   component: () => import('../views/Login.vue')比如我现在跳转到login组件里去

  {
    path: "/",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/",
    name: "register",
    component: () => import("../views/Register.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
