<template>
  <v-card-text>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="fullname" label="Name" :rules="nameRules" required />
      <v-text-field v-model="email" label="Email" :rules="emailRules" required />
      <span class="caption grey--text text--darken-1">Please enter a valid email for your account</span>
      <v-text-field v-model="password" label="Password" type="password" :rules="passwordRules" required />
      <span class="caption grey--text text--darken-1">Please enter a password for your account</span>
      <v-text-field v-model="phoneNumber" label="Phone Number" type="text" required />
      <span class="caption grey--text text--darken-1">Please enter a phone number for your account</span>
    </v-form>
  </v-card-text>
  <v-card-actions>
    <v-spacer />
    <v-btn :loading="status" depressed class="text-none login" color="primary" @click="validate()">
      Register
    </v-btn>
  </v-card-actions>
</template>
  
<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, getDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase.js"
import pinia from "../stores/setup.js"
import useUserStore from '../stores/index.js'
import router from "../router";
const store = useUserStore(pinia)

export default {
  data() {
    return {
      valid: true,
      fullname: "",
      nameRules: [
        v => !!v || "Name is required",
        v => v.length <= 50 || "Name must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      password: "",
      status: false,
      phoneNumber: "",
      passwordRules: [v => !!v || "Password is required"]
      // route: '/profile/user-information',
    };
  },
  methods: {
    closeDialog() {
      this.$emit("close-dialog");
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.registerUser();
      }
    },
    registerUser() {
      if (this.$refs.form.validate()) {
        const auth = getAuth();
        this.status = true
        createUserWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user.uid;
            store.userUid = user
            this.createUser(user)
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
      }
    },

    async createUser(id) {
      await setDoc(doc(db, "users", id), {
        fullName: this.fullname,
        email: this.email,
        phone: this.phoneNumber,
        uid: id
      }).then(
        setTimeout(async () => {
          this.status = false
          window.location.reload()
        }, 3000)
      );
    },
  }
};
</script>
  
<style scoped>
.login {
  background-color: blue;
  color: white !important;
  font-size: 0.80rem;
  font-family: 'Roboto';
}
</style>
  