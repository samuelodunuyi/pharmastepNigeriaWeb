<script setup>
import { useRoute } from 'vue-router';
import {ref, computed, watch} from 'vue';

const route = useRoute()

</script>

<template>
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>PharmaStep</title>
  </head>

    <div class="banner">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <img src="../assets/pslogo.jpg" width="50" height="50" @click="$router.push('/')" style="cursor: pointer;">
          <a class="navbar-brand"> </a> 
          <RouterLink to="/" class="nav-item nav-link active navbar-brand"> PharmaStep</RouterLink>
          <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
              <RouterLink to="/products" class="nav-item nav-link active">Products</RouterLink>
              <RouterLink to="/categories" class="nav-item nav-link active">Categories</RouterLink>
              <RouterLink to="/contact" class="nav-item nav-link active">Contact Us</RouterLink>

            </div>
            <div class="navbar-nav ms-auto ">
              <RouterLink to="/login" class="nav-item nav-link" v-if="userUid == ''">Login</RouterLink>
              <RouterLink to="/profile" class="nav-item nav-link" v-else>Profile</RouterLink>
              <v-btn to="/cart" icon color="#212529" style="margin-top: -2px;">
                <v-badge :content=retz color="#47B65C">
                <v-icon size="small" color="white">mdi-cart</v-icon>
              </v-badge>
              </v-btn> 
            </div>
          </div>
        </div>
      </nav>
    </div>
</template>
  
<script>
import useUserStore from "../stores";
import pinia from "../stores/setup";
import { collection, getDocs, getDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase.js"
const store = useUserStore(pinia);

export default {
  props: {
    slides: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  emits: ["add-to-cart"],

  data() {
    return {
      cartProduct: [],
      cartIdCounts: [],
      cartNo: 0,
      loginDialog: false,
      registerDialog: false,
      userUid: '',
      myImage: 'https://firebasestorage.googleapis.com/v0/b/shopper-56289.appspot.com/o/pslogo.jpg?alt=media&token=2a7fc67e-1182-4b66-b81e-8c1fae75d7a1'
    };
  }, 

  created() {
    this.userUid = store.userUid
     this.loadCart()
  },

//  watch: {
//  // whenever question changes, this function will run
//      retz(newCartValue, oldCartValue) {
//        console.log(oldCartValue, newCartValue)
//        console.log(store.cartNo)
//        if (newCartValue!=store.cartNo) {
//          console.log(oldCartValue)
//          console.log(newCartValue)
//          this.loadCart()
//        }
//      }
//    },

  computed:{
      retz(){
        if (this.cartNo<store.cartNo) {
          console.log(store.cartNo)
        this.cartNo = store.cartNo
        console.log(this.cartNo)
        this.loadCart()
      }
        return this.cartNo
      }
  },

  methods: {
    async loadCart() {
      const docSnaps = await getDocs(collection(db, 'users', store.userUid, 'cart'));
      this.cartProduct = docSnaps.forEach((doc) => {
        this.cartIdCounts.push(doc.id)
        console.log(this.cartIdCounts)
        // this.cartNo = store.cartNo
      })
    },

    relocate() {
      window.open("https://play.google.com/store/apps/details?id=com.pharmastepng.meds",
        '_blank');
    }
  },
}
</script>
  
  