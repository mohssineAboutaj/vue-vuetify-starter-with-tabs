<template>
  <div class="navbar-component">
    <v-app-bar :clipped-left="clipped" :fixed="fixed" color="primary" dark app>
      <v-app-bar-nav-icon>
        <v-icon>fab fa-vuejs</v-icon>
      </v-app-bar-nav-icon>
      <v-spacer />
      <v-toolbar-title class="text-capitalize">
        {{ $route.name || title }}
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon @click="switchTheme()">
        <v-icon>{{ darkMode ? "fas" : "far" }} fa-moon</v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>
  </div>
</template>

<script>
import { general } from "@/mixins/navbar.js";

export default {
  mixins: [general],
};
</script>
