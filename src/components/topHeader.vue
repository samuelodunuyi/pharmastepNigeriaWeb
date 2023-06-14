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
          <div class="navbar-nav" style="margin-top: 4px;">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a href="#" class="nav-item nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">Products</a>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                  <li>
                    <RouterLink class="dropdown-item" to="/products">All Products</RouterLink>
                  </li>
                  <li>
                    <RouterLink class="dropdown-item" to="/productType/packs">Packs</RouterLink>
                  </li>
                  <li>
                    <RouterLink class="dropdown-item" to="/productType/sachets">Sachets</RouterLink>
                  </li>
                  <li>
                    <RouterLink class="dropdown-item" to="/productType/tablet">Tablet</RouterLink>
                  </li>
                </ul>
              </li>
            </ul>
            <RouterLink to="/categories" class="nav-item nav-link active">Categories</RouterLink>
            <RouterLink to="/contact" class="nav-item nav-link active">Contact Us</RouterLink>
          </div>

          <div class="navbar-nav ms-auto" style="margin-top: 5px;">
            <RouterLink to="/auth/login" class="nav-item nav-link" v-if="userUid == ''">Login</RouterLink>
            <RouterLink to="/profile/account" class="nav-item nav-link" v-else>Profile</RouterLink>
            <v-btn to="/cart" icon color="#212529" style="margin-top: -2px;" v-if="userUid!=''">
              <v-badge :content=retz color="#47B65C">
                <v-icon size="small" color="white">mdi-cart</v-icon>
              </v-badge>
            </v-btn>

            <v-btn to="/cart" icon color="#212529" style="margin-top: -2px;" v-else>
              <v-badge :content=retz2 color="#47B65C">
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
  emits: ["close"],

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
  },

  computed: {
    retz() {
      if (this.cartNo < this.slides) {
        this.cartNo = store.cartNoNew
        this.cartNos()
        this.loadCart()
      }
      return this.cartIdCounts.length
    },

    retz2() {
        this.cartNo = store.cartNo
        this.cartNos()
        return this.cartNo
    },
  },

  methods: {
    async loadCart() {
      const docSnaps = await getDocs(collection(db, 'users', store.userUid, 'cart'));
      let ps = []
      this.cartProduct = docSnaps.forEach((doc) => {
        ps.push(doc.id)
        this.cartIdCounts = ps.filter((item,
          index) => ps.indexOf(item) === index);
      })
    },

    cartNos() {
      this.$emit("close", this.slides);
    },
    
    relocate() {
      window.open("https://play.google.com/store/apps/details?id=com.pharmastepng.meds",
        '_blank');
    }
  },
}
</script>
  
  