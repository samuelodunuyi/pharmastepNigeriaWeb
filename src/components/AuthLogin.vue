<template>
  <v-card-text>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="email" label="Email" :rules="emailRules" required />
      <span class="caption grey--text text--darken-1">
        This is the email you will use to login to your { name }
        account
      </span>
      <v-text-field v-model="password" label="Password" type="password" :rules="passwordRules" required />
      <span class="caption grey--text text--darken-1">Please enter a password for your account</span>
    </v-form>
    <v-divider class="my-5" />
    <div class="mb-3">
      Or Sign in with:
    </div>
    <v-btn color="red darken-2" dark class="text-none mr-2" @click="socialLogin('google')">
      <v-icon left>
        fab fa-google
      </v-icon>Google
    </v-btn>
  </v-card-text>
  <v-card-actions>
    <v-dialog v-model="reset" width="500">
      <template v-slot:activator="{ on }">
        <v-btn text class="text-none font-weight-regular" @click="reset = true">
          Forgot my password
        </v-btn>
      </template>

      <e-password-reset-form @close-dialog="closeDialog" />
    </v-dialog>

    <v-spacer />
    <v-btn depressed color="primary" class="text-nonec login" @click.prevent="validate()">
      Login
    </v-btn>
  </v-card-actions>
</template>
  
<script>
import EPasswordResetForm from "./AuthPasswordReset.vue";
export default {
  components: {
    EPasswordResetForm
  },
  data() {
    return {
      valid: true,
      reset: false,
      fullname: "",
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

  methods: {
    closeDialog() {
      this.reset = false;
    },
    validate() {
      if (this.$refs.form.validate()) {
      }
    },

  }
};
</script>
  
<style scoped>
.login{
  background-color: blue;
  color: white !important;
  font-size: 0.80rem;
  font-family: 'Roboto';
}
</style>
  