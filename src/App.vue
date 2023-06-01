<template>
  <v-app id="app">
    <v-main>
      <router-view />
    </v-main>
    <FooterE />
  </v-app>
</template>


<script>
import FooterE from "../src/components/Footer.vue";

export default {
  name: "App",
  components: {
    FooterE,
  },
  data: () => ({
    snackbar: false,
    text: "",
    timeout: 5000
  }),

};
</script>