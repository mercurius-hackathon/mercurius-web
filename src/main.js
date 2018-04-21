import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// lodash
import loadsh from "lodash";
// animate.css
import "vue2-animate/dist/vue2-animate.min.css";
// Echarts
import ECharts from "vue-echarts/components/ECharts.vue";
// 手动引入 ECharts 各模块来减小打包体积
import "echarts/lib/component/tooltip";
import "echarts/lib/chart/line";

Vue.config.productionTip = false;

// regist components
Vue.component("chart", ECharts);

// import Lodash
Object.defineProperty(Vue.prototype, "$_", { value: loadsh });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
