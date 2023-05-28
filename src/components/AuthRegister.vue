<template>
      <v-card-text>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="fullname"
            label="Name"
            :rules="nameRules"
            required
          />
          <v-text-field
            v-model="email"
            label="Email"
            :rules="emailRules"
            required
          />
          <span class="caption grey--text text--darken-1">Please enter a valid email for your account</span>
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            :rules="passwordRules"
            required
          />
          <span class="caption grey--text text--darken-1">Please enter a password for your account</span>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          :loading="status"
          depressed
          class="text-none login"
          color="primary"
          @click="validate()"
        >
          Register
        </v-btn>
      </v-card-actions>
  </template>
  
  <script>
  export default {
    data() {
      return {
        valid: true,
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
        // route: '/profile/user-information',
      };
    },
    methods: {
      closeDialog() {
        this.$emit("close-dialog");
      },
      validate() {
        if (this.$refs.form.validate()) {
          this.userRegister();
        }
      },
      userRegister() {
        this.$store.dispatch("auth/userRegister", {
          name: this.fullname,
          email: this.email,
          password: this.password
        });
      }
    }
  };
  </script>
  
  <style scoped>
.login{
  background-color: blue;
  color: white !important;
  font-size: 0.80rem;
  font-family: 'Roboto';
}</style>
  