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
          <p style="color: red; margin-top: -5px;">{{ nameErrorMessage }}</p>
        </div>
        <div class="form-outline mb-4">
          <input type="email" v-model="email" id="form2Example37" class="form-control form-control-lg" />
          <label class="form-label" for="form2Example37">Email address</label>
          <p style="color: red; margin-top: -5px;">{{ emailErrorMessage }}</p>
        </div>
        <div class="form-outline mb-4">
          <input type="text" id="form2Example47" v-model="phoneNumber" class="form-control form-control-lg" />
          <label class="form-label" for="form2Example47">Phone Number</label>
          <p style="color: red; margin-top: -5px;">{{ phoneErrorMessage }}</p>
        </div>
        <div style="display: flex; flex-direction: row; gap: 5px;" class="form-outline  ">
          <div class="form-outline col-md-6">
          <div class="input-group">
            <input v-if="showPassword" type="text" id="form2Example27" class="form-control" v-model="password"/>
            <input v-else type="password" id="form2Example27" class="form-control form-control-lg"   v-model="password"/>
            <button type="button" v-if="showPassword" class="toggle" @click="toggleShow">
              <v-icon >fas fa-eye-slash</v-icon>
           </button>
           <button type="button" v-else class="toggle" @click="toggleShow">
              <v-icon >fas fa-eye</v-icon>
           </button>
          </div>
          <label for="form2Example27">Password</label>
        </div>

        <div class="form-outline col-md-6">
          <div class="input-group">
            <input v-if="showConfirmPassword" type="text" id="form2Example27" class="form-control" v-model="confirmpassword"/>
            <input v-else type="password" id="form2Example28" class="form-control form-control-lg"   v-model="confirmpassword"/>
            <button type="button" v-if="showConfirmPassword" class="toggle" @click="toggleShowConfirm">
              <v-icon >fas fa-eye-slash</v-icon>
           </button>
           <button type="button" v-else class="toggle" @click="toggleShowConfirm">
              <v-icon >fas fa-eye</v-icon>
           </button>
          </div>
          <label class="form-label" for="form2Example28">Confirm Password</label>
        </div>
        </div>
        <p style="color: red; margin-top: -5px;">{{ passwordErrorMessage }}</p>
        <div class="form-outline mb-4">
          <button class="btn btn-dark btn-lg" type="button" style="color: white; width: 100%;" @click="validate">Sign
            Up</button>
        </div>
        <div style="justify-content: center; text-align: center; margin-bottom: -60px;">
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
      password: "",
      confirmpassword: "",
      status: false,
      phoneNumber: "",
      showPassword: false,
      showConfirmPassword: false,
      nameErrorMessage: '',
      emailErrorMessage: '',
      phoneErrorMessage: '',
      passwordErrorMessage: '',
      email: ""
    };
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },

    toggleShowConfirm() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },

    closeDialog() {
      this.$emit("close-dialog");
    },
    validateName() {
      if(this.fullname==''){
        return this.nameErrorMessage='Enter name field'
      }
      else{
        return this.nameErrorMessage=''
      }
    },

    validateEmail() {
      if(this.email==''){
        return this.emailErrorMessage='Enter valid email'
      }
      else{
        return this.emailErrorMessage=''
      }
    },
    validatePhone() {
      if(this.phoneNumber=='' || this.phoneNumber.length<10){
        return this.phoneErrorMessage='Enter Valid phone number'
      }
      else{
        return this.phoneErrorMessage=''
      }
    },

    validatePassword() {
      if(this.password==''|| this.password!=this.confirmpassword){
        if(this.password.length<6){
          return this.passwordErrorMessage='Password cannot be less than 6 Characters'
        }
        return this.passwordErrorMessage='Passwords do not match'
      }
      else{
        return this.passwordErrorMessage=''
      }
    },
    validate() {
      this.validateName()
      this.validateEmail()
      this.validatePassword()
      this.validatePhone()
      if(this.passwordErrorMessage=='' && this.phoneErrorMessage=='' && this.emailErrorMessage=='' && this.nameErrorMessage==''){
        this.registerUser() 
      }
     },
    registerUser() {
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
 
input[type="password"],
input[type="text"] {
  font-size: 1.25em;
  padding: .5em;
}

/* suppress IE >= 10 native functionality that can show password */
input[type="password"]::-ms-reveal {
  display: none;
}

.btn {
  margin-top: 0.75em;
}

.input-group {
  position: relative;
  width: 100%;
}

.toggle {
  background: none;
  border: none;
  color: #000000;
  font-weight: 600;
  position: absolute;
  right: .75em;
  top: 1em;
  z-index: 9;
}

.fa {
  font-size: 2rem;
}
</style>
  