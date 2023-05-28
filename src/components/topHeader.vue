
<template>
  <v-app-bar app clipped-left>
    <v-app-bar-nav-icon class="d-flex d-sm-none" />
    <v-toolbar-title class="headline">
      <router-link to="/">
        <v-img style="width: 40px; height: 40%;" :src="myImage" />
      </router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn to="/products" class="text-none font-weight-regular" text>
        Products
      </v-btn>
      <v-btn to="/categories" class="text-none font-weight-regular" text>
        Categories
      </v-btn>
    </v-toolbar-items>
    <v-spacer />
    <v-toolbar-items>
      <v-btn icon>
        <v-icon>mdi-google-play</v-icon>
      </v-btn>
      <v-btn text to="/login" v-if="userUid.length < 2">
        Login
      </v-btn>

      <v-btn to="/profile/account" icon v-else>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn to="/cart" icon>
        <v-badge :content=cartNo right color="red">
          <v-icon size="large" color="black">mdi-cart</v-icon>
        </v-badge>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>
  
<script>
import useUserStore from "../stores";
import pinia from "../stores/setup";
import { collection, getDocs, getDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase.js"
const store = useUserStore(pinia);

export default {
  data() {
    return {
      cartProduct: [],
      cartIds: [],
      cartIdCounts: [],
      cartNo: 0,
      loginDialog: false,
      cartTotal: 0,
      registerDialog: false,
      userUid: '',
      myImage: 'https://firebasestorage.googleapis.com/v0/b/shopper-56289.appspot.com/o/pslogo.jpg?alt=media&token=2a7fc67e-1182-4b66-b81e-8c1fae75d7a1'

    };
  },

  created() {
    this.userUid = store.userUid
    console.log(store.userUid)
    this.loadCart()
  },

  methods: {
    async loadCart() {
      const docSnaps = await getDocs(collection(db, 'users', store.userUid, 'cart'));
      this.cartProduct = docSnaps.forEach((doc) => {
        this.cartIds = doc.id
        this.cartIdCounts.push(doc.id)
        this.cartNo = this.cartIdCounts.length
      })
    }
  },
}
</script>
  
  