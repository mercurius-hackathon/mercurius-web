<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Live Robots</router-link> |
      <router-link to="/sandbox">Sandbox</router-link> |
      <router-link to="/demo">Demo</router-link> |
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
html {
  min-height: 100vh;
  background-size: 100% 100%;
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
      color: #42b983;
    }
  }
}

.myfade-enter-active, .myfade-leave-active {
  transition: opacity 0.2s;
}
.myfade-enter, .myfade-leave-active {
  opacity: 0;
}
</style>
