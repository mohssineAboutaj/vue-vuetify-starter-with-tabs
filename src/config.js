// import pages/components
import Home from "@/views/Home.vue";

// site title, description, & general info
/**
 * @type {String} website title
 */
const title = "Vue Vuetify FontAwesome - starter app";

// links & routes
/**
 * @type {Array} all routes in the application
 *
 * @property {String} icon icon to show aside to the route title
 * @property {String} title title of the route
 * @property {String} path path of the route
 * @property {Function} component import component
 * @property {Boolean} hidden hidden from navbar or any navigation bar
 */
let links = [
  {
    icon: "home",
    title: "Home",
    path: "/",
    component: Home,
  },
  {
    icon: "info-circle",
    title: "About",
    path: "/about",
    component: () => {
      return import(
        /* webpackChunkName: "About" */
        `@/views/About.vue`
      );
    },
  },
];

// exporting
export { title, links };
