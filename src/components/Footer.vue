<template>
  <link rel="stylesheet" href="node_modules/@fortawesome/fontawesome-free/css/all.css">
  <!--Footer-->
  <footer class="bg-light text-lg-start">
    <hr class="m-0" />

    <div class="text-center py-4 align-items-center" style="display: flex; flex-direction: row; justify-items: center; justify-content: center;">
      <p>Follow PharmaStep on social media</p>
      <a href="https://www.instagram.com/pharmastep_ng?igshid=NTc4MTIwNjQ2YQ" class="btn btn-primary m-1" role="button" rel="nofollow"
        target="_blank">
        <v-icon size="small" color="white">fab fa-instagram</v-icon>
      </a>
      <a href="#" class="btn btn-primary m-1" role="button" rel="nofollow" target="_blank">
        <v-icon size="small" color="white">fa fa-whatsapp</v-icon>
      </a>
      <a href="https://play.google.com/store/apps/details?id=com.pharmastepng.meds" class="btn btn-primary m-1" role="button"
        rel="nofollow" target="_blank">
        <v-icon size="small" color="white">mdi-google-play</v-icon>
      </a>

    </div>

    <!-- Copyright -->
    <div class="col-md">
    <div class="text-center p-3 " style="background-color: rgba(0, 0, 0, 0.2)">
      © 2023 Copyright:
      <a class="text-dark" href="pharmastepng.com">PharmaStep Nigeria</a>
    </div>
  </div>
    <!-- Copyright -->
  </footer>
  <!--Footer-->
</template>
  
<script>
export default {
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram"
    ]
  })
};
</script>
  
<style></style>
  