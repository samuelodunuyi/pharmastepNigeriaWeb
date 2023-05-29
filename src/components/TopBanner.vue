<template>
  <!--Main Navigation-->
  <header>
    <!-- Carousel wrapper -->
    <div id="introCarousel" class="carousel slide carousel-fade shadow-2-strong" data-mdb-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-mdb-target="#introCarousel" data-mdb-slide-to="0" class="active"></li>
        <li data-mdb-target="#introCarousel" data-mdb-slide-to="1"></li>
        <li data-mdb-target="#introCarousel" data-mdb-slide-to="2"></li>
      </ol>

      <!-- Inner -->
      <div class="carousel-inner">
        <!-- Single item -->
        <div class="carousel-item active">
          <video style="min-width: 100%; min-height: 100%" playsinline autoplay muted loop>
            <source class="h-100" src="https://firebasestorage.googleapis.com/v0/b/shopper-56289.appspot.com/o/pharmastep.mp4?alt=media&token=7e67bb6f-68e4-43de-8d8f-828018226315" type="video/mp4" />
          </video>
          <div class="mask" style="background-color: rgba(0, 0, 0, 0.6)">
            <div class="d-flex justify-content-center align-items-center h-100">
              <div class="text-white text-center">
                <h1 class="mb-3">Learn Bootstrap 5 with MDB</h1>
                <h5 class="mb-4">
                  Best & free guide of responsive web design
                </h5>
                <a class="btn btn-outline-light btn-lg m-2" href="https://www.youtube.com/watch?v=c9B4TPnak1A"
                  role="button" rel="nofollow" target="_blank">Start tutorial</a>
                <a class="btn btn-outline-light btn-lg m-2" href="https://mdbootstrap.com/docs/standard/" target="_blank"
                  role="button">Download MDB UI KIT</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Single item -->
        <div class="carousel-item">
          <video style="min-width: 100%; min-height: 100%" playsinline autoplay muted loop>
            <source class="h-100" src="https://mdbootstrap.com/img/video/forest.mp4" type="video/mp4" />
          </video>
          <div class="mask" style="background-color: rgba(0, 0, 0, 0.3)">
            <div class="d-flex justify-content-center align-items-center h-100">
              <div class="text-white text-center">
                <h2>You can place here any content</h2>
              </div>
            </div>
          </div>
        </div>

        <!-- Single item -->
        <div class="carousel-item">
          <video style="min-width: 100%; min-height: 100%" playsinline autoplay muted loop>
            <source class="h-100" src="https://mdbootstrap.com/img/video/Tropical.mp4" type="video/mp4" />
          </video>
          <div class="mask" style="
                    background: linear-gradient(
                    45deg,
                    rgba(29, 236, 197, 0.7),
                    rgba(91, 14, 214, 0.7) 100%
                    );
                    ">
            <div class="d-flex justify-content-center align-items-center h-100">
              <div class="text-white text-center">
                <h2>And cover it with any mask</h2>
                <a class="btn btn-outline-light btn-lg m-2"
                  href="https://mdbootstrap.com/docs/standard/content-styles/masks/" target="_blank" role="button">Learn
                  about masks</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Inner -->

      <!-- Controls -->
      <a class="carousel-control-prev" href="#introCarousel" role="button" data-mdb-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#introCarousel" role="button" data-mdb-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!-- Carousel wrapper -->
  </header>
  <!--Main Navigation-->

  <!--Main layout-->
  <main class="mt-5">
    <div class="container">
      <div style="margin-bottom: 40px;"></div>

      <!--Section: Content-->
      <section>
        <div class="row">

          <div class="col-md-6 gx-5 mb-4">
            <div class="bg-image hover-overlay ripple shadow-2-strong" data-mdb-ripple-color="light">
              <img src="../assets/medicine.jpg" class="img-fluid" />
              <a href="#!">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
              </a>
            </div>
          </div>

          <div class="col-md-6 gx-5 mb-4">
            <h4><strong>What do we offer</strong></h4>
            <p class="text-justify lh-lg">
              PharmaStep is a start-up firm whose primary aim is the seamless 
              distribution of prescription drugs, over-the-counter medicine 
              and healthcare services.
            </p>
            <p class="text-justify lh-lg">
              The main feature of the PharmaStep application is its accessibility. 
              You could be on your way from work, or in a salon, literally anywhere at any point, 
              and healthcare is accessible to you, simply by swiping on your phone. 
              This way, you can keep track of your health, and you do not have to 
              wait until you are down with illness, before being able to interact 
              with resources needed to overcome such illness.
            </p>
          </div>
        </div>
      </section>
      <!--Section: Content-->
      <hr class="my-5" />
    </div>
  </main>
  <!--Main layout-->


</template>
  
<script>
export default {};
</script>
  
<style>
/* Carousel styling */
#introCarousel,
.carousel-inner,
.carousel-item,
.carousel-item.active {
  height: 100vh;
}

.carousel-item:nth-child(1) {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.carousel-item:nth-child(2) {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.carousel-item:nth-child(3) {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

/* Height for devices larger than 576px */
@media (min-width: 992px) {
  #introCarousel {
    margin-top: -58.59px;
  }
}

.navbar .nav-link {
  color: #fff !important;
}
</style>
  