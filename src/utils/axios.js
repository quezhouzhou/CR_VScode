//引入axios 用于封装我们的axios
import axios from "axios";
//引入element-ui 用于弹窗提示
import Element from "element-ui";
//1.通用url请求地址
axios.defaults.baseURL = "http://localhost:8082";
//2.配置通用的连接超时 50秒
const request = axios.create({
  timeout: 50000,
});
//3.配置一个通用的响应拦截
//页面会在Loign.vue组件里面发送axios请求  java一定会响应一个数据给页面
//java响应的数据 会先来到这里然后在取到 Login.vue这里面
request.interceptors.response.use(
  (res) => {
    if (res.data.code == 200) {
      return res;
    }
  },
  (err) => {
    console.log(err);
    if (err.response == undefined) {
      Element.Message.error("网络连接超时");
    } else {
      //提示java的 什么情况失败
      Element.Message.error(err.response.data.message);
    }
    //我们不能终止代码 不让他继续往下传递 到Login.vue组件里面的axios里面去
    return Promise.reject("错误");
  }
);

//吧这个js文件里面的对象导出出去
export default request;
