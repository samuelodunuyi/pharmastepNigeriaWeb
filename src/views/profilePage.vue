<template>
    <div>
      <e-profile-drawer
        :auth-status="authStatus"
        :logout="signOut"
        :empty-cart="emptyCart"
      />
      <router-view />
    </div>
  </template>
  
  <script>
  import EProfileDrawer from "../components/profileDrawer.vue";
  export default {
    components: {
      EProfileDrawer
    },
  };
  </script>
  
  <style></style>
  