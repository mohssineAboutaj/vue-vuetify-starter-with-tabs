import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

let routes = [];

const { links } = require("../config");

// fill routes
links.forEach(link => {
  routes.push({
    path: link.path,
    name: link.title.toLowerCase() || "",
    // route level code-splitting
    // this generates a separate chunk (component.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: link.component,
  });
});

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
