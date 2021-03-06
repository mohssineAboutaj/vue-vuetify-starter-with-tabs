const { title, links } = require("../config");

module.exports.general = {
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
