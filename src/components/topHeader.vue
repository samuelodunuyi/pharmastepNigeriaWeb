
<template>
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Quicksand:400,600,700&display=swap" rel="stylesheet">
    <title>PharmaStep</title>
  </head>

  <body>
    <div class="banner">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <img src="../assets/pslogo.jpg" width="50" height="50">
          <a class="navbar-brand"> </a>
          <a href="#" class="navbar-brand"> PharmaStep</a>
          <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
              <a href="#" class="nav-item nav-link active">Home</a>
              <a href="#" class="nav-item nav-link">Products</a>
              <a href="#" class="nav-item nav-link">Categories</a>

            </div>
            <div class="navbar-nav ms-auto ">
              <a href="#" class="nav-item nav-link" v-if="userUid == ''">Login</a>
              <a href="#" class="nav-item nav-link" v-else>Profile</a>
              <a href="#" class="nav-item nav-link">Cart</a>

            </div>
          </div>
        </div>
      </nav>
    </div>
    <img src="../components/images/hero_1.jpg"/>

  </body>
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

  data() {
    return {
      cartProduct: [],
      cartIds: [],
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
    // this.loadCart()
    console.log(this.slides)
  },

  computed: {
    cartTotal() {
      console.log(this.slides)
      if (this.cartNo < this.slides) {
        this.cartNo = this.slides
        this.loadCart()
      }
      return (this.cartNo);
    }
  },

  methods: {
    async loadCart() {
      const docSnaps = await getDocs(collection(db, 'users', store.userUid, 'cart'));
      this.cartProduct = docSnaps.forEach((doc) => {
        this.cartIds = doc.id
        this.cartIdCounts.push(doc.id)
        console.log(this.cartIdCounts)
        store.cartNo = this.cartIdCounts.length
        this.cartNo = (store.cartNo)
      })
    },
    onAddtoCart(isCorrect) {
      if (isCorrect) {
        console.log(isCorrect)
      }
    },
    relocate() {
      window.open("https://play.google.com/store/apps/details?id=com.pharmastepng.meds",
        '_blank');
    }
  },
}
</script>
  
  