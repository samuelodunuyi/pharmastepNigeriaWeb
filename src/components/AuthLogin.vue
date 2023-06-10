<template>
  <div class="col-md-6 col-lg-7 d-flex align-items-center">
    <div class="card-body p-4 p-lg-5 text-black">
      <form ref="form" @submit.prevent="onSubmit">
        <div class="d-flex align-items-center mb-3 pb-1">
          <i class="fas fa-user-alt fa-2x me-3" style="color: #ff6219;"></i>
          <span class="h2 fw-bold mb-0">Sign into your account</span>
        </div>
        <div class="form-outline mb-4">
          <input type="email" id="form2Example17" class="form-control form-control-lg" v-model="email" :required="emailRules"/>
          <label class="form-label" for="form2Example17">Email address</label>
        </div>

        <div class="form-outline mb-4">
          <input type="password" id="form2Example27" class="form-control form-control-lg" v-model="password" required/>
          <label class="form-label" for="form2Example27">Password</label>
        </div>

        <div class="form-outline mb-4">
          <button class="btn btn-dark btn-lg" type="button" style="color: white; width: 100%;"
            @click.prevent="validate()">Login</button>
        </div>
        <hr class="my-4">
        <div class="d-flex justify-content-center text-center" style="width: 100%;">
          or</div>
        <div class="d-flex justify-content-center text-center mt-4 pt-1" style="width: 100%;">
          <button class="btn btn-lg btn-block btn-primary"
            style="background-color: #dd4b39; color: white; border: none; width: 100%;" @click="googleLogin"><i
              class="fab fa-google me-2"></i>Google Signin</button>
        </div>
        <div class="justify-content-center text-center" style="width: 100%; margin-top: 10px; margin-bottom: -50px;">
          <v-dialog v-model="reset" width="500">
            <template v-slot:activator="{ on }">
              <p class="small text-muted" @click="reset = true">Forgot password?</p>
            </template>
            <e-password-reset-form @close-dialog="closeDialog" />
          </v-dialog>
          <p class="mb-5 pb-lg-2" style="color: #393f81;">Don't have an account?
            <RouterLink to="/auth/register" style="color: #393f81;">Register here</RouterLink>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
  
<script>
import EPasswordResetForm from "./AuthPasswordReset.vue";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import pinia from "../stores/setup.js"
import useUserStore from '../stores/index.js'
const store = useUserStore(pinia)
const provider = new GoogleAuthProvider();
const auth = getAuth();

export default {
  components: {
    EPasswordResetForm
  },
  data() {
    return {
      valid: true,
      reset: false,
      fullname: "",
      status: false,
      nameRules: [
        v => !!v || "Name is required",
        v => v.length <= 10 || "Name must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      password: "",
      passwordRules: [v => !!v || "Password is required"]
    };
  },

  created() {
    this.email = '',
      this.password = ''
  },

  methods: {
    closeDialog() {
      this.reset = false;
    },
    login() {
      this.status = true
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in 
          store.userUid = userCredential.user.uid;
          store.user = userCredential.user;
          console.log(userCredential)
          console.log(userCredential.user)
          console.log(store.user)
          store.useremail = userCredential.user.email;

          setTimeout(async () => {
            this.status = false
            window.location.reload()
          }, 3000)

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    },
    validate() {
      this.login()
    },
    googleLogin() {
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.

          store.userUid = result.user.uid;
          store.user = result.user;
          store.useremail = result.user.email;

          window.location.reload();
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          // // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          console.log(errorMessage)
          // ...
        });
      if (store.userUid != '') {
        setTimeout(async () => {
          window.location.reload()
        }, 3000)
      }
    }

  }
};
</script>
  
<style scoped></style>
  