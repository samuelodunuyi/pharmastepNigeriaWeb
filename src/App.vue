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
import { getAuth, onAuthStateChanged } from "firebase/auth";
import pinia from "./stores/setup.js";
import useUserStore from './stores/index.js';
const store = useUserStore(pinia)

export default {
  name: "App",
  components: {
    FooterE,
  },

  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        store.userUid = user.uid;
        console.log(store.userUid)
      } else {
        console.log("not logged in")

      }
    });
  },
  data: () => ({
    snackbar: false,
    text: "",
    timeout: 5000
  }),

};
</script>