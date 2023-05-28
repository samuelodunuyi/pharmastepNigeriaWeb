<template>
    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon class="d-flex d-sm-none" />
      <v-toolbar-title class="headline">
        <router-link to="/">
          <v-img
            style="width: 40px; height: 40%;"
            :src="myImage"
          />
        </router-link>
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn
          to="/products"
          class="text-none font-weight-regular"
          text
        >
          Products
        </v-btn>
        <v-btn
          to="/categories"
          class="text-none font-weight-regular"
          text
        >
          Categories
        </v-btn>
      </v-toolbar-items>
      <v-spacer />
      <v-toolbar-items>
        <v-btn
          text
          to="/login"
        >
          Login
        </v-btn>
  
        <v-btn
          to="/profile/account"
          icon
        >
          <v-icon>mdi-account</v-icon>
        </v-btn>
        <v-btn
          to="/cart"
          icon
        >
          <v-badge
            right
            color="red"
          >
            <template
              v-if="cartTotal > 0"
              slot="badge"
            >
              <span>{{ cartTotal }}</span>
            </template>
            <v-icon>mdi-cart</v-icon>
          </v-badge>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    data() {
      return {
        loginDialog: false,
        cartTotal: 0,
        registerDialog: false,
        myImage: 'https://firebasestorage.googleapis.com/v0/b/shopper-56289.appspot.com/o/pslogo.jpg?alt=media&token=2a7fc67e-1182-4b66-b81e-8c1fae75d7a1'

      };
    },
}
  </script>
  
  