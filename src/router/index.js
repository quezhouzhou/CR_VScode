import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/', 代表路径
  //   name: 'login',代表这个路径叫login,取个别名
  //   component:核心!当用户访问path路径的时候我跳转到这个组件上去
  //   component: () => import('../views/Login.vue')比如我现在跳转到login组件里去

  {
    path: "/",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/showuserall",
    name: "ShowUserAll",
    component: () => import("../views/ShowUserAll.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
