<template>
  <v-card>
    <v-card-title>
      <div class="headline">
        Password Reset
      </div>
      <v-spacer />
      <v-btn icon @click="closeDialog">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-card-text>
        <span class="grey--text">Enter your email address that you used to register. We'll send you an
          email with a link to reset your password.</span>
        <v-text-field v-model="email" label="Email" :rules="emailRules" required />
        <span><h6>{{messagee}}</h6></span>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" depressed @click="validate()">
          Send
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>
  
<script>
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
const auth = getAuth();

export default {
  data() {
    return {
      valid: true,
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      messagee: ''
    };
  },
  methods: {
    validate() {
      sendPasswordResetEmail(auth, this.email)
        .then(() => {
          this.messagee= `Reset Email sent to ${this.email}`
          setTimeout(async () => {
            this.closeDialog()
        }, 1500)
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode)
          if(errorCode=='auth/user-not-found'){
            this.messagee= `User not Found`
          }
          // ..
        });
    },
    closeDialog() {
      this.$emit("close-dialog");
    }
  }
};
</script>
  
<style></style>
  