import { title, links, author } from "./config";

export const globalMixins = {
  methods: {
    xyz() {
      console.log("XYZ mixin/method called in HelloWorld component");
    },
  },
};

export const navbar = {
  data: () => ({
    darkMode: false,
    clipped: false,
    drawer: false,
    fixed: false,
    miniVariant: false,
    right: false,
    rightDrawer: false,
    title,
    links,
  }),
  methods: {
    switchTheme() {
      this.$vuetify.theme.dark = this.darkMode = !this.$vuetify.theme.dark;
      console.log("dark mode: " + this.darkMode);
    },
  },
  beforeMount() {
    // miximize sidebar on large screens
    this.drawer = window.innerWidth > 1200 ? true : false;
  },
};

export const footer = {
  data: () => ({
    fixed: false,
    title,
    links,
    author: author || "no author",
  }),
};
