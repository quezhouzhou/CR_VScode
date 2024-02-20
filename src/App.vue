<template>
  <div id="app">
    <!--页面一开始默认加载APP.vue界面,outer-view在这里是一个坑,切换组件的时候用路由里的东西来显示-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
/**通用样式:所有a标签没有下划线,li没有点, 内外边距为0*/
a {
  text-decoration: none;
}
li {
  list-style: none;
}
* {
  margin: 0px;
  padding: 0px;
}
#app {
  width: 100%;
  height: 100%;
}
html,
body {
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
}
</style>
