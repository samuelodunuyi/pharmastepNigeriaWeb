<script setup>
import { ref } from 'vue';
import topHeader from '../components/topHeader.vue';

const name = ref("")
const email = ref("")
const subject = ref("")
const message = ref("")
const success = ref(false)
const error = ref(false)

function sendFormData() {
  if(name.value=="" || email.value =="" || subject.value=="" || message.value){
    return error.value=true
  }
  const googleFormUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfU3HXz6X1ynIjXfwc_HtIWlEK-6OLh55Wts2cdL4ixKLzCOQ/formResponse"
  const data = {
  "entry.1870464962": name.value,
  "entry.505630046": email.value,
  "entry.354402563": subject.value,
  "entry.849313830": message.value
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
    console.log("success", response)
    success.value=true
    name.value = ""
    email.value = ""
    subject.value = ""
    message.value = ""
  })
  .catch(error => {
    console.log(error)
    error.value = true
    // Handle any errors here
  });
}

</script>
<template>
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Contact Form #6</title>
  </head>
  <topHeader :slides="1"/>
  <body>
  <div class="content">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10">

          <div class="row justify-content-center">
            <div class="col-md-6">
              
              <h3 class="heading mb-4">Want to talk? Let's talk</h3>
              <p>Reach out to us with any questions, feedback, or inquiries you may have. We're here to help!</p>
              <p><img src="../components/images/undraw-contact.svg" alt="Image" class="img-fluid"></p>

            </div>
            <div class="col-md-6">
              
              <form @submit.prevent="sendFormData" class="mb-5" method="post" id="contactForm" name="contactForm">
                <div class="row des">
                  <div class="col-md-12 form-group">
                    <input type="text" class="form-control form-ctr" v-model="name" name="entry.1870464962" id="name" placeholder="Your name">
                  </div>
                </div>
                <div class="row des">
                  <div class="col-md-12 form-group">
                    <input type="text" class="form-control form-ctr" v-model="email" name="entry.505630046" id="email" placeholder="Email">
                  </div>
                </div>
                <div class="row des">
                  <div class="col-md-12 form-group">
                    <input type="text" class="form-control form-ctr" v-model="subject" name="entry.354402563" id="subject" placeholder="Subject">
                  </div>
                </div>
                <div class="row des">
                  <div class="col-md-12 form-group">
                    <textarea class="form-control form-controls" v-model="message" name="entry.849313830" id="message" cols="30" rows="27" placeholder="Write your message"></textarea>
                  </div>
                </div>  
                <div class="row des">
                  <div class="col-12">
                    <input type="submit" value="Send Message" class="btn btn-primary rounded-0 py-2 px-4">
                  <span class="submitting"></span>
                  </div>
                </div>
              </form>

              <div id="form-message-warning mt-4" v-if="error">Error, check Information entered</div> 
              <div id="form-message-success" v-if="success">
                Your message was sent, thank you!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  </body>
</template>

<style scoped>
body {
  font-family: "Roboto", sans-serif;
  background-color: #fff;
  line-height: 1.9;
  color: #8c8c8c; }

h1, h2, h3, h4, h5, h6,
.h1, .h2, .h3, .h4, .h5, .h6 {
  font-family: "Roboto", sans-serif;
  color: #000; }

a {
  -webkit-transition: .3s all ease;
  -o-transition: .3s all ease;
  transition: .3s all ease; }
  a, a:hover {
    text-decoration: none !important; }

.text-black {
  color: #000; }

.content {
  padding: 7rem 0; }

.heading {
  font-size: 2.5rem;
  font-weight: 900; }

.form-controls {
  border: none;
  background: #f3f3f3; 
resize: none;
height: 250px;}

.form-ctr {
  border: none;
  background: #f3f3f3; 
resize: none;
height: 50px;}
  .form-control:active, .form-control:focus {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-color: #000;
    background: #f3f3f3; }

.col-form-label {
  color: #000; }

.btn, .custom-select {
  height: 50px; }

.custom-select:active, .custom-select:focus {
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-color: #000; }

.btn {
  border: none;
  border-radius: 4px !important; }
  .btn.btn-primary {
    background: #000;
    color: #fff;
    padding: 15px 20px; }
  .btn:hover {
    color: #fff; }
  .btn:active, .btn:focus {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none; }

.box {
  padding: 40px;
  background: #fff;
  -webkit-box-shadow: -30px 30px 0px 0 rgba(0, 0, 0, 0.08);
  box-shadow: -30px 30px 0px 0 rgba(0, 0, 0, 0.08); }
  .box h3 {
    font-size: 14px;
    margin-bottom: 30px;
    text-align: center; }

label.error {
  font-size: 12px;
  color: red; }

#message {
  resize: vertical; }

#form-message-warning{
  display: none; }

#form-message-warning {
  color: #B90B0B; }

#form-message-success {
  color: #55A44E;
  font-size: 18px;
  font-weight: bold; }

.submitting {
  float: left;
  width: 100%;
  padding: 10px 0;
  display: none;
  font-weight: bold;
  font-size: 12px;
  color: #000; }

.des{
  margin-bottom: 10px;
}
</style>