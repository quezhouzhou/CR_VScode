<template>
  <div id="app">
    <div class="box">
      <div class="box-header">
        <h1>----ユーザ登録----</h1>
      </div>
      <div class="box-content">
        <div class="mid">
          <div class="user-input one">
            <el-input v-model="user.username" placeholder="请输入账号">
            </el-input>
          </div>
          <div class="user-input tow">
            <el-input
              placeholder="请输入密码"
              v-model="user.password"
              show-password
            ></el-input>
          </div>
        </div>
        <div class="user-btn">
          <div class="login-btn">
            <el-button type="primary">登録确认</el-button>
          </div>
          <a id="register" href="JavaScript:">注册</a>
          <a id="clear" href="JavaScript:">clear</a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
//导出组件,到main.js里,这样mian.js就能根据router规则动态替换组件
export default {
  data() {
    //代表页面数据
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  //代表函数
  methods: {},
};
</script>

<style scoped>
/**样式这些里
scoped为了样式私有化,样式只在当前模块有效,这样不会造成全局污染
不加的话就是所有通用的
  */
#app {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.box {
  width: 460px;
  height: 400px;
  margin: 70px auto;
  background: rgb(160, 160, 160);
}
.box-header {
  height: 100px;
}
.box-header h1 {
  text-align: center;
  font-size: 30px;
  height: 100px;
  line-height: 90px;
}
.box-content {
  height: 300px;
  background: rgb(255, 255, 255);
  border-radius: 6px;
  box-shadow: 0px 4px 10px rgb(160, 160, 160);
}
.mid {
  text-align: center;
}
.user-input {
  width: 300px;
  height: 40px;
  margin: auto;
  margin-bottom: 20px;
  padding-top: 20px;
}
.one {
  margin-top: 30px;
}
.user-btn {
  margin: auto;
}

#register {
  float: left;
}
#clear {
  float: right;
}
.login-btn {
  margin: 0px 200px;
}
.user-btn a {
  color: brown;
}
.user-btn a:hover {
  color: aqua;
  text-decoration: underline;
}
</style>

