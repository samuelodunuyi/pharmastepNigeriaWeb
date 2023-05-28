<template>
  <v-app id="app">
   <TopHeader />
   <v-content>
     <router-view />
   </v-content>
 </v-app>
</template>


<script>
import TopHeader from '../src/components/topHeader.vue'
export default {
 name: "App",
 components: {
   TopHeader
 },
 data: () => ({
   snackbar: false,
   text: "",
   timeout: 5000
 }),
};
</script>