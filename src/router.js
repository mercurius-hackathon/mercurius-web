import Vue from "vue";
import Router from "vue-router";
import About from "./views/About.vue";
const Live = resolve => {
  import("./views/Live.vue").then(module => {
    resolve(module);
  });
};
// 异步模块
const Demo = resolve => {
  import("./views/Demo.vue").then(module => {
    resolve(module);
  });
};

// 异步模块
const Detail = resolve => {
  import("./views/Detail.vue").then(module => {
    resolve(module);
  });
};

// import Demo from "./views/Demo.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "about",
      component: About
    },
    {
      path: "/live",
      name: "live",
      component: Live
    },
    {
      path: "/detail",
      name: "detail",
      component: Detail
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/demo",
      name: "demo",
      component: Demo
    }
  ]
});
