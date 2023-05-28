<template>
  <v-app id="app">
   <TopHeader />
   <v-main>
     <router-view />
   </v-main>
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