<template>
  <v-app dark class="main-app">
    <Navbar />
    <v-main class="bg">
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
// import components
import Navbar from "@/components/navbar/navbar.default";
import Footer from "@/components/footer/footer.default";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
h1 {
  margin-bottom: 15px;
  padding: 10px;
}
</style>
