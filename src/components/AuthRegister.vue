<template>
  <div class="col-md-6 col-lg-7 d-flex align-items-center">
    <div class="card-body p-4 p-lg-5 text-black">
      <form @submit.prevent="onSubmit">
        <div class="d-flex align-items-center mb-3 pb-1">
          <span class="h2 fw-bold mb-0">Create an Account</span>
        </div>
        <div class="form-outline mb-4">
          <input type="text" v-model="fullname" id="form2Example17" class="form-control form-control-lg" />
          <label class="form-label" for="form2Example17">Full Name</label>
        </div>
        <div class="form-outline mb-4">
          <input type="email" v-model="email" id="form2Example37" class="form-control form-control-lg" />
          <label class="form-label" for="form2Example37">Email address</label>
        </div>
        <div class="form-outline mb-4">
          <input type="text" id="form2Example47" v-model="phoneNumber" class="form-control form-control-lg" />
          <label class="form-label" for="form2Example47">Phone Number</label>
        </div>
        <div style="display: flex; flex-direction: row; gap: 5px;">
        <div class="form-outline col-md-6">
          <input type="password" id="form2Example57" v-model="password" class="form-control form-control-lg" />
          <label class="form-label" for="form2Example57">Password</label>
        </div>
        <div class="form-outline col-md-6">
          <input type="password" id="form2Example27" v-model="confirmpassword" class="form-control form-control-lg" />
          <label class="form-label" for="form2Example27">Confirm Password</label>
        </div>
      </div>
        <div class="form-outline mb-4">
          <button class="btn btn-dark btn-lg" type="button" style="color: white; width: 100%;" @click="validate">Sign Up</button>
        </div>
        <div style="justify-content: center; text-align: center; margin-bottom: -20px;">
          <p class="mb-5 pb-lg-2" style="color: #393f81;">Already have an account?
            <RouterLink to="/auth/login" style="color: #393f81;">Login here</RouterLink>
          </p>
        </div>

      </form>
    </div>
  </div>
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
      confirmpassword:"",
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
  