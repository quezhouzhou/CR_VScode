import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//引入element组件
import element from "element-ui";
//引入我们自己封装的axios
import axios from "./utils/axios";

//把axios交给vue管理
Vue.prototype.$http = axios;
Vue.config.productionTip = false;
//把element-ui交给vue管理
Vue.use(element);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
