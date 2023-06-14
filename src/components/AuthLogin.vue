<template>
  <div class="col-md-6 col-lg-7 d-flex align-items-center">
    <div class="card-body p-4 p-lg-5 text-black">
      <form ref="form" @submit.prevent="onSubmit" autocomplete="none">
        <div class="d-flex align-items-center mb-3 pb-1">
          <i class="fas fa-user-alt fa-2x me-3" style="color: #ff6219;"></i>
          <span class="h2 fw-bold mb-0">Sign into your account</span>
        </div>
        <div class="form-outline mb-4">
          <input type="email" id="form2Example17" class="form-control form-control-lg" v-model="email"
            autocomplete="none" />
          <label class="form-label" for="form2Example17">Email address</label>
          <p>{{ emailErrorMessage }}</p>
        </div>

        <div class="form-outline mb-6">
          <div class="input-group">
            <input v-if="showPassword" type="text" id="form2Example27" class="form-control form-control-lg"
              v-model="password" autocomplete="off" />
            <input v-else type="password" id="form2Example27" class="form-control form-control-lg" v-model="password"
              autocomplete="off" />
            <button type="button" v-if="showPassword" class="toggle" @click="toggleShow">
              <v-icon>fas fa-eye-slash</v-icon>
            </button>
            <button type="button" v-else class="toggle" @click="toggleShow">
              <v-icon>fas fa-eye</v-icon>
            </button>
          </div>
          <label class="form-label" for="form2Example27">Password</label>
          <p>{{ passwordErrorMessage }}</p>
        </div>

        <div class="form-outline mb-4">
          <v-btn class="btn btn-dark btn-lg" :loading="loadingLogin" type="button"
            style="background-color: #313131; color: white; width: 100%;" @click.prevent="validate()">Login</v-btn>
        </div>
        <p style="color: red;">{{ generalErrorMessage }}</p>
        <hr class="my-4">
        <div class="d-flex justify-content-center text-center" style="width: 100%;">
          or</div>
        <div class="d-flex justify-content-center text-center mt-4 pt-1" style="width: 100%;">
          <v-btn class="btn btn-lg btn-block btn-primary" :loading="loadingGoogleLogin"
            style="background-color: #dd4b39; color: white; border: none; width: 100%;" @click="googleLogin"><i
              class="fab fa-google me-2"></i>Google Signin</v-btn>
        </div>
        <div class="justify-content-center text-center" style="width: 100%; margin-top: 10px; margin-bottom: -50px;">
          <v-dialog v-model="reset" width="500">
            <template v-slot:activator="{ on }">
              <p class="small text-muted" @click="reset = true" style="cursor: pointer;">Forgot password?</p>
            </template>
            <e-password-reset-form @close-dialog="closeDialog" />
          </v-dialog>
          <p class="mb-5 pb-lg-2" style="color: #393f81; padding-bottom: 10px;">Don't have an account?
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
import { collection, getDocs, setDoc, getDoc, doc, increment, updateDoc } from "firebase/firestore";
import pinia from "../stores/setup.js"
import { db } from "../firebase.js"
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
      email: "",
      emailErrorMessage: '',
      passwordErrorMessage: '',
      password: "",
      generalErrorMessage: '',
      showPassword: false,
      loadingLogin: false,
      loadingGoogleLogin: false,
      finishedIteration: false
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
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    login() {
      this.emailErrorMessage = ''
      this.passwordErrorMessage = ''
      this.generalErrorMessage = ''
      this.status = true
      this.loadingLogin = true
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(async (userCredential) => {
          // Signed in 
          store.userUid = userCredential.user.uid;
          store.user = userCredential.user;
          store.useremail = userCredential.user.email;
          this.checkCartItems()
        })
        .catch((error) => {
          this.loadingLogin = false
          if (error.code == 'auth/wrong-password') {
            this.generalErrorMessage = 'Wrong Password, retry';
          }
        });
    },
    validate() {
      if (this.email == '') {
        return this.emailErrorMessage = "Enter valid Email address"
      }
      if (this.password == '' || this.password.length < 6) {
        return this.passwordErrorMessage = "Password is less than 6 characters"
      }
      this.login()
    },
    googleLogin() {
      this.loadingGoogleLogin = true
      signInWithPopup(auth, provider)
        .then(async (result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          store.userUid = result.user.uid;
          store.user = result.user;
          store.useremail = result.user.email;
          this.checkCartItems()
        }).catch((error) => {
          this.loadingGoogleLogin = false
          const credential = GoogleAuthProvider.credentialFromError(error);
          this.generalErrorMessage = error.code;
        });
    },
    async checkCartItems() {
      if (store.cartNotSigned.length > 0) {
        let unique = [...new Set(store.cartNotSigned)];
        for (let i = 0; i < unique.length; i++) {
          console.log(i)
          const docSnap = await getDoc(doc(db, 'users', store.userUid, 'cart', unique[i]))
          if (docSnap.exists()) {
            await updateDoc(doc(db, 'users', store.userUid, 'cart', unique[i]), {
              item_count: increment(1),
            });
          } else {
            await setDoc(doc(db, 'users', store.userUid, 'cart', unique[i]), {
              item_count: 1,
            }).then(store.increment());
          }
        }
        this.finishedIteration = true
        if (this.finishedIteration == true) {
          this.loadingLogin = false
          this.loadingGoogleLogin = false
          store.cartNotSigned = []
          store.cartNo = 0
          console.log(store.cartNotSigned)
          setTimeout(async () => {
            window.location.reload()
          }, 3000)
        }
      }
      else {
        store.cartNotSigned = []
        store.cartNo = 0
        this.loadingGoogleLogin = false
        this.loadingLogin = false
        setTimeout(async () => {
          window.location.reload()
        }, 1500)
      }
    }
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
  font-size: 1.3rem;
}
</style>
  