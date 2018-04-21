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
import "echarts/lib/component/dataZoom";
// Element
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;

// regist components
Vue.component("chart", ECharts);
Vue.use(ElementUI);

// import Lodash
Object.defineProperty(Vue.prototype, "$_", { value: loadsh });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
