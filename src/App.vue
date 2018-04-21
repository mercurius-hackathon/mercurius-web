<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Live Robots</router-link> |
      <router-link to="/sandbox">Sandbox</router-link> |
      <router-link to="/detail">Robots detail</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <transition name="myfade" mode="out-in">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>

<style lang="less">
@import './themes.less';
html {
  min-height: 130vh;
  background-size: cover;
  background-position: center;
  background-image: url('./assets/background.jpeg');
  background-repeat: no-repeat;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e0e0e0;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #e0e0e0;
    &.router-link-exact-active {
      color: @dark-green;
    }
  }
}

.myfade-enter-active, .myfade-leave-active {
  transition: opacity 0.2s;
}
.myfade-enter, .myfade-leave-active {
  opacity: 0;
}
// black theme
.el-tabs--border-card,
.el-tabs--border-card>.el-tabs__header {
  background-color: rgba(255, 255, 255, 0.07);
  border: none;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
  background-color: rgba(255, 255, 255, 0.25);
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item:not(.is-disabled):hover {
  color: #e0e0e0;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
  color: #fff;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item {
  border: none;
}
</style>
