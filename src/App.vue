<template>
  <v-app id="app">
    <TopHeader />
    <v-main>
      <router-view />
    </v-main>
    <FooterE />
  </v-app>
</template>


<script>
import TopHeader from '../src/components/topHeader.vue';
import FooterE from "../src/components/Footer.vue";

export default {
  name: "App",
  components: {
    FooterE,
    TopHeader
  },
  data: () => ({
    snackbar: false,
    text: "",
    timeout: 5000
  }),

};
</script>