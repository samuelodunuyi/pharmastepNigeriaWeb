<template>
  <!-- cycle
interval="4000" -->
  <v-carousel hide-delimiters show-arrows="hover">
    <v-carousel-item src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg" cover>
      <v-layout class="mainHead">
        <v-flex >
          <h1 class="white--text mb-4 display-1 text-center">
            PHARMASTEP NIGERIA
          </h1>
          <div class="subheading">
            Your No 1 Pharmacy on the GO. Get access to affordable health service from anywhere in Lagos with just a few
            clicks.
          </div>
          <v-btn class="mt-12" color="blue lighten-2" dark large>
            Get Started
          </v-btn>
        </v-flex>
      </v-layout>
    </v-carousel-item>
    <v-carousel-item src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg" cover>
      <v-layout class="mainHead">
        <v-flex >
          <h1 class="white--text mb-4 display-1 text-center">
            FEELING DOWN?
          </h1>
          <div class="subheading">
            We've got you, click below to explore our wide range of medications.
          </div>
          <v-btn class="mt-12" color="blue lighten-2" dark large>
            Products
          </v-btn>
        </v-flex>
      </v-layout>
    </v-carousel-item>
    
    <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
  </v-carousel>
</template>
  
<script>
export default {};
</script>
  
<style>
.mainHead h1 {
  color: white;
  font-weight: bold;
  font-family: 'Roboto';
  margin: 8.5rem auto;
  font-size: 2em;
}

.mainHead {
  width: 100%;
  justify-content: center;
  text-align: center !important;
}

.subheading {
  font-size: 15px;
  font-weight: 450;
  word-wrap: break-word;
  width: 20rem;
  color: white;
  margin-top: 15px;
  font-family: 'Roboto';
}
</style>
  