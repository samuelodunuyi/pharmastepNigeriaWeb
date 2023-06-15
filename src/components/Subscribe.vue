<template>
  <div class="newsletter-subscribe mt-5 container">
    <div class="container text-center justify-center">
      <div class="intro">
        <h2 class="text-center newsletter">Subscribe to our Newsletter</h2>
        <p class="text-center">Get Weekly Health Tips from us, to boost your lifestyle and health choices. </p>
      </div>
      <form @submit.prevent="subscribe">
        <div class="form-group"><input class="form-control" v-model="email" type="email" name="email" placeholder="Your Email"></div>
        <div class="form-group"><button class="btn btn-primary" type="submit">Subscribe </button></div>
      </form>
      <div id="form-message-success" v-if="success">
                You have successfully subscribed!
              </div>
    </div>
  </div>
</template>
    
<script>
export default {
  data() {
    return {
      valid: true,
      email: "",
      success: false,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  methods: {
    subscribe() {
      this.$emit("subscribe", this.email);
      this.sendFormData();
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.subscribe();
      }
    },
    sendFormData() {
      const googleFormUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfipHeaPGyvxw40o8sxYcu2579xi_-QJL4HYzGz_ZFgY17Tcg/formResponse"
      const data = {
        "entry.1165188191": this.email,
      };

      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }
      fetch(googleFormUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      })
        .then(response => {
          this.success = true
          this.email = "";
        })
        .catch(error => {
          // Handle any errors here
        });
    }

  }
};
</script>
    
<style scoped>
.newsletter-subscribe {
  color: #313437;
  background-color: #ffffff;
  padding: 55px 74px;
}

.newsletter-subscribe p {
  color: #7d8285;
  line-height: 1.5;
}

#form-message-success {
  color: #55A44E;
  font-size: 15px;
  font-weight: bold; }

.newsletter-subscribe h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 25px;
  line-height: 1.5;
  padding-top: 0;
  margin-top: 0;
  color: inherit;
}

.newsletter-subscribe .intro {
  font-size: 16px;
  max-width: 500px;
  margin: 0 auto 25px;
}

.newsletter-subscribe .intro p {
  margin-bottom: 35px;
}

.newsletter-subscribe form {
  justify-content: center;
}

.newsletter-subscribe form .form-control {
  background: #eff1f4;
  border: none;
  border-radius: 3px;
  box-shadow: none;
  outline: none;
  color: inherit;
  text-indent: 9px;
  height: 45px;
  margin-right: 10px;
  min-width: 250px;
}

@media (max-width: 423px) {
  .newsletter-subscribe form .form-control {
    width: 300px;
  }

  .newsletter-subscribe {
    color: #313437;
    padding: 50px 25px;
  }
}


@media (max-width: 390px) {
  .newsletter-subscribe form .form-control {
    width: 250px;
  }

  .newsletter-subscribe {
    color: #313437;
    padding: 50px 15px;
  }
}

@media (max-width: 324px) {
  .newsletter-subscribe form .form-control {
    width: 120px !important;
  }

  .newsletter-subscribe {
    color: #313437;
    padding: 50px 0px;
  }
}

.newsletter-subscribe form .btn {
  padding: 16px 32px;
  border: none;
  background: none;
  box-shadow: none;
  text-shadow: none;
  opacity: 0.9;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 13px;
  letter-spacing: 0.4px;
  line-height: 1;
}

.newsletter-subscribe form .btn:hover {
  opacity: 1;
}

.newsletter-subscribe form .btn:active {
  transform: translateY(1px);
}

.newsletter-subscribe form .btn-primary {
  background-color: #055ada !important;
  color: #fff;
  margin-top: 20px;
  outline: none !important;
}

.form-inline {
  text-align: center;
}

body {
  background: #eee;
}

.newsletter {
  color: #0062cc !important;
}</style>