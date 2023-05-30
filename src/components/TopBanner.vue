<template>
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>PharmaStep</title>
  </head>
  <div id="carouselExampleCrossfade" class="carousel slide carousel-fade " data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCrossfade" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCrossfade" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/medicine.jpg" class="img-fluid" style="object-fit: cover;" />
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../components/images/hero_1.jpg" class="d-block w-100" alt="Camera" />
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCrossfade" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCrossfade" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  <main class="mt-5">
    <div class="container">
      <div style="margin-bottom: 30px;"></div>

      <!--Section: Content-->
      <section>
        
        <div class="row">
          <div class="col-md-6 gx-5 mb-4">
            <div class="bg-image hover-overlay ripple shadow-2-strong" data-mdb-ripple-color="light">
              <video
                loop  autoplay width="320" height="320">
                <source src="https://firebasestorage.googleapis.com/v0/b/shopper-56289.appspot.com/o/pharmastep.mp4?alt=media&token=7e67bb6f-68e4-43de-8d8f-828018226315" type="video/mp4" />
              </video>
            </div>
          </div>

          <div class="col-md-6 gx-5 mb-4">
            <h4><strong>What do we offer</strong></h4>
            <p class="text-justify lh-lg">
              PharmaStep is your number 1 stop for your prescription drugs,
              over-the-counter medicine and healthcare services. Access to medications from wherever you are in Lagos State.
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
export default {
  data() {
    return {
      dialog: false,
      appTitle: 'Awesome App',
      sidebar: false,
      menuItems: [
        { title: 'Home', path: '/home', icon: 'home' },
        { title: 'Sign Up', path: '/signup', icon: 'face' },
        { title: 'Sign In', path: '/signin', icon: 'lock_open' }
      ]
    }
  }
};
</script>
  
<style>
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

.navbar .nav-link {
  color: #fff !important;
}
</style>
  